//This will grab the current year from the funtion above
const year = document.querySelector('#currentyear');

try {
    const options = {year: 'numeric'};
    year.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
    alert(document.lastModified);
}

//This will prompt the date the file was changed. 
const modified = document.lastModified;
document.getElementById("lastmodified").textContent = modified;