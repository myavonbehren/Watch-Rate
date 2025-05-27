import { useState } from 'react'
import './App.css'
import AddReview from './components/AddReview.tsx'
import { type Review } from './types/Review.tsx'

function App() {
  const [reviews, setReviews] = useState<Review[]>();

   const addReview = (newReview: Review) => {
      console.log('Adding review:', newReview);
    };

  return (
    <>
      <div>
        <AddReview addReview={(addReview)} />
      </div>
    </>
  )
}

export default App
