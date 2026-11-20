import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import GlobalBackToTop from "@/components/GlobalBackToTop";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import SmoothScroll from "@/components/SmoothScroll";
// import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barcelonatavern.ca"),
  title: {
    default: "Barcelona Tavern",
    template: "%s | Barcelona Tavern",
  },
  description:
    "Barcelona Tavern is a downtown Calgary spot for craft cocktails, great food, private events, and good times on tap at 318 8 Ave SW.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Barcelona Tavern",
    "Calgary restaurant",
    "Downtown Calgary bar",
    "Barcelona Tavern Calgary",
    "Calgary cocktails",
    "Calgary bar",
    "private dining Calgary",
    "Calgary events venue",
    "Calgary menu",
  ],
  applicationName: "Barcelona Tavern",
  category: "restaurant",
  authors: [{ name: "Barcelona Tavern" }],
  creator: "Barcelona Tavern",
  publisher: "Barcelona Tavern",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Barcelona Tavern | Cocktails, Dining & Events in Downtown Calgary",
    description:
      "Discover Barcelona Tavern for craft cocktails, good food, private events, and a lively atmosphere in the heart of downtown Calgary.",
    siteName: "Barcelona Tavern",
    type: "website",
    locale: "en_CA",
    url: "https://www.barcelonatavern.ca",
    images: [
      {
        url: "/interior1.jpg",
        width: 1200,
        height: 630,
        alt: "Barcelona Tavern dining and cocktail experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcelona Tavern | Cocktails, Dining & Events in Downtown Calgary",
    description:
      "Craft cocktails, good food, private events, and vibrant nights out at Barcelona Tavern in downtown Calgary.",
    images: ["/interior1.jpg"],
  },
  verification: {
    google: "sMdiLqIbg2kPCBiLtrLNvHvp_J54FcKYYJR-ll7kcD8",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Barcelona Tavern",
  image: "https://www.barcelonatavern.ca/interior1.jpg",
  url: "https://www.barcelonatavern.ca",
  telephone: "+1-403-265-6555",
  email: "events@barcelonatavern.com",
  priceRange: "$$",
  servesCuisine: ["Cocktail Bar", "North American"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "318 8 Ave SW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2P 2Y9",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday"],
      opens: "14:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "14:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "14:00",
      closes: "02:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/barcelonatavern/",
    "https://www.facebook.com/barcelonatavern/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        {/* <Preloader /> */}
        <SmoothScroll />
        <PageTransitions />
        <Header />
        {children}
        <FooterSection />
        <GlobalBackToTop />
      </body>
      <GoogleAnalytics gaId="G-WY3S7B8EGJ" />
    </html>
  );
}
