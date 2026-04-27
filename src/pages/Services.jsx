import { siteData } from '../data/siteData';
import ServiceCard from "../components/ServiceCard";

export default function Services() {
    const { service } = siteData;

    return (
        <section className="py-24 px-6 bg-neutral-bg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-4">
                        { service.title }
                    </h2>
                    <h3 className="text-4xl font-bold text-secondary">
                        { service.description }
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {service.services.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            Icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}