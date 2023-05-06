import Image from "next/image";
import styles from "./page.module.css";

interface Dev {
  name: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
}

//  Butngi lang ninyo content ang empty strings
const devs: Dev[] = [
  {
    name: "Ali",
    title: "Software Engineer",
    img: {
      src: "/assets/ali.jpg",
      alt: "ali photo",
    },
  },
  {
    name: "Carlo",
    title: "Pala-iyot",
    img: {
      src: "",
      alt: "",
    },
  },
  {
    name: "Riel",
    title: "Boss Kenshin",
    img: {
      src: "",
      alt: "",
    },
  },
  {
    name: "Lindley",
    title: "Sugar Mommah!",
    img: {
      src: "",
      alt: "",
    },
  },
  {
    name: "Prince",
    title: "Hide your daughters",
    img: {
      src: "",
      alt: "",
    },
  },
];

export default function Home() {
  return (
    <main>
      <nav className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/assets/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </nav>

      <section id="about">
        <h2>About Us</h2>

        <div id="people">
          {devs.map((dev) => (
            <div key={dev.name}>
              <Image
                className="dev-img"
                src={dev.img.src}
                alt={dev.img.src}
                width={154}
                height={154}
              />

              <div>
                <h3 id="dev-name">{dev.name}</h3>
                <h3 id="dev-title">{dev.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer></footer>
    </main>
  );
}
