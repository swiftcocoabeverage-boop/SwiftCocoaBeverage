import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { brand, navLinks } = siteData;

    return (
        <nav className="bg-secondary text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center gap-2">
                        <img src={ brand.logo } alt="Swift Cocoa Beverage logo" className="h-25 w-auto object-contain"/>
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.name} 
                            to={link.path}
                            className={({ isActive }) => 
                                `font-medium tracking-wide transition-colors duration-200 hover:text-accent ${
                                    isActive ? 'text-accent' : 'text-neutral-surface'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-surface focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.name} 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => 
                                    `text-lg font-semibold ${isActive ? 'text-accent' : 'text-neutral-surface'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}