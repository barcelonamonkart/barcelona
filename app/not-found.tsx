import type { Metadata } from "next";
import Link from "next/link";
import HeadSection from "@/components/HeadSection";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <HeadSection title="404" bgImg="/images/interior3.jpg" />

      <section className="bg-white text-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center max-w-2xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Oops! This page is off the menu.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to the good times.
          </p>
          <Link
            href="/"
            className="inline-block border border-gray-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition hover:bg-gray-900 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
