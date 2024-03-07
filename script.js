console.log("hello");

function printUser() {
    fetch('http://localhost:8080/printUser/yoann').then((response) => {
        if (response.status !== 200) {
            return 'Problem. Status Code: ' + response.status;
        } else {
            response.json().then((data) => {
                document.getElementById("response").innerHTML(data);
            }).catch((err) => {
                return 'Fetch Error : ' + err;
            });
        }
    }).catch((err) => {
        return 'Fetch Error :-S ' + err;
    });
}