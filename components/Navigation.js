import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>THEATRE</span>
          <span className={styles.logoAccent}>DUDE</span>
        </Link>
        
        <div className={styles.menu}>
          <Link 
            href="/" 
            className={`${styles.menuItem} ${router.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/listen" 
            className={`${styles.menuItem} ${router.pathname === '/listen' ? styles.active : ''}`}
          >
            Listen
          </Link>
          <Link 
            href="/store" 
            className={`${styles.menuItem} ${router.pathname === '/store' ? styles.active : ''}`}
          >
            Store
          </Link>
        </div>
      </div>
    </nav>
  );
}
