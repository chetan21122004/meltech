import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Ruler, Layers, Sparkles } from "lucide-react";
import img00 from "@/assets/products/00.png";
import img01 from "@/assets/products/01.png";
import img02 from "@/assets/products/02.png";
import img03 from "@/assets/products/03.png";
import img04 from "@/assets/products/04.png";
import img05 from "@/assets/products/05.png";
import img06 from "@/assets/products/06.png";
import img07 from "@/assets/products/07.png";
import img08 from "@/assets/products/08.png";
import img09 from "@/assets/products/09.png";
import img10 from "@/assets/products/10.png";
import img11 from "@/assets/products/11.png";
import img12 from "@/assets/products/12.png";
import img13 from "@/assets/products/13.png";
import img14 from "@/assets/products/14.png";
import img16 from "@/assets/products/16.png";

const products = [
  {
    id: "brass-cpvc-upvc-inserts",
    title: "Brass C-PVC & U-PVC Inserts",
    shortDescription: "Premium Brass C-PVC and U-PVC inserts designed with precision for plumbing, hydraulic, and sanitary applications.",
    fullDescription: "We produce a wide variety of brass UPVC insert fittings and brass CPVC insert fittings, including both male and female inserts. These fittings are designed with multiple outer surfaces—straight, diamond-shaped, and cross-knurled—for superior grip in plastic moulding.",
    image: img00,
    sizeRange: "3mm to 60mm",
    material: "CuZn39Pb3, CuZn58Pb2, CuZn58Pb1.5, CuZn37Pb2, CuZn37, CuSn6",
    coating: "Natural, Nickel Plated, Tin Plated",
    keyDetails: {
      shape: "Round, Hexagonal, Knurled",
      applications: "Plumbing, Sanitary, Plastic Moulding",
      production: "High-speed automatic turning",
      features: "High pull-out resistance, torque resistance"
    },
    approach: "Engineered for maximum retention in plastic moulding processes.",
    result: "Leak-proof and durable joints for plumbing systems."
  },
  {
    id: "micro-turning-components",
    title: "Micro Turning Components",
    shortDescription: "Ultra-precise micro turned parts for electronics, medical devices, and precision instruments.",
    fullDescription: "Our micro turning capabilities produce components with exceptional precision for demanding applications. Using advanced Swiss-type lathes and precision tooling, we manufacture micro parts that meet the tightest tolerances.",
    image: img01,
    sizeRange: "0.5mm to 10mm",
    material: "Brass, Stainless Steel, Aluminum, Copper",
    coating: "Gold, Silver, Nickel Plated",
    keyDetails: {
      shape: "Round, Cylindrical, Custom Profiles",
      applications: "Electronics, Medical, Aerospace, Instrumentation",
      production: "Swiss-type CNC turning with live tooling",
      features: "Tight tolerances, mirror finish, complex geometries"
    },
    approach: "We employ state-of-the-art micro machining centers with sub-micron positioning accuracy.",
    result: "Components that meet the most demanding specifications for precision industries."
  },
  {
    id: "turning-components",
    title: "Turning Components",
    shortDescription: "High-volume turned components for automotive, electrical, and industrial applications.",
    fullDescription: "Our turning division specializes in producing high-quality turned components using multi-spindle automatics and CNC turning centers. We handle everything from simple pins to complex multi-feature parts.",
    image: img02,
    sizeRange: "5mm to 100mm",
    material: "Brass, Steel, Stainless Steel, Aluminum",
    coating: "Zinc, Chrome, Nickel Plated",
    keyDetails: {
      shape: "Custom as per drawing",
      applications: "Automotive, Electrical, Plumbing, Industrial",
      production: "Multi-spindle and CNC turning",
      features: "High volume capability, consistent quality"
    },
    approach: "Optimized processes for efficiency and quality to ensure competitive pricing.",
    result: "Reliable supply of precision turned parts meeting OEM standards."
  },
  {
    id: "brass-cnc-parts",
    title: "Brass CNC Parts",
    shortDescription: "Complex CNC machined brass components for critical applications.",
    fullDescription: "Our CNC machining facility produces complex brass parts with multi-axis capabilities. From simple to intricate geometries, we deliver precision-machined components.",
    image: img03,
    sizeRange: "10mm to 200mm",
    material: "Free-cutting Brass, Leaded Brass, Naval Brass",
    coating: "Nickel, Chrome, Passivation",
    keyDetails: {
      shape: "Complex 3D geometries",
      applications: "Valves, Fittings, Connectors, Housings",
      production: "3-axis to 5-axis CNC machining",
      features: "Complex features, tight tolerances, excellent finish"
    },
    approach: "Advanced CAM software and precision CNC machines transform complex designs into reality.",
    result: "Premium quality CNC parts that meet the most demanding specifications."
  },
  {
    id: "stamping-components",
    title: "Stamping Components",
    shortDescription: "Precision stamped parts and sheet metal components.",
    fullDescription: "We offer high-quality metal stamping services for various industries. Our capabilities include blanking, piercing, bending, and forming of sheet metal parts.",
    image: img04,
    sizeRange: "Custom",
    material: "Brass, Copper, Steel, Stainless Steel",
    coating: "Natural, Tin, Nickel, Zinc",
    keyDetails: {
      shape: "Custom Sheet Metal",
      applications: "Electrical, Automotive, Consumer Goods",
      production: "Power Press, Progressive Die",
      features: "High speed production, consistent repeatability"
    },
    approach: "Efficient tooling design and high-speed presses.",
    result: "Cost-effective large volume production of metal parts."
  },
  {
    id: "brass-gas-parts",
    title: "Brass Gas Parts",
    shortDescription: "Safe and reliable brass components for gas applications.",
    fullDescription: "Specialized brass fittings and valves for the gas industry, ensuring leak-proof performance and safety compliance.",
    image: img05,
    sizeRange: "Standard & Custom",
    material: "Brass (IS 319, CZ121)",
    coating: "Natural, Nickel",
    keyDetails: {
      shape: "Valves, Nozzles, Connectors",
      applications: "LPG, CNG, Industrial Gas",
      production: "Forging & Machining",
      features: "Leak-proof, high pressure resistance"
    },
    approach: "Strict quality control and pressure testing.",
    result: "Safety-critical components you can trust."
  },
  {
    id: "sliding-head-components",
    title: "Sliding Head Components",
    shortDescription: "Complex high-precision parts made on Sliding Head Automats.",
    fullDescription: "Ideal for long, slender parts with complex features. Our sliding head machines ensure high concentricity and superior surface finish.",
    image: img06,
    sizeRange: "Ø2mm to Ø32mm",
    material: "Steel, Stainless Steel, Brass",
    coating: "As per requirement",
    keyDetails: {
      shape: "Long Shafts, intricate profiles",
      applications: "Medical, Automotive, Defense",
      production: "Sliding Head (Swiss type)",
      features: "Single setup machining, high precision"
    },
    approach: "Using latest generation Swiss-type CNCs.",
    result: "Parts with exceptional accuracy and finish."
  },
  {
    id: "turn-mill-parts",
    title: "Turn-Mill Parts",
    shortDescription: "Completed parts in a single setup using Turn-Mill technology.",
    fullDescription: "Combining turning and milling capabilities, we produce complex parts without the need for secondary operations, ensuring better accuracy.",
    image: img07,
    sizeRange: "10mm to 250mm",
    material: "All Engineering Metals",
    coating: "Various options",
    keyDetails: {
      shape: "Complex Multi-axis",
      applications: "Aerospace, Hydraulics, General Engineering",
      production: "Turn-Mill Centers",
      features: "Reduced handling, high geometric accuracy"
    },
    approach: "Integrated manufacturing processes.",
    result: "Faster turnaround and higher quality complex parts."
  },
  {
    id: "brass-electrical-parts",
    title: "Brass Electrical Parts",
    shortDescription: "Conductive brass components for the electrical industry.",
    fullDescription: "Terminals, pins, sockets, block connectors, and other conductive parts manufactured to precise electrical standards.",
    image: img08,
    sizeRange: "Custom",
    material: "High Conductivity Brass",
    coating: "Tin, Silver, Gold",
    keyDetails: {
      shape: "Pins, Sockets, Terminals",
      applications: "Switchgear, PCBs, Wiring Accessories",
      production: "Turning & Stamping",
      features: "High conductivity, corrosion resistance"
    },
    approach: "Materials selection focus on conductivity.",
    result: "Reliable electrical connections."
  },
  {
    id: "hydraulic-pneumatic-parts",
    title: "Hydraulic & Pneumatic Parts",
    shortDescription: "Robust components for fluid power systems.",
    fullDescription: "Fittings, valves, and manifolds capable of withstanding high pressures and harsh environments.",
    image: img09,
    sizeRange: "1/8\" to 2\"",
    material: "Brass, Steel, Stainless Steel",
    coating: "Zinc, Nickel",
    keyDetails: {
      shape: "Fittings, Valve Bodies",
      applications: "Hydraulic Systems, Pneumatic Controls",
      production: "CNC Machining",
      features: "High pressure rating, leak integrity"
    },
    approach: "Focus on surface finish and sealing areas.",
    result: "Leak-free performance under pressure."
  },
  {
    id: "auto-gas-parts",
    title: "Auto Gas Parts",
    shortDescription: "Automotive LPG/CNG conversion kit components.",
    fullDescription: "Precision engineered parts for automotive gas systems, ensuring performance and emission compliance.",
    image: img10,
    sizeRange: "Custom",
    material: "Brass, Aluminum",
    coating: "Anodized, Natural",
    keyDetails: {
      shape: "Regulator parts, Injector nozzles",
      applications: "Automotive LPG/CNG Kits",
      production: "Precision Machining",
      features: "Temperature stable, durable"
    },
    approach: "Automotive grade quality standards.",
    result: "Reliable vehicle performance."
  },
  {
    id: "brass-fasteners",
    title: "Brass Fasteners",
    shortDescription: "Non-corrosive brass screws, nuts, and bolts.",
    fullDescription: "A complete range of brass fasteners for marine, electrical, and general assembly applications.",
    image: img11,
    sizeRange: "M2 to M20",
    material: "High Tensile Brass",
    coating: "Natural, Nickel",
    keyDetails: {
      shape: "Screws, Nuts, Bolts, Washers",
      applications: "Marine, Electrical, Decorative",
      production: "Cold Header / Turning",
      features: "Corrosion proof, non-magnetic"
    },
    approach: "Standard and custom thread profiles.",
    result: "Long-lasting fastening solutions."
  },
  {
    id: "plastic-injection-moulding",
    title: "Plastic Injection Moulding",
    shortDescription: "Custom plastic components and over-moulded parts.",
    fullDescription: "We provide plastic injection moulding services, often combined with our metal inserts for complete component solutions.",
    image: img12,
    sizeRange: "Small to Medium parts",
    material: "ABS, Nylon, PP, PC, Delrin",
    coating: "N/A",
    keyDetails: {
      shape: "Complex 3D Plastic parts",
      applications: "Consumer Goods, Electronics, Automotive",
      production: "Injection Moulding",
      features: "Lightweight, complex shapes, insert moulding"
    },
    approach: "Integrated mould design and manufacturing.",
    result: "High quality plastic and composite parts."
  },
  {
    id: "rubber-moulding",
    title: "Rubber Moulding",
    shortDescription: "Rubber seals, gaskets, and moulded components.",
    fullDescription: "Custom rubber parts for sealing, vibration dampening, and protection.",
    image: img13,
    sizeRange: "Custom",
    material: "NBR, EPDM, Silicone, Viton",
    coating: "N/A",
    keyDetails: {
      shape: "O-rings, Seals, Grommets",
      applications: "Sealing, Insulation, Damping",
      production: "Compression / Injection Moulding",
      features: "Elasticity, chemical resistance"
    },
    approach: "Material selection based on application environment.",
    result: "Effective sealing and protection."
  },
  {
    id: "assembly-products",
    title: "Assembly Products",
    shortDescription: "Value-added sub-assemblies and kits.",
    fullDescription: "We offer assembly services to deliver ready-to-use sub-assemblies, reducing your production time and line complexity.",
    image: img14,
    sizeRange: "Custom",
    material: "Mixed Materials",
    coating: "As per part specs",
    keyDetails: {
      shape: "Assembled Units",
      applications: "Various Industries",
      production: "Manual & Automated Assembly",
      features: "Tested & verified assemblies"
    },
    approach: "One-stop solution from part manufacturing to assembly.",
    result: "Simplified supply chain for our customers."
  },
  {
    id: "new-product",
    title: "New Product",
    shortDescription: "Our latest innovation in precision manufacturing.",
    fullDescription: "Introducing our newest product line, developed to meet emerging industry needs with the same Meltech quality promise.",
    image: img16,
    sizeRange: "Custom",
    material: "Custom",
    coating: "Custom",
    keyDetails: {
      shape: "Custom",
      applications: "New Applications",
      production: "Advanced Manufacturing",
      features: "Innovation, Efficiency"
    },
    approach: "Customer-driven innovation.",
    result: "Cutting-edge solutions."
  }
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId) || products[0];
  const currentIndex = products.findIndex(p => p.id === productId);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16">
        <div className="absolute inset-0 bg-card">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 text-muted-foreground mb-8">
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <span>-</span>
              <span className="text-primary">{product.title}</span>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 max-w-sm hidden lg:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs">●</span>
            </span>
            <span className="text-muted-foreground text-sm">Global Supply</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {product.title}
          </h2>

          {/* Main Product Image */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Specs Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Ruler className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Size Range</span>
                <p className="font-bold text-foreground">{product.sizeRange}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Material</span>
                <p className="font-bold text-foreground text-sm">{product.material}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Coating & Finish</span>
                <p className="font-bold text-foreground">{product.coating}</p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Details & Image Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Details</h3>
              <div className="space-y-4">
                <p><span className="font-bold text-foreground">Shape:</span> <span className="text-muted-foreground">{product.keyDetails.shape}</span></p>
                <p><span className="font-bold text-foreground">Applications:</span> <span className="text-muted-foreground">{product.keyDetails.applications}</span></p>
                <p><span className="font-bold text-foreground">Production:</span> <span className="text-muted-foreground">{product.keyDetails.production}</span></p>
                <p><span className="font-bold text-foreground">Features:</span> <span className="text-muted-foreground">{product.keyDetails.features}</span></p>
              </div>
            </div>
          </div>

          {/* Approach & Result */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach & Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{product.approach}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Result</h3>
              <p className="text-muted-foreground leading-relaxed">{product.result}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t border-border pt-8">
            {prevProduct ? (
              <Link
                to={`/products/${prevProduct.id}`}
                className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                PREV PRODUCT
              </Link>
            ) : <div />}
            {nextProduct ? (
              <Link
                to={`/products/${nextProduct.id}`}
                className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
              >
                NEXT PRODUCT
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
