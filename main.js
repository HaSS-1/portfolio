//skills bars animation\\
const skillsSection = document.getElementById('skills-item');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBars => {
        const value = progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(h3 => {
        h3.style.opacity = 0;
        h3.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

//counter animation\\

function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

let text1 = document.getElementById('Cproject');
let text2 = document.getElementById('Hclients');
let text3 = document.getElementById('Previews');

const load = () => {
    animate(text1, 0, 65, 5000);
    animate(text2, 0, 27, 5000);
    animate(text3, 100, 75, 5000);
}

//text effect