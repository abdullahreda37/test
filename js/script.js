const container = document.querySelector('.page-container');
const pages = Array.from(document.querySelectorAll('.page'));
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-list');
const links = Array.from(document.querySelectorAll('.link'));
const overlay = document.querySelector('.overlay');

let currentPageIndex = 0;
let isAnimating = false;

// Toggle navigation function
const toggleNavigation = () => {
    toggleBtn.classList.toggle('active');
    container.classList.toggle('active');
    ul.classList.toggle('show');
}

// Function to change pages using GSAP for animation
const changePage = async (pageIndex) => {
    if (isAnimating) return; // Prevent overlapping animations
    isAnimating = true;

    await animateOverlay();

    // Hide current page
    gsap.to(pages[currentPageIndex], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            pages[currentPageIndex].classList.remove('active');
        }
    });

    // Show new page
    pages[pageIndex].classList.add('active');
    gsap.fromTo(pages[pageIndex], {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            currentPageIndex = pageIndex;
            isAnimating = false;
        }
    });
}

// Function to animate overlay using GSAP
const animateOverlay = () => {
    return new Promise(resolve => {
        gsap.to(overlay, {
            xPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                overlay.style.transform = '';
                resolve();
            }
        });
    });
}

// Event listeners
toggleBtn.addEventListener('click', toggleNavigation);

// Attach click event to each link
links.forEach((link, index) => {
    link.addEventListener('click', async () => {
        await changePage(index);
    });
});











 // إنشاء عنصر صوت وتحميله مسبقاً
var audio = new Audio();
audio.src = 'click_effect-86995.mp3';
audio.preload = 'auto'; // يجعل الصوت يتم تحميله مسبقاً

// إضافة حدث الضغط على الزر لتشغيل الصوت
toggleBtn.addEventListener('click', function() {
    audio.currentTime = 0; // إعادة تعيين الوقت للبدء من البداية إذا تم النقر مرة أخرى
    audio.play();
});









"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);









const circleText = document.getElementById('circleText');
const text = circleText.textContent;
circleText.textContent = '';

const radius = 150;
const textLength = text.length;
const angleStep = 360 / textLength;

for (let i = 0; i < textLength; i++) {
    const char = text[i];
    const span = document.createElement('span');
    span.textContent = char;
    const angle = i * angleStep;
    span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
    circleText.appendChild(span);
}













        