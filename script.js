async function printUser() {
    let name = document.getElementById("inputName").value;
    console.log(name);
    
    await fetch('http://localhost:8080/printUser/' + name).then((response) => {
        if (response.status !== 200) {
            console.log('Problem. Status Code: ' + response.status);
        } else {
            response.json().then((data) => {
                console.log(data.response);
                document.getElementById("response").innerText = data.response;
            }).catch((err) => {
                console.log('Data treatment Error : ' + err);
            });
        }
    }).catch((err) => {
        console.log('Fetch Error :' + err);
    });
}