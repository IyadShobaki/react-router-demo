import { useParams, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Review.css";

function Review({ reviews }) {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  // Decrement the id from the parameter so we access the correct items. This
  // is necessary because the array indexes start with 0, whereas the IDs in
  // the API begin at 1.
  id = id - 1;

  // Use a ternary operator to render <PageNotFound />
  // if reviews[id] doesn't exist.
  console.log(reviews?.[3]);
  return (
    <div className="review">
      {reviews?.[id] ? (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">
            Final rating: {reviews[id]?.rating}/5
          </p>
          {/* We can use ()=> navigate(-1) if we need to go back to the previous location */}
          <button onClick={() => navigate("/reviews")} type="button">
            Back to the review list
          </button>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Review;
