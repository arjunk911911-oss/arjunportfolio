/* =========================================================
   CUTFRAME STUDIO
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   SELECTED VISUALS / REELS CAROUSEL
========================================================= */

const carousel = document.getElementById("projectCarousel");
const slides = document.querySelectorAll(".project-slide");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const progress = document.getElementById("carouselProgress");

let currentIndex = 0;


/* ---------------------------------------------------------
   REELS: UPDATE UI
--------------------------------------------------------- */

function updateReelsUI() {

    if (!slides.length) return;

    if (currentSlide) {
        currentSlide.textContent =
            String(currentIndex + 1).padStart(2, "0");
    }

    if (totalSlides) {
        totalSlides.textContent =
            String(slides.length).padStart(2, "0");
    }

    if (progress) {

        const percent =
            ((currentIndex + 1) / slides.length) * 100;

        progress.style.width = percent + "%";
    }

    if (prevBtn) {
        prevBtn.disabled = currentIndex <= 0;
    }

    if (nextBtn) {
        nextBtn.disabled =
            currentIndex >= slides.length - 1;
    }
}


/* ---------------------------------------------------------
   REELS: GET EXACT POSITION
--------------------------------------------------------- */

function getReelPosition(index) {

    if (!carousel || !slides[index]) {
        return 0;
    }

    const carouselRect =
        carousel.getBoundingClientRect();

    const slideRect =
        slides[index].getBoundingClientRect();

    /*
       Current slide position inside carousel
       + current scroll position
    */

    return (
        carousel.scrollLeft +
        (slideRect.left - carouselRect.left)
    );
}


/* ---------------------------------------------------------
   REELS: GO TO SLIDE
--------------------------------------------------------- */

function goToReel(index) {

    if (!carousel || !slides.length) {
        return;
    }

    currentIndex = Math.max(
        0,
        Math.min(
            index,
            slides.length - 1
        )
    );

    carousel.scrollTo({
        left: getReelPosition(currentIndex),
        behavior: "smooth"
    });

    updateReelsUI();
}


/* ---------------------------------------------------------
   REELS: NEXT
--------------------------------------------------------- */

if (nextBtn) {

    nextBtn.addEventListener("click", function(event) {

        event.preventDefault();

        if (
            currentIndex <
            slides.length - 1
        ) {

            goToReel(
                currentIndex + 1
            );

        }

    });

}


/* ---------------------------------------------------------
   REELS: PREVIOUS
--------------------------------------------------------- */

if (prevBtn) {

    prevBtn.addEventListener("click", function(event) {

        event.preventDefault();

        if (currentIndex > 0) {

            goToReel(
                currentIndex - 1
            );

        }

    });

}


/* ---------------------------------------------------------
   REELS: MANUAL SCROLL / SWIPE
--------------------------------------------------------- */

if (carousel) {

    let reelScrollTimer;

    carousel.addEventListener("scroll", function() {

        clearTimeout(reelScrollTimer);

        reelScrollTimer = setTimeout(function() {

            let closestIndex = 0;
            let closestDistance = Infinity;

            const carouselRect =
                carousel.getBoundingClientRect();


            slides.forEach(function(slide, index) {

                const slideRect =
                    slide.getBoundingClientRect();

                const distance =
                    Math.abs(
                        slideRect.left -
                        carouselRect.left
                    );

                if (distance < closestDistance) {

                    closestDistance = distance;
                    closestIndex = index;

                }

            });


            currentIndex = closestIndex;

            updateReelsUI();

        }, 100);

    });

}


/* ---------------------------------------------------------
   INITIAL REELS STATE
--------------------------------------------------------- */

updateReelsUI();




/* =========================================================
   LANDSCAPE CAROUSEL
========================================================= */

const landscapeCarousel =
    document.querySelector(".landscape-carousel");

const landscapeSlides =
    document.querySelectorAll(".landscape-slide");

const landscapePrev =
    document.querySelector(".landscape-prev");

const landscapeNext =
    document.querySelector(".landscape-next");

let landscapeIndex = 0;


/* ---------------------------------------------------------
   LANDSCAPE: GET EXACT POSITION
--------------------------------------------------------- */

function getLandscapePosition(index) {

    if (
        !landscapeCarousel ||
        !landscapeSlides[index]
    ) {
        return 0;
    }

    const carouselRect =
        landscapeCarousel.getBoundingClientRect();

    const slideRect =
        landscapeSlides[index].getBoundingClientRect();

    return (
        landscapeCarousel.scrollLeft +
        (slideRect.left - carouselRect.left)
    );
}


/* ---------------------------------------------------------
   LANDSCAPE: GO TO SLIDE
--------------------------------------------------------- */

function goToLandscape(index) {

    if (
        !landscapeCarousel ||
        !landscapeSlides.length
    ) {
        return;
    }

    landscapeIndex = Math.max(
        0,
        Math.min(
            index,
            landscapeSlides.length - 1
        )
    );

    landscapeCarousel.scrollTo({
        left:
            getLandscapePosition(
                landscapeIndex
            ),
        behavior: "smooth"
    });

}


/* ---------------------------------------------------------
   LANDSCAPE: NEXT
--------------------------------------------------------- */

if (landscapeNext) {

    landscapeNext.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            if (
                landscapeIndex <
                landscapeSlides.length - 1
            ) {

                goToLandscape(
                    landscapeIndex + 1
                );

            }

        }
    );

}


/* ---------------------------------------------------------
   LANDSCAPE: PREVIOUS
--------------------------------------------------------- */

if (landscapePrev) {

    landscapePrev.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            if (landscapeIndex > 0) {

                goToLandscape(
                    landscapeIndex - 1
                );

            }

        }
    );

}


/* ---------------------------------------------------------
   LANDSCAPE: MANUAL SCROLL
--------------------------------------------------------- */

if (landscapeCarousel) {

    let landscapeScrollTimer;

    landscapeCarousel.addEventListener(
        "scroll",
        function() {

            clearTimeout(
                landscapeScrollTimer
            );

            landscapeScrollTimer =
                setTimeout(function() {

                    let closestIndex = 0;
                    let closestDistance = Infinity;

                    const carouselRect =
                        landscapeCarousel
                            .getBoundingClientRect();


                    landscapeSlides.forEach(
                        function(slide, index) {

                            const slideRect =
                                slide.getBoundingClientRect();

                            const distance =
                                Math.abs(
                                    slideRect.left -
                                    carouselRect.left
                                );

                            if (
                                distance <
                                closestDistance
                            ) {

                                closestDistance =
                                    distance;

                                closestIndex =
                                    index;

                            }

                        }
                    );


                    landscapeIndex =
                        closestIndex;

                }, 100);

        }
    );

}




/* =========================================================
   LANDSCAPE VIDEO AUTOPLAY
========================================================= */

document
    .querySelectorAll(
        ".landscape-video-frame video"
    )
    .forEach(function(video) {

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(function() {
            // Autoplay can be blocked by browser
        });

    });




/* =========================================================
   LANDSCAPE PLAY / PAUSE BUTTON
========================================================= */

document
    .querySelectorAll(
        ".landscape-video-frame"
    )
    .forEach(function(frame) {

        const video =
            frame.querySelector("video");

        const button =
            frame.querySelector(
                ".video-play-button"
            );

        if (!video || !button) {
            return;
        }


        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();
                event.stopPropagation();

                if (video.paused) {

                    video.play().catch(
                        function(error) {

                            console.log(
                                "Video play failed:",
                                error
                            );

                        }
                    );

                } else {

                    video.pause();

                }

            }
        );


        video.addEventListener(
            "play",
            function() {

                button.textContent = "❚❚";

            }
        );


        video.addEventListener(
            "pause",
            function() {

                button.textContent = "▶";

            }
        );

    });




/* =========================================================
   FULLSCREEN VIDEO
========================================================= */

const fullscreenViewer =
    document.getElementById(
        "videoFullscreen"
    );

const fullscreenVideo =
    document.getElementById(
        "fullscreenVideo"
    );

const fullscreenClose =
    document.getElementById(
        "videoFullscreenClose"
    );


/* ---------------------------------------------------------
   DOUBLE CLICK LANDSCAPE VIDEO
--------------------------------------------------------- */

document
    .querySelectorAll(
        ".landscape-video-frame video"
    )
    .forEach(function(video) {

        video.addEventListener(
            "dblclick",
            function(event) {

                event.preventDefault();

                if (
                    !fullscreenViewer ||
                    !fullscreenVideo
                ) {
                    return;
                }

                fullscreenVideo.src =
                    video.currentSrc ||
                    video.src;

                fullscreenVideo.currentTime =
                    video.currentTime;

                fullscreenVideo.controls = true;
                fullscreenVideo.muted = false;

                fullscreenViewer.classList.add(
                    "active"
                );

                video.pause();

                fullscreenVideo
                    .play()
                    .catch(function(error) {

                        console.log(
                            "Fullscreen play failed:",
                            error
                        );

                    });

            }
        );

    });


/* ---------------------------------------------------------
   CLOSE FULLSCREEN
--------------------------------------------------------- */

function closeFullscreen() {

    if (
        !fullscreenViewer ||
        !fullscreenVideo
    ) {
        return;
    }

    fullscreenVideo.pause();

    fullscreenVideo.removeAttribute(
        "src"
    );

    fullscreenVideo.load();

    fullscreenViewer.classList.remove(
        "active"
    );

}


/* ---------------------------------------------------------
   CLOSE BUTTON
--------------------------------------------------------- */

if (fullscreenClose) {

    fullscreenClose.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            closeFullscreen();

        }
    );

}


/* ---------------------------------------------------------
   CLICK OUTSIDE FULLSCREEN VIDEO
--------------------------------------------------------- */

if (fullscreenViewer) {

    fullscreenViewer.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                fullscreenViewer
            ) {

                closeFullscreen();

            }

        }
    );

}


/* ---------------------------------------------------------
   ESC
--------------------------------------------------------- */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeFullscreen();

        }

    }
);




/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function() {

        if (
            carousel &&
            slides.length
        ) {

            carousel.scrollTo({
                left:
                    getReelPosition(
                        currentIndex
                    ),
                behavior: "auto"
            });

        }


        if (
            landscapeCarousel &&
            landscapeSlides.length
        ) {

            landscapeCarousel.scrollTo({
                left:
                    getLandscapePosition(
                        landscapeIndex
                    ),
                behavior: "auto"
            });

        }


        updateReelsUI();

    }
);



/* =========================================================
   SELECTED VISUALS / REELS AUTOPLAY
========================================================= */

document
    .querySelectorAll(".project-slide video")
    .forEach(function(video) {

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(function() {
            // Browser may block autoplay
        });

    });