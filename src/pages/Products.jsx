import { siteData } from '../data/siteData';



export default function ProductsPage() {
    const { products } = siteData;

    return (
        <div className="py-16 px-4 max-w-7xl mx-auto space-y-20">
            {/* Hero / Header Section */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary italic tracking-tight">
                    {products.title}
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    {products.description}
                </p>
            </section>

            {/* Features & Sizes Grid */}
            <section className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-neutral-surface p-8 rounded-2xl shadow-sm border border-secondary">
                    <h3 className="text-2xl font-bold text-primary mb-6">Product Features</h3>
                    <ul className="space-y-4">
                        {products.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-text-main">
                                <products.icon_1 className="text-accent" size={20} />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-primary text-text-inverse p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Available Sizes</h3>
                    <div className="flex gap-4">
                        {products.sizes.map((size) => (
                            <div key={size} className="flex-1 bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                                <products.icon_2 className="mx-auto mb-2 text-secondary" size={32} />
                                <span className="text-2xl font-bold">{size}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <h4 className="font-semibold mb-4 text-secondary">Who It's For</h4>
                        <div className="flex flex-wrap gap-2">
                            {products.targetAudience.map((target) => (
                                <span key={target} className="bg-white/5 px-3 py-1 rounded-full text-sm">
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Wellness Benefits Section */}
            <section className="space-y-10 mt-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary">Wellness Benefits</h2>
                    <p className="text-text-muted">Nourishing your body with every sip</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-secondary rounded-xl group bg-accent transition-colors duration-300">
                                <div className="mb-4 group-hover:text-primary text-text-inverse">
                                    <Icon size={40} />
                                </div>
                                <h4 className="font-bold group-hover:text-primary text-text-inverse">
                                    {benefit.title}
                                </h4>
                                {benefit.desc && (
                                    <p className="text-xs group-hover:text-text-muted mt-1 text-white/80">
                                        {benefit.desc}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}