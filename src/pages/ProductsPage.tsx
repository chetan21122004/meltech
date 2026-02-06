import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </div>
  );
};

export default ProductsPage;
