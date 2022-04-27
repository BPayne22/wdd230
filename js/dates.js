const d = new Date();
const year = d.getFullYear();

//This will grab the current year from the funtion above
document.getElementById("currentyear").textContent = year;

//This will prompt the date the file was changed. 
document.getElementById("lastmodified").textContent = alert(document.lastModified);