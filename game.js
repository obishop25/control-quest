// ===== GAME STATE =====
let gameState = {
    studentName: '',
    currentScenario: 1,
    completedScenarios: [],
    hintsUsed: 0,
    scenariosRevisited: 0,
    startTime: null,
    hintUsedThisScenario: false,
    selectedAnswer: null,
    usedVersions: {} // Track which versions used for each scenario
};

// ===== DOM ELEMENTS =====
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const completionScreen = document.getElementById('completion-screen');
const modal = document.getElementById('modal');

const studentNameInput = document.getElementById('student-name');
const startBtn = document.getElementById('start-btn');
const resumeBtn = document.getElementById('resume-btn');
const hintBtn = document.getElementById('hint-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const restartGameBtn = document.getElementById('restart-game-btn');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    checkForSavedProgress();
    initializeEventListeners();
});

function initializeEventListeners() {
    startBtn.addEventListener('click', startNewGame);
    resumeBtn.addEventListener('click', resumeGame);
    hintBtn.addEventListener('click', useHint);
    submitBtn.addEventListener('click', submitAnswer);
    restartBtn.addEventListener('click', restartGame);
    restartGameBtn.addEventListener('click', confirmRestart);
}

// ===== SAVE/LOAD PROGRESS =====
function checkForSavedProgress() {
    const saved = localStorage.getItem('controlQuestProgress');
    if (saved) {
        resumeBtn.style.display = 'block';
    }
}

function saveProgress() {
    localStorage.setItem('controlQuestProgress', JSON.stringify(gameState));
}

function loadProgress() {
    const saved = localStorage.getItem('controlQuestProgress');
    if (saved) {
        gameState = JSON.parse(saved);
        return true;
    }
    return false;
}

function clearProgress() {
    localStorage.removeItem('controlQuestProgress');
}

// ===== GAME FLOW =====
function startNewGame() {
    const name = studentNameInput.value.trim();
    
    if (!name) {
        showModal('⚠️', 'Name Required', 'Please enter your name to continue.', [
            { text: 'OK', className: 'btn-primary', action: closeModal }
        ]);
        return;
    }
    
    clearProgress();
    gameState = {
        studentName: name,
        currentScenario: 1,
        completedScenarios: [],
        hintsUsed: 0,
        scenariosRevisited: 0,
        startTime: Date.now(),
        hintUsedThisScenario: false,
        selectedAnswer: null,
        usedVersions: {}
    };
    
    saveProgress();
    showScreen('game');
    loadScenario(1);
}

function resumeGame() {
    if (loadProgress()) {
        showScreen('game');
        loadScenario(gameState.currentScenario);
    }
}

function restartGame() {
    clearProgress();
    location.reload();
}

function showScreen(screenName) {
    welcomeScreen.classList.remove('active');
    gameScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    
    if (screenName === 'welcome') welcomeScreen.classList.add('active');
    if (screenName === 'game') gameScreen.classList.add('active');
    if (screenName === 'completion') completionScreen.classList.add('active');
}

// ===== SCENARIO LOADING =====
function loadScenario(scenarioNumber, forceNewVersion = false) {
    gameState.currentScenario = scenarioNumber;
    gameState.hintUsedThisScenario = false;
    gameState.selectedAnswer = null;
    
    // Get a version that hasn't been used (or random if forcing new or all used)
    const scenario = getScenarioVersion(scenarioNumber, forceNewVersion);
    
    // Update UI
    updateProgressDisplay();
    displayScenario(scenario);
    updateHintButton();
    
    saveProgress();
}

function getScenarioVersion(scenarioNumber, forceNewVersion) {
    const scenarioKey = `scenario${scenarioNumber}`;
    const versions = QUESTIONS[scenarioKey];
    
    if (!gameState.usedVersions[scenarioKey]) {
        gameState.usedVersions[scenarioKey] = [];
    }
    
    let availableVersions = [0, 1, 2].filter(
        v => !gameState.usedVersions[scenarioKey].includes(v)
    );
    
    // If all versions used or forcing new, reset and get random
    if (availableVersions.length === 0 || forceNewVersion) {
        gameState.usedVersions[scenarioKey] = [];
        availableVersions = [0, 1, 2];
    }
    
    // Select random available version
    const versionIndex = availableVersions[Math.floor(Math.random() * availableVersions.length)];
    gameState.usedVersions[scenarioKey].push(versionIndex);
    
    return versions[versionIndex];
}

function displayScenario(scenario) {
    document.getElementById('scenario-number').textContent = 
        `SCENARIO ${gameState.currentScenario} of 10`;
    
    document.getElementById('scenario-text').textContent = scenario.text;
    document.getElementById('scenario-diagram').textContent = scenario.diagram;
    document.getElementById('scenario-question').textContent = scenario.question;
    
    // Display answer options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    
    scenario.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option${index}" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        
        optionDiv.addEventListener('click', () => {
            document.getElementById(`option${index}`).checked = true;
            selectAnswer(index);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
}

function selectAnswer(index) {
    gameState.selectedAnswer = index;
    
    // Update visual selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
}

function updateProgressDisplay() {
    const dotsContainer = document.getElementById('progress-dots');
    dotsContainer.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const dot = document.createElement('span');
        dot.className = 'progress-dot';
        dot.textContent = i;
        
        if (gameState.completedScenarios.includes(i)) {
            dot.classList.add('completed');
        } else if (i === gameState.currentScenario) {
            dot.classList.add('current');
        }
        
        dotsContainer.appendChild(dot);
    }
    
    document.getElementById('progress-text').textContent = 
        `Scenario ${gameState.currentScenario} of 10`;
}

// ===== HINT SYSTEM =====
function updateHintButton() {
    const hintStatus = document.getElementById('hint-status');
    
    if (gameState.hintUsedThisScenario) {
        hintBtn.disabled = true;
        hintBtn.textContent = '💡 Hint Used';
        hintStatus.textContent = 'You\'ve used your hint for this scenario';
    } else {
        hintBtn.disabled = false;
        hintBtn.textContent = '💡 Use Hint';
        hintStatus.textContent = 'Hint available for this scenario';
    }
}

function useHint() {
    if (gameState.hintUsedThisScenario) return;
    
    const scenario = QUESTIONS[`scenario${gameState.currentScenario}`][0]; // Get hint from any version
    
    showModal('💡', 'Hint', scenario.hint, [
        { text: 'Close', className: 'btn-primary', action: closeModal }
    ], true);
    
    gameState.hintUsedThisScenario = true;
    gameState.hintsUsed++;
    updateHintButton();
    saveProgress();
}

// ===== ANSWER SUBMISSION =====
function submitAnswer() {
    if (gameState.selectedAnswer === null) {
        showModal('⚠️', 'No Answer Selected', 'Please select an answer before submitting.', [
            { text: 'OK', className: 'btn-primary', action: closeModal }
        ]);
        return;
    }
    
    const scenarioKey = `scenario${gameState.currentScenario}`;
    const versions = QUESTIONS[scenarioKey];
    const correctAnswer = versions[0].correctAnswer; // All versions have same correct answer
    
    if (gameState.selectedAnswer === correctAnswer) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    const scenario = QUESTIONS[`scenario${gameState.currentScenario}`][0];
    
    // Mark as completed
    if (!gameState.completedScenarios.includes(gameState.currentScenario)) {
        gameState.completedScenarios.push(gameState.currentScenario);
    }
    
    // Check if game complete
    if (gameState.currentScenario === 10) {
        showCompletionModal();
        return;
    }
    
    // Show success message and advance
    showModal('✅', 'Correct!', scenario.explanation, [
        { text: 'Continue →', className: 'btn-primary', action: () => {
            closeModal();
            loadScenario(gameState.currentScenario + 1);
        }}
    ]);
}

function handleWrongAnswer() {
    if (gameState.hintUsedThisScenario) {
        // Used hint and still wrong - GO BACK ONE SCENARIO
        handlePenalty();
    } else {
        // Haven't used hint - offer to use it or try again
        showModal('❌', 'Incorrect', 'That\'s not quite right. Would you like a hint?', [
            { text: '💡 Use Hint', className: 'btn-hint', action: () => {
                closeModal();
                useHint();
            }},
            { text: 'Try Again', className: 'btn-secondary', action: closeModal }
        ]);
    }
}

function handlePenalty() {
    gameState.scenariosRevisited++;
    
    if (gameState.currentScenario > 1) {
        // Go back to previous scenario
        const previousScenario = gameState.currentScenario - 1;
        
        // Remove previous scenario from completed list
        const index = gameState.completedScenarios.indexOf(previousScenario);
        if (index > -1) {
            gameState.completedScenarios.splice(index, 1);
        }
        
        showModal('❌', 'Incorrect', 
            `⚠️ You used your hint and got it wrong.\n\nGoing back to Scenario ${previousScenario}.\n\nDon't worry - you'll see a different version of the question!`, 
            [{ text: 'Continue', className: 'btn-primary', action: () => {
                closeModal();
                loadScenario(previousScenario, true); // true = force new version
            }}]
        );
    } else {
        // Already at Scenario 1 - stay here with new version
        showModal('❌', 'Incorrect', 
            '⚠️ You used your hint and got it wrong.\n\nSince this is Scenario 1, you\'ll try again with a different version of the question.', 
            [{ text: 'Try Again', className: 'btn-primary', action: () => {
                closeModal();
                loadScenario(1, true); // true = force new version
            }}]
        );
    }
}

// ===== COMPLETION =====
function showCompletionModal() {
    showModal('🎉', 'All Scenarios Complete!', 
        'Congratulations! You\'ve completed all 10 scenarios. Click below to see your completion certificate.', 
        [{ text: 'View Certificate', className: 'btn-primary', action: showCompletionScreen }]
    );
}

function showCompletionScreen() {
    closeModal();
    
    const totalTime = Math.floor((Date.now() - gameState.startTime) / 1000 / 60);
    const completionCode = generateCompletionCode();
    
    document.getElementById('completion-name').textContent = gameState.studentName;
    document.getElementById('completion-date').textContent = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('completion-time').textContent = `${totalTime} minutes`;
    document.getElementById('completion-hints').textContent = gameState.hintsUsed;
    document.getElementById('completion-revisited').textContent = gameState.scenariosRevisited;
    document.getElementById('completion-code').textContent = completionCode;
    
    showScreen('completion');
    clearProgress(); // Clear so they can start fresh
}

function generateCompletionCode() {
    const prefix = 'CQ-2025-';
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude confusing chars
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return prefix + code;
}

// ===== MODAL SYSTEM =====
function showModal(icon, title, message, buttons, warningStyle = false) {
    document.getElementById('modal-icon').textContent = icon;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal-message').style.whiteSpace = 'pre-line';
    
    const buttonsContainer = document.getElementById('modal-buttons');
    buttonsContainer.innerHTML = '';
    
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.className = btn.className;
        button.addEventListener('click', btn.action);
        buttonsContainer.appendChild(button);
    });
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Confirm restart from in-game button
function confirmRestart() {
    showModal('⚠️', 'Restart Game?', 
        'Are you sure you want to restart? All progress will be lost.', 
        [
            { text: 'Cancel', className: 'btn-secondary', action: closeModal },
            { text: 'Restart', className: 'btn-primary', action: restartGame }
        ]
    );
}

// Close modal if clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
