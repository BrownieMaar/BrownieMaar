import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Márton Barna - CV",
  description: "CV of Márton BARNA, a Full Stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          {children}
        </body>
    </html>
  );
}
