import { useState } from 'react';
import { siteData } from '../data/siteData';
import { MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const { contact } = siteData;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Logic to send via WhatsApp
    const sendWhatsApp = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) return alert("Please fill the form first");
        
        const text = `Hi, I'm ${formData.name}. ${formData.message}`;
        window.open(`https://wa.me/${contact.whatsapp_main}?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Logic to send via Email (mailto)
    const sendEmail = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) return alert("Please fill the form first");

        window.location.href = `mailto:${contact.email_main}?subject=Inquiry from ${formData.name}&body=${formData.message}`;
    };

    return (
        <div className="min-h-screen bg-neutral-bg py-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                
                {/* Contact Info Sidebar */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl font-black text-secondary mb-6">Let's Talk Strategy.</h1>
                        <p className="text-xl text-text-muted">Ready to optimize your scouting pipeline? Reach out via the form or our direct channels.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <span className="text-lg font-medium text-secondary">{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                                <MessageSquare size={24} />
                            </div>
                            <span className="text-lg font-medium text-secondary">{contact.whatsapp}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full text-secondary">
                                <MapPin size={24} />
                            </div>
                            <span className="text-lg font-medium text-secondary">{contact.address}</span>
                        </div>
                    </div>
                </div>

                {/* The Form */}
                <div className="bg-neutral-surface p-10 rounded-3xl shadow-xl border border-text-muted/5">
                    <form className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-secondary uppercase text-xs tracking-widest">Full Name</label>
                            <input 
                                type="text" name="name" onChange={handleChange}
                                className="w-full p-4 bg-neutral-bg border border-text-muted/10 rounded-xl focus:border-primary focus:outline-none transition-all"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-secondary uppercase text-xs tracking-widest">Email Address</label>
                            <input 
                                type="email" name="email" onChange={handleChange}
                                className="w-full p-4 bg-neutral-bg border border-text-muted/10 rounded-xl focus:border-primary focus:outline-none transition-all"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-secondary uppercase text-xs tracking-widest">Message</label>
                            <textarea 
                                name="message" rows="5" onChange={handleChange}
                                className="w-full p-4 bg-neutral-bg border border-text-muted/10 rounded-xl focus:border-primary focus:outline-none transition-all"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            <button 
                                onClick={sendEmail}
                                className="w-full py-4 bg-secondary text-text-inverse font-bold rounded-xl hover:brightness-125 transition-all shadow-lg active:scale-95"
                            >
                                Send via Email
                            </button>
                            <button 
                                onClick={sendWhatsApp}
                                className="w-full py-4 bg-primary text-text-inverse font-bold rounded-xl hover:brightness-110 transition-all shadow-lg active:scale-95"
                            >
                                WhatsApp Us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}