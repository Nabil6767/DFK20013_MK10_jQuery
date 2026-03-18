function semak() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === "admin" && password === "1234") {
        // Redirect to homePage
        $.mobile.changePage("#homePage");
        return false; // prevent default form submission
    } else {
        alert("Invalid username or password!");
        return false;
    }
}