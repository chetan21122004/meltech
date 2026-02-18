import { Helmet } from "react-helmet-async";

const SITE_NAME = "Meltech Melting Technology";
const DEFAULT_DESCRIPTION =
    "Meltech Melting Technology delivers precision-engineered CNC turned brass components, stamping, molding, and assembly solutions for electrical, gas, hydraulic & pneumatic industries worldwide.";
const DEFAULT_KEYWORDS =
    "precision manufacturing, CNC machining, brass components, metal parts, plastic moulding, industrial components, stamping, Meltech, Jamnagar, India";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    noIndex?: boolean;
}

const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    canonical,
    ogType = "website",
    ogImage,
    noIndex = false,
}: SEOProps) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Precision CNC Turned Components Manufacturer in India`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={SITE_NAME} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonical && <meta property="og:url" content={canonical} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}

            {/* Canonical */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Robots */}
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
        </Helmet>
    );
};

export default SEO;
