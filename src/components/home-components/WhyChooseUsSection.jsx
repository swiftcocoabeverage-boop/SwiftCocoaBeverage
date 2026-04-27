import { siteData } from '../../data/siteData';

const WhyChooseUsSection = () => {
    const { whyChooseUs } = siteData;

    return (
        <section className="py-24 bg-neutral-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-4">
                        {whyChooseUs.subtitle}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        {whyChooseUs.title}
                    </h3>
                    <p className="text-lg text-text-muted">
                        {whyChooseUs.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChooseUs.items.slice(0, 3).map((item, index) => (
                        <div 
                            key={index} 
                            className="p-8 rounded-2xl bg-neutral-bg border border-text-muted/10 hover:border-primary/30 transition-colors group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-text-inverse transition-colors">
                                <item.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-secondary mb-3">
                                {item.title}
                            </h4>
                            <p className="text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;