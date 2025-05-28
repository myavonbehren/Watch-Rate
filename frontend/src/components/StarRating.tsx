import React from "react";
import { StarFill, Star } from "react-bootstrap-icons";

interface StarRating {
    rating: number;
    maxStars?: number;
    onRatingChange?: (rating: number) => void;
}