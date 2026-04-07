import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Waaw for custom software development, web solutions, and digital transformation. We're here to help your business scale.",
  keywords: "contact waaw, software development inquiry, project collaboration, digital transformation support, custom software solutions, web development contact, business automation contact, technology services inquiry",
  openGraph: {
    title: "Contact Waaw – Let's Build What's Next",
    description: "Reach out to discuss your project inquiry, collaborate on ideas, or get quick support for your digital needs.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
