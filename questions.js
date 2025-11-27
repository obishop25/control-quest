// ===== CONTROL QUEST VERSION 5.0 QUESTION BANK =====
// Simplified: ONE question per scenario (no randomization)
// Same 10 questions every time for easy verification

const QUESTIONS = {
    scenario1: {
        text: "TechStart Corporation owns 65% of the voting stock of AppDev Inc.",
        diagram: `
        [TechStart Corp]
              |
             65%
              |
          [AppDev Inc]
            `,
        question: "Should TechStart consolidate AppDev's financial statements?",
        options: [
            "Yes - TechStart must consolidate AppDev",
            "No - Consolidation is not required",
            "Maybe - It depends on other factors"
        ],
        correctAnswer: 0,
        hint: "What ownership percentage creates control? Remember the 50% threshold.",
        explanation: "✅ Correct! TechStart owns 65% of voting stock, which is more than 50%. This gives TechStart controlling financial interest. Consolidation is required."
    },

    scenario2: {
        text: "Retail Group owns 48% of Store Chain Inc. Retail Group is the largest single shareholder, but several other investors own the remaining 52%.",
        diagram: `
        [Retail Group]
              |
             48%
              |
      [Store Chain Inc]
            `,
        question: "Should Retail Group consolidate Store Chain?",
        options: [
            "Yes - Retail Group must consolidate",
            "No - Consolidation is not required",
            "Yes - Being largest shareholder means control"
        ],
        correctAnswer: 1,
        hint: "Being the largest shareholder doesn't equal control. Check if ownership exceeds 50%.",
        explanation: "✅ Correct! Even though Retail Group is the largest shareholder, 48% is not a controlling interest. Without control (>50% or other controlling rights), consolidation is not required."
    },

    scenario3: {
        text: "Phoenix Partners owns 42% of Delta Services.\n\nHowever, Phoenix has contractual rights to:\n• Appoint majority of board members\n• Approve all major decisions",
        diagram: `
     [Phoenix Partners]
              |
       42% ownership
    + board control
    + decision authority
              |
       [Delta Services]
            `,
        question: "Should Phoenix consolidate Delta?",
        options: [
            "Yes - Phoenix has control through contractual rights",
            "No - Ownership is below 50%",
            "Need more information"
        ],
        correctAnswer: 0,
        hint: "Control can exist through means other than voting shares. Look at the contractual powers granted.",
        explanation: "✅ Excellent! You recognized that control can exist even with <50% ownership when contractual arrangements give effective control. Phoenix controls Delta through board control and decision-making authority."
    },

    scenario4: {
        text: "BuildCo owns 80% of ConstructCo.\nConstructCo owns 70% of SupplyCo.",
        diagram: `
        [BuildCo]
            |
           80%
            |
      [ConstructCo]
            |
           70%
            |
       [SupplyCo]
            `,
        question: "Which entities should BuildCo consolidate?",
        options: [
            "Only ConstructCo",
            "Only SupplyCo",
            "Both ConstructCo and SupplyCo",
            "Neither entity"
        ],
        correctAnswer: 2,
        hint: "If you consolidate a subsidiary, you also consolidate what IT controls. Check if control exists at each link in the chain.",
        explanation: "✅ Perfect! BuildCo controls ConstructCo (80% > 50%). Since BuildCo consolidates ConstructCo, and ConstructCo controls SupplyCo (70% > 50%), BuildCo must also consolidate SupplyCo. Control flows down the chain."
    },

    scenario5: {
        text: "AlphaCorp owns 80% of BetaCorp.\nBetaCorp owns 45% of GammaCorp.",
        diagram: `
        [AlphaCorp]
            |
           80%
            |
        [BetaCorp]
            |
           45%
            |
       [GammaCorp]
            `,
        question: "Should AlphaCorp consolidate GammaCorp?",
        options: [
            "Yes - AlphaCorp controls the chain",
            "No - The chain is broken at BetaCorp",
            "Yes - Through indirect ownership"
        ],
        correctAnswer: 1,
        hint: "Each link needs control (>50%) for the chain to continue. Does the middle entity control the bottom entity?",
        explanation: "✅ Excellent reasoning! While AlphaCorp controls BetaCorp (80%), BetaCorp does NOT control GammaCorp (only 45%). Since BetaCorp doesn't consolidate GammaCorp, AlphaCorp doesn't either. Each link must have control."
    },

    scenario6: {
        text: "GlobalCorp owns the following entities:\n\n• 75% of Alpha Inc\n• 30% of Beta Corp\n• 55% of Gamma LLC",
        diagram: `
          [GlobalCorp]
        /      |      \\
      75%     30%    55%
      /        |       \\
  [Alpha]  [Beta]  [Gamma]
            `,
        question: "Which entities should GlobalCorp consolidate?",
        options: [
            "Alpha only",
            "Alpha and Gamma only",
            "All three entities",
            "Alpha and Beta only"
        ],
        correctAnswer: 1,
        hint: "Check each entity individually. Does GlobalCorp own more than 50% of each one?",
        explanation: "✅ Excellent!\n• Alpha (75%): Consolidate ✓\n• Beta (30%): No control ✗\n• Gamma (55%): Consolidate ✓"
    },

    scenario7: {
        text: "MegaCorp owns the following entities:\n\n• 70% of Sub1 Inc\n• 30% of Sub2 LLC\n• 55% of Sub3 Corp\n• 48% of Sub4 Co",
        diagram: `
          [MegaCorp]
        /    |    |    \\
      70%   30%  55%  48%
      /      |    |     \\
  [Sub1] [Sub2][Sub3][Sub4]
            `,
        question: "Which entities should MegaCorp consolidate?",
        options: [
            "Sub1 only",
            "Sub1 and Sub3 only",
            "Sub1, Sub2, and Sub3",
            "All four entities"
        ],
        correctAnswer: 1,
        hint: "Check each entity individually. Does MegaCorp own more than 50% of each one?",
        explanation: "✅ Excellent!\n• Sub1 (70%): Consolidate ✓\n• Sub2 (30%): No control ✗\n• Sub3 (55%): Consolidate ✓\n• Sub4 (48%): No control ✗"
    },

    scenario8: {
        text: "Evaluate these three separate situations:\n\nSituation 1: Parent owns 52% of Sub\n\nSituation 2: Investor owns 48% of Joint (no special rights)\n\nSituation 3: HoldCo owns 85% of OpCo; OpCo owns 65% of Regional",
        diagram: `
Situation 1:     Situation 2:       Situation 3:
[Parent]         [Investor]         [HoldCo]
   |                 |                  |
  52%               48%                85%
   |                 |                  |
 [Sub]            [Joint]            [OpCo]
                                        |
                                       65%
                                        |
                                   [Regional]
            `,
        question: "In which situation(s) does consolidation occur?",
        options: [
            "Situation 1 only",
            "Situations 1 and 2 only",
            "Situations 1 and 3 only",
            "All three situations"
        ],
        correctAnswer: 2,
        hint: "Test each: Does ownership exceed 50%? For chains, does control exist at each link?",
        explanation: "✅ Perfect!\n• Situation 1: Parent owns 52% of Sub → Consolidate ✓\n• Situation 2: Investor owns 48% (no special rights) → No control ✗\n• Situation 3: HoldCo consolidates both OpCo (85%) and Regional (OpCo owns 65%) ✓"
    },

    scenario9: {
        text: "PropertyCo (property holding company) was created by RealEstate Inc.\n\nStructure:\n• RealEstate owns 8% of PropertyCo\n• RealEstate manages all operations\n• RealEstate guarantees all debt\n• RealEstate receives 85% of profits/losses",
        diagram: `
     [RealEstate Inc]
           |
     8% equity
  + management control
  + debt guarantees
  + 85% of economics
           |
      [PropertyCo]
            `,
        question: "Should RealEstate Inc. consolidate PropertyCo?",
        options: [
            "No - RealEstate only owns 8%",
            "Yes - RealEstate is primary beneficiary of VIE",
            "Need more information"
        ],
        correctAnswer: 1,
        hint: "VIE control = power to direct activities + obligation to absorb economic benefits/losses. Who has both?",
        explanation: "✅ Excellent! You recognized a Variable Interest Entity (VIE). PropertyCo is a VIE, and RealEstate is the 'primary beneficiary' because it has:\n1. Power (management control)\n2. Economics (guarantees + 85% of benefits)\n\nWith VIEs, voting ownership doesn't matter—economic control does."
    },

    scenario10: {
        text: "GlobalCorp ownership structure:\n\n• 75% of FullSub\n• 52% of MidCo\n• 10% of SPE\n\nFullSub owns 65% of LowerCo.\n\nSPE: GlobalCorp manages operations, guarantees debt, receives 90% of economics.",
        diagram: `
          [GlobalCorp]
          /    |     \\
        75%   52%    10%
        /      |       \\
   [FullSub][MidCo]  [SPE]
        |            (VIE:
       65%           GlobalCorp
        |            controls)
   [LowerCo]
            `,
        question: "Which entities should GlobalCorp consolidate?",
        options: [
            "FullSub and MidCo only",
            "FullSub, LowerCo, and SPE",
            "FullSub, MidCo, and SPE",
            "All four entities"
        ],
        correctAnswer: 3,
        hint: "Check direct ownership >50%. For chains, does each link have control? Is SPE a VIE?",
        explanation: "🎉 OUTSTANDING! You nailed it:\n\n• FullSub (75%): Direct control → Consolidate ✓\n\n• LowerCo: FullSub controls it (65%) → Consolidate ✓\n\n• MidCo (52%): Direct control → Consolidate ✓\n\n• SPE: VIE with GlobalCorp as primary beneficiary → Consolidate ✓\n\nYou've mastered all consolidation concepts!"
    }
};
