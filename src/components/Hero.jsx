import { siteData } from '../data/siteData';
import { Link } from "react-router-dom";

export default function Hero() {
    const { hero, brand } = siteData;

    return (
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-hero-home bg-cover bg-center bg-no-repeat" />

            {/* Tint using the theme variable */}
            <div className="absolute inset-0 bg-hero-tint backdrop-blur-[2px]" />

            <div className="relative z-10 max-w-4xl px-6 text-center text-text-inverse">
		
		<div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-primary/50">
                    <hero.icon className="w-4 h-4 text-primary" fill="currentColor" />
                    <span className="text-sm font-semibold tracking-wide text-primary">{brand.tagline}</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                    {hero.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                    {hero.subtitle}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
		    <Link to="/distributor">
                    	<button className="bg-primary hover:brightness-110 text-text-inverse px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg active:scale-95">
                         	{hero.ctaMain} 
                    	</button>
		    </Link>
		    <Link to="/services">
                    	<button className="border-2 border-text-inverse/30 hover:bg-text-inverse/10 backdrop-blur-md text-text-inverse px-10 py-4 rounded-md font-bold text-lg transition-all active:scale-95">
                        	{hero.ctaSub}
                    	</button>
		    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
        </section>
    );
}