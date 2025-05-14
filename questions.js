const allQuestions = [
    {
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Yield", "Speed up"],
        answer: 0
    },
    {
        question: "When are you required to use your headlights?",
        options: ["Only at night", "Between sunset and sunrise or when you cannot see clearly for 500 feet", "Only in rural areas", "Only in fog"],
        answer: 1
    },
    {
        question: "What is the legal blood alcohol concentration (BAC) limit for drivers over 21 in Mississippi?",
        options: ["0.08%", "0.10%", "0.05%", "0.02%"],
        answer: 0
    },
    {
        question: "What should you do at a stop sign?",
        options: ["Slow down and proceed", "Stop completely and proceed when safe", "Yield to vehicles only on your right", "Honk and proceed"],
        answer: 1
    },
    {
        question: "What does a yellow diamond-shaped sign indicate?",
        options: ["Regulatory sign", "Warning sign", "Stop sign", "Guide sign"],
        answer: 1
    },
    {
        question: "What must you do when you approach a school bus that is stopped with its red lights flashing and stop sign extended?",
        options: ["Slow down and proceed with caution", "Stop at least ten feet away and remain stopped until the bus resumes motion and the red lights are off", "Only stop if you are traveling in the same direction as the bus", "Honk and pass the bus quickly"],
        answer: 1
    },
    {
        question: "When parking uphill with a curb, how should you turn your wheels?",
        options: ["Straight ahead", "Toward the curb", "Away from the curb", "It doesn't matter"],
        answer: 2
    },
    {
        question: "What does a double solid yellow line in the center of the road mean?",
        options: ["Passing is allowed in both directions", "Passing is allowed only during daylight hours", "Passing is not allowed in either direction", "You may pass if no traffic is coming"],
        answer: 2
    },
    {
        question: "What is the minimum following distance you should maintain for every 10 mph of speed?",
        options: ["One car length", "Two car lengths", "Three car lengths", "Four car lengths"],
        answer: 0
    },
    {
        question: "What should you do if your vehicle begins to skid?",
        options: ["Brake hard immediately", "Steer in the direction you want the front of the car to go", "Accelerate quickly", "Turn off the ignition"],
        answer: 1
    },
    {
        question: "What does a flashing red traffic light mean?",
        options: ["Slow down and proceed with caution", "Stop completely, then proceed when safe", "Yield to oncoming traffic only", "Stop only if there are other vehicles present"],
        answer: 1
    },
    {
        question: "What is the maximum speed limit for passenger automobiles on interstate highways in Mississippi?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        answer: 3
    },
    {
        question: "When is it legal to turn right on a red light in Mississippi?",
        options: ["Never", "After coming to a complete stop, unless posted otherwise", "Only if there is no oncoming traffic", "Only during daylight hours"],
        answer: 1
    },
    {
        question: "What is the penalty for not wearing a seat belt in Mississippi?",
        options: ["No penalty", "Verbal warning", "Fine", "Jail time"],
        answer: 2
    },
    {
        question: "What is the minimum distance you must stop from a railroad crossing when a train is approaching?",
        options: ["5 feet", "10 feet", "15 feet", "50 feet"],
        answer: 2
    },
    {
        question: "What should you do if you are involved in a traffic accident with injuries or property damage over $500?",
        options: ["Leave the scene and call police later", "Report immediately to law enforcement and provide your information to involved parties", "Only report if someone asks you to", "Wait for the other driver to report"],
        answer: 1
    },
    {
        question: "When is it legal to pass another vehicle on the right?",
        options: ["When the vehicle ahead is making a left turn and there is room", "On a two-lane highway at any time", "When driving in a school zone", "When you are in a hurry"],
        answer: 0
    },
    {
        question: "When parking downhill with or without a curb, which way should you turn your wheels?",
        options: ["Toward the curb or edge of the road", "Away from the curb", "Straight ahead", "It does not matter"],
        answer: 0
    },
    {
        question: "What is the correct hand signal for a right turn?",
        options: ["Left arm straight out", "Left arm bent upward at the elbow", "Left arm bent downward at the elbow", "Right arm straight out"],
        answer: 1
    },
    {
        question: "What should you do if you see an emergency vehicle with flashing lights behind you?",
        options: ["Speed up to get out of the way", "Pull over to the extreme right and stop until the vehicle passes", "Stop in the middle of the road", "Ignore it if you are not in the way"],
        answer: 1
    },
    {
        question: "What is the penalty for littering on Mississippi highways?",
        options: ["No penalty", "Verbal warning", "Fine", "Jail time"],
        answer: 2
    },
    {
        question: "What must you do before changing lanes?",
        options: ["Signal, check mirrors, and check your blind spot", "Honk your horn", "Speed up", "Slow down and stop"],
        answer: 0
    },
    {
        question: "What is the minimum age to apply for a regular learner’s permit in Mississippi?",
        options: ["14", "15", "16", "17"],
        answer: 1
    },
    {
        question: "How many feet must you stop from a railroad crossing when a train is coming?",
        options: ["5-10 feet", "10-50 feet", "15-50 feet", "20-60 feet"],
        answer: 2
    },
    {
        question: "When parking downhill with a curb, you should turn your wheels:",
        options: ["Away from the curb", "Toward the curb", "Straight ahead", "It does not matter"],
        answer: 1
    },
    {
        question: "How should you signal a left turn using your arm?",
        options: ["Left arm straight out", "Left arm bent upward", "Left arm bent downward", "Right arm straight out"],
        answer: 0
    },
    {
        question: "What does a flashing yellow light mean?",
        options: ["Stop", "Slow down and proceed with caution", "Yield", "Turn only"],
        answer: 1
    },
    {
        question: "When must you yield to a pedestrian?",
        options: ["Only at marked crosswalks", "At all crosswalks, marked or not", "Only when traffic lights are red", "Only in school zones"],
        answer: 1
    },
    {
        question: "When entering a highway from a driveway, you must:",
        options: ["Yield to vehicles on the highway", "Speed up and merge", "Honk before entering", "Enter without stopping"],
        answer: 0
    },
    {
        question: "What is the correct hand signal for slowing down or stopping?",
        options: ["Arm straight out", "Arm bent upward", "Arm bent downward", "Right arm straight out"],
        answer: 2
    },
    {
        question: "What is the legal speed limit in a Mississippi school zone?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        answer: 1
    },
    {
        question: "When parking parallel, how close must your tires be to the curb?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        answer: 1
    },
    {
        question: "What should you do if you have a blowout while driving?",
        options: ["Brake hard", "Take your foot off the accelerator and brake gently", "Speed up", "Turn off the ignition"],
        answer: 1
    },
    {
        question: "What does a solid white line mean?",
        options: ["Passing allowed", "Lane change discouraged", "Stop", "Yield"],
        answer: 1
    },
    {
        question: "When must you dim your headlights?",
        options: ["When within 500 feet of an oncoming vehicle", "Only in fog", "Only at night", "Never"],
        answer: 0
    },
    {
        question: "What is the first thing you should do if you are involved in an accident?",
        options: ["Leave the scene", "Stop and help anyone injured", "Call your insurance", "Move your car immediately"],
        answer: 1
    },
    {
        question: "When is it legal to drive off the pavement to pass another vehicle?",
        options: ["Never", "Only if no one is coming", "Only on rural roads", "When in a hurry"],
        answer: 0
    },
    {
        question: "What does a round yellow sign with a black “X” and two “R”s mean?",
        options: ["Hospital zone", "Railroad crossing ahead", "No passing", "School zone"],
        answer: 1
    },
    {
        question: "What does a red octagon sign mean?",
        options: ["Yield", "Stop", "Warning", "No entry"],
        answer: 1
    },
    {
        question: "What is the minimum insurance required in Mississippi for bodily injury per person?",
        options: ["$10,000", "$15,000", "$25,000", "$50,000"],
        answer: 2
    },
    {
        question: "What should you do if you miss your exit on the interstate?",
        options: ["Back up", "Stop and wait", "Go to the next exit", "Make a U-turn"],
        answer: 2
    },
    {
        question: "When are you required to stop for a school bus?",
        options: ["Only if you are behind it", "Always, unless on a divided highway with four or more lanes and traveling the opposite direction", "Only in school zones", "Never"],
        answer: 1
    },
    {
        question: "What is the minimum age to apply for a regular driver’s license without a learner’s permit in Mississippi?",
        options: ["15", "16", "17", "18"],
        answer: 2
    },
    {
        question: "What is the safest way to handle a curve?",
        options: ["Speed up before entering", "Slow down before entering", "Brake in the middle of the curve", "Honk your horn"],
        answer: 1
    },
    {
        question: "When driving in fog, you should use:",
        options: ["High beams", "Low beams", "Parking lights only", "Hazard lights only"],
        answer: 1
    },
    {
        question: "What does a broken white line on the roadway indicate?",
        options: ["You may change lanes if it is safe to do so", "You must stay in your lane", "You are approaching an intersection", "Passing is not allowed"],
        answer: 0
    },
    {
        question: "When making a left turn at an intersection, you should:",
        options: ["Yield to oncoming traffic", "Proceed without stopping", "Stop and wait for a green arrow", "Honk your horn"],
        answer: 0
    },
    {
        question: "When approaching a stationary emergency vehicle with flashing lights, you should:",
        options: ["Slow down and move over one lane", "Speed up to pass quickly", "Continue driving at the same speed", "Stop in the lane"],
        answer: 0
    },
    {
        question: "When entering a roundabout, you should:",
        options: ["Yield to traffic already in the roundabout", "Enter without stopping", "Drive counterclockwise", "Both A and C"],
        answer: 3
    },
    {
        question: "In Mississippi, a child under the age of ____ must be secured in a child restraint system.",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "When driving at night, you should use your high beam headlights when:",
        options: ["Approaching an oncoming vehicle", "Following another vehicle", "There are no oncoming vehicles or vehicles ahead of you", "Driving in fog"],
        answer: 2
    },
    {
        question: "If you are involved in a minor collision and no one is injured, you should:",
        options: ["Leave your vehicle in the roadway", "Move your vehicle off the roadway", "Wait for police before moving", "Call your insurance company first"],
        answer: 1
    },
    {
        question: "When driving in heavy rain, you should:",
        options: ["Turn on your high beams", "Turn on your low beams", "Turn on your hazard lights", "Turn off your lights"],
        answer: 1
    },
    {
        question: "If you are being passed by another vehicle, you should:",
        options: ["Speed up", "Slow down", "Maintain your speed and position", "Move to the left"],
        answer: 2
    },
    {
        question: "When driving in a construction zone, you should:",
        options: ["Increase your speed", "Slow down and drive cautiously", "Drive at the posted speed limit", "Stop and wait for instructions"],
        answer: 1
    },
    {
        question: "You must yield the right of way to pedestrians crossing the street at:",
        options: ["Marked crosswalks only", "Unmarked crosswalks only", "Both marked and unmarked crosswalks", "Only when the light is red"],
        answer: 2
    },
    {
        question: "When a school bus is stopped with its red lights flashing, you must:",
        options: ["Slow down and pass cautiously", "Stop and wait for the lights to stop flashing", "Only stop if you are traveling in the same direction", "Honk and pass quickly"],
        answer: 1
    },
    {
        question: "In Mississippi, you must signal your intention to turn or change lanes at least ____ feet before making the maneuver.",
        options: ["50", "100", "200", "500"],
        answer: 1
    },
    {
        question: "When you are driving on a two-lane road and an emergency vehicle with flashing lights is approaching from the opposite direction, you should:",
        options: ["Pull over to the right side of the road and stop", "Continue driving at your current speed", "Move to the left side of the road", "Speed up to pass"],
        answer: 0
    }
];

const moreQuestions = []; // Emptied as all questions are now in allQuestions

// GLOBAL STATE
let questions = [];
let userAnswers = [];
let currentQuestionIndex = 0;

// UTILS
function selectRandomQuestions(sourceArray, numQuestions) {
    const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

// QUIZ LOGIC
function initializeQuiz() {
    // Combine all questions and select random ones for the test
    questions = selectRandomQuestions(allQuestions, 30); // Using 30 questions
    userAnswers = Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    renderQuiz();
    updateQuestionCounter();
    updateNavigationButtons();
    updateProgressBar();

    // Clear results and review/retry buttons at start
    document.getElementById('result').innerHTML = '';
    document.getElementById('retry-btn').style.display = 'none';
    document.getElementById('review-btn').style.display = 'none';
    document.getElementById('quiz-navigation').style.display = 'flex';
    document.getElementById('question-progress').style.display = 'block';
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    if (questions.length === 0) return;

    const q = questions[currentQuestionIndex];
    const qDiv = document.createElement('div');
    qDiv.className = 'question-block active';

    qDiv.innerHTML = `
        <p class="question-text"><strong>Question ${currentQuestionIndex + 1}:</strong> ${q.question}</p>
        <div class="options-container">
            ${q.options.map((opt, i) => `
                <label class="option-label ${userAnswers[currentQuestionIndex] === i ? 'selected' : ''}">
                    <input type="radio" name="q${currentQuestionIndex}" value="${i}" ${userAnswers[currentQuestionIndex] === i ? 'checked' : ''}>
                    <span class="option-text">${opt}</span>
                </label>
            `).join('')}
        </div>
    `;

    container.appendChild(qDiv);

    // Add event listeners to the radio buttons
    const radios = document.querySelectorAll(`input[name="q${currentQuestionIndex}"]`);
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            userAnswers[currentQuestionIndex] = parseInt(e.target.value);
            updateProgressBar();

            // Add selected class to parent label
            document.querySelectorAll('.option-label').forEach(label => {
                label.classList.remove('selected');
            });
            e.target.closest('.option-label').classList.add('selected');
        });
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuiz();
        updateQuestionCounter();
        updateNavigationButtons();
        document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth' });
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuiz();
        updateQuestionCounter();
        updateNavigationButtons();
        document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth' });
    }
}

function updateQuestionCounter() {
    const counter = document.getElementById('question-counter');
    counter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

function updateProgressBar() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progressPercent = (answeredCount / questions.length) * 100;
    const progressBar = document.getElementById('progress-bar-fill');
    progressBar.style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent =
        `${answeredCount} of ${questions.length} questions answered`;
}

function checkAnswers() {
    let score = 0;
    let incorrectQuestions = [];

    questions.forEach((q, idx) => {
        const userAnswer = userAnswers[idx];
        if (userAnswer === q.answer) {
            score++;
        } else {
            incorrectQuestions.push({
                questionIndex: idx,
                question: q.question,
                userAnswer: userAnswer !== null ? q.options[userAnswer] : "Not answered",
                correctAnswer: q.options[q.answer]
            });
        }
    });

    const unansweredCount = userAnswers.filter(answer => answer === null).length;
    const resultElement = document.getElementById('result');
    const percentage = Math.round((score / questions.length) * 100);
    const passed = score >= Math.round(questions.length * 0.8);

    let resultMessage = `<h3 class="${passed ? 'pass' : 'needs-practice'}">${passed ? 'Congratulations!' : 'Keep Practicing!'}</h3>`;
    resultMessage += `<p>You scored <strong>${score} out of ${questions.length}</strong> (${percentage}%).</p>`;

    if (unansweredCount > 0) {
        resultMessage += `<p>You left ${unansweredCount} question${unansweredCount > 1 ? 's' : ''} unanswered.</p>`;
    }

    if (passed) {
        resultMessage += `<p>Great job! You're well prepared for the actual test.</p>`;
    } else {
        resultMessage += `<p>You need ${Math.round(questions.length * 0.8)} correct answers to pass. Keep studying!</p>`;
    }

    resultElement.innerHTML = resultMessage;

    // Show retry and review buttons
    document.getElementById('retry-btn').style.display = 'inline-block';
    document.getElementById('review-btn').style.display = 'inline-block';

    // Hide nav buttons and question display
    document.getElementById('quiz-navigation').style.display = 'none';
    document.getElementById('question-progress').style.display = 'none';

    // Save incorrect questions for review
    window.incorrectQuestions = incorrectQuestions;

    // Scroll to results
    resultElement.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    initializeQuiz();
}

function showReview() {
    if (!window.incorrectQuestions || window.incorrectQuestions.length === 0) {
        alert("No incorrect answers to review!");
        return;
    }

    let reviewContent = `<h3>Questions to Review</h3>`;

    window.incorrectQuestions.forEach((item, i) => {
        reviewContent += `
            <div class="review-item">
                <p><strong>Question ${item.questionIndex + 1}:</strong> ${item.question}</p>
                <p class="wrong">Your answer: ${item.userAnswer}</p>
                <p class="correct">Correct answer: ${item.correctAnswer}</p>
            </div>
        `;
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML += `<div class="review-container">${reviewContent}</div>`;
    resultElement.scrollIntoView({ behavior: 'smooth' });
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('submit-btn').addEventListener('click', checkAnswers);
    document.getElementById('retry-btn').addEventListener('click', resetQuiz);
    document.getElementById('review-btn').addEventListener('click', showReview);
});
