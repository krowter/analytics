import { useRouter } from "next/router";
import Nav from "#/components/nav.js";
import styles from "#/styles/index.module.css";
import "#/styles/globals.css";
import "@fontsource/rubik/600.css";

const pages = [
  { name: "Total", route: "/" },
  { name: "Hourly", route: "/hourly" },
  { name: "Calendar", route: "/calendar" },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.backdrop}></div>
      <h1 className={styles.title}>TEKNUM ANALYTICS</h1>
      <div className={styles.box}>
        <Nav pages={pages} active={router.asPath} />
        <div className={styles.box__content}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
