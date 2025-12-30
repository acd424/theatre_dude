import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Theatre Dude's Website</title>
        <meta name="description" content="Incredible improv, theatre, and exclusive merchandise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.logoContainer}>
              <img 
                src="/theatre-dude-logo.png" 
                alt="Theatre Dude Productions" 
                className={styles.mainLogo}
              />
            </div>
            <p className={styles.heroSubtitle}>
              Experience incredible improv performances, theatre productions, and exclusive autographed merchandise from your favorite shows.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/listen" className={styles.btnPrimary}>
                Start Listening
              </Link>
              <Link href="/store" className={styles.btnSecondary}>
                Browse Store
              </Link>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.visualCircle}></div>
            <div className={styles.visualText}>THEATRE</div>
          </div>
        </section>

        <section className={styles.features}>
          <Link href="/listen#improv" className={styles.feature}>
            <div className={styles.featureImage}>
              <img src="/improv.png" alt="Incredible Improv" />
            </div>
            <h3 className={styles.featureTitle}>INCREDIBLE IMPROV</h3>
            <p className={styles.featureDesc}>
              Hilarious improvised performances and exclusive playlists
            </p>
          </Link>
          
          <Link href="/listen#mermaids" className={styles.feature}>
            <div className={styles.featureImage}>
              <img src="/mermaid.jpg" alt="Little Mermaids Jr" />
            </div>
            <h3 className={styles.featureTitle}>LITTLE MERMAIDS JR</h3>
            <p className={styles.featureDesc}>
              Watch Little Mermaids Jr and other amazing shows
            </p>
          </Link>
          
          <Link href="/listen#reviews" className={styles.feature}>
            <div className={styles.featureImage}>
              <img src="/reviews.png" alt="Reviews" />
            </div>
            <h3 className={styles.featureTitle}>REVIEWS</h3>
            <p className={styles.featureDesc}>
              Honest reviews and commentary on all our shows
            </p>
          </Link>
        </section>
      </main>
    </>
  );
}
