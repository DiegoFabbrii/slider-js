const slider = () => {
    const slider = document.querySelector(".slider");
    const next = document.querySelector(".next");
    const previous = document.querySelector(".previous");
    const images = document.querySelectorAll(".slider img");

    let current = 0;

    next.addEventListener("click", () => {
        current++;
        if (current >= images.length) current = 0;
        slider.style.transform = `translateX(${-current * 100}%)`;
    });

    previous.addEventListener("click", () => {
        current--;
        if (current < 0) current = images.length - 1;
        slider.style.transform = `translateX(${-current * 100}%)`;
    });
};

slider();
