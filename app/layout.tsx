import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const poppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ALTRAD - TRAINING SURVEY",
  description: "Your opinion matters. This quick survey helps us improve future training sessions and ensures we meet your leadership development needs.",
  openGraph: {
    title: "...",
    description: "...",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <head>
        <link
          rel="icon"
          href="@/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </head>

      {/* <GoogleAnalyticScript /> */}

      <body className={poppins.variable}>
        {/* <AuthProvider> */}
        {/* <NavBar /> */}
        {/* <Suspense fallback={<p>Loading..</p>}> */}
        <main className="p-0 h-screen">{children}</main>
        {/* </Suspense> */}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
