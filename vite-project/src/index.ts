import styles from "./index.module.css";

const h1 = document.createElement("h1");
h1.textContent = "Hola Mundo";
h1.className = styles.title;
document.body.appendChild(h1);

console.log(import.meta.env.VITE_API_MESSAGE);