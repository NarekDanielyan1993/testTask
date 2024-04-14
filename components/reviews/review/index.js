import { StyledContent, StyledReview } from 'components/reviews/review/style';

const Review = ({ text }) => {
    return (
        <StyledReview>
            <StyledContent dangerouslySetInnerHTML={{ __html: text }} />
        </StyledReview>
    );
};

export default Review;
