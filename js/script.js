/* function handleFormSubmit(event) {
    var inputs = document.getElementsByClassName('row g-3')[0].elements;
    console.log(inputs);

    let values = {}

    // Iterate over the form controls
    for (i = 0; i < inputs.length; i++) {
        console.log('el', inputs[i].name)
        if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
            // Update text input
            console.log(inputs[i].value.toLocaleUpperCase());
            values[inputs[i].name] = inputs[i].value
        } else if (inputs[i].type === "select-one") {
            console.log(inputs[i].value.toLocaleUpperCase());
            values[inputs[i].name] = inputs[i].value
        }
    }
    console.log('values:', values)
    // event.preventDefault();
} */

function handleFormSubmit(event) {
    const data = new FormData(document.getElementsByClassName('row g-3')[0]);
    const formJSON = Object.fromEntries(data.entries());

    //window.location.href = "http://127.0.0.1:5500/index.html"

    console.log(`data:`, formJSON)

    const results = document.querySelector('.resultado pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}

function setAction(form) {
    form.action = "register.html";
    alert(form.action);
    return false;
}
function loginUser() {
    document.user_form.action = "login.html";
    alert(document.user_form.action);
    return false;
}
function registerUser() {
    document.user_form.action = "register.html";
    alert(document.user_form.action);
    return false;
}