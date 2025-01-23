// Basis pengetahuan gejala dan masalah
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

// Fungsi untuk memulai konsultasi
function startConsultation() {
    document.querySelector('#question-section').style.display = 'block';
    document.querySelector('.container.text-center').style.display = 'none';
}

// Fungsi analisis yang diperbaiki
function analyze() {
    // Validasi form
    const form = document.querySelector('#consultationForm');
    if (!isFormValid(form)) {
        alert('Mohon lengkapi semua pertanyaan!');
        return;
    }

    // Mengambil semua nilai input
    const formData = {
        keluhan: document.querySelector('#keluhan').value,
        indikator_injeksi: document.querySelector('input[name="indikator_injeksi"]:checked').value,
        mesin_sulit: document.querySelector('input[name="mesin_sulit"]:checked').value,
        bunyi_aneh: document.querySelector('input[name="bunyi_aneh"]:checked').value,
        asap_knalpot: document.querySelector('input[name="asap_knalpot"]:checked').value,
        mati_mendadak: document.querySelector('input[name="mati_mendadak"]:checked').value
    };

    // Mencari rule yang paling cocok
    let matchedRule = findBestMatch(formData);
    
    // Menampilkan hasil
    displayResult(formData.keluhan, matchedRule);
}

// Fungsi untuk validasi form
function isFormValid(form) {
    const requiredInputs = form.querySelectorAll('input[required]');
    const requiredRadios = {};

    // Mengecek setiap input yang required
    for (let input of requiredInputs) {
        if (input.type === 'radio') {
            requiredRadios[input.name] = requiredRadios[input.name] || false;
            if (input.checked) {
                requiredRadios[input.name] = true;
            }
        } else if (!input.value) {
            return false;
        }
    }

    // Mengecek apakah semua radio button yang required sudah dipilih
    return Object.values(requiredRadios).every(checked => checked);
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

function displayResult(keluhan, matchedRule) {
    let resultHTML = '';
    
    if (matchedRule) {
        resultHTML = `
            <div class="mb-3">
                <strong>Keluhan:</strong> ${keluhan}
            </div>
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
                <strong>Keluhan:</strong> ${keluhan}
            </div>
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

// Fungsi reset
function reset() {
    document.querySelector('#consultationForm').reset();
    document.querySelector('#question-section').style.display = 'none';
    document.querySelector('#result-section').style.display = 'none';
    document.querySelector('.container.text-center').style.display = 'block';
}