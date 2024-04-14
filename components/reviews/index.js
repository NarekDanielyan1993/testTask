import Review from 'components/reviews/review';
import { StyledReviewList } from 'components/reviews/style';

const Reviews = ({ reviews }) => {
    return (
        <StyledReviewList>
            {Array.isArray(reviews) &&
                reviews.map((review) => {
                    return <Review key={review.id} text={review.text} />;
                })}
        </StyledReviewList>
    );
};

export default Reviews;
