import {
    Users,
    Target,
    Award,
    TrendingUp,
    Coffee,       
    HeartPulse, 
    BadgeCheck,  
    ShieldCheck,
    PackageCheck,
    CreditCard,
    Megaphone,  
    Instagram,
    Twitter,
    Linkedin,
    Lightbulb,
    Facebook,
    Eye,
    Rocket,
    Layers,
    Network,
    HeartHandshake,
    Handshake,
    LineChart,
    MapPin,
    Phone,
    Mail,
    Globe,
    Star,
    Activity,
    Package,
    CheckCircle2, 
    Sparkles, 
    Zap, 
    Brain, 
    Moon, 
    Factory,
    Truck
} from 'lucide-react';
import AboutSectionImage from "../assets/images/about.png";
import AboutImage from "../assets/images/story.png";
import ProductsImage from "../assets/images/products.jpg";
import Logo from "../assets/images/logo.png";

export const siteData = {
    brand: {
        name: "Swift Cocoa Beverage",
        logoText: "SWIFT",
	logo: Logo,
        tagline: "Health in a cup, wealth in a pack",
    },
    navLinks: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
	{ name: "Products", path: "/products" },
	{ name: "Become a Distributor", path: "/distributor" },
        { name: "Contact", path: "/contact" },
    ],
    hero: {
        title: "Swift Cocoa Beverage",
        subtitle: "A premium cocoa-based drink designed to promote wellness and energy for individuals and families.",
        ctaMain: "Become a Distributor",
        ctaSub: "Explore Services",
	icon: HeartPulse,
    },
    service: {
        title: "Our Expertise",
        description: "Premium Products & Empowerment",
        link: "View All Services",
        services: [
            {
                id: 0,
                title: "Insurance Brokerage",
                description: "Professional insurance advisory and brokerage services that help individuals and businesses choose reliable coverage tailored to their needs.",
                icon: ShieldCheck,
            },
            {
                id: 1,
                title: "Cocoa Distributorship",
                description: "Partner with us as a distributor of Swift Cocoa Beverage and grow a profitable business while promoting healthy living.",
                icon: PackageCheck,
            },
            {
                id: 2,
                title: "Physiotherapy Services",
                description: "Expert physiotherapy support focused on rehabilitation, pain relief, mobility improvement, and overall physical wellness.",
                icon: HeartPulse,
            },
            {
                id: 3,
                title: "POS Ambassador Services",
                description: "Convenient POS solutions that support secure financial transactions and improve access to everyday payment services.",
                icon: CreditCard,
            },
	    {
                id: 4,
                title: "Sales and Marketing",
                description: "Strategic promotion and distribution of quality health-focused products across local and international markets.",
                icon: Megaphone,
            },
        ],
    },
    
    about: {
        title: "Pioneering Nutritional Excellence",
        subtitle: "We don't just make beverages; we create nourishment. Our mission is to promote health and wealth.",
	image: AboutImage,
        detailedStory: [
            "Swift Cocoa Beverage was founded on a simple realization: families need an affordable, premium cocoa drink that doesn't compromise on quality or nutritional value.",
            "Produced by Swift and Castle Consultants Ltd., our team ensures every pack meets stringent quality control standards, blending the finest ingredients for a perfect taste.",
            "Today, we serve not just as a beverage provider, but as an economic engine, offering robust distributor and stockist programs that empower individuals to achieve financial independence."
        ],
        values: [
            { title: "Quality Excellence", description: "We maintain high standards across our products and services to consistently deliver outstanding value.", icon: Award },
            { title: "Economic Empowerment", description: "We create opportunities that help individuals, partners and communities thrive.", icon: Handshake },
            { title: "Integrity", description: "Transparency and honest business practices are the core of our operations.", icon: BadgeCheck },
	    { title: "Customer Satisfaction", description: "Our customers remain at the center of our operations and their satisfaction is our priority.", icon: Users },
    	    { title: "Innovation", description: "We constantly improve, adapt and develop smarter ways to serve our customers and grow.", icon: Lightbulb },
        ]
    },
    aboutSection: {
        image: AboutSectionImage,
        tagIcon: Target,
        tagline: "DISCOVER THE SWIFT DIFFERENCE",
        title_1: "Pioneering Nutritional",
        title_2: "Excellence",
        description: "We don't just make beverages; we create nourishment. Produced by Swift and Castle Consultants Ltd., we blend the finest ingredients to ensure every sip promotes wellness while our robust distributor program empowers communities.",
        values: [
            { title: "Quality Assurance", description: "Premium ingredients for maximum nourishment.", icon: ShieldCheck },
            { title: "Empowerment", description: "Creating wealth through our stockist network.", icon: Users },
        ],
        percentage: "100%",
        percentage_desc: "Organic",
        button: "Read Full Story",
    },
    vision: {
        title: "Our Vision",
        description: "To become a leading provider of healthy beverage products and professional services, recognized for quality, trust, and innovation across local and international markets.",
        icon: Eye
    },
    mission: {
        title: "Our Mission",
        description: "To improve everyday living by delivering high-quality cocoa beverages and professional services that promote health, convenience, and economic empowerment.",
        icon: Rocket
    },
    whyChooseUs: {
        title: "Why Choose Us",
        subtitle: "The Swift & Castle Advantage",
        description: "We are more than just a beverage company. As a diversified brand, we bring unmatched value across multiple sectors.",
        items: [
            {
                title: "Multi-Sector Expertise",
                description: "Expertise under one trusted brand, from FMCG to financial and health services.",
                icon: Layers
            },
            {
                title: "Quality & Health",
                description: "Unwavering commitment to quality and health-conscious product formulations.",
                icon: ShieldCheck
            },
            {
                title: "Strong Network",
                description: "A robust distribution and partnership network that spans local and international markets.",
                icon: Network
            },
            {
                title: "Customer-Focused",
                description: "Dedicated service delivery putting customer satisfaction at the heart of our operations.",
                icon: HeartHandshake
            },
            {
                title: "Business Growth",
                description: "Creating real opportunities for business growth, collaboration, and economic empowerment.",
                icon: LineChart
            }
        ]
    },
    contact: {
        email: "contact@swiftcocoabeverage.com.ng, info@swiftcocoabeverage.com.ng, swiftandcastlelimited@gmail.com",
	email_main: "swiftandcastlelimited@gmail.com",
        whatsapp: "+2348181234411, +2349084990493",
	whatsapp_main: "+2348181234411",
        address: "Plott C3 Rumuogba Estate, Port Harcourt, Rivers State, Nigeria",
        socials: [
         //   { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
         //   { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
         //   { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
              { name: "Facebook", icon: Facebook, link: "https://facebook.com/p/Swift-Cocoa-Beverage-61577081612280/" },
        ],
	icon_1: MapPin,
	icon_2: Phone,
	icon_3: Mail,
	icon_4: Globe,

    },
    distributorInfo: {
        title: "Become a SWIFTCOCOA Stockist/Leader",
        registrationLink: "https://forms.gle/T8tM23zngTM9YHXv9",
	image: ProductsImage,
        conditions: [
            "Must be a registered distributor",
            "Refer ten (10) new distributors under you or your team",
            "Activate Stockistship with ₦169,000 (50 packs of 130g) OR ₦300,000 (50 packs of 250g)"
        ],
        stockistBenefits: [
            "Earn distributor bonuses and retail profits from your own store",
            "Earn 5% of total sales made at your centre monthly",
            "Earn 5% of Registration Fees made at your centre",
            "Profit of ₦470 (130g) or ₦850 (250g) per pack sold to distributors"
        ],
        distributorPerks: [
            { label: "Registration Fee", value: "₦7,500" },
            { label: "Referral Bonus", value: "25% (₦1,875)" },
            { label: "Monthly Purchase Rebate", value: "5%" },
            { label: "130g Member Price", value: "₦3,850" },
            { label: "250g Member Price", value: "₦6,850" }
        ]
    },
    products: {
        title: "Swift Cocoa Beverage",
        description: "A premium, organic cocoa blend crafted for the whole family.",
	icon_1: CheckCircle2,
	icon_2: Package,
        features: [
            "Rich cocoa taste",
            "Organic formula",
            "No caffeine",
            "Long shelf life",
            "Suitable for families"
        ],
        sizes: ["130g", "250g"],
        targetAudience: [
            "Adults",
            "Elderly",
            "Families",
            "Pregnant Women",
            "Growing Children"
        ],
        benefits: [
            { title: "Heart Wellness", icon: HeartPulse },
            { title: "Rich in Antioxidants", icon: Sparkles },
            { title: "Essential Minerals", desc: "Magnesium, Zinc, Iron", icon: Zap },
            { title: "Mental Alertness", icon: Brain },
            { title: "Sleep Quality", icon: Moon },
            { title: "Immune Health", icon: ShieldCheck },
            { title: "Overall Vitality", icon: Activity }
        ]
    },
    footer: {
        certification: "NAFDAC Approved", // Add Reg No. here if available
        producer: "Produced by Swift and Castle Consultants Ltd.",
        distribution: "Distributed by Accredited Partners",
	icon_1: ShieldCheck,
	icon_2: Factory,
	icon_3: Truck,
    }
};