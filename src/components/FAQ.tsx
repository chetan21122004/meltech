import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import faqImage from "@/assets/faq.jpg";

const faqs = [
    {
        question: "What industries does Meltech serve?",
        answer: "We supply precision components to a wide range of industries, including electrical, gas, hydraulic & pneumatic, automotive, and industrial applications."
    },
    {
        question: "Can you manufacture custom parts as per drawings?",
        answer: "Yes, we specialize in manufacturing components exactly as per customer drawings, samples, and specifications, with strict adherence to quality standards."
    },
    {
        question: "Do you provide surface finishing and plating?",
        answer: "We offer a variety of finishes, including nickel, chrome, tin, zinc, and anodizing, as well as customized surface treatments to meet application needs."
    },
    {
        question: "What is your typical lead time?",
        answer: "Lead times vary based on order quantity and complexity, but we prioritize efficient production and on-time delivery for every project."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-muted/30">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden h-[500px] lg:sticky lg:top-24 hidden md:block"
                    >
                        <img
                            src={faqImage}
                            alt="Frequently Asked Questions"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Column - Accordion */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <h4 className="text-primary font-bold tracking-wider uppercase mb-2">Support</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                                Frequently Asked<br />Questions
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className={`bg-background rounded-2xl overflow-hidden border transition-colors duration-300 ${isActive ? "border-primary" : "border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveIndex(isActive ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left gap-4"
                                        >
                                            <span className={`text-lg md:text-xl font-bold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                                                {faq.question}
                                            </span>
                                            <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-primary text-primary-foreground rotate-90" : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                                                }`}>
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
