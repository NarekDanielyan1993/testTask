import { STORAGE_IDS, isServer } from 'constant';
import useLocalStorage from 'hooks/useLocalStorage';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { usePaginatedProducts } from 'services';

const ProductContext = createContext();

function ProductProvider({ children }) {
    const { addValue, getValue } = useLocalStorage();
    const phone = getValue(STORAGE_IDS.PHONE) ?? null;
    const [carts, setCarts] = useState([]);
    const { data: products } = usePaginatedProducts();

    useEffect(() => {
        if (!isServer && getValue(STORAGE_IDS.CARTS)) {
            setCarts(getValue(STORAGE_IDS.CARTS));
        }
    }, []);

    const phoneChangeHandler = useCallback((value) => {
        addValue(STORAGE_IDS.PHONE, value);
    }, []);

    const addToCartHandler = useCallback(
        (id, value) => {
            const product = products.find((pr) => pr.id === id);
            const newProduct = { ...product, quantity: Number(value) ?? 1 };
            setCarts((prev) => {
                if (!(prev.length > 0)) {
                    addValue(STORAGE_IDS.CARTS, [newProduct]);
                    return [newProduct];
                }
                const findCart = prev.find((pr) => pr.id === id);
                if (prev.length > 0 && findCart) {
                    const prevCartProducts = prev.map((pr) =>
                        pr.id === id ? newProduct : pr
                    );
                    addValue(STORAGE_IDS.CARTS, prevCartProducts);
                    return prevCartProducts;
                }
                if (prev.length > 0 && !findCart) {
                    addValue(STORAGE_IDS.CARTS, [...prev, newProduct]);
                    return [...prev, newProduct];
                }
            });
        },
        [carts?.length]
    );

    const values = {
        phone,
        cartProducts: carts,
        setCarts,
        onAddToCart: addToCartHandler,
        phoneChangeHandler,
        products,
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
}

const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error(
            'useBoardsContext must be used within a BoardsContextProvider'
        );
    }
    return context;
};

export { ProductProvider, useProductContext };
export default ProductContext;
