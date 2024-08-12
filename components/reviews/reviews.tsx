// // pages/reviews.js
// import { useState } from 'react';
// import styles from '../../pages/reviews.module.css'

// export default function Reviews() {
//   const [reviews, setReviews] = useState<any>([]);
//   const [newReview, setNewReview] = useState('');

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     if (newReview.trim()) {
//       setReviews([...reviews, newReview]);
//       setNewReview('');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>World Reviews</h1>
      
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <textarea
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//           placeholder="Write your review here..."
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Submit</button>
//       </form>

//       <div className={styles.reviewsList}>
//         {reviews.map(({review, index}:any) => (
//           <div key={index} className={styles.review}>
//             {review}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// pages/reviews.js
import { useState } from 'react';
import styles from './reviews.module.css'
import Header from '../header';
export default function Reviews() {
  const [reviews, setReviews] = useState<any>([]);
  const [newReview, setNewReview] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (newReview.trim() && place.trim()) {
      setReviews([...reviews, { place, content: newReview }]);
      setNewReview('');
      setPlace('');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Place you're reviewing..."
          className={styles.input}
        />
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>

      <div className={styles.reviewsList}>
        {reviews.map(({review, index}:any) => (
          <div key={index} className={styles.review}>
            <h3 className={styles.reviewPlace}>{review.place}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}