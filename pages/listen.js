import Head from 'next/head';
import Navigation from '../components/Navigation';
import styles from '../styles/Listen.module.css';

export default function Listen() {
  const podcastCategories = [
    {
      id: "improv",
      title: "INCREDIBLE IMPROV PLAYLIST",
      podcasts: [
        { 
          name: "Incredible Improv - Episode 1", 
          description: "Our first hilarious improvised episode",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/f3949276-65cf-49c0-be83-15780b866a47/theatre-dude-incredible-improv-episode-1"
        },
        { 
          name: "Incredible Improv - Episode 2", 
          description: "More spontaneous comedy gold",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/33826ab9-eb1f-4b23-b227-c4fb2ba70a87/theatre-dude-incredible-improv-episode-2"
        },
        { 
          name: "Incredible Improv - Episode 3", 
          description: "The laughs keep coming",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/e2a4bc25-9ea3-42c0-bf9c-80893a2f0c5b/theatre-dude-incredible-improv-episode-3"
        }
      ]
    },
    {
      id: "mermaids",
      title: "LITTLE MERMAIDS JR",
      podcasts: [
        { 
          name: "Ruby Grayson - Alana", 
          description: "Meet Ruby as Alana from Little Mermaids Jr",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/6e9caacc-f60b-4bc2-a2a4-fbd24d3a245f/theatre-dude-little-mermaid-jr-ruby-grayson-alana"
        },
        { 
          name: "Anya - Ursula", 
          description: "Anya's portrayal of the sea witch Ursula",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/73f44e4e-832d-4ff7-8da5-7b1b04886b24/theatre-dude-little-mermaid-jr-anya-ursula"
        },
        { 
          name: "Isla Smith - Sebastian", 
          description: "Isla brings Sebastian to life",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/90104dd8-c960-4267-9265-c5a98614d770/theatre-dude-little-mermaid-jr-isla-smith-sebastian"
        },
        { 
          name: "Thea Bell - Grimsby", 
          description: "Thea's performance as Grimsby",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/5742e51d-6d59-436d-a2f9-5b5211910cad/theatre-dude-little-mermaid-jr-thea-bell-grimsby"
        }
      ]
    },
    {
      id: "reviews",
      title: "REVIEWS",
      podcasts: [
        { 
          name: "Mischief Theatre Awards", 
          description: "Celebrating the best of Mischief Theatre",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/86cb32a3-b436-4a74-98ca-e2316c3751ae/theatre-dude-mischief-theatre-awards"
        },
        { 
          name: "Mrs Doubtfire The Musical Review", 
          description: "Our thoughts on this hilarious musical adaptation",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/dd40467b-9b85-46b8-ae1e-4e6458bc1fca/theatre-dude-mrs-doubtfire-the-musical-review"
        },
        { 
          name: "Wicked Pt 1 Review", 
          description: "Defying gravity with our Wicked review",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/729b65de-f20e-4ac9-aeed-06bb000ef66e/theatre-dude-wicked-pt-1-review"
        },
        { 
          name: "West End Shows", 
          description: "A tour of the best West End productions",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/77f0f823-35b2-406c-81d8-4e8f71fa0714/theatre-dude-west-end-shows"
        },
        { 
          name: "The Comedy About Spies Review", 
          description: "Our review of this hilarious comedy",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/f56fa646-ae09-4f55-bca0-f09dd12132f6/theatre-dude-the-comedy-about-spies-review"
        },
        { 
          name: "Hamilton UK Tour Review", 
          description: "Our take on Hamilton's UK tour",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/35aea2ee-2b39-48dd-bc71-ac789f96b7b5/theatre-dude-hamilton-uk-tour-review"
        },
        { 
          name: "The Play That Goes Wrong Review", 
          description: "When everything goes wrong, it's comedy gold",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/5cd9bbc2-8d5c-4a3e-83bd-9919a0e5ac79/theatre-dude-the-play-that-goes-wrong-review"
        },
        { 
          name: "A Christmas Carol Goes Wrong Review", 
          description: "Festive chaos and hilarity ensue",
          url: "https://music.amazon.co.uk/podcasts/1cfa3d27-c832-4645-a552-bbb030a9053b/episodes/e00a49f7-3a7e-453f-b984-87b0fb621437/theatre-dude-a-christmas-carol-goes-wrong-review"
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Listen - Theatre Dude</title>
        <meta name="description" content="Listen to our improv and theatre podcasts" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleSmall}>START</span>
            <span className={styles.titleLarge}>LISTENING</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Dive into our incredible improv performances, Little Mermaids Jr cast interviews, 
            and honest reviews of all the best theatre shows. Available on Amazon Music!
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
                    <a 
                      href={podcast.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.playBtn}
                    >
                      <span className={styles.playIcon}>▶</span>
                      LISTEN
                    </a>
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
