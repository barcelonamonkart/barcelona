import type { Metadata } from "next";
import HeadSection from "@/components/HeadSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Barcelona Tavern's privacy policy to learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeadSection title="Privacy Policy" bgImg="/industryNight.jpg" />

      <section className="bg-white text-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.15em] text-amber-600 font-semibold">
              Last Updated: 2-April-2026
            </p>
            {/* <p className="text-gray-700 leading-relaxed">
              Barcelona Tavern ("we," "our," or "us") respects your privacy and
              is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you visit our website.
            </p> */}
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how Barcelona Tavern collects, uses,
              and protects personal information when you visit our website,
              contact us, or interact with our services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes the types of information we may
              collect and how we handle it when you interact with Barcelona
              Calgary online.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              2. Information We Collect
            </h2>
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                a. Information You Provide
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>
                  Reservation details (such as date, time, and number of guests)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This information is collected when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                <li>Fill out a contact form</li>
                <li>Make a table reservation</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                b. Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Currently, we do not actively use cookies or tracking tools.
                However, basic technical information (such as IP address or
                browser type) may be collected automatically by our hosting
                provider for security and functionality purposes.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              <li>Respond to your inquiries</li>
              <li>Manage and confirm reservations</li>
              <li>Improve our website and customer experience</li>
              <li>Communicate with you regarding your requests</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              4. Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information. We do
              not share your data with third parties, except where required by
              law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use reasonable safeguards to protect personal data. While we
              strive to protect your information, no online transmission or
              storage system is completely secure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a user in Canada, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us using the details
              below.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 13,
              and we do not knowingly collect personal data from children.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated revision date.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              10. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">Barcelona Tavern</p>
            <p className="text-gray-700 leading-relaxed">
              318 8 Ave SW, Calgary, AB T2P 2Y9, Canada
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email:{" "}
              <span className="font-medium">events@barcelonatavern.com</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Phone: <span className="font-medium">403-265-6555</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
