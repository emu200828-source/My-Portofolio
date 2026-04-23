// ===== PROJECT DATA =====
const projectsLagi = [
    {
        title: "Kalkulator Zakat Emas",
        description: "Web untuk menghitung zakat emas yang fitur penyimpanannya menggunakan LocalStorage",
        image: "img/coding.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://emu200828-source.github.io/kalkulator-zakat-emas/",
    },
    {
        title: "Lampu Merah",
        description: "Project simulasi lampu lalu lintas yang di loopingkan menggunakan logika Javascript.",
        image: "img/lampu.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://github.com/emu200828-source/animasi-traffic-lamp.git",
    },
    {
        title: "Calculator Web Interaktif",
        description: "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
        image: "img/kalkulator.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://github.com/emu200828-source/kalkulator.git",
    },
    {
        title: "My Youtube Channel",
        description: "Channel yang berisi Qur'an, dan personal vlog. Di sini aku berbagi momen, belajar, dan hal-hal bermanfaat dengan cara yang ringan dan positif.",
        image: "img/youtube.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://www.youtube.com/@emu.shi2808",
    },
    {
        title: "Website Portfolio",
        description: "Web portofolio sebelumnya.",
        image: "img/portofolio.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://davidanddivaindonesia.my.canva.site/presentation-portofolio-desainer-modern-ungu-hitam",
    },
    {
        title: "Poster Nahwu",
        description: "Poster yang berisi ayat-ayat yang di i'rob dengan mengikuti metode dari buku Al-Jurumiyyah.",
        image: "img/nahwu.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://drive.google.com/file/d/1216hLbfXOrM6v70t4me6DHI9bcbj12qJ/view?usp=sharing",
    }
];

// ===== RENDER PROJECTS =====
const gallery = document.getElementById("gallery");

projectsLagi.forEach(element => {
    const card = document.createElement("div");
    card.className = "card2";

    const image = document.createElement("img");
    image.src = element.image;
    image.alt = element.title;

    const title = document.createElement("h2");
    title.textContent = element.title;

    const description = document.createElement("p");
    description.textContent = element.description;

    const link = document.createElement("a");
    link.href = element.link;
    link.target = "_blank";
    link.textContent = "Lihat Lebih Lanjut ➝";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    gallery.appendChild(card);
});

// ===== MUSIC PLAYER =====
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

music.volume = 0.3;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.classList.remove("active");
    } else {
        music.play();
        musicBtn.classList.add("active");
    }
    isPlaying = !isPlaying;
});

// ===== SIDEBAR NAVIGATION =====
const sidebar = document.getElementById("sidebar");
const mobileToggle = document.getElementById("mobileToggle");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle sidebar (buka/tutup)
function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    mobileToggle.classList.toggle("active");
    
    // Prevent body scroll on mobile
    if (window.innerWidth <= 1024) {
        document.body.classList.toggle("sidebar-open");
    }
    
    // Update icon
    const icon = mobileToggle.querySelector("i");
    icon.className = sidebar.classList.contains("active") ? "fas fa-times" : "fas fa-bars";
}

// Close sidebar
function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    mobileToggle.classList.remove("active");
    document.body.classList.remove("sidebar-open");
    mobileToggle.querySelector("i").className = "fas fa-bars";
}

// Event listeners
mobileToggle.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);

// Close sidebar saat klik menu (mobile)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 1024) closeSidebar();
    });
});

// Close dengan ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) closeSidebar();
});

// Auto close saat resize ke desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) closeSidebar();
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLink) {
                navLink.classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", highlightNavigation);

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in-scroll");
    fadeElements.forEach(element => observer.observe(element));
});

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});

// ===== PARALLAX EFFECT FOR PROFILE IMAGE =====
const profileImage = document.querySelector(".profile-image img");

if (profileImage) {
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        if (scrolled < window.innerHeight) {
            profileImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===== CURSOR GLOW EFFECT (OPTIONAL) =====
document.addEventListener("mousemove", (e) => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        glow.style.opacity = "0";
        setTimeout(() => glow.remove(), 300);
    }, 100);
});

// ===== PERFORMANCE: DEBOUNCE SCROLL EVENTS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedHighlight = debounce(highlightNavigation, 10);
window.addEventListener("scroll", debouncedHighlight);

// ===== CONSOLE MESSAGE =====
console.log("%c🔥 Portfolio Website by Imu Abdurroofi", "color: #ff0000; font-size: 20px; font-weight: bold;");
console.log("%c✨ Built with HTML, CSS, and JavaScript", "color: #ffffff; font-size: 14px;");
