import aboutImage from "@/assets/about-image.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import blog1 from "@/assets/blog/blog-img-01.jpg";
import blog2 from "@/assets/blog/blog-img-02.jpg";
import blog3 from "@/assets/blog/blog-img-03.jpg";
export const blogs = [
    {
        id: "precision-engineering-trends-2025",
        category: "Manufacturing",
        date: "Jan 15, 2024",
        author: "Admin",
        title: "Precision Engineering Trends Shaping 2025",
        heroDescription: "Discover the latest innovations redefining precision engineering in 2025—from CNC automation and digital manufacturing to smarter, more efficient processes.",
        image: blog1,
        content: {
            intro: "As industries evolve, precision engineering continues to redefine global manufacturing standards. In 2025, new technologies and practices are accelerating innovation and efficiency.",
            bulletPoints: [
                "Adoption of AI-powered CNC machining",
                "Automation and robotics in production",
                "Integration of IIoT for real-time monitoring"
            ],
            body: "With demand for tighter tolerances and faster production, companies are adopting hybrid machining, additive manufacturing, and automated inspection systems. These ensure accuracy while reducing time-to-market.",
            sections: [
                {
                    title: "1. Smart Factories & Digital Twins",
                    content: "Digital twin technology is transforming the way manufacturers design and monitor components. Virtual simulations allow predictive maintenance and better product lifecycle management."
                },
                {
                    title: "2. Sustainable Materials & Eco-Processes",
                    content: "Manufacturers are shifting towards recyclable alloys, energy-efficient machining, and waste-reduction practices. Green engineering is no longer optional—it's a global mandate."
                },
                {
                    title: "3. Human-Machine Collaboration",
                    content: "The demand for micro-components in electronics and medical devices is driving investments in 5-axis and Swiss-type CNC machines capable of sub-micron precision."
                }
            ],
            quote: {
                text: "The future of manufacturing lies in precision, speed, and sustainability—those who evolve will lead.",
                author: "Industry Expert"
            }
        }
    },
    {
        id: "sustainability-modern-manufacturing",
        category: "Sustainability",
        date: "Jan 10, 2024",
        author: "Admin",
        title: "Sustainability In Modern Manufacturing",
        heroDescription: "How modern manufacturers are integrating sustainable practices in their operations while maintaining precision.",
        image: blog2,
        content: {
            intro: "Sustainability is no longer a buzzword—it's a business imperative. Modern manufacturers are finding innovative ways to reduce waste, conserve energy, and minimize environmental impact.",
            bulletPoints: [
                "Energy-efficient machining processes",
                "Recyclable material selection",
                "Waste reduction and circular economy"
            ],
            body: "From selecting eco-friendly raw materials to implementing energy-efficient CNC processes, the manufacturing industry is undergoing a green transformation.",
            sections: [
                {
                    title: "1. Green Manufacturing Practices",
                    content: "Companies are adopting lean manufacturing principles to minimize waste while maximizing output quality and efficiency."
                },
                {
                    title: "2. Energy Management",
                    content: "Smart energy monitoring systems help track and optimize power consumption across production lines."
                },
                {
                    title: "3. Circular Economy Approach",
                    content: "Designing products for recyclability and implementing material recovery programs are becoming standard practices."
                }
            ],
            quote: {
                text: "Sustainable manufacturing isn't just good for the planet—it's good for business.",
                author: "Sustainability Director"
            }
        }
    },
    {
        id: "industries-we-serve-globally",
        category: "Industry News",
        date: "Jan 05, 2024",
        author: "Admin",
        title: "Industries We Serve Across The Globe",
        heroDescription: "A look at the diverse industries we serve and how precision manufacturing enables innovation across sectors worldwide.",
        image: blog3,
        content: {
            intro: "Our precision-engineered components find applications across a wide spectrum of industries, from automotive to aerospace, medical to consumer electronics.",
            bulletPoints: [
                "Automotive and electric vehicles",
                "Aerospace and defense",
                "Medical devices and equipment"
            ],
            body: "Each industry has unique requirements for precision, durability, and performance. Our expertise allows us to meet these diverse needs with customized solutions.",
            sections: [
                {
                    title: "1. Automotive Excellence",
                    content: "From fuel injection systems to electric vehicle components, our parts meet the demanding standards of the automotive industry."
                },
                {
                    title: "2. Aerospace Precision",
                    content: "When failure is not an option, aerospace manufacturers trust our certified components for critical applications."
                },
                {
                    title: "3. Medical Innovation",
                    content: "Biocompatible materials and micro-precision enable life-saving medical devices and instruments."
                }
            ],
            quote: {
                text: "Precision manufacturing is the backbone of innovation across every industry.",
                author: "Global Operations Director"
            }
        }
    }
];
