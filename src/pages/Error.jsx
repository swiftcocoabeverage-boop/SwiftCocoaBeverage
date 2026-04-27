import { Link, useRouteError } from 'react-router-dom';
import { AlertTriangle, RefreshCcw } from 'lucide-react';


const Error = () => {
    const error = useRouteError(); 

    return(
        <div className="min-h-screen bg-neutral-bg flex flex-col items-center justify-center px-6 text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-8">
                <AlertTriangle size={48} />
            </div>
            <h1 className="text-4xl font-black text-primary mb-4">Something went wrong!</h1>
            <p className="text-text-muted text-lg max-w-md mb-8">
                {error?.statusText || error?.message || "An unexpected error has occurred. We're working on getting this fixed."}
            </p>
            <div className="flex gap-4">
                <button 
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-colors duration-300"
                >
                    <RefreshCcw size={20} /> Refresh Page
                </button>
                <Link 
                    to="/" 
                    className="flex items-center gap-2 bg-primary text-text-inverse px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    )
};
 export default Error;