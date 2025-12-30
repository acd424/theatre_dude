import Head from 'next/head';
import Navigation from '../components/Navigation';
import styles from '../styles/Store.module.css';

export default function Store() {
  const products = [
    {
      name: "Incredible Improv T-Shirt - Small",
      price: "£19.99",
      description: "Classic fit tee featuring incredible improv design"
    },
    {
      name: "Incredible Improv T-Shirt - Medium",
      price: "£19.99",
      description: "Classic fit tee featuring incredible improv design"
    },
    {
      name: "Incredible Improv T-Shirt - Large",
      price: "£19.99",
      description: "Classic fit tee featuring incredible improv design"
    },
    {
      name: "Incredible Improv T-Shirt - Extra Large",
      price: "£19.99",
      description: "Classic fit tee featuring incredible improv design"
    },
    {
      name: "Jack Autograph Item",
      price: "£29.99",
      description: "Personally signed by Jack - limited edition"
    },
    {
      name: "Theatre Dude Autograph Item",
      price: "£29.99",
      description: "Personally signed Theatre Dude memorabilia"
    }
  ];

  return (
    <>
      <Head>
        <title>Store - Theatre Dude</title>
        <meta name="description" content="Shop exclusive theatre merchandise" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleLine1}>THEATRE</span>
            <span className={styles.titleLine2}>MERCH</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Get your exclusive Incredible Improv t-shirts and autographed items. Support the show and wear your theatre pride!
          </p>
        </section>

        <section className={styles.products}>
          <div className={styles.productGrid}>
            {products.map((product, idx) => (
              <a 
                key={idx} 
                href="https://www.vinted.co.uk/member/288523991"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productCard}
              >
                <div className={styles.productImage}>
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.placeholderText}>IMAGE</span>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.description}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>VISIT OUR VINTED STORE!</h2>
            <p className={styles.ctaText}>
              Browse our full collection on Vinted for more theatre merchandise, autographed items, and special deals. 
              New items added regularly!
            </p>
            <a 
              href="https://www.vinted.co.uk/member/288523991" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.vintedButton}
            >
              <span className={styles.buttonText}>SHOP ON VINTED</span>
              <span className={styles.buttonIcon}>→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
