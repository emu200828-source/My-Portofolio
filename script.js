// ARRAY OBJECT

const project1 = {
    title: "Kalkulator Zakat Emas",
    description:
        "Web untuk menghitung zakat emas yang fitur penyimpanannya menggunakan LocalStorage",
    image: "coding.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/emu200828-source/kalkulator-zakat-emas.git",
};

const project2 = {
    title: "Lampu Merah",
    description:
        "Project simulasi lampu lalu lintas yang di loopingkan menggunakan logika Javascript",
    image: "lampu.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/emu200828-source/animasi-traffic-lamp.git",
};

const project3 = {
    title: "Calculator Web Interaktif",
    description:
        "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
    image: "kalkulator.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/emu200828-source/kalkulator.git",
};
const project4 = {
    title: "Calculator Web Interaktif",
    description:
        "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
    image: "kalkulator.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/emu200828-source/kalkulator.git",
};

const project5 = {
    title: "Calculator Web Interaktif",
    description:
        "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
    image: "kalkulator.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://github.com/emu200828-source/kalkulator.git",
};

const project6 = {
    title: "Poster Nahwu (I'rob Ayat)",
    description:
        "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
    image: "img/nahwu.png",
    tagsHtml: ["HTML"],
    tagsCss: ["CSS"],
    tagsJs: ["JavaScript"],
    link: "https://drive.google.com/file/d/1216hLbfXOrM6v70t4me6DHI9bcbj12qJ/view?usp=sharing",
};

const projects = [project1, project2, project3, project4, project5, project6];

const projectsLagi = [
    {
        title: "Kalkulator Zakat Emas",
        description:
            "Web untuk menghitung zakat emas yang fitur penyimpanannya menggunakan LocalStorage",
        image: "img/coding.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: " https://emu200828-source.github.io/kalkulator-zakat-emas/",
    },
    {
        title: "Lampu Merah",
        description:
            "Project simulasi lampu lalu lintas yang di loopingkan menggunakan logika Javascript.",
        image: "img/lampu.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://github.com/emu200828-source/animasi-traffic-lamp.git",
    },
    {
        title: "Calculator Web Interaktif",
        description:
            "Sebuah aplikasi kalkulator sederhana yang dibangun dengan HTML, CSS, dan JavaScript murni. Fokus pada logika operasi matematika dasar dan manipulasi DOM.",
        image: "img/kalkulator.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://github.com/emu200828-source/kalkulator.git",
    },
    {
        title: "My Youtube Channel",
        description:
            "Channel yang berisi Qur’an, dan personal vlog. Di sini aku berbagi momen, belajar, dan hal-hal bermanfaat dengan cara yang ringan dan positif.",
        image: "img/youtube.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://www.youtube.com/@emu.shi2808",
    },
    {
        title: "Website Portfolio",
        description:
            "Web portofolio sebelumnya.",
        image: "img/portofolio.png ",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://davidanddivaindonesia.my.canva.site/presentation-portofolio-desainer-modern-ungu-hitam",
    },
    {
        title: "Poster Nahwu",
        description:
            "Poster yang berisi ayat-ayat yang di i'rob dengan mengikuti metode dari buku Al-Jurumiyyah.",
        image: "img/nahwu.png",
        tagsHtml: ["HTML"],
        tagsCss: ["CSS"],
        tagsJs: ["JavaScript"],
        link: "https://drive.google.com/file/d/1216hLbfXOrM6v70t4me6DHI9bcbj12qJ/view?usp=sharing",
    }
];

const gallerry = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
    const element = projectsLagi[i];

    let card = document.createElement("div");
    card.className = "card2";

    let title = document.createElement("h2");
    title.textContent = element.title;

    let description = document.createElement("p");
    description.textContent = element.description;

    let image = document.createElement("img");
    image.src = element.image;

    let link = document.createElement("a");
    link.href = element.link;
    link.target = "_blank";
    link.textContent = "Lihat Lebih Lanjut➝";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);


    gallerry.appendChild(card);
};