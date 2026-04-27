import ServiceCard from '../ServiceCard'; 
import { Link } from 'react-router-dom';
import { siteData } from "../../data/siteData"

const ServicesSection = () => {
    const { service } = siteData;

    return (
        <section className="py-24 bg-neutral-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12">
                    <div>
                        <h2 className="text-secondary font-heading text-4xl font-bold">{ service.title }</h2>
                        <p className="text-primary mt-2">{ service.description }.</p>
                    </div>
                    <Link to="/services" className="text-secondary font-bold border-b-2 hover:border-t-2 hover:pt-2 hover:border-b-0 border-accent pb-1 mt-4 md:mt-0 transition-all duration-200">
                        { service.link }
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {service.services.slice(0, 3).map((service) => (
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
};

export default ServicesSection;