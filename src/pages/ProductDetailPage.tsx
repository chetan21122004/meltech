import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Ruler, Layers, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import SEO from "@/components/SEO";
import productImg from "@/assets/product-comn.jpg";
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

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
            {/* Left: Product Image */}
            <div className="rounded-[2.5rem] overflow-hidden bg-muted border border-border/50 shadow-2xl h-[400px] md:h-[600px] group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: Specs & Quick Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#0D0D0D] rounded-[2.5rem] p-8 md:p-10 border border-white/10 flex-grow shadow-2xl flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Technical Specifications
                </h3>

                <div className="grid gap-5">
                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Ruler className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary/70 text-[10px] uppercase tracking-[0.2em] font-bold">Size Range</span>
                      <p className="font-bold text-white text-lg md:text-xl leading-none mt-1">{product.sizeRange}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary/70 text-[10px] uppercase tracking-[0.2em] font-bold">Material</span>
                      <p className="font-bold text-white text-base md:text-lg leading-tight mt-1">{product.material}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary/70 text-[10px] uppercase tracking-[0.2em] font-bold">Coating & Finish</span>
                      <p className="font-bold text-white text-lg md:text-xl leading-none mt-1">{product.coating}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Link */}
              <Link to="/contact" className="bg-orange-50/80 rounded-[2rem] p-8 border border-orange-100 flex items-center justify-between group hover:bg-orange-50 transition-all shadow-sm">
                <div>
                  <p className="text-primary font-bold text-xl mb-1">Need custom dimensions?</p>
                  <p className="text-muted-foreground text-sm font-medium">Our engineering team can help with your requirements.</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
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
            <div className="rounded-[2.5rem] overflow-hidden bg-muted border border-border/50 h-80 group">
              <img
                src={productImg}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
