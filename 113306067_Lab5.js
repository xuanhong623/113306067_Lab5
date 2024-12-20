document.getElementById('submitBtn').addEventListener('click', () => {
    const mathGrade = parseFloat(document.getElementById('mathGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numbers for both Math and English.');
        return;
    }

    const tbody = document.querySelector('#gradeTable tbody');
    const newRow = tbody.insertRow();
    const rowIndex = tbody.rows.length;

    newRow.insertCell(0).innerText = rowIndex;
    newRow.insertCell(1).innerText = mathGrade;
    newRow.insertCell(2).innerText = englishGrade;

    const avg = ((mathGrade + englishGrade) / 2).toFixed(2);
    newRow.insertCell(3).innerText = avg;

    updateFooter();
});

function updateFooter() {
    const rows = document.querySelectorAll('#gradeTable tbody tr');
    let totalMath = 0, totalEnglish = 0, totalAverage = 0, count = rows.length;

    rows.forEach(row => {
        totalMath += parseFloat(row.cells[1].innerText);
        totalEnglish += parseFloat(row.cells[2].innerText);
        totalAverage += parseFloat(row.cells[3].innerText);
    });

    document.getElementById('mathAvg').innerText = (totalMath / count).toFixed(2);
    document.getElementById('englishAvg').innerText = (totalEnglish / count).toFixed(2);
    document.getElementById('overallAvg').innerText = (totalAverage / count).toFixed(2);
}

