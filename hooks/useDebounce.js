import { useEffect, useState } from 'react';

export function useDebounce(value, delay = 500) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value]);
    return {
        debounce,
    };
}
