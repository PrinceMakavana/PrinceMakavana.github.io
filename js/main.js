let themeDots = document.getElementsByClassName('theme-dot');


for (var i = 0; themeDots.length > i; i++) {

    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        alert("Theme Changed to " + mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'CSS/default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'CSS/blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'CSS/green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'CSS/purple.css'
    }
}

$(document).ready(function() {
    $("form").submit(function() {
        alert("Response Submitted Successfully");
    });
});