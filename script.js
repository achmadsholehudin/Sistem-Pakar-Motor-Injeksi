const knowledgeBase = {
    rules: [
        {
            id: 'R1',
            conditions: {
                indikator_injeksi: 'ya',
                mesin_sulit: 'ya',
                bunyi_aneh: 'tidak',
                asap_knalpot: 'tidak',
                mati_mendadak: 'tidak'
            },
            diagnosis: 'Masalah pada sistem injeksi bahan bakar',
            solution: 'Periksa dan bersihkan injektor, periksa tekanan pompa bahan bakar, scan ECU untuk kode error.'
        },
        {
            id: 'R2',
            conditions: {
                indikator_injeksi: 'tidak',
                mesin_sulit: 'ya',
                bunyi_aneh: 'ya',
                asap_knalpot: 'tidak',
                mati_mendadak: 'ya'
            },
            diagnosis: 'Masalah pada sistem pengapian',
            solution: 'Periksa busi, koil pengapian, dan sensor-sensor terkait.'
        },
        {
            id: 'R3',
            conditions: {
                indikator_injeksi: 'tidak',
                mesin_sulit: 'tidak',
                bunyi_aneh: 'ya',
                asap_knalpot: 'ya',
                mati_mendadak: 'tidak'
            },
            diagnosis: 'Masalah pada sistem mekanis mesin',
            solution: 'Periksa komponen mesin seperti klep, timing chain, dan piston.'
        }
    ]
};

let questions = [];

function startConsultation() {
    document.querySelector('#welcome-section').style.display = 'none';
    document.querySelector('#season-section').style.display = 'block';
}

function selectSeason(season) {
    document.querySelector('#season-section').style.display = 'none';
    document.querySelector('#question-section').style.display = 'block';

    if (season === 'hujan') {
        questions = [
            { question: "Motor sering terendam air saat hujan?", name: "terendam_air" },
            { question: "Lampu motor sering mati saat hujan?", name: "lampu_mati" },
            { question: "Suara aneh saat dinyalakan setelah hujan?", name: "suara_aneh" },
            { question: "Motor sulit dinyalakan setelah hujan?", name: "sulit_dinyalakan" },
            { question: "Rem motor terasa licin?", name: "rem_licin" }
        ];
    } else if (season === 'kemarau') {
        questions = [
            { question: "Motor sering overheat saat berkendara?", name: "overheat" },
            { question: "Ada suara berisik dari mesin?", name: "suara_berisik" },
            { question: "Motor sulit dinyalakan setelah lama?", name: "sulit_dinyalakan" },
            { question: "Ada masalah debu masuk ke mesin?", name: "debu" },
            { question: "Oli mesin mengental?", name: "oli_mengental" }
        ];
    }

    showQuestions();
}

function showQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    questions.forEach((questionData) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question-box', 'mb-3');
        questionElement.innerHTML = `<h4>${questionData.question}</h4>`;

        const answerContainer = document.createElement('div');
        answerContainer.classList.add('option-container');

        const yesBox = document.createElement('div');
        yesBox.classList.add('option-box');
        yesBox.innerHTML = `<input type="radio" id="ya-${questionData.name}" name="${questionData.name}" value="Ya" /> <label for="ya-${questionData.name}">Ya</label>`;
        answerContainer.appendChild(yesBox);

        const noBox = document.createElement('div');
        noBox.classList.add('option-box');
        noBox.innerHTML = `<input type="radio" id="tidak-${questionData.name}" name="${questionData.name}" value="Tidak" /> <label for="tidak-${questionData.name}">Tidak</label>`;
        answerContainer.appendChild(noBox);

        questionElement.appendChild(answerContainer);
        questionContainer.appendChild(questionElement);
    });
}

function analyze() {
    const formData = {};
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    
    radioButtons.forEach(button => {
        formData[button.name] = button.value;
    });

    if (Object.keys(formData).length !== questions.length) {
        alert('Mohon lengkapi semua pertanyaan!');
        return;
    }

    let matchedRule = findBestMatch(formData);
    displayResult(matchedRule);
}

function findBestMatch(formData) {
    let bestMatch = null;
    let highestMatchScore = 0;

    knowledgeBase.rules.forEach(rule => {
        let matchScore = calculateMatchScore(formData, rule.conditions);
        if (matchScore > highestMatchScore) {
            highestMatchScore = matchScore;
            bestMatch = rule;
        }
    });

    return bestMatch;
}

function calculateMatchScore(formData, conditions) {
    let score = 0;
    let totalConditions = Object.keys(conditions).length;

    for (let key in conditions) {
        if (formData[key] === conditions[key]) {
            score++;
        }
    }

    return score / totalConditions;
}

function displayResult(matchedRule) {
    let resultHTML = '';

    if (matchedRule) {
        resultHTML = `
            <div class="mb-3">
                <strong>Diagnosis:</strong> ${matchedRule.diagnosis}
            </div>
            <div class="mb-3">
                <strong>Solusi yang Disarankan:</strong> ${matchedRule.solution}
            </div>
        `;
    } else {
        resultHTML = `
            <div class="mb-3">
                <strong>Diagnosis:</strong> Tidak dapat menentukan masalah spesifik
            </div>
            <div class="mb-3">
                <strong>Saran:</strong> Silakan kunjungi bengkel AHASS terdekat untuk pemeriksaan lebih lanjut
            </div>
        `;
    }

    document.querySelector('#question-section').style.display = 'none';
    document.querySelector('#result-section').style.display = 'block';
    document.querySelector('#analysis-result').innerHTML = resultHTML;
}

function reset() {
    document.querySelector('#consultationForm').reset();
    document.querySelector('#question-section').style.display = 'none';
    document.querySelector('#result-section').style.display = 'none';
    document.querySelector('.container.text-center').style.display = 'block';
}
