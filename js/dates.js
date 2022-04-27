//This will grab the current year from the funtion above
const year = document.querySelector('#currentyear');

try {
    const options = {year: 'numeric'};
    year.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
    alert('Error with code or your browser does not support Locale.');
}

//This will prompt the date the file was changed. 
document.getElementById("lastmodified").textContent = alert(document.lastModified);