// navbar active effect
(function () {
    var navbarSlide = document.querySelectorAll("#swiper-navbar .swiper-slide");
    var len = navbarSlide.length;
    for (var i = 0; i < len; i++) {
        navbarSlide[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                navbarSlide[j].childNodes[0].classList.remove("active");
            }
            this.childNodes[0].classList.add("active");
        };
    }
})();

// search bar popup
(function () {
    var search = document.getElementById("search");
    var searchMask = document.getElementsByClassName("search-mask");
    var searchClose = document.getElementsByClassName("close");

    search.addEventListener("click", function () {
        searchMask[0].style.display = "block";
    });
    searchClose[0].addEventListener("click", function () {
        searchMask[0].style.display = "none";
    });
})();

// recommend tabs
(function () {
    var tab = document.querySelectorAll(".recommend .tab-item");
    var len = tab.length;
    var tabContent = document.querySelectorAll(".recommend .content");

    for (var i = 0; i < len; i++) {
        tab[i].index = i;
        tab[i].onmouseover = function () {
            // loop for remove active effect from each tab and set display none to each tabContent
            for (var j = 0; j < len; j++) {
                tab[j].classList.remove("active");
                tabContent[j].style.display = "none";
            }

            this.classList.add("active");
            tabContent[this.index].style.display = "block";
        };
    }
})();
