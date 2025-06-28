import { useLocation } from "react-router-dom";

export default function NotFound() {
    const location = useLocation();
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{color: '#000'}}>404 — Page not found</h1>
            <p style={{color: '#000'}}>There is no page: {location.pathname}</p>
        </div>
    );
}
