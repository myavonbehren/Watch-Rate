import React from "react";
import { StarFill, Star } from "react-bootstrap-icons";

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
    size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({rating, maxStars = 5, onRatingChange = null, size = 25}) => {
    return (
    <div className="d-flex">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span 
            key={index}
            style={{ cursor: onRatingChange ? 'pointer' : 'default' }}
            onClick={() => onRatingChange && onRatingChange(starValue)}>
            {starValue <= rating ? 
            ( <StarFill className="text-warning me-1" size={size} />) 
            : 
            (<Star className="text-muted me-1" size={size} />)}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;