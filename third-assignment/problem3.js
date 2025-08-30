/** Problem -03 ( Medicine Planner ) */
var lastDay = 10;
//write your code here
for (let i = 1; i <= lastDay; i++) {
    if (i % 3 == 0){
        console.log( `${i} - medicine`);
    }
    else{
        console.log( `${i} - rest`);
    }
}
