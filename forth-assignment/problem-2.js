function onlyCharacter(str) {
    if (typeof str === "string") {
        let newStr1 = str.toUpperCase();
        let newStr2 = newStr1.replace(/\s/g, "");
        return newStr2;
    }
    else return "Invalid";
}

let result = onlyCharacter(["hack", "me"]);
console.log(result);

