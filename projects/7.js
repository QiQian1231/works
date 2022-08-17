window.addEventListener("load", function() {
    setTimeout(
        function open(event) {
            document.querySelector(".container").style.display = "block";
        },
        5000
    )
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
});

document.querySelector(".winIcon").addEventListener("click", function() {
    document.querySelector(".container").style.display = "block";
});