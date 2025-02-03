document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded");

    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav a");

    const body = document.body;
    const videoElement = document.getElementById("myVideo");

    const lockScrolling = () => {
        body.classList.add("no-scroll");
    };

    const unlockScrolling = () => {
        body.classList.remove("no-scroll");
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            }
        });
    });

    if (videoElement) {
        videoElement.addEventListener("play", () => {
            lockScrolling();
        });

        videoElement.addEventListener("ended", () => {
            videoElement.style.display = "none";
            unlockScrolling();
        });

        videoElement.play();
    }
});
