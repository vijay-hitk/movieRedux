import React ,{useState} from 'react'

const Review = () => {
    const [review , setReview] = useState('');
    const [submitValue , setSubmitValue] = useState('');
    const arr = [];

   const write = (e) => {

    e.preventDefault();
    setSubmitValue(review);




   }

  return (
    
    <div>
      <form onSubmit={write}>
        <input type='text' placeholder='Enter the review'  onChange = {(e) => setReview(e.target.value)} /><br/><br/>
        <button type='submit'>Add review</button><br/>
        {submitValue}

        </form>
       
            
        
    </div>
  )
}

export default Review;