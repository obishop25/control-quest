// ===== QUESTION BANK =====
// Each scenario has 3 versions (A, B, C)
// correctAnswer index corresponds to the options array (0, 1, 2, or 3)

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
            explanation: "✅ Correct! TechStart owns more than 50% of voting stock, giving it controlling financial interest. Consolidation is required."
        },
        // VERSION B
        {
            text: "Phoenix Industries owns 72% of Solar Systems LLC.",
            diagram: `
      [Phoenix Industries]
              |
             72%
              |
       [Solar Systems LLC]
            `,
            question: "Should Phoenix Industries consolidate Solar Systems?",
            options: [
                "Yes - Phoenix must consolidate Solar Systems",
                "No - Consolidation is not required",
                "Need more information"
            ],
            correctAnswer: 0,
            hint: "Does Phoenix have controlling interest (>50%)?",
            explanation: "✅ Correct! Phoenix owns 72%, which is well above 50%. This gives Phoenix control and requires consolidation."
        },
        // VERSION C
        {
            text: "MegaRetail Corp owns 58% of ShopCo Inc.",
            diagram: `
       [MegaRetail Corp]
              |
             58%
              |
          [ShopCo Inc]
            `,
            question: "Should MegaRetail consolidate ShopCo?",
            options: [
                "Yes - MegaRetail must consolidate ShopCo",
                "No - Consolidation is not required",
                "Need more information about control"
            ],
            correctAnswer: 0,
            hint: "Controlling interest requires more than 50%. Does MegaRetail meet this?",
            explanation: "✅ Correct! MegaRetail owns 58% (>50%), establishing control. Consolidation is required."
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
            hint: "Being the largest shareholder ≠ control. Check the ownership percentage.",
            explanation: "✅ Correct! Even though Retail Group is the largest shareholder, 48% is not a controlling interest. Without control (>50% or other controlling rights), consolidation is not required."
        },
        // VERSION B
        {
            text: "Investment Co owns 45% of Digital Services. No other shareholder owns more than 20%.",
            diagram: `
       [Investment Co]
              |
             45%
              |
      [Digital Services]
            `,
            question: "Should Investment Co consolidate Digital Services?",
            options: [
                "Yes - Investment Co has effective control",
                "No - Consolidation is not required",
                "Maybe - Need to assess control factors"
            ],
            correctAnswer: 1,
            hint: "Check if ownership exceeds 50%. That's usually required for control.",
            explanation: "✅ Correct! 45% is below the 50% threshold. Being the largest shareholder doesn't automatically create control. No consolidation required."
        },
        // VERSION C
        {
            text: "Alpha Partners owns 47% of Beta Enterprises. Three other investors each own 17-18%.",
            diagram: `
       [Alpha Partners]
              |
             47%
              |
      [Beta Enterprises]
            `,
            question: "Should Alpha Partners consolidate Beta Enterprises?",
            options: [
                "Yes - Alpha has control",
                "No - Consolidation is not required",
                "Unclear without more information"
            ],
            correctAnswer: 1,
            hint: "Control requires >50% unless special rights exist. Does Alpha meet this?",
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
            hint: "Control can exist through means other than voting shares. Look at Phoenix's powers.",
            explanation: "✅ Excellent! You recognized that control can exist even with <50% ownership when contractual arrangements give effective control. Phoenix controls Delta through board control and decision-making authority."
        },
        // VERSION B
        {
            text: "Venture Capital owns 38% of StartUp Co.\n\nShareholder agreement gives Venture Capital:\n• Veto power over all major decisions\n• Right to appoint CEO and CFO",
            diagram: `
      [Venture Capital]
              |
       38% ownership
    + veto power
    + management control
              |
        [StartUp Co]
            `,
            question: "Should Venture Capital consolidate StartUp Co?",
            options: [
                "Yes - Has effective control through rights",
                "No - Ownership is too low",
                "Cannot determine"
            ],
            correctAnswer: 0,
            hint: "Look at decision-making power, not just ownership %. Who really controls StartUp?",
            explanation: "✅ Correct! Venture Capital has control through contractual rights despite low ownership. Veto power and management control = consolidation required."
        },
        // VERSION C
        {
            text: "Strategic Investor owns 45% of Tech Firm.\n\nContract grants Strategic Investor:\n• Control over board composition\n• Authority over business strategy",
            diagram: `
   [Strategic Investor]
              |
       45% ownership
    + board control
    + strategy authority
              |
        [Tech Firm]
            `,
            question: "Should Strategic Investor consolidate Tech Firm?",
            options: [
                "Yes - Has control through contractual rights",
                "No - Needs majority ownership",
                "Insufficient information"
            ],
            correctAnswer: 0,
            hint: "Control = power to direct activities. This can come from contracts, not just voting shares.",
            explanation: "✅ Perfect! Strategic Investor has control through contractual rights over board and strategy. Ownership % is not the only path to control. Consolidation required."
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
            hint: "If you consolidate a subsidiary, you also consolidate what IT controls. Check each link.",
            explanation: "✅ Perfect! BuildCo controls ConstructCo (80% > 50%). Since BuildCo consolidates ConstructCo, and ConstructCo controls SupplyCo (70% > 50%), BuildCo must also consolidate SupplyCo. Control flows down the chain."
        },
        // VERSION B
        {
            text: "ParentCo owns 75% of MiddleCo.\nMiddleCo owns 65% of LowerCo.",
            diagram: `
        [ParentCo]
            |
           75%
            |
        [MiddleCo]
            |
           65%
            |
        [LowerCo]
            `,
            question: "Which entities should ParentCo consolidate?",
            options: [
                "Only MiddleCo",
                "Only LowerCo",
                "Both MiddleCo and LowerCo",
                "Neither entity"
            ],
            correctAnswer: 2,
            hint: "Control flows down the ownership chain. Check if control exists at each level.",
            explanation: "✅ Excellent! ParentCo controls MiddleCo (75%), and MiddleCo controls LowerCo (65%). Both must be consolidated by ParentCo."
        },
        // VERSION C
        {
            text: "TopCorp owns 85% of MidCorp.\nMidCorp owns 60% of BottomCorp.",
            diagram: `
        [TopCorp]
            |
           85%
            |
        [MidCorp]
            |
           60%
            |
      [BottomCorp]
            `,
            question: "Which entities should TopCorp consolidate?",
            options: [
                "Only MidCorp",
                "Only BottomCorp",
                "Both MidCorp and BottomCorp",
                "Neither entity"
            ],
            correctAnswer: 2,
            hint: "Check each link in the chain for control (>50%). If both links have control, what happens?",
            explanation: "✅ Correct! TopCorp controls MidCorp (85%), and MidCorp controls BottomCorp (60%). Since control exists at each level, TopCorp consolidates both entities."
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
                "Yes - AlphaCorp's indirect ownership is 36%"
            ],
            correctAnswer: 1,
            hint: "Each link needs control (>50%) for the chain to continue. Check BetaCorp's ownership of GammaCorp.",
            explanation: "✅ Excellent reasoning! While AlphaCorp controls BetaCorp, BetaCorp does NOT control GammaCorp (only 45%). Since BetaCorp doesn't consolidate GammaCorp, AlphaCorp doesn't either. Each link must have control."
        },
        // VERSION B
        {
            text: "Parent owns 90% of Subsidiary.\nSubsidiary owns 40% of Associate.",
            diagram: `
          [Parent]
            |
           90%
            |
       [Subsidiary]
            |
           40%
            |
       [Associate]
            `,
            question: "Should Parent consolidate Associate?",
            options: [
                "Yes - Control flows through Subsidiary",
                "No - Subsidiary lacks control of Associate",
                "Yes - Parent controls Subsidiary"
            ],
            correctAnswer: 1,
            hint: "Does Subsidiary control Associate? That's the key question here.",
            explanation: "✅ Correct! Parent controls Subsidiary (90%), but Subsidiary does NOT control Associate (40%). The chain breaks. Associate is not consolidated."
        },
        // VERSION C
        {
            text: "HoldCo owns 70% of OpCo.\nOpCo owns 48% of RegionalCo.",
            diagram: `
        [HoldCo]
            |
           70%
            |
          [OpCo]
            |
           48%
            |
      [RegionalCo]
            `,
            question: "Should HoldCo consolidate RegionalCo?",
            options: [
                "Yes - Through the ownership chain",
                "No - OpCo doesn't control RegionalCo",
                "Yes - Total ownership is 33.6%"
            ],
            correctAnswer: 1,
            hint: "If the middle company doesn't consolidate an entity, neither does the parent. Does OpCo consolidate RegionalCo?",
            explanation: "✅ Perfect! HoldCo controls OpCo (70%), but OpCo does NOT control RegionalCo (48% < 50%). Since OpCo doesn't consolidate RegionalCo, HoldCo doesn't either."
        }
    ],

    scenario6: [
        // VERSION A
        {
            text: "Omega Holdings owns:\n• 60% of Sub A\n• 25% of Target Co (direct)\n\nSub A owns 35% of Target Co.",
            diagram: `
      [Omega Holdings]
         /        \\
       60%        25%
       /            \\
   [Sub A]      [Target Co]
       \\            /
        \\    35%   /
         \\        /
        [Target Co]
            `,
            question: "What is Omega's TOTAL ownership in Target Co?",
            options: [
                "25% total",
                "46% total (25% direct + 21% indirect)",
                "60% total",
                "85% total"
            ],
            correctAnswer: 1,
            hint: "Add DIRECT ownership + (Omega's % of Sub A × Sub A's % of Target). Calculate the indirect piece!",
            explanation: "✅ Outstanding! You correctly calculated:\n• Direct: 25%\n• Indirect: 60% × 35% = 21%\n• Total: 46%\n\nNote: 46% < 50%, so Omega does NOT consolidate Target Co."
        },
        // VERSION B
        {
            text: "MegaCorp owns:\n• 70% of Division X\n• 20% of Company Z (direct)\n\nDivision X owns 40% of Company Z.",
            diagram: `
        [MegaCorp]
         /        \\
       70%        20%
       /            \\
  [Division X]  [Company Z]
       \\            /
        \\    40%   /
         \\        /
        [Company Z]
            `,
            question: "What is MegaCorp's TOTAL ownership in Company Z?",
            options: [
                "20% total",
                "48% total (20% direct + 28% indirect)",
                "60% total",
                "70% total"
            ],
            correctAnswer: 1,
            hint: "Indirect ownership = 70% × 40% = 28%. Then add to direct 20%.",
            explanation: "✅ Excellent!\n• Direct: 20%\n• Indirect: 70% × 40% = 28%\n• Total: 48%\n\n48% < 50%, so no consolidation of Company Z."
        },
        // VERSION C
        {
            text: "Parent owns:\n• 80% of Subsidiary B\n• 15% of Target (direct)\n\nSubsidiary B owns 30% of Target.",
            diagram: `
          [Parent]
         /        \\
       80%        15%
       /            \\
  [Sub B]        [Target]
       \\            /
        \\    30%   /
         \\        /
          [Target]
            `,
            question: "What is Parent's TOTAL ownership in Target?",
            options: [
                "15% total",
                "39% total (15% direct + 24% indirect)",
                "45% total",
                "80% total"
            ],
            correctAnswer: 1,
            hint: "Calculate indirect (80% × 30% = ?), then add to direct (15%).",
            explanation: "✅ Perfect!\n• Direct: 15%\n• Indirect: 80% × 30% = 24%\n• Total: 39%\n\nParent does not consolidate Target (39% < 50%)."
        }
    ],

    scenario7: [
        // VERSION A
        {
            text: "MegaCorp owns:\n• 70% of Alpha\n• 30% of Beta\n• 55% of Gamma\n\nAlpha owns 40% of Delta.",
            diagram: `
        [MegaCorp]
        /    |    \\
      70%   30%   55%
      /      |      \\
  [Alpha] [Beta] [Gamma]
      \\
       40%
        \\
      [Delta]
            `,
            question: "Which entities should MegaCorp consolidate?",
            options: [
                "Alpha only",
                "Alpha and Gamma only",
                "Alpha, Beta, and Gamma",
                "All four entities"
            ],
            correctAnswer: 1,
            hint: "Check each entity: Does MegaCorp control it (>50%) directly? What about Delta?",
            explanation: "✅ Excellent!\n• Alpha (70%): Consolidate ✓\n• Beta (30%): No control ✗\n• Gamma (55%): Consolidate ✓\n• Delta: Alpha owns 40% (no control), so not consolidated ✗"
        },
        // VERSION B
        {
            text: "Parent owns:\n• 65% of Sub1\n• 45% of Sub2 (direct)\n• 80% of Sub3\n\nSub1 owns 35% of Sub2.",
            diagram: `
          [Parent]
        /    |    \\
      65%   45%   80%
      /      |      \\
  [Sub1] [Sub2] [Sub3]
      \\      /
       35% /
        \\ /
      [Sub2]
            `,
            question: "Which entities should Parent consolidate?",
            options: [
                "Sub1 only",
                "Sub1 and Sub3 only",
                "All three subsidiaries",
                "Sub1 and Sub2 only"
            ],
            correctAnswer: 2,
            hint: "Direct control: 65% ✓, 45% ✗, 80% ✓. But for Sub2: add indirect ownership from Sub1!",
            explanation: "✅ Perfect analysis!\n• Sub1 (65%): Consolidate ✓\n• Sub2: Direct 45% + Indirect (65% × 35% = 22.75%) = 67.75% → Consolidate ✓\n• Sub3 (80%): Consolidate ✓"
        },
        // VERSION C
        {
            text: "TopCo owns:\n• 75% of A\n• 35% of B (direct)\n• 60% of C\n\nA owns 20% of B.",
            diagram: `
          [TopCo]
        /    |    \\
      75%   35%   60%
      /      |      \\
    [A]    [B]    [C]
      \\      /
       20% /
        \\ /
        [B]
            `,
            question: "Which entities should TopCo consolidate?",
            options: [
                "A only",
                "A and C only",
                "A, B, and C",
                "All except B"
            ],
            correctAnswer: 1,
            hint: "TopCo direct in B: 35%. TopCo indirect: 75% × 20% = 15%. Total = 50%. That's exactly 50%!",
            explanation: "✅ Great work!\n• A (75%): Consolidate ✓\n• B: Direct 35% + Indirect (75% × 20% = 15%) = 50% exactly. NOT > 50%, so NO consolidation ✗\n• C (60%): Consolidate ✓"
        }
    ],

    scenario8: [
        // VERSION A
        {
            text: "Evaluate these three separate situations:\n\nSituation 1: Parent owns 52% of Sub\n\nSituation 2: Investor owns 48% of Joint (no special rights). Three other investors each own 17-18%.\n\nSituation 3: HoldCo owns 85% of OpCo; OpCo owns 65% of Regional",
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
            hint: "Test each: >50%? Control exists through chain? Situation 2 has no control despite being largest.",
            explanation: "✅ Perfect!\n• Situation 1 (52%): Consolidate ✓\n• Situation 2 (48%, no special rights): No control ✗\n• Situation 3: HoldCo consolidates both OpCo and Regional ✓"
        },
        // VERSION B
        {
            text: "Evaluate these situations:\n\nSituation 1: A owns 58% of B\n\nSituation 2: C owns 49% of D (largest shareholder, no special rights)\n\nSituation 3: E owns 70% of F; F owns 75% of G",
            diagram: `
Situation 1:    Situation 2:     Situation 3:
   [A]              [C]               [E]
    |                |                 |
   58%              49%               70%
    |                |                 |
   [B]              [D]               [F]
                                       |
                                      75%
                                       |
                                      [G]
            `,
            question: "Which situations require consolidation?",
            options: [
                "Situation 1 only",
                "Situations 1 and 2",
                "Situations 1 and 3",
                "All three"
            ],
            correctAnswer: 2,
            hint: "58% = yes. 49% (even if largest) = no. For chains: 70% and 75% both exceed 50%.",
            explanation: "✅ Excellent!\n• Situation 1 (58%): Yes ✓\n• Situation 2 (49%): No ✗\n• Situation 3: E consolidates both F and G ✓"
        },
        // VERSION C
        {
            text: "Analyze these scenarios:\n\nSituation 1: Parent owns 61% of Target\n\nSituation 2: Investor owns 44% of Startup with contractual board control\n\nSituation 3: Top owns 90% of Mid; Mid owns 40% of Low",
            diagram: `
Situation 1:    Situation 2:          Situation 3:
 [Parent]       [Investor]              [Top]
    |               |                     |
   61%        44% + control              90%
    |               |                     |
 [Target]       [Startup]               [Mid]
                                          |
                                         40%
                                          |
                                        [Low]
            `,
            question: "Which situations require consolidation?",
            options: [
                "Situations 1 and 2",
                "Situations 1 and 3",
                "Situation 1 only",
                "All three"
            ],
            correctAnswer: 0,
            hint: "61% = yes. 44% + board control = yes (contractual control). 40% in chain = no (chain breaks).",
            explanation: "✅ Perfect analysis!\n• Situation 1 (61%): Yes ✓\n• Situation 2 (44% + board control): Yes, VIE-like control ✓\n• Situation 3: Top consolidates Mid, but Mid doesn't control Low (40%) ✗"
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
            hint: "VIE control = power to direct + obligation to absorb losses/benefits. Who has both?",
            explanation: "✅ Excellent! You recognized a Variable Interest Entity (VIE). PropertyCo is a VIE, and RealEstate is the 'primary beneficiary' because it has:\n1. Power (management control)\n2. Economics (guarantees + 85% of benefits)\n\nWith VIEs, voting ownership doesn't matter—economic control does."
        },
        // VERSION B
        {
            text: "SpecialCo was set up by Manufacturing Inc.\n\nStructure:\n• Manufacturing owns 5% equity\n• Manufacturing controls all operations\n• Manufacturing absorbs 90% of economics\n• Outside investors get fixed returns only",
            diagram: `
   [Manufacturing Inc]
           |
     5% equity
  + operational control
  + 90% economics
  + risk bearer
           |
      [SpecialCo]
            `,
            question: "Should Manufacturing Inc. consolidate SpecialCo?",
            options: [
                "No - Ownership too low",
                "Yes - Primary beneficiary of VIE structure",
                "Cannot determine"
            ],
            correctAnswer: 1,
            hint: "Who has the power and bears the risk? That's who consolidates a VIE.",
            explanation: "✅ Perfect! This is a VIE. Manufacturing has:\n• Power (controls operations)\n• Economics (90% of variable returns)\n\nManufacturing is the primary beneficiary and must consolidate, despite only 5% ownership."
        },
        // VERSION C
        {
            text: "HoldingEntity created by Developer Corp.\n\nStructure:\n• Developer owns 10% of HoldingEntity\n• Developer directs all activities\n• Developer guarantees all liabilities\n• Developer receives 75% of residual returns",
            diagram: `
     [Developer Corp]
           |
     10% equity
  + activity direction
  + liability guarantees
  + 75% residual returns
           |
    [HoldingEntity]
            `,
            question: "Should Developer Corp. consolidate HoldingEntity?",
            options: [
                "No - Minority ownership",
                "Yes - Controls VIE as primary beneficiary",
                "Insufficient information"
            ],
            correctAnswer: 1,
            hint: "In VIEs, focus on who controls activities and bears economics, not voting %.",
            explanation: "✅ Excellent VIE analysis! Developer has:\n• Power (directs activities)\n• Economics (guarantees + 75% of returns)\n\nDeveloper is the primary beneficiary and must consolidate HoldingEntity."
        }
    ],

    scenario10: [
        // VERSION A
        {
            text: "GlobalCorp ownership structure:\n\n• 75% of FullSub\n• 40% of PartialCo (direct)\n• 12% of SPE\n\nFullSub owns 25% of PartialCo.\n\nSPE: GlobalCorp manages, guarantees debt, receives 90% of economics.",
            diagram: `
          [GlobalCorp]
          /    |     \\
        75%   40%    12%
        /      |       \\
   [FullSub][PartialCo][SPE]
        \\      /      (VIE:
     25% \\    /       GlobalCorp
          \\  /        manages +
      [PartialCo]      bears economics)
            `,
            question: "Which entities should GlobalCorp consolidate?",
            options: [
                "FullSub only",
                "FullSub and PartialCo",
                "FullSub and SPE",
                "All three entities"
            ],
            correctAnswer: 3,
            hint: "Check each: Direct control? Indirect ownership calc? VIE primary beneficiary?",
            explanation: "🎉 OUTSTANDING! You nailed it:\n\n• FullSub (75%): Direct control → Consolidate ✓\n\n• PartialCo total ownership:\n  - Direct: 40%\n  - Indirect: 75% × 25% = 18.75%\n  - Total: 58.75% → Consolidate ✓\n\n• SPE: VIE with GlobalCorp as primary beneficiary (power + economics) → Consolidate ✓\n\nYou've mastered all consolidation concepts!"
        },
        // VERSION B
        {
            text: "Parent ownership:\n\n• 80% of Sub1\n• 35% of Company X (direct)\n• 15% of EntityY\n\nSub1 owns 30% of Company X.\n\nEntityY: Parent manages, guarantees obligations, receives 85% of returns.",
            diagram: `
            [Parent]
          /    |     \\
        80%   35%    15%
        /      |       \\
    [Sub1][Company X][EntityY]
        \\      /      (VIE:
     30% \\    /       Parent
          \\  /        controls +
      [Company X]      bears risk)
            `,
            question: "Which entities should Parent consolidate?",
            options: [
                "Sub1 only",
                "Sub1 and Company X",
                "Sub1 and EntityY",
                "All three entities"
            ],
            correctAnswer: 3,
            hint: "Sub1: 80% ✓. Company X: 35% + (80% × 30%) = ? EntityY: VIE test.",
            explanation: "🎉 Perfect comprehensive analysis!\n\n• Sub1 (80%): Consolidate ✓\n\n• Company X:\n  - Direct: 35%\n  - Indirect: 80% × 30% = 24%\n  - Total: 59% → Consolidate ✓\n\n• EntityY: VIE, Parent is primary beneficiary → Consolidate ✓\n\nExcellent work on all concepts!"
        },
        // VERSION C
        {
            text: "TopCo structure:\n\n• 70% of MidCo\n• 30% of Target (direct)\n• 10% of SPV\n\nMidCo owns 35% of Target.\n\nSPV: TopCo controls operations, bears risk, gets 80% of variable returns.",
            diagram: `
            [TopCo]
          /    |     \\
        70%   30%    10%
        /      |       \\
    [MidCo] [Target]  [SPV]
        \\      /      (VIE:
     35% \\    /       TopCo
          \\  /        controls +
       [Target]        economics)
            `,
            question: "Which entities should TopCo consolidate?",
            options: [
                "MidCo only",
                "MidCo and Target",
                "MidCo and SPV",
                "All three entities"
            ],
            correctAnswer: 3,
            hint: "MidCo: direct check. Target: calculate total ownership. SPV: apply VIE rules.",
            explanation: "🎉 BRILLIANT! Full mastery demonstrated:\n\n• MidCo (70%): Consolidate ✓\n\n• Target:\n  - Direct: 30%\n  - Indirect: 70% × 35% = 24.5%\n  - Total: 54.5% → Consolidate ✓\n\n• SPV: VIE with TopCo as primary beneficiary → Consolidate ✓\n\nYou're a consolidation professional!"
        }
    ]
};
