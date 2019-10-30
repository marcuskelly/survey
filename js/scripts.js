function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username == "Mark" && password == "1") {
        window.location = 'survey.html';
        return false;
    }
    alert("Login details incorrect!");
    return false;
}

function validateSurvey() {
    var e = document.getElementById("car");
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser);
    localStorage.setItem("one", strUser);
    window.location = 'thankyou.html';
    return false;
}