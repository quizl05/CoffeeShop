import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useMemo, useTransition } from "react";
import './coffeeList.css';

import imgbeans from '../../assets/items-beans.png'

export default function CoffeeList({children}) {
    const [coffeeItems, setCoffeeItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    const [isPending, startTransition] = useTransition();
    const [deferredSearchTerm, setDeferredSearchTerm] = useState('');
    const [deferredCountryFilter, setDeferredCountryFilter] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setCoffeeItems(data));
    }, []);

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        startTransition(() => {
            setDeferredSearchTerm(value);
        });
    };

    const handleCountryFilterChange = (value) => {
        setCountryFilter(value);
        startTransition(() => {
            setDeferredCountryFilter(value);
        });
    };

    const filteredItems = useMemo(() => {
        return coffeeItems.filter(item => {
            const matchesSearch = item.country.toLowerCase().includes(deferredSearchTerm.toLowerCase());
            const matchesCountry = deferredCountryFilter === '' || item.country === deferredCountryFilter;
            return matchesSearch && matchesCountry;
        });
    }, [coffeeItems, deferredSearchTerm, deferredCountryFilter]);
    

    return (
        <>
        {children &&
            React.cloneElement(children, {
                searchTerm,
                onSearchChange: handleSearchChange,
                onCountryFilterChange: handleCountryFilterChange
            })
        }
        {isPending && <div style={{color: '#655b00', textAlign: 'center'}}>Updating results...</div>}
        <ul className="itemscoffee_grid">
            {filteredItems.map(obj => (
                <li 
                onClick={() => navigate(`/ourcoffee/${obj.id}`)}
                key={obj.id} 
                className="itemcoffee_container">
                    <img src={imgbeans} alt={obj.name} />
                    <p className="itemcoffee_name">{obj.name}</p>
                    <p className="itemcoffee_country">{obj.country}</p>
                    <p className="itemcoffee_price">{obj.price}</p>
                </li>
            ))}
        </ul>
        </>
    );
}