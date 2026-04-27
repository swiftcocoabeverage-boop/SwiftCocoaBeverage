import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Utensils } from 'lucide-react';
import { siteData } from "../../data/siteData";

const AboutSection = () => {
    const { aboutSection } = siteData;
    const values = aboutSection.values.map((value, index) => {
        return (
            <div className="flex items-start space-x-3" key={ index }>
                <value.icon className="text-primary shrink-0" size={24} />
                    <div>
                    <h4 className="font-bold text-secondary">{ value.title }</h4>
                    <p className="text-sm text-muted">{ value.description }</p>
                </div>
            </div>
        )
    });

    return (
        <section className="py-20 bg-neutral-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Visual Side */}
                    <div className="relative">
                        <div className="aspect-square bg-secondary rounded-3xl overflow-hidden shadow-2xl border-b-8 border-primary">
                           
                            <img
                                src={ aboutSection.image }
                                alt="cocoa beverage"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-secondary p-6 rounded-2xl shadow-xl hidden md:block">
                            <p className="text-3xl font-black italic">{ aboutSection.percentage }</p>
                            <p className="text-xs font-bold uppercase tracking-widest"> { aboutSection.percentage_desc }</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div>
                        <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                            <aboutSection.tagIcon size={18} />
                            <span>{ aboutSection.tagline }</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            { aboutSection.title_1 } <br />
                            <span className="text-primary">{ aboutSection.title_2 }</span>
                        </h2>
                        <p className="text-muted text-lg leading-relaxed mb-8">
                            { aboutSection.description }
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            { values }  
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition shadow-lg group"
                        >
                            <span>{ aboutSection.button }</span>
                            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;