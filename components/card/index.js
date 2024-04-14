import ProductCartActions from 'components/card/productCartActions';
import {
    StyledCard,
    StyledCardDescription,
    StyledCardImage,
    StyledCardPrice,
    StyledCardTitle,
} from 'components/card/style';

const ProductCard = ({ src, title, description, price, id }) => {
    return (
        <StyledCard>
            <StyledCardImage src={src} alt="Product image" />
            <StyledCardTitle dangerouslySetInnerHTML={{ __html: title }} />
            <StyledCardDescription
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <StyledCardPrice>цена: {price}₽</StyledCardPrice>
            <ProductCartActions id={id} />
        </StyledCard>
    );
};

export default ProductCard;
