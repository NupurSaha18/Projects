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



