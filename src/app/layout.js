import "./globals.css";
import localFont from "next/font/local";

import Header from "../components/layout/Header";
import ThemeProvider from "../components/providers/ThemeProvider";
import AuthProvider from "../components/providers/AuthProvider";

const vazir = localFont({
  src: [
    {
      path: "../fonts/Vazirmatn-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Vazirmatn-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/Vazirmatn-Bold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/Vazirmatn-Light.woff2",
      weight: "300",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata = {
  title: "Sirvana | سیروانا",
  description: "جامعه گیمرهای ایرانی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={vazir.className}>
          <ThemeProvider>
        <AuthProvider>
            <Header />
            {children}
        </AuthProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
