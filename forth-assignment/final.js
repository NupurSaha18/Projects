function totalFine(fare) {
    if (typeof fare === "number" && fare > 0) {
        let fine = fare + fare * (20 / 100) + 30;
        return fine;
    }
    else {
        return "Invalid";
    }
}

function onlyCharacter(str) {
    if (typeof str === "string") {
        let newStr1 = str.toUpperCase();
        let newStr2 = newStr1.replace(/\s/g, "");
        return newStr2;
    }
    else return "Invalid";
}

function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    let valid1 = player1.foul + player1.cardY + player1.cardR;
    let valid2 = player2.foul + player2.cardY + player2.cardR;
    if (valid1 > valid2) {
        return player2.name;
    }
    if (valid2 > valid1) {
        return player1.name;
    }
    if (valid1 == valid2) {
        return "Tie"
    }

}

function isSame(arr1, arr2) {
    if (Array.isArray(arr1) && (Array.isArray(arr2))) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    return "Invalid";
}

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