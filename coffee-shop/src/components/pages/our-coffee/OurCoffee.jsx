import { useEffect } from "react";

import OurCoffeeTitle from "../../our-coffee-title/OurCoffeeTitle";
import AboutCoffee from "../../about-coffee-section/AboutCoffee";
import CoffeeList from "../../coffee-list/CoffeeList";
import CoffeeFilter from "../../coffee-filter/CoffeeFilter";

export default function OurCoffee() {

    useEffect(() => {
        document.title = 'Our Coffee'
    }, [])

    return (
        <>
            <OurCoffeeTitle />
            <AboutCoffee />
            <CoffeeList>
                <CoffeeFilter />
            </CoffeeList>     
        </>
    );
}
