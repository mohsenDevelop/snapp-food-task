import { useEffect } from 'react';

export const useInfinitScroll = ({ refEl, itemsLength }: { refEl: any, itemsLength: number }, cb: (res: number) => void) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    cb(itemsLength);
                }
            },
            { threshold: 1 }
        );

        if (refEl.current) {
            observer.observe(refEl.current);
        }

        return () => {
            if (refEl.current) {
                observer.unobserve(refEl.current);
            }
        };
    }, [refEl, itemsLength]);
};