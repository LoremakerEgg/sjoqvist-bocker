import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        EVA SJÖQVIST BÖCKER
      </div>
      <div className={styles.intro}>
        <div className={styles.info}>
          <h1 className={styles.title}>EVA SJÖQVIST</h1>
            <p className={styles.description}>
              Jag skriver böcker som folk tycker om att läsa. De är väldigt bra böcker.
            </p>
          <div className={styles.buttons}>
            <a href='#' className={styles.button}>
              Mina böcker
            </a>
            <a href='#' className={styles.button}>
              Om mig
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/eva-sjoqvist.jpg"
            alt="Eva Sjöqvist"
            width={300}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.books}>
        <h2 className={styles.booksTitle}>Senaste bok</h2>
        <div className={styles.bookList}>
          <div className={styles.bookItem}>
            <Image
              src="/book1.jpg"
              alt="Bok 1"
              width={250}
              height={400}
            />
            <p>Mitt liv som bok</p>
          </div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.books}>
        <h2 className={styles.booksTitle}>Mina böcker</h2>
        <div className={styles.bookList}>
          <div className={styles.bookItemMulti}>
            <div className={styles.bookDescription}>
              <h3>Om boken</h3>
              <p>Denna bok handlar om saker</p>
            </div>
            <div>
              <Image
              src="/book1.jpg"
              alt="Bok 2"
              width={250}
              height={400}
              />
              <p>Min bok som liv</p>
            </div>
          </div>
                <div className={styles.separator}></div>
          <div className={styles.bookItemMulti}>
            <div>
              <Image
              src="/book1.jpg"
              alt="Bok 3"
              width={250}
              height={400}
              />
              <p>Min tredje bok</p>
            </div>
            <div className={styles.bookDescription}>
              <h3>Om boken</h3>
              <p>Denna bok handlar om saker</p>
            </div>
          </div>
                <div className={styles.separator}></div>
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.aboutTitle}>Om mig</h2>
        <p className={styles.aboutText}>
          Jag är en författare som älskar att skriva böcker. Mina böcker handlar om livet, kärlek och allt däremellan. Jag hoppas att du kommer att gilla dem!
        </p>
      </div>
    <div className={styles.separator}></div>
    <div className={styles.footer}>
      <p>© 2025 Eva Sjöqvist Böcker</p>
      <p>Skapad av Anton Koller</p>
    </div>
    </main>
  );
}
