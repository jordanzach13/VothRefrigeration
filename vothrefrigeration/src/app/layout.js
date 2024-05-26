import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voth Refrigeration & Services",
  description: "Voth Refrigeration & Services details and contact information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header></Header>
        <div>{children}</div>
      </body>
    </html>
  );
}
