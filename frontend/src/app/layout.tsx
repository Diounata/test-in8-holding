import { DependenciesWrapper } from "@/components/dependencies-wrapper";
import Header from "@/components/layout/header";
import MobileNavigation from "@/components/layout/mobile-navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shopmart",
    default: "Shopmart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <DependenciesWrapper>
          <Suspense>
            <div className="group/design-root relative flex size-full min-h-screen flex-col justify-between bg-[#f8f9fc]">
              <Header />

              <div className="flex flex-grow flex-col overflow-x-hidden px-4 py-3">
                {children}
              </div>

              <MobileNavigation />
            </div>
          </Suspense>
        </DependenciesWrapper>
      </body>
    </html>
  );
}
