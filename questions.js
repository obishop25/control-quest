// ===== CONTROL QUEST VERSION 3.0 QUESTION BANK =====
// Each scenario uses the SAME company names across all 3 versions
// Only the percentages vary between versions
// Scenarios 6 and 7 have NO indirect ownership calculations

const QUESTIONS = {
    scenario1: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "TechStart Corporation owns 72% of the voting stock of AppDev Inc.",
            diagram: `
        [TechStart Corp]
              |
             72%
              |
          [AppDev Inc]
            `,
            question: "Should TechStart consolidate AppDev's financial statements?",
            options: [
                "Yes - TechStart must consolidate AppDev",
                "No - Consolidation is not required",
                "Need more information"
            ],
            correctAnswer: 0,
            hint: "What ownership percentage creates control? Remember the 50% threshold.",
            explanation: "✅ Correct! TechStart owns 72%, which is well above 50%. This gives TechStart control and requires consolidation."
        },
        // VERSION C
        {
            text: "TechStart Corporation owns 58% of the voting stock of AppDev Inc.",
            diagram: `
        [TechStart Corp]
              |
             58%
              |
          [AppDev Inc]
            `,
            question: "Should TechStart consolidate AppDev's financial statements?",
            options: [
                "Yes - TechStart must consolidate AppDev",
                "No - Consolidation is not required",
                "Need more information about control"
            ],
            correctAnswer: 0,
            hint: "What ownership percentage creates control? Remember the 50% threshold.",
            explanation: "✅ Correct! TechStart owns 58% (>50%), establishing control. Consolidation is required."
        }
    ],

    scenario2: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "Retail Group owns 45% of Store Chain Inc. Retail Group is the largest single shareholder, but other investors own the remaining 55%.",
            diagram: `
        [Retail Group]
              |
             45%
              |
      [Store Chain Inc]
            `,
            question: "Should Retail Group consolidate Store Chain?",
            options: [
                "Yes - Retail Group has effective control",
                "No - Consolidation is not required",
                "Maybe - Need to assess control factors"
            ],
            correctAnswer: 1,
            hint: "Being the largest shareholder doesn't equal control. Check if ownership exceeds 50%.",
            explanation: "✅ Correct! 45% is below the 50% threshold. Being the largest shareholder doesn't automatically create control. No consolidation required."
        },
        // VERSION C
        {
            text: "Retail Group owns 47% of Store Chain Inc. Retail Group is the largest single shareholder, but other investors own the remaining 53%.",
            diagram: `
        [Retail Group]
              |
             47%
              |
      [Store Chain Inc]
            `,
            question: "Should Retail Group consolidate Store Chain?",
            options: [
                "Yes - Retail Group has control",
                "No - Consolidation is not required",
                "Unclear without more information"
            ],
            correctAnswer: 1,
            hint: "Being the largest shareholder doesn't equal control. Check if ownership exceeds 50%.",
            explanation: "✅ Correct! 47% ownership, even as the largest shareholder, doesn't establish control. Consolidation is not required."
        }
    ],

    scenario3: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "Phoenix Partners owns 38% of Delta Services.\n\nHowever, Phoenix has contractual rights to:\n• Veto power over all major decisions\n• Right to appoint CEO and CFO",
            diagram: `
     [Phoenix Partners]
              |
       38% ownership
    + veto power
    + management control
              |
       [Delta Services]
            `,
            question: "Should Phoenix consolidate Delta?",
            options: [
                "Yes - Has effective control through rights",
                "No - Ownership is too low",
                "Cannot determine"
            ],
            correctAnswer: 0,
            hint: "Control can exist through means other than voting shares. Look at the contractual powers granted.",
            explanation: "✅ Correct! Phoenix has control through contractual rights despite low ownership. Veto power and management control = consolidation required."
        },
        // VERSION C
        {
            text: "Phoenix Partners owns 45% of Delta Services.\n\nHowever, Phoenix has contractual rights to:\n• Control over board composition\n• Authority over business strategy",
            diagram: `
     [Phoenix Partners]
              |
       45% ownership
    + board control
    + strategy authority
              |
       [Delta Services]
            `,
            question: "Should Phoenix consolidate Delta?",
            options: [
                "Yes - Has control through contractual rights",
                "No - Needs majority ownership",
                "Insufficient information"
            ],
            correctAnswer: 0,
            hint: "Control can exist through means other than voting shares. Look at the contractual powers granted.",
            explanation: "✅ Perfect! Phoenix has control through contractual rights over board and strategy. Ownership % is not the only path to control. Consolidation required."
        }
    ],

    scenario4: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "BuildCo owns 75% of ConstructCo.\nConstructCo owns 65% of SupplyCo.",
            diagram: `
        [BuildCo]
            |
           75%
            |
      [ConstructCo]
            |
           65%
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
            explanation: "✅ Excellent! BuildCo controls ConstructCo (75%), and ConstructCo controls SupplyCo (65%). Both must be consolidated by BuildCo."
        },
        // VERSION C
        {
            text: "BuildCo owns 85% of ConstructCo.\nConstructCo owns 60% of SupplyCo.",
            diagram: `
        [BuildCo]
            |
           85%
            |
      [ConstructCo]
            |
           60%
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
            explanation: "✅ Correct! BuildCo controls ConstructCo (85%), and ConstructCo controls SupplyCo (60%). Since control exists at each level, BuildCo consolidates both entities."
        }
    ],

    scenario5: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "AlphaCorp owns 90% of BetaCorp.\nBetaCorp owns 40% of GammaCorp.",
            diagram: `
        [AlphaCorp]
            |
           90%
            |
        [BetaCorp]
            |
           40%
            |
       [GammaCorp]
            `,
            question: "Should AlphaCorp consolidate GammaCorp?",
            options: [
                "Yes - Control flows through BetaCorp",
                "No - BetaCorp lacks control of GammaCorp",
                "Yes - AlphaCorp controls BetaCorp"
            ],
            correctAnswer: 1,
            hint: "Each link needs control (>50%) for the chain to continue. Does the middle entity control the bottom entity?",
            explanation: "✅ Correct! AlphaCorp controls BetaCorp (90%), but BetaCorp does NOT control GammaCorp (40%). The chain breaks. GammaCorp is not consolidated."
        },
        // VERSION C
        {
            text: "AlphaCorp owns 70% of BetaCorp.\nBetaCorp owns 48% of GammaCorp.",
            diagram: `
        [AlphaCorp]
            |
           70%
            |
        [BetaCorp]
            |
           48%
            |
       [GammaCorp]
            `,
            question: "Should AlphaCorp consolidate GammaCorp?",
            options: [
                "Yes - Through the ownership chain",
                "No - BetaCorp doesn't control GammaCorp",
                "Yes - Total ownership exceeds threshold"
            ],
            correctAnswer: 1,
            hint: "Each link needs control (>50%) for the chain to continue. Does the middle entity control the bottom entity?",
            explanation: "✅ Perfect! AlphaCorp controls BetaCorp (70%), but BetaCorp does NOT control GammaCorp (48% < 50%). Since BetaCorp doesn't consolidate GammaCorp, AlphaCorp doesn't either."
        }
    ],

    scenario6: [
        // VERSION A - NO INDIRECT CALCULATIONS
        {
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
        // VERSION B - NO INDIRECT CALCULATIONS
        {
            text: "GlobalCorp owns the following entities:\n\n• 85% of Alpha Inc\n• 42% of Beta Corp\n• 60% of Gamma LLC",
            diagram: `
          [GlobalCorp]
        /      |      \\
      85%     42%    60%
      /        |       \\
  [Alpha]  [Beta]  [Gamma]
            `,
            question: "Which entities should GlobalCorp consolidate?",
            options: [
                "Alpha only",
                "Alpha and Gamma only",
                "All three entities",
                "Gamma only"
            ],
            correctAnswer: 1,
            hint: "Check each entity individually. Does GlobalCorp own more than 50% of each one?",
            explanation: "✅ Perfect analysis!\n• Alpha (85%): Consolidate ✓\n• Beta (42%): No control ✗\n• Gamma (60%): Consolidate ✓"
        },
        // VERSION C - NO INDIRECT CALCULATIONS
        {
            text: "GlobalCorp owns the following entities:\n\n• 65% of Alpha Inc\n• 50% of Beta Corp (exactly 50%)\n• 72% of Gamma LLC",
            diagram: `
          [GlobalCorp]
        /      |      \\
      65%     50%    72%
      /        |       \\
  [Alpha]  [Beta]  [Gamma]
            `,
            question: "Which entities should GlobalCorp consolidate?",
            options: [
                "Alpha and Gamma only",
                "All three entities",
                "Alpha and Beta only",
                "Alpha only"
            ],
            correctAnswer: 0,
            hint: "Check each entity individually. Remember: control requires MORE than 50%, not equal to 50%.",
            explanation: "✅ Great work!\n• Alpha (65%): Consolidate ✓\n• Beta (50% exactly): NOT > 50%, no control ✗\n• Gamma (72%): Consolidate ✓"
        }
    ],

    scenario7: [
        // VERSION A - NO INDIRECT CALCULATIONS
        {
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
        // VERSION B - NO INDIRECT CALCULATIONS
        {
            text: "MegaCorp owns the following entities:\n\n• 85% of Sub1 Inc\n• 42% of Sub2 LLC\n• 60% of Sub3 Corp\n• 51% of Sub4 Co",
            diagram: `
          [MegaCorp]
        /    |     |    \\
      85%   42%   60%  51%
      /      |     |     \\
  [Sub1] [Sub2] [Sub3] [Sub4]
            `,
            question: "Which entities should MegaCorp consolidate?",
            options: [
                "Sub1 only",
                "Sub1, Sub3, and Sub4 only",
                "All four subsidiaries",
                "Sub1 and Sub3 only"
            ],
            correctAnswer: 1,
            hint: "Check each entity individually. Does MegaCorp own more than 50% of each one?",
            explanation: "✅ Perfect analysis!\n• Sub1 (85%): Consolidate ✓\n• Sub2 (42%): No control ✗\n• Sub3 (60%): Consolidate ✓\n• Sub4 (51%): Consolidate ✓"
        },
        // VERSION C - NO INDIRECT CALCULATIONS
        {
            text: "MegaCorp owns the following entities:\n\n• 65% of Sub1 Inc\n• 50% of Sub2 LLC (exactly 50%)\n• 75% of Sub3 Corp\n• 35% of Sub4 Co",
            diagram: `
          [MegaCorp]
        /    |    |    \\
      65%   50%  75%  35%
      /      |    |     \\
  [Sub1] [Sub2][Sub3][Sub4]
            `,
            question: "Which entities should MegaCorp consolidate?",
            options: [
                "Sub1 and Sub3 only",
                "Sub1, Sub2, and Sub3",
                "All four companies",
                "Sub1 only"
            ],
            correctAnswer: 0,
            hint: "Check each entity individually. Remember: control requires MORE than 50%, not equal to 50%.",
            explanation: "✅ Great work!\n• Sub1 (65%): Consolidate ✓\n• Sub2 (50% exactly): NOT > 50%, no control ✗\n• Sub3 (75%): Consolidate ✓\n• Sub4 (35%): No control ✗"
        }
    ],

    scenario8: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "Evaluate these three separate situations:\n\nSituation 1: Parent owns 58% of Sub\n\nSituation 2: Investor owns 49% of Joint (largest shareholder)\n\nSituation 3: HoldCo owns 70% of OpCo; OpCo owns 75% of Regional",
            diagram: `
Situation 1:     Situation 2:       Situation 3:
[Parent]         [Investor]         [HoldCo]
   |                 |                  |
  58%               49%                70%
   |                 |                  |
 [Sub]            [Joint]            [OpCo]
                                        |
                                       75%
                                        |
                                   [Regional]
            `,
            question: "In which situation(s) does consolidation occur?",
            options: [
                "Situation 1 only",
                "Situations 1 and 2",
                "Situations 1 and 3",
                "All three"
            ],
            correctAnswer: 2,
            hint: "Test each: Does ownership exceed 50%? For chains, does control exist at each link?",
            explanation: "✅ Excellent!\n• Situation 1: Parent owns 58% of Sub → Consolidate ✓\n• Situation 2: Investor owns 49% → No control ✗\n• Situation 3: HoldCo consolidates both OpCo (70%) and Regional (OpCo owns 75%) ✓"
        },
        // VERSION C
        {
            text: "Evaluate these three separate situations:\n\nSituation 1: Parent owns 61% of Sub\n\nSituation 2: Investor owns 44% of Joint with board control rights\n\nSituation 3: HoldCo owns 90% of OpCo; OpCo owns 40% of Regional",
            diagram: `
Situation 1:    Situation 2:          Situation 3:
 [Parent]       [Investor]              [HoldCo]
    |               |                     |
   61%        44% + control              90%
    |               |                     |
 [Sub]           [Joint]               [OpCo]
                                          |
                                         40%
                                          |
                                      [Regional]
            `,
            question: "In which situation(s) does consolidation occur?",
            options: [
                "Situations 1 and 2",
                "Situations 1 and 3",
                "Situation 1 only",
                "All three"
            ],
            correctAnswer: 0,
            hint: "61% = yes. 44% + board control = yes. For chains, check if EACH link exceeds 50%.",
            explanation: "✅ Perfect analysis!\n• Situation 1: Parent owns 61% → Consolidate ✓\n• Situation 2: Investor has contractual board control → Consolidate ✓\n• Situation 3: HoldCo consolidates OpCo, but OpCo doesn't control Regional (40%) ✗"
        }
    ],

    scenario9: [
        // VERSION A
        {
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
        // VERSION B
        {
            text: "PropertyCo (property holding company) was created by RealEstate Inc.\n\nStructure:\n• RealEstate owns 5% of PropertyCo\n• RealEstate controls all operations\n• RealEstate guarantees all obligations\n• RealEstate receives 90% of profits/losses",
            diagram: `
     [RealEstate Inc]
           |
     5% equity
  + operational control
  + debt guarantees
  + 90% of economics
           |
      [PropertyCo]
            `,
            question: "Should RealEstate Inc. consolidate PropertyCo?",
            options: [
                "No - Ownership too low",
                "Yes - Primary beneficiary of VIE structure",
                "Cannot determine"
            ],
            correctAnswer: 1,
            hint: "VIE control = power to direct activities + obligation to absorb economic benefits/losses. Who has both?",
            explanation: "✅ Perfect! This is a VIE. RealEstate has:\n• Power (controls operations)\n• Economics (90% of variable returns)\n\nRealEstate is the primary beneficiary and must consolidate PropertyCo, despite only 5% ownership."
        },
        // VERSION C
        {
            text: "PropertyCo (property holding company) was created by RealEstate Inc.\n\nStructure:\n• RealEstate owns 10% of PropertyCo\n• RealEstate directs all activities\n• RealEstate guarantees all liabilities\n• RealEstate receives 75% of profits/losses",
            diagram: `
     [RealEstate Inc]
           |
     10% equity
  + activity direction
  + liability guarantees
  + 75% of economics
           |
      [PropertyCo]
            `,
            question: "Should RealEstate Inc. consolidate PropertyCo?",
            options: [
                "No - Minority ownership",
                "Yes - Controls VIE as primary beneficiary",
                "Insufficient information"
            ],
            correctAnswer: 1,
            hint: "VIE control = power to direct activities + obligation to absorb economic benefits/losses. Who has both?",
            explanation: "✅ Excellent VIE analysis! RealEstate has:\n• Power (directs activities)\n• Economics (guarantees + 75% of returns)\n\nRealEstate is the primary beneficiary and must consolidate PropertyCo."
        }
    ],

    scenario10: [
        // VERSION A
        {
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
        },
        // VERSION B
        {
            text: "GlobalCorp ownership structure:\n\n• 80% of FullSub\n• 58% of MidCo\n• 12% of SPE\n\nFullSub owns 70% of LowerCo.\n\nSPE: GlobalCorp manages operations, guarantees obligations, receives 85% of economics.",
            diagram: `
          [GlobalCorp]
          /    |     \\
        80%   58%    12%
        /      |       \\
   [FullSub][MidCo]  [SPE]
        |            (VIE:
       70%           GlobalCorp
        |            controls)
   [LowerCo]
            `,
            question: "Which entities should GlobalCorp consolidate?",
            options: [
                "FullSub and MidCo only",
                "FullSub, LowerCo, and SPE",
                "All four entities",
                "FullSub, MidCo, and SPE"
            ],
            correctAnswer: 2,
            hint: "Check direct ownership >50%. For chains, does each link have control? Is SPE a VIE?",
            explanation: "🎉 Perfect comprehensive analysis!\n\n• FullSub (80%): Consolidate ✓\n\n• LowerCo: FullSub controls it (70%) → Consolidate ✓\n\n• MidCo (58%): Direct control → Consolidate ✓\n\n• SPE: VIE, GlobalCorp is primary beneficiary → Consolidate ✓\n\nExcellent work on all concepts!"
        },
        // VERSION C
        {
            text: "GlobalCorp ownership structure:\n\n• 70% of FullSub\n• 62% of MidCo\n• 8% of SPE\n\nFullSub owns 55% of LowerCo.\n\nSPE: GlobalCorp controls operations, bears risk, gets 80% of economics.",
            diagram: `
          [GlobalCorp]
          /    |     \\
        70%   62%    8%
        /      |       \\
   [FullSub][MidCo]  [SPE]
        |            (VIE:
       55%           GlobalCorp
        |            controls)
   [LowerCo]
            `,
            question: "Which entities should GlobalCorp consolidate?",
            options: [
                "FullSub and MidCo only",
                "FullSub, LowerCo, and SPE",
                "All four entities",
                "FullSub, MidCo, and SPE"
            ],
            correctAnswer: 2,
            hint: "Check direct ownership >50%. For chains, does each link have control? Is SPE a VIE?",
            explanation: "🎉 BRILLIANT! Full mastery demonstrated:\n\n• FullSub (70%): Consolidate ✓\n\n• LowerCo: FullSub controls it (55%) → Consolidate ✓\n\n• MidCo (62%): Direct control → Consolidate ✓\n\n• SPE: VIE with GlobalCorp as primary beneficiary → Consolidate ✓\n\nYou're a consolidation professional!"
        }
    ]
};
