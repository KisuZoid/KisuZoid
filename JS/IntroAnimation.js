const professions = [
    "A Developer",
    "An Animator",
    "A Writer & Lyricist",
    "A Graphic Designer",
    "A Digital Artist"
];

let currentIndex = 0;
let currentText = "";
let letterIndex = 0;
let isDeleting = false;

function type() {
    const profession = professions[currentIndex];

    if (isDeleting) {
        currentText = profession.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentText = profession.substring(0, letterIndex + 1);
        letterIndex++;
    }

    document.getElementById("profession").textContent = `"${currentText}"`;

    let typingSpeed = 100; // Adjust typing speed here

    if (!isDeleting && letterIndex === profession.length + 1) {
        isDeleting = true;
        typingSpeed = 2000; // Set pause before deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % professions.length;
        typingSpeed = 100; // Set pause before next word
    }

    if (isDeleting && letterIndex === 0) {
        document.getElementById("profession").classList.remove('disappear');
    }

    setTimeout(type, typingSpeed);
}

window.onload = function() {
    type();
};