import { siteData } from '../data/siteData';
import { CheckCircle2, Star, Coins, ClipboardList, BanknoteArrowUp } from 'lucide-react';
import { Link } from "react-router-dom";

const Distributor = () => {
    const { distributorInfo } = siteData;

    return (
        <div className="pt-24 pb-20 bg-neutral-bg min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 italic">
                        Partner With Us
                    </h1>
                    <p className="text-text-muted text-lg">Financial Empowerment through Quality Nutrition</p>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Stockist Conditions */}
                    <div className="bg-neutral-surface p-8 rounded-2xl shadow-sm border border-accent/10">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                            <ClipboardList className="text-primary" /> Stockist Conditions
                        </h3>
			<p className="mb-8 text-text-muted">Want to be a swift cocoa stockist?</p>
                        <ul className="space-y-4">
                            {distributorInfo.conditions.map((item, index) => (
                                <li key={index} className="flex gap-3 text-text-main">
                                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stockist Benefits */}
                    <div className="bg-primary p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                            <Star /> Stockist Benefits
                        </h3>
                        <ul className="space-y-4">
                            {distributorInfo.stockistBenefits.map((item, index) => (
                                <li key={index} className="flex gap-3 text-text-inverse">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
		
		<div className="mt-20 text-center bg-accent/5 p-12 rounded-3xl border-2 border-dashed border-accent/20">
                    <BanknoteArrowUp className="mx-auto text-primary mb-4" size={48} />
                    <h2 className="text-2xl font-bold text-secondary mb-2">Want to be a Stockist?</h2>
                    <p className="mb-8 text-text-muted">Make money on every sale.</p>
                    <Link to="/contact" className="inline-block text-secondary bg-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-text-inverse transition-all duration-300 shadow-lg"
                    >
                        Contact us right away
                    </Link>
                </div>

                {/* Distributor Perks Grid */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-primary text-center mb-10">What's in it for a Distributor?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {distributorInfo.distributorPerks.map((perk, index) => (
                            <div key={index} className="bg-neutral-surface p-6 rounded-xl text-center border-b-4 border-secondary shadow-sm">
                                <p className="text-xs text-text-muted uppercase font-bold mb-2">{perk.label}</p>
                                <p className="text-xl font-bold text-primary">{perk.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Footer */}
                <div className="mt-20 text-center bg-accent/5 p-12 rounded-3xl border-2 border-dashed border-accent/20">
                    <Coins className="mx-auto text-secondary mb-4" size={48} />
                    <h2 className="text-2xl font-bold text-primary mb-2">Ready to Start?</h2>
                    <p className="mb-8 text-text-muted">All payments are received into your account the 1st week of the subsequent month.</p>
                    <a 
                        href={distributorInfo.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-text-inverse transition-all duration-300 shadow-lg"
                    >
                        Open Cocoa Registration Form
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Distributor;