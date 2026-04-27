import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Footer() {
    const { brand, contact, navLinks, footer } = siteData;

    return (
        <footer className="bg-secondary text-text-inverse py-20 px-6 border-t border-text-inverse/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
                
                {/* Branding */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={ brand.logo } alt="Swift Cocoa Beverage logo" className="h-30 w-auto object-contain"/>
                    </Link>
                    <p className="opacity-60 max-w-xs">{brand.tagline}</p>
                    <div className="flex gap-4">
                        {contact.socials.map((social) => (
                            <a 
                                key={social.name} href={social.link} 
                                className="w-10 h-10 bg-text-inverse/10 flex items-center justify-center rounded-full hover:bg-primary transition-all"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold">Navigation</h4>
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="opacity-60 hover:text-accent transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

		 <div className=" flex flex-col gap-10 pb-12 border-b border-white/10 mb-8">
                    <div className="flex items-center gap-6">
                        <footer.icon_1 className="text-accent" size={32} />
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-accent">Quality Assurance</p>
                            <p className="text-sm opacity-80">{footer.certification}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <footer.icon_2 className="text-accent" size={33} />
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-accent">Production</p>
                            <p className="text-sm opacity-80">{footer.producer}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <footer.icon_3 className="text-accent" size={32} />
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wider text-accent">Supply Chain</p>
                            <p className="text-sm opacity-80">{footer.distribution}</p>
                        </div>
                    </div>
                </div>
		
		{/* contact */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold">Get in touch</h4>
                    <p className="opacity-60">Subscribe for weekly scouting reports and data updates.</p>
                    <div className="flex">
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <contact.icon_1 className="w-5 h-5 text-primary shrink-0" />
                                <span>Plot C3 Rumuogba Artillery, PH/Aba Expressway, Port Harcourt.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <contact.icon_2 className="w-5 h-5 text-primary shrink-0" />
                                <span>{ contact.whatsapp_main }</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <contact.icon_3 className="w-5 h-5 text-primary shrink-0" />
                                <span>{ contact.email_main }</span>
                            </li>
			    
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-text-inverse/10 text-center opacity-40 text-sm">
                &copy; {new Date().getFullYear()} {brand.name}. All Rights Reserved.
            </div>
        </footer>
    );
}