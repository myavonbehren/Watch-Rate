import { Heart, HeartFill } from "react-bootstrap-icons";
import React from "react";

interface LikeButtonProps {
    isLiked: boolean;
    onToggle?: () => void;
    size?:number;
}

const LikeButton: React.FC<LikeButtonProps> = ({isLiked, onToggle = null, size=25}) => {
    return (
    <div className="d-flex">
    <span 
      style={{ cursor: 'pointer' }}
      onClick={() => onToggle && onToggle()}>
      {isLiked ? (
        <HeartFill className="text-danger me-1" size={size} />
        ) : (
        <Heart className="text-muted me-1" size={size} />
      )}
    </span>
    </div>
    );
};
export default LikeButton;