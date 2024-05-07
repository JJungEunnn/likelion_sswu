document.addEventListener("DOMContentLoaded", function() {
    // 슬라이드
    var t = 0;

    function slide() {
        if (t < 2) {
            t++;
        } else {
            t = 0;
        }
        var slideList = document.querySelector(".slide ul");
        slideList.style.top = t * 300 * (-1) + "px";
    }

    setInterval(slide, 2000);

    // 탭메뉴
    var tabMenuItems = document.querySelectorAll(".tabmenu li");
    tabMenuItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            tabMenuItems.forEach(function(tabItem) {
                tabItem.classList.remove("on");
            });
            this.classList.add("on");

            var tabContents = document.querySelectorAll(".tabcon");
            tabContents.forEach(function(content) {
                content.style.display = "none";
            });
            tabContents[index].style.display = "block";
        });
    });

    // 팝업창
    var ppLink = document.querySelector(".pp");
    var popup = document.querySelector(".popup");
    var popupButton = document.querySelector(".popup button");
    ppLink.addEventListener("click", function(event) {
        popup.style.display = "block";
        event.preventDefault();
    });

    popupButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // 메뉴
    var navItems = document.querySelectorAll("nav>ul>li");
    navItems.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            var subMenu = this.querySelector(".sub");
            subMenu.style.display = "block";
        });

        item.addEventListener("mouseleave", function() {
            var subMenu = this.querySelector(".sub");
            subMenu.style.display = "none";
        });
    });
});