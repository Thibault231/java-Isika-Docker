function printUser() {
    const name = (<HTMLInputElement>document.getElementById("inputName")).value;
    if (!name) {
        document.getElementById("response").innerText = "Aucun nom n'a été saisi";
    } else {
        fetchResponse(name);
    }
};

async function fetchResponse(name: string) {
    await fetch('http://localhost:8080/printUser/' + name
    ).then((response) => {
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
};
