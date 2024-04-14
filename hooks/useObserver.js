import { useEffect, useRef } from 'react';

const useObserver = ({ isEnabled, callback, threshold = 1 }) => {
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting && isEnabled) {
                    callback();
                }
            },
            { threshold: threshold }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [isEnabled, sentinelRef.current]);

    return {
        sentinelRef,
    };
};

export default useObserver;
