function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    let sum = 0;
    let pass = 0;
    let fail = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
        if (marks[i] >= 40) {
            pass++;
        }
        else {
            fail++;
        }
    }
    let finalScore = Math.round(sum / marks.length);

    let result =
    {
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
    return result;

}
console.log(resultReport([99, 87, 67, 12 ,87]));
