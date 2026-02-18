import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Ruler, Layers, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import SEO from "@/components/SEO";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId) || products[0];
  const currentIndex = products.findIndex(p => p.id === productId);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={product.seoTitle || `${product.title} - Precision Brass Components`}
        description={product.seoDescription || product.shortDescription || product.fullDescription?.substring(0, 160)}
        keywords={product.seoKeywords || `${product.title.toLowerCase()}, brass ${product.title.toLowerCase()}, precision turned parts, CNC machined parts, Meltech`}
      />
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
