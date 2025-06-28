import { useEffect, useState } from "react";

import PleasureTitle from "../../pleasure-title/PleasureTitle";
import AboutGoods from "../../about-goods/AboutGoods";
import CoffeeList from "../../coffee-list/CoffeeList";

export default function ForYourPleasure() {
    const [stylesLoaded, setStylesLoaded] = useState(false);

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/src/components/about-goods/aboutGoods.css"; 
        link.onload = () => setStylesLoaded(true);
        link.onerror = () => {
            console.warn("Failed to load CSS");
            setStylesLoaded(true); 
        };
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link); 
        };
    }, []);

    useEffect(() => {
        document.title = 'For Your Pleasure';
    }, []);

    if (!stylesLoaded) {
        return <div style={{ textAlign: 'center', fontSize: '2rem' }}>Styles loading...</div>;
    }

    return (
        <>
            <PleasureTitle />
            <AboutGoods />
            <CoffeeList />
        </>
    );
}
