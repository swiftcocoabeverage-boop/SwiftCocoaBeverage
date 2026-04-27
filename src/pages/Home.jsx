import Hero from "../components/Hero";
import AboutSection from "../components/home-components/AboutSection";
import ServicesSection from "../components/home-components/ServicesSection";
import DistributorSection from "../components/home-components/DistributorSection";
import WhyChooseUsSection from "../components/home-components/WhyChooseUsSection";


const Home = () => {
    return(
        <div>
            <Hero />
            <AboutSection />
            <ServicesSection />
	    <WhyChooseUsSection />
	    <DistributorSection />
        </div>
    )
};
 export default Home;