import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import SEO from "@/components/SEO";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Products - CNC Turned Brass Components & Parts"
        description="Explore Meltech's full range of precision CNC turned components, brass inserts, electrical parts, gas fittings, plumbing components, fasteners, stamping & assembly solutions manufactured in India."
        keywords="brass CNC parts, CNC turned components, brass inserts, threaded inserts, brass electrical terminals, brass gas fittings, LPG brass parts, plumbing fittings, brass fasteners, stamping components, assembly services, sliding head components, swiss turned parts"
      />
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </div>
  );
};

export default ProductsPage;
