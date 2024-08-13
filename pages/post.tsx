import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import Reviews from "../components/reviews/reviews"
import Modal from '../components/modal/modal';

const defaultFormData = {
    where:'',
    review:''
  };

export default function Post() {
    
  const { data: session } = useSession()
  const [reviews, setReviews] = useState<any>();
  const [loading, setLoading] = useState(false)
  const [succed, setSucced] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const handlePostReview = async (review:any) => {
    try{
      setLoading(true)
      const res = await fetch("/api/posts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      },)
      if (!res.ok) throw new Error('Failed to post');
      setSucced(true)
      setIsModalOpen(true);
      setLoading(false)
    }catch (error) {
      console.error('Failed to submit review:', error);
    }
  }


  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (formData.where.trim() && formData.where.trim()) {
      setReviews( { isHuman: true, where: formData.where, review: formData.review });
      setFormData(defaultFormData)
    }
    handlePostReview(reviews)
  };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if(loading) return <Modal
  isOpen={isModalOpen}
  onConfirm={() => setIsModalOpen(false)}
  message="Loading"/>
  if(succed){
    return <Modal
    isOpen={isModalOpen}
    onConfirm={() => setIsModalOpen(false)}
    message="Review sent"/>
  }

//   If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <Layout>
      <Reviews handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
    </Layout>
  )
}
