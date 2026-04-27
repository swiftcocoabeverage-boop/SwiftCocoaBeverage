import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from "react-router-dom";

const RootLayout = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return(
        <div>
			<Ticker />
			<Navbar />
			<main className="text-primary">
				<Outlet />
			</main>
			{isVisible && (
                            <button
                                onClick={scrollToTop}
                                className="fixed bottom-8 right-8 z-50 p-3 bg-secondary text-primary rounded-full shadow-lg hover:bg-primary hover:text-secondary transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-secondary flex items-center justify-center"
                    		aria-label="Scroll to top"
                	    >
                    		<ArrowUp size={24} strokeWidth={3} />
                	    </button>
            		)}
			<Footer />
			<Ticker />
        </div>
    )
};
 export default RootLayout;