const ServiceCard = ({ title, description, Icon }) => {
    return (
        <div className="group relative p-1 bg-neutral-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-[95%] transition-transform duration-500" />
            <div className="relative z-10 p-8 bg-neutral-surface rounded-[calc(1rem-1px)] h-full">
                <div className="mb-6 inline-block p-4 bg-secondary rounded-lg text-accent group-hover:bg-primary group-hover:text-text-inverse transition-colors duration-300">
                    <Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4 italic tracking-tight">
                    {title}
                </h4>
                <p className="text-text-muted leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;