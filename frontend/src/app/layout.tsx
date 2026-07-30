import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenHallu",
  description:
    "A modular research hub for multimodal hallucination datasets, benchmarks, detection, quantification, mitigation, and papers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
