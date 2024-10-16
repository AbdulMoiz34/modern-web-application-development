const car = document.getElementsByClassName("img-box")[0];
const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const loader = document.getElementsByClassName("loader")[0];
// Start
startBtn.addEventListener("click", () => {
    car.style.transition = "0s";
    car.style.transform = "scaleX(1)";
    setTimeout(() => {
        car.style.transition = "5s";
        car.style.left = "70%";
        console.log(loader);
        loader.style.width = "100%";
    }, 500);
});
// Back
backBtn.addEventListener("click", () => {
    car.style.transition = "0s";
    car.style.transform = "scaleX(-1)";
    setTimeout(() => {
        // console.log(car);
        car.style.transition = "6s";
        car.style.left = "0%";
        loader.style.width = "0%";

    }, 500);
});