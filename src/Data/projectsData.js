import pasalPintar from "../assets/Pasal-Pintar.webp";
import lapakSentra from "../assets/Lapak-Sentra.png";
import isyaraApp from "../assets/Isyara-App.png";

const projectsData = [
  {
    id: 1,
    name: "Pasal Pintar",
    img: pasalPintar,
    description:
      "Pasal Pintar is an AI-powered legal information application designed to provide users with fast and accurate solutions for their legal needs. The application aims to simplify access to legal knowledge by presenting comprehensive and easy-to-understand explanations of laws and regulations in Indonesia.",
    // "Pasal Pintar adalah aplikasi informasi hukum berbasis AI yang dirancang untuk memberikan pengguna solusi yang cepat dan akurat untuk kebutuhan hukum mereka. Aplikasi ini bertujuan untuk mempermudah akses terhadap pengetahuan hukum dengan menyajikan penjelasan yang komprehensif dan mudah dipahami mengenai undang-undang dan peraturan di Indonesia.",

    tools: ["TypeScript", "Firebase", "Flutter", "Python", "Tensorflow"],

    repo_link: "https://github.com/Project404-PasalPintar",
    url: "https://pasalpintar.netlify.app/",
  },
  {
    id: 2,
    name: "Isyara App",
    img: isyaraApp,
    description:
      "As a Machine Learning Engineer for the Isyara App, I tackled communication barriers for the deaf community by developing a real-time sign language translation feature. I engineered a Convolutional Neural Network (CNN) to achieve 94% validation accuracy and converted the model to the TFLite format for mobile app integration.",
    // "Isyara is an application designed to bridge the communication gap between the hearing and the deaf and hard-of-hearing communities. Its main feature is real-time sign language translation that utilizes a camera to recognize and interpret hand gestures. To enhance learning and engagement, Isyara also includes a BISINDO (Indonesian Sign Language) dictionary, interactive quizzes, and an information hub that provides news and events related to the deaf community.",

    tools: ["Python", "Tensorflow", "Kotlin", "GCP"],

    repo_link: "https://github.com/Isyara-App",
    url: "#home",
  },
  {
    id: 3,
    name: "Lapak Sentra (Frontend Showcase)",
    img: lapakSentra,
    description:
      "Lapak Sentra is a web platform designed to address the difficulty of finding affordable housing by connecting property owners with potential tenants. The platform serves as a creative solution for boarding house (kos) or rental property owners to market their properties effectively. Additionally, Lapak Sentra empowers local MSME entrepreneurs by providing a space to promote their businesses to the surrounding community.",
    // "Lapak Sentra adalah platform web yang dirancang untuk mengatasi kesulitan mencari hunian terjangkau dengan menghubungkan pemilik properti dengan calon penyewa. Platform ini menjadi solusi kreatif bagi pemilik kos atau kontrakan untuk memasarkan properti mereka secara efektif. Selain itu, Lapak Sentra juga memberdayakan para pedagang UMKM lokal dengan menyediakan wadah untuk mempromosikan dagangan mereka kepada komunitas sekitar.",

    tools: ["React JS", "Tailwind CSS", "Express JS", "Redux"],

    repo_link: "https://github.com/AldiMusneldi/Lapak-Sentra",
    url: "#home",
  },
];

export default projectsData;
