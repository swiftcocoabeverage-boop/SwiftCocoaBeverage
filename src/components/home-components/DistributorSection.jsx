import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wallet } from 'lucide-react';
import { siteData } from '../../data/siteData';

const DistributorSection = () => {
    const navigate = useNavigate();
    const { distributorInfo } = siteData;

    return (
        <section className="py-20 px-6 bg-neutral-bg">
            <div className="max-w-6xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
                <div className="p-10 md:w-2/3">
                    <div className="flex items-center gap-2 text-secondary mb-4">
                        <Wallet size={24} />
                        <span className="font-bold tracking-widest uppercase text-sm">Opportunity</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-inverse mb-6">
                        Want to be a SWIFTCOCOA Stockist or Leader?
                    </h2>
                    <p className="text-text-inverse/80 text-lg mb-8 max-w-xl">
                        Join our network of successful distributors and start earning through 
                        referral bonuses, retail profits, and monthly rebates.
                    </p>
                    <button 
                        onClick={() => navigate('/distributor')}
                        className="flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
                    >
                        View Requirements <ArrowRight size={20} />
                    </button>
                </div>
                <div className="md:w-1/3 h-64 md:h-full w-full bg-accent/20 flex items-center justify-center p-12">
                    {/* Placeholder for a local image of the cocoa pack or a happy distributor */}
                    <div className="w-full h-full border-2 border-dashed border-secondary/30 rounded-2xl flex items-center justify-center text-secondary italic text-center">
                        <img src={ distributorInfo.image } alt="products" className="w-full h-full object-cover opacity-90"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DistributorSection;