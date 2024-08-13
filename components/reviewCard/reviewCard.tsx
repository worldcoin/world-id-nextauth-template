// components/ReviewCard.js
import styles from './reviewCard.module.css';

export default function ReviewCard({ isHuman, location, content }:any) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${isHuman ? styles.human : styles.ai}`}>
          {isHuman ? 'HUMAN' : 'AI'}
        </span>
        <h3 className={styles.location}>{location}</h3>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}