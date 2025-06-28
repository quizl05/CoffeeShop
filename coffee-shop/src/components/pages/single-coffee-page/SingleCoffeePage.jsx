import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import OurCoffeeTitle from "../../our-coffee-title/OurCoffeeTitle";
import coffeeimg from "../../../assets/coffeeimg.jpg";
import './singleCoffeePage.css'

export default function SingleCoffeePage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const foundItem = data.find(i => i.id === parseInt(id));
                setItem(foundItem);
            })
    }, [id]);

    useEffect(() => {
        if(item && item.name) {
            document.title = `Coffee ${item.name}`
        }
    }, [id])

    if (!item) return <p>Loading...</p>;

    return (
        <>
            <OurCoffeeTitle />
            <section className="singlecoffee">
                <img src={coffeeimg} alt="coffee-img" className="singleCoffeeImg" />
                <div className='aboutit_container'>
                    <h2 className='singlecoffee_title'>About it</h2>
                    <div className="divider">
                        <div className='black_bar'/>
                        <div className='divider_grains_black'></div>
                        <div className='black_bar'/>
                    </div>
                    <p className="itemcountry_title"><span>Country: </span>{item.country}</p>
                    <p className="item_description"><span>Description: </span>{item.description}</p>
                    <p className="item_price"><span>Price: </span>{item.price}</p>
                </div>
            </section>
        </>
    );
}
