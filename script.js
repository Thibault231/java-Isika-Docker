/**
 * Say hello to the user who enter its name in the form.
 */
function printUser() {
    const name = document.getElementById("inputName").value;
    if (!name) {
        document.getElementById("response").innerText = "Aucun nom n'a été saisi";
    } else {
        fetchResponse(name);
    }
}

/**
 * Fetch the TD api to get the response to print.
 * 
 * @param {string} name 
 */
async function fetchResponse(name) {
    await fetch('http://localhost:8080/printUser/' + name).then((response) => {
        if (response.status !== 200) {
            console.log('Problem. Status Code: ' + response.status);
        } else {
            response.json().then((data) => {
                console.log(data);
                document.getElementById("response").innerText = data.responseToPrint;
            }).catch((err) => {
                console.log('Data treatment Error : ' + err);
            });
        }
    }).catch((err) => {
        console.log('Fetch Error :' + err);
    });
}

const buttonClick = document.getElementById("buttonSubmit");
// document.getElementById("h3").style.rotate = 180;
buttonClick.addEventListener('click', () => {
    console.log("ok");
});
