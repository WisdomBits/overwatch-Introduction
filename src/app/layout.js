import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });
import "./globals.css";
import { createServerStore } from 'overwatch-ts/server';
import { Hydrated } from 'overwatch-ts';

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
  },
   icons: {
        icon: './favicon.ico',
      },
};

export default function RootLayout({ children }) {

  const serverStore = createServerStore()
    serverStore.set("theme","dark")
    const snapshot = serverStore.getSnapshot();
  return (
    <html lang="en">
      <body
        className={spaceGrotesk.className}
      >
        <Hydrated snapshot={snapshot}>
          {children}
        </Hydrated>
      </body>
    </html>
  );
}
