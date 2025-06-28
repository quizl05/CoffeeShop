import { useEffect } from "react";

import HeadSection from "../../head-section/HeadSection";
import AboutUs from "../../about-us/AboutUs";
import OurBest from "../../our-best/OurBest";

export default function CoffeeHouse() {

    useEffect(() => {
        document.title = 'Coffee House'
    }, [])

    return(
        <>
            <HeadSection />
            <AboutUs />
            <OurBest />
        </>
    )
}