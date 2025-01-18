import  { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
})

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
})

export const metadata = {
  title: "Tri Wahyudi Portfolio",
  description: "Portofolio Tri Wahyudi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
      className={`${outfit.className} ${ovo.className} antialised leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`  }
      >
        {children}
      </body>
    </html>
  );
}
