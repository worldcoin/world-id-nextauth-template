import Layout from "../components/layout"
import ReviewCard from "../components/reviewCard/reviewCard"
import { useState, useEffect } from "react";
import styles from './main.module.css'

export default function IndexPage() {
  const [reviews, setReviews] = useState<any>([]);
  const [loading, setLoading] = useState(false)

  const handleGetReview = async () => {
    try{
      setLoading(true)
      const res = await fetch("/api/posts", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },)
      if (!res.ok) throw new Error('Failed to post');

      const data = await res.json()
      console.log(data, "checkout rthe data")
      setReviews(data.reviews)
      setLoading(false)
    }catch (error) {
      console.error('Failed to submit review:', error);
    }
  }

  useEffect(() => {
    handleGetReview()
  }, [])
  
  return (
    <Layout>
      <a className={styles.button} href='/post'>{"+"}</a>
      <div className={styles.reviewsList}>
        {loading ? <div>Loading</div> : reviews.length > 0 ? reviews.map((review:any, index:any) => (
          <ReviewCard
            key={index}
            isHuman={review.isHuman}
            location={review.where}
            content={review.review}
          />
        )) : <p>No posts for now, sorry mate</p>}
      </div>
    </Layout>
  )
}
