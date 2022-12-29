// Redirect to home page
document.getElementById("email").oninput = function () {
    document.getElementById("email").placeholder = "";
    document.getElementById("passw").style = ("color : black; font-weight: 400;");
    document.getElementById("email").style = ("color : black; font-weight: 400;");
};

document.getElementById("passw").oninput = function () {
    document.getElementById("email").placeholder = "";
    document.getElementById("passw").style = ("color : black; font-weight: 400;");
    document.getElementById("email").style = ("color : black; font-weight: 400;");
};

document.getElementById("login").onclick = function () {
    if (document.getElementById("email").value == "" && document.getElementById("passw").value =="") {
        location.href = "./pages/home.html";
    } else {
        document.getElementById("passw").value = "";
        document.getElementById("passw").style = ("color : red; font-weight: 300;");
        document.getElementById("email").value = "";
        document.getElementById("email").placeholder = "Invalid user or password, please try again.";
        document.getElementById("email").style = ("color : red; font-weight: 300;");
    };
};
