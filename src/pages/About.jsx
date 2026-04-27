import { siteData } from '../data/siteData';
import WhyChooseUs from "../components/WhyChooseUs";
import VisionMission from "../components/VisionMission";

export default function About() {
    const { about } = siteData;

    return (
        <div className="bg-neutral-bg">
            {/* Header */}
            <header className="py-20 px-6 bg-secondary text-text-inverse text-center">
                <h1 className="text-4xl md:text-6xl font-black mb-6">{about.title}</h1>
                <p className="text-xl opacity-80 max-w-3xl mx-auto">{about.subtitle}</p>
            </header>

            <section className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Visual Placeholder */}
                    <div className="h-[500px] bg-text-muted/10 rounded-3xl border border-text-muted/20 flex items-center justify-center italic text-text-muted">
                        <img src={ about.image } alt="our story" className="w-full h-full object-cover opacity-90" />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
                        {about.detailedStory.map((paragraph, index) => (
                            <p key={index} className="text-lg text-text-main leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

		<VisionMission />

                {/* Values Grid */}
		<div>
		    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 mt-32 text-center">Our Core Values </h2>
                    <div className="mt-3 grid md:grid-cols-3 gap-10">
                        {about.values.map((val, i) => (
                            <div key={i} className="p-10 bg-neutral-surface rounded-2xl shadow-sm border border-text-muted/5">
                                <val.icon className="text-primary mb-6" size={40} />
                                <h3 className="text-2xl font-bold text-secondary mb-4">{val.title}</h3>
                                <p className="text-text-muted leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
		</div>

		<WhyChooseUs />
            </section>
        </div>
    );
}