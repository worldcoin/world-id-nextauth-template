import { useState } from 'react';
import styles from './reviews.module.css'
import Header from '../header';
import Modal from '../modal/modal';

export default function Reviews({handleSubmit, formData, handleChange}:any) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="where"
          value={formData.where}
          onChange={handleChange}
          placeholder="Place you're reviewing..."
          className={styles.input}
        />
        <textarea
          value={formData.review}
          name="review"
          onChange={handleChange}
          placeholder="Write your review here..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}