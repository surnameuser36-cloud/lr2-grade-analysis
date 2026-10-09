// Создаёт новый массив и добавляет буквенную оценку каждому студенту
function addLetterGrade(data) {
    return data.map((student) => ({
        ...student,
        letter: student.score >= 90 ? "A" : student.score >= 75 ? "B" : "C"
    }));
}