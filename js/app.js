const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let spans = document.getElementsByName("span");

span2.addEventListener("click", () => {

    if (span2.style.display = "block") {
        span2.style.display = "none";
    } else {
        span2.style.display = "inline-block";
    }
});