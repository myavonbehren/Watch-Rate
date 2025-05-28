import React from "react";
import { StarFill, Star } from "react-bootstrap-icons";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({rating, maxStars = 5, onRatingChange = null }) => {
    return (
    <div className="d-flex">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span 
            key={index}
            style={{ cursor: onRatingChange ? 'pointer' : 'default' }}
            onClick={() => onRatingChange && onRatingChange(starValue)}
          >
            {starValue <= rating ? (
              <StarFill className="text-warning me-1" size={20} />
            ) : (
              <Star className="text-muted me-1" size={20} />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;