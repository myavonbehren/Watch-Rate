import { Heart, HeartFill } from "react-bootstrap-icons";
import React from "react";

interface LikeButtonProps {
    isLiked: boolean;
    onToggle: () => void
}

const LikeButton: React.FC<LikeButtonProps> = ({isLiked, onToggle}) => {
    return (
    <div className="d-flex">
    <span 
      style={{ cursor: 'pointer' }}
      onClick={onToggle}>
      {isLiked ? (
        <HeartFill className="text-danger me-1" size={25} />
        ) : (
        <Heart className="text-muted me-1" size={25} />
      )}
    </span>
    </div>
    );
};
export default LikeButton;