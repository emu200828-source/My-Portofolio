```

// Array Object

const project1 = {
  title: "Kalkulator Zakat Emas",
  description:
    "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
  image: "",
  tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
};

const project2 = {
  title: "Lampu Merah",
  description: "Simulasi Lampu merah",
  image: "",
  tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
};

const projects = [project1, project2];

const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description:
      "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
  {
    title: "Lampu Merah",
    description: "Simulasi Lampu merah",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
  {
    title: "Portofolio",
    description: "Simulasi Lampu merah",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card";

  let title = document.createElement("h2");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  card.appendChild(title);
  card.appendChild(description);

  gallery.appendChild(card);
}

```