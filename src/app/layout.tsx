import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
// const geistSans = DM_Sans({ subsets: ["latin"], variable: "--font-geist-sans" });
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoMinds",
  description: "Automate Your Work With AutoMinds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

      <html lang="en">
        <body
          className={font.className} >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
