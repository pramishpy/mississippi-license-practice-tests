/**
 * This file organizes questions into categories to ensure a balanced test experience
 */

const questionCategories = {
    // Road signs and signals
    "signs": [
        "What does a yellow diamond-shaped sign mean?",
        "What does a red octagon sign mean?",
        "What does a round yellow sign with a black \"X\" and two \"R\"s mean?",
        "What does a solid white line mean?",
        "What does a double solid yellow line mean?",
        "What does a broken white line on the roadway indicate?",
        "What does a flashing red traffic light mean?",
        "What does a flashing yellow light mean?",
        "Identify this traffic sign", // New keyword for image questions
        "What does this sign indicate?", // New keyword for image questions
        "What does this sign mean?",
        "This sign warns of:",
        "This sign designates:",
        "This emblem identifies:"
    ],
    
    // Driving laws
    "laws": [
        "What is the legal blood alcohol concentration (BAC) limit for drivers over 21 in Mississippi?",
        "What is the minimum insurance required in Mississippi for bodily injury per person?",
        "What is the legal speed limit in a Mississippi school zone?",
        "What is the maximum speed limit for passenger vehicles on Mississippi interstates?",
        "In Mississippi, you must signal your intention to turn or change lanes at least ____ feet before making the maneuver.",
        "In Mississippi, a child under the age of ____ must be secured in a child restraint system.",
        "Certification of Attendance",
        "application signature",
        "liability for applicant",
        "notarized",
        "Driver's Education requirement"
    ],
    
    // Safe driving practices
    "safety": [
        "What is the minimum following distance per 10 mph?",
        "What should you do if your car starts to skid?",
        "What should you do if you have a blowout while driving?",
        "What is the safest way to handle a curve?",
        "When driving in fog, you should use:",
        "When driving in heavy rain, you should:",
        "When driving in a construction zone, you should:",
        "If you are being passed by another vehicle, you should:"
    ],
    
    // Right of way
    "rightOfWay": [
        "When must you yield to a pedestrian?",
        "When are you required to stop for a school bus?",
        "When entering a highway from a driveway, you must:",
        "When entering a roundabout, you should:",
        "You must yield the right of way to pedestrians crossing the street at:",
        "When approaching a stationary emergency vehicle with flashing lights, you should:"
    ],
    
    // Special maneuvers
    "maneuvers": [
        "When parking uphill with a curb, you should turn your wheels:",
        "When parking downhill with or without a curb, which way should you turn your wheels?",
        "When parking parallel, how close must your tires be to the curb?",
        "When making a left turn at an intersection, you should:",
        "What is the correct hand signal for a right turn?",
        "What is the correct hand signal for slowing down or stopping?"
    ],
    
    // Emergency situations
    "emergency": [
        "What should you do if you see an emergency vehicle with flashing lights behind you?",
        "What is the first thing you should do if you are involved in an accident?",
        "What should you do if you miss your exit on the interstate?",
        "If you are involved in a minor collision and no one is injured, you should:",
        "When you are driving on a two-lane road and an emergency vehicle with flashing lights is approaching from the opposite direction, you should:"
    ],
    
    // General rules and requirements
    "general": [
        "What is the minimum age to apply for a regular learner's permit in Mississippi?",
        "When must headlights be used?",
        "What is the penalty for not wearing a seat belt in Mississippi?",
        "When are you allowed to pass another vehicle on the right?",
        "When is it legal to drive off the pavement to pass another vehicle?",
        "When must you dim your headlights?",
        "What is the minimum distance you must stop from a railroad crossing when a train is approaching?",
        "You may make a right turn on a red traffic signal after:",
        "When driving at night, you should use your high beam headlights when:",
        "application form information",
        "proof of residency",
        "proofs of identification",
        "Social Security card"
    ]
};

/**
 * Selects questions from different categories to ensure a balanced test
 * @param {Array} allQuestions - All available questions
 * @param {Number} totalQuestions - Number of questions to select (default 30)
 * @returns {Array} Selected questions
 */
function selectBalancedQuestions(allQuestions, totalQuestions = 30) {
    // Define how many questions we want from each category
    const distribution = {
        "signs": 7,       // Increased to accommodate more sign questions
        "laws": 4,
        "safety": 5,
        "rightOfWay": 4,
        "maneuvers": 3,   // Adjusted
        "emergency": 3,
        "general": 4      // Adjusted
    };
    
    // Collect questions by category
    const categorizedQuestions = {};
    const uncategorized = [];
    
    // Sort questions into categories
    allQuestions.forEach(q => {
        let assigned = false;
        
        // Check if question belongs to any category
        for (const [category, questionsInCat] of Object.entries(questionCategories)) {
            if (questionsInCat.some(phrase => q.question.toLowerCase().includes(phrase.toLowerCase()))) {
                if (!categorizedQuestions[category]) {
                    categorizedQuestions[category] = [];
                }
                categorizedQuestions[category].push(q);
                assigned = true;
                break; 
            }
        }
        
        // If not in any category, add to uncategorized
        if (!assigned) {
            uncategorized.push(q);
        }
    });
    
    // Function to select random items from array
    const getRandomItems = (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    
    // Select questions according to distribution
    const selectedQuestions = [];
    let remainingSlots = totalQuestions;
    
    for (const [category, targetCount] of Object.entries(distribution)) {
        const available = categorizedQuestions[category] || [];
        const count = Math.min(targetCount, available.length, remainingSlots);
        
        if (count > 0) {
            const items = getRandomItems(available, count);
            selectedQuestions.push(...items);
            remainingSlots -= count;
            // Remove selected items from available to avoid duplicates if pool is used later
            categorizedQuestions[category] = available.filter(item => !items.includes(item));
        }
    }
    
    // Fill any remaining slots with uncategorized or random questions
    if (remainingSlots > 0) {
        let pool = [...uncategorized];
        const selectedQuestionTexts = selectedQuestions.map(q => q.question);

        // Add questions that weren't selected yet from categorized questions if uncategorized is not enough
        for (const category in categorizedQuestions) {
            const unusedInCategory = categorizedQuestions[category].filter(q => !selectedQuestionTexts.includes(q.question));
            pool.push(...unusedInCategory);
        }
        
        // Remove duplicates from the pool that might have been added if a question was uncategorized but also matched a category later
        pool = pool.filter((q, index, self) => 
            index === self.findIndex((t) => t.question === q.question) && !selectedQuestionTexts.includes(q.question)
        );

        const additionalQuestions = getRandomItems(pool, remainingSlots);
        selectedQuestions.push(...additionalQuestions);
    }
    
    // Shuffle the final selection to ensure randomness if totalQuestions is less than sum of distribution
    // Or if questions were added from the pool
    return selectedQuestions.slice(0, totalQuestions).sort(() => 0.5 - Math.random());
}
