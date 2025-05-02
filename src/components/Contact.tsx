import Title from "./Title";
import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    interface FormData {
        name: string;
        email: string;
        subject: string;
        message: string;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    
    interface SubmitEvent {
        preventDefault: () => void;
    }

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            }, 3000);
        }, 1500);
    };
    
    return(
        <div className="py-20 px-5 bg-base-300" id="Contact">
            <div className="container mx-auto max-w-10xl">
                <Title title="Contact"/>
                
                <div className="mt-12">
                    <div className="bg-base-100 p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-primary mb-6">Envoyez-moi un message</h2>
                        
                        {isSubmitted ? (
                            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-center justify-center flex-col text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <Send size={24} className="text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800">Message envoyé !</h3>
                                    <p className="mt-2 text-green-700">
                                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-base-content/70 mb-2">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                            className="bg-base-300 w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-base-content/70 mb-2">
                                            Adresse email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="votre@email.com"
                                            className="bg-base-300 w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-base-content/70 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Sujet de votre message"
                                        className="bg-base-300 w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-base-content/70 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Votre message..."
                                        className="bg-base-300 w-full px-4 py-3 rounded-lg border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    />
                                </div>
                                
                                <button
                                    onClick={handleSubmit}
                                    className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg ${
                                        isSubmitting
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-primary hover:bg-primary-focus"
                                    } text-white font-medium transition-all duration-300`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;