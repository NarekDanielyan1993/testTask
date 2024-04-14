const useLocalStorage = () => {
    const getValue = (key) => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : null;
        }
        return null;
    };

    const addValue = (key, value) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
        return null;
    };

    const deleteValue = (key) => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        }
        return null;
    };

    return {
        getValue,
        addValue,
        deleteValue,
    };
};

export default useLocalStorage;
