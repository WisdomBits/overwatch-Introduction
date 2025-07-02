import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });
import "./globals.css";

export const metadata = {
  metadataBase : new URL("https://overwatchts.in/"),
  title: {
    default : "Overwatch - developer-friendly state management library"},
  description: "Overwatch Ts is a lightweight, fast, and developer-friendly state management library for React and Next.js, designed to simplify complex state without boilerplate.",
  openGraph: {
     title: "Overwatch",
  description: "Overwatch TS is a lightweight, fast, and developer-friendly state management library for React and Next.js, designed to simplify complex state without boilerplate.",
  type : "website",
  locale : "en_IN",
  url : "https://overwatchts.in/", 
  siteName : "Overwatch Ts"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={spaceGrotesk.className}
      >
        {children}
      </body>
    </html>
  );
}
