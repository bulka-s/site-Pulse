import { useCallback } from "react";

export const useSmoothScroll = (): ((sectionId: string) => void) => {
    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, []);

    return scrollToSection;
};