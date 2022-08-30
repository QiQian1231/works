(function () {
    var navIcon = document.getElementById("nav-icon");
    var navUl = document.getElementById("nav-ul");

    navIcon.onclick = function () {
        navUl.classList.toggle("sm-hide");
    };

    window.onclick = function (e) {
        if (e.target != navIcon) {
            navUl.classList.add("sm-hide");
        }
    };
})();

(function () {
    var mainMenuList = document.getElementsByClassName("main-menu-list");
    var subMenu = document.getElementsByClassName("sub-menu");
    var len = mainMenuList.length;
    var menu = document.getElementById("J_menu");
    var btn = document.getElementById("btn");
    btn.style.display = "none";

    for (var i = 0; i < len; i++) {
        mainMenuList[i].index = i;
        mainMenuList[i].flag = "close";
        mainMenuList[i].onclick = function () {
            if (this.flag === "close") {
                this.classList.add("active");
                var numLi = subMenu[this.index].getElementsByClassName("sub-menu-list").length;

                // fetch next sibling
                // var h = this.nextElementSibling.clientHeight;
                // fetch the parent el
                // var ph = this.parentNode.clientHeight;
                // console.log(h, ph);

                subMenu[this.index].style.height = 39 * numLi + "px";
                for (j = 0; j < len; j++) {
                    mainMenuList[j].getElementsByClassName("title")[0].style.display = "block";
                }

                menu.style.width = "260px";
                this.flag = "open";
            } else {
                this.classList.remove("active");
                subMenu[this.index].style.height = "0px";
                this.flag = "close";
            }
        };
    }

    btn.onclick = function () {
        menu.style.width = "75px";
        for (var i = 0; i < len; i++) {
            mainMenuList[i].classList.remove("active");
            mainMenuList[i].nextElementSibling.style.height = "0px";
            mainMenuList[i].flag = "close";

            for (j = 0; j < len; j++) {
                mainMenuList[j].getElementsByClassName("title")[0].style.display = "none";
            }
        }
    };

    window.addEventListener("resize", function () {
        // get screen width
        var screenW = this.window.innerWidth;
        console.log(screenW);
        if (screenW > 1300) {
            menu.style.width = "260px";
            btn.style.display = "none";
            for (j = 0; j < len; j++) {
                mainMenuList[j].getElementsByClassName("title")[0].style.display = "block";
            }
        }
        if (screenW <= 1300) {
            for (var i = 0; i < len; i++) {
                mainMenuList[i].nextElementSibling.style.height = "0px";
                mainMenuList[i].classList.remove("active");
                mainMenuList[i].flag = "close";
                menu.style.width = "75px";

                for (j = 0; j < len; j++) {
                    mainMenuList[j].getElementsByClassName("title")[0].style.display = "none";
                }
            }
            btn.style.display = "flex";
        }

        if (screenW <= 1200) {
            menu.style.width = "0px";
            btn.style.display = "none";
        }
    });
})();
