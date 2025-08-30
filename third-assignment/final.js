/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 50000;
//write your code here
if(money>=25000){
    console.log('Laptop');
}
else if(money>=10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 30;
//write your code here
const medicine = [];
for(let i=3; i<=lastDay; i+=3){
    medicine.push(i);
}
for (let i = 1; i <= lastDay; i++) {
    if (medicine.includes(i)){
        console.log( `${i} - medicine`);
    }
    else{
        console.log( `${i} - rest`);
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.txt";
//write your code here

if (fileName.slice(0, 1) === "#") {
    console.log("Store");
}
else {
    var parts = fileName.split(".");
    var extension = parts[parts.length - 1].toLowerCase();

    if (extension === "pdf" || extension === "docx") {
        console.log("Store");
    }
    else {
        console.log("Delete");
    }
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var values = Object.values(student);
var email = student.name.concat(student.roll).concat('.').concat(student.department).concat('@ph.ac.bd');
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
    currentSalary = currentSalary + (currentSalary * 5 / 100);  
}
console.log(currentSalary.toFixed(2));

