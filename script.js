const knowledgeBase = {
    rules: [
        {
            id: 'R1',
            conditions: {
                terendam_air: 'ya',
                lampu_mati: 'ya',
                suara_aneh: 'tidak',
                sulit_dinyalakan: 'ya',
                rem_licin: 'tidak'
            },
            diagnosis: 'Kemungkinan masalah pada sistem kelistrikan akibat terendam air.',
            solution: 'Periksa sistem kelistrikan dan pastikan tidak ada kerusakan.'
        },
        {
            id: 'R2',
            conditions: {
                terendam_air: 'ya',
                lampu_mati: 'tidak',
                suara_aneh: 'ya',
                sulit_dinyalakan: 'tidak',
                rem_licin: 'ya'
            },
            diagnosis: 'Kemungkinan masalah pada rem akibat terendam air.',
            solution: 'Periksa dan bersihkan rem.'
        },
        {
            id: 'R3',
            conditions: {
                terendam_air: 'tidak',
                lampu_mati: 'ya',
                suara_aneh: 'tidak',
                sulit_dinyalakan: 'ya',
                rem_licin: 'tidak'
            },
            diagnosis: 'Masalah pada sistem pengapian.',
            solution: 'Periksa busi dan sistem pengapian.'
        },
        {
            id: 'R4',
            conditions: {
                terendam_air: 'tidak',
                lampu_mati: 'tidak',
                suara_aneh: 'ya',
                sulit_dinyalakan: 'ya',
                rem_licin: 'tidak'
            },
            diagnosis: 'Kemungkinan masalah pada mesin.',
            solution: 'Periksa komponen mesin seperti klep dan piston.'
        },
        {
            id: 'R5',
            conditions: {
                terendam_air: 'tidak',
                lampu_mati: 'tidak',
                suara_aneh: 'tidak',
                sulit_dinyalakan: 'ya',
                rem_licin: 'ya'
            },
            diagnosis: 'Kemungkinan masalah pada sistem bahan bakar.',
            solution: 'Periksa saluran bahan bakar dan filter.'
        },
        {
            id: 'R6',
            conditions: {
                terendam_air: 'tidak',
                lampu_mati: 'tidak',
                suara_aneh: 'ya',
                sulit_dinyalakan: 'tidak',
                rem_licin: 'tidak'
            },
            diagnosis: 'Kemungkinan masalah pada sistem knalpot.',
            solution: 'Periksa saluran knalpot.'
        },
        {
            id: 'R7',
            conditions: {
                overheat: 'ya',
                suara_berisik: 'tidak',
                sulit_dinyalakan: 'ya',
                debu: 'tidak',
                oli_mengental: 'tidak'
            },
            diagnosis: 'Masalah pada sistem pendinginan.',
            solution: 'Periksa radiator dan sistem pendinginan.'
        },
        {
            id: 'R8',
            conditions: {
                overheat: 'tidak',
                suara_berisik: 'ya',
                sulit_dinyalakan: 'tidak',
                debu: 'ya',
                oli_mengental: 'tidak'
            },
            diagnosis: 'Kemungkinan masalah pada komponen mesin.',
            solution: 'Periksa komponen mesin dan pastikan tidak ada kerusakan.'
        },
        {
            id: 'R9',
            conditions: {
                overheat: 'tidak',
                suara_berisik: 'tidak',
                sulit_dinyalakan: 'ya',
                debu: 'tidak',
                oli_mengental: 'ya'
            },
            diagnosis: 'Masalah pada oli mesin.',
            solution: 'Ganti oli mesin dan periksa sistem pelumasan.'
        },
        {
            id: 'R10',
            conditions: {
                overheat: 'tidak',
                suara_berisik: 'tidak',
                sulit_dinyalakan: 'tidak',
                debu: 'ya',
                oli_mengental: 'tidak'
            },
            diagnosis: 'Kemungkinan masalah pada filter udara.',
            solution: 'Bersihkan atau ganti filter udara.'
        },
        // Tambahkan rules R11 hingga R50 sesuai dengan pertanyaan yang relevan
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
