import { siteData } from '../data/siteData';

const VisionMission = () => {
    const { vision, mission } = siteData;

    return (
        <section className="py-20 px-6 bg-neutral-bg my-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                
                {/* Vision Card */}
                <div className="bg-neutral-surface p-10 md:p-14 rounded-3xl shadow-lg border-t-4 border-secondary relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 text-secondary/5 group-hover:scale-110 transition-transform duration-500">
                        <vision.icon size={200} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                            <vision.icon size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-secondary mb-6">{vision.title}</h3>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {vision.description}
                        </p>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="bg-primary p-10 md:p-14 rounded-3xl shadow-lg relative overflow-hidden group">
                    <div className="absolute -right-10 -bottom-10 text-text-inverse/5 group-hover:scale-110 transition-transform duration-500">
                        <mission.icon size={200} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-text-inverse/10 rounded-2xl flex items-center justify-center text-text-inverse mb-8">
                            <mission.icon size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-text-inverse mb-6">{mission.title}</h3>
                        <p className="text-lg text-text-inverse/90 leading-relaxed">
                            {mission.description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;