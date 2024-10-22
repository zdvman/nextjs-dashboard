// layout.tsx is a layout component that wraps the entire application. It is used to provide a consistent layout across all pages.
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts"; // Import the Inter font from app/ui/fonts.ts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The layout component uses the Inter font from Google Fonts and applies */}
      {/* it to the body element. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
