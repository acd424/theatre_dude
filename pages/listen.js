import Head from 'next/head';
import Navigation from '../components/Navigation';
import styles from '../styles/Listen.module.css';

export default function Listen() {
  const podcastCategories = [
    {
      id: "improv",
      title: "INCREDIBLE IMPROV PLAYLIST",
      podcasts: [
        { name: "Best of Improv 2024", description: "Our funniest improvised moments from this year" },
        { name: "Improv Games Collection", description: "Classic improv games and challenges" },
        { name: "Behind the Scenes", description: "Stories from our improv performances" }
      ]
    },
    {
      id: "mermaids",
      title: "LITTLE MERMAIDS JR",
      podcasts: [
        { name: "Little Mermaids Jr - Full Show", description: "Watch the complete production" },
        { name: "Cast Interviews", description: "Meet the talented performers" },
        { name: "Making Of Documentary", description: "Behind the scenes of our production" }
      ]
    },
    {
      id: "reviews",
      title: "REVIEWS",
      podcasts: [
        { name: "Show Reviews", description: "Honest reviews of our latest performances" },
        { name: "Audience Reactions", description: "What the audience had to say" },
        { name: "Theatre Talk", description: "Discussions about theatre and improv" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Listen - Theatre Dude</title>
        <meta name="description" content="Watch our improv and theatre productions" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleSmall}>START</span>
            <span className={styles.titleLarge}>LISTENING</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Dive into our incredible improv performances, theatre productions like Little Mermaids Jr, 
            and honest reviews of all our shows. Experience the magic of live theatre!
          </p>
        </section>

        <div className={styles.categories}>
          {podcastCategories.map((category, idx) => (
            <section key={idx} id={category.id} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.podcastGrid}>
                {category.podcasts.map((podcast, pidx) => (
                  <div key={pidx} className={styles.podcastCard}>
                    <div className={styles.podcastNumber}>{String(pidx + 1).padStart(2, '0')}</div>
                    <h3 className={styles.podcastName}>{podcast.name}</h3>
                    <p className={styles.podcastDesc}>{podcast.description}</p>
                    <button className={styles.playBtn}>
                      <span className={styles.playIcon}>▶</span>
                      PLAY
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
