
//span color

(function () {
    let spans = document.querySelectorAll(".pro-color");

    spans.forEach(span => {
        span.style.backgroundColor = span.getAttribute("data-color");
    });
})();

(function () {
    let i = document.querySelector(".logo i:last-child");

    i.onclick = function(){
        this.classList.toggle("root");
    }
})()