import "./globals.css";

export const metadata = {
  title: "Next Move",
  description: "Next Move App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
