import "./globals.css";

export const metadata = {
  title: "Good Luck Satta",
  description: "Good Luck Satta",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: { width: "device-width", initialScale: 1 },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
