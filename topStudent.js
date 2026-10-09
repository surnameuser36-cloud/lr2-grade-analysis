// Возвращает имя студента с максимальным баллом
function findTopStudent(data) {
    return data.reduce((best, student) =>
        student.score > best.score ? student : best
    ).name;
}