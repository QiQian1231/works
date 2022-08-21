(function () {
    var tabLi = document.querySelectorAll(".category-lists .category-list");
    var len = tabLi.length;
    var categoryLi = document.querySelectorAll(".category-box .category-items");

    for (var i = 0; i < len; i++) {
        tabLi[i].index = i;
        tabLi[i].onmouseover = function () {
            for (var j = 0; j < len; j++) {
                tabLi[j].classList.remove("active");
                categoryLi[j].style.display = "none";
            }
            this.classList.add("active");
            categoryLi[this.index].style.display = "block";
        };
    }
})();

(function () {
    var footerMenu = document.querySelectorAll(".tabbar .tab-item");
    console.log(footerMenu);
    var len = footerMenu.length;

    for (var i = 0; i < len; i++) {
        footerMenu[i].onmouseover = function () {
            for (var j = 0; j < len; j++) {
                footerMenu[j].classList.remove("active");
            }

            this.classList.add("active");
        };
    }
})();
