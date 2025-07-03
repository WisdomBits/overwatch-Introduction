import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });
import { createServerStore } from 'overwatch-ts/server';
import { Hydrated } from 'overwatch-ts';

export const metadata = {
  metadataBase: new URL("https://overwatchts.in"),
  title: {
    default: "Overwatch TS Blog - Tutorials, Updates, and Insights",
    template: "%s | Overwatch TS Blog"
  },
  description:
    "Stay updated with Overwatch TS, a fast, lightweight React state management library. Explore tutorials, architecture deep dives, performance optimization, and release updates to enhance your developer workflow.",
  openGraph: {
    title: "Overwatch TS Blog - Tutorials, Updates, and Insights",
    description:
      "Stay updated with Overwatch TS, a fast, lightweight React state management library. Explore tutorials, architecture deep dives, performance optimization, and release updates to enhance your developer workflow.",
    type: "website",
    locale: "en_IN",
    url: "https://overwatchts.in/blog",
    siteName: "Overwatch TS",
    images: [
      {
        url: "https://overwatchts.in/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Overwatch TS Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Overwatch TS Blog - Tutorials, Updates, and Insights",
    description:
      "Stay updated with Overwatch TS, a fast, lightweight React state management library. Explore tutorials, architecture deep dives, performance optimization, and release updates to enhance your developer workflow.",
    images: ["https://overwatchts.in/opengraph-image.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
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
