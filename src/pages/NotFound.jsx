import { Link } from 'react-router-dom';
import { SearchX, Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-neutral-bg flex flex-col items-center justify-center px-6 text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
                <SearchX size={48} />
            </div>
            <h1 className="text-7xl font-black text-secondary mb-4 italic">404</h1>
            <h2 className="text-3xl font-bold text-primary mb-6">Page Not Found</h2>
            <p className="text-text-muted text-lg max-w-md mb-10">
                Oops! It looks like the page you are looking for has been moved, deleted, or never existed in the first place.
            </p>
            <Link 
                to="/" 
                className="flex items-center gap-2 bg-primary text-text-inverse px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md"
            >
                <Home size={20} /> Back to Home
            </Link>
        </div>
    );
};

export default NotFound;