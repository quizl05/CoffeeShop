import { useRef, useEffect } from 'react'
import './coffeeFilter.css'

export default function CoffeeFilter({ searchTerm, onSearchChange, onCountryFilterChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="beans_filter"> 
            <label htmlFor="beans_name_filter" className="label_for_namefilter">Looking from</label>
            <input 
                type="text"
                name="beans_name_filter"
                id="beans_name_filter"
                placeholder="Ctrl+K"
                value={searchTerm}
                ref={inputRef}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <p className='label_for_buttonfilter'>Or filter</p>
            <div className='buttonfilter_container'>
                <button className="filter_button" onClick={() => onCountryFilterChange('Kenya')}>Kenya</button>
                <button className="filter_button" onClick={() => onCountryFilterChange('Colombia')}>Colombia</button>
                <button className="filter_button" onClick={() => onCountryFilterChange('Ethiopia')}>Ethiopia</button>
                <button className="filter_button" onClick={() => onCountryFilterChange('')}>All</button>
            </div>
        </div>
    )
}

