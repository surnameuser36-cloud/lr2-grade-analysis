// Вычисляет средний балл группы
function calculateAverage(data) {
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}