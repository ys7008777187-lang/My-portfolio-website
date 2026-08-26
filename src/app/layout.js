import { Inter, Bangers, Comic_Neue, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import ScrollToTop from "../components/ui/ScrollToTop/ScrollToTop";
import FlowingRibbon from "../components/ui/FlowingRibbon/FlowingRibbon";
import { ThemeProvider } from "../context/ThemeContext";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://yashsrivastava.design";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Yash Srivastava',
    default: 'Yash Srivastava | UI/UX Designer & Product Designer Portfolio',
  },
  description: 'Portfolio of Yash Srivastava — a Product Designer & Assistant Professor specializing in UI/UX, Web Design, App Design, and Motion Design. Creating intuitive, accessible, and visually engaging digital experiences.',
  keywords: [
    'Yash Srivastava',
    'UI Designer',
    'UX Designer',
    'Product Designer',
    'Web Design',
    'App Design',
    'Motion Design',
    'Design Systems',
    'Micro-interactions',
    'React',
    'Next.js',
    'Framer Motion',
    'Portfolio',
    'Bangalore Designer',
    'Indian Designer',
  ],
  authors: [{ name: 'Yash Srivastava', url: SITE_URL }],
  creator: 'Yash Srivastava',
  publisher: 'Yash Srivastava',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Yash Srivastava Portfolio',
    title: 'Yash Srivastava | UI/UX Designer & Product Designer',
    description: 'Portfolio of Yash Srivastava — creating intuitive, accessible, and visually engaging digital experiences through design thinking and micro-interactions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yash Srivastava — UI/UX Designer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Srivastava | UI/UX Designer & Product Designer',
    description: 'Portfolio of Yash Srivastava — creating intuitive, accessible, and visually engaging digital experiences.',
    images: ['/og-image.jpg'],
    creator: '@yashsrivastava',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'design',
};

export const viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var u=localStorage.getItem('theme_user_selected');var t=localStorage.getItem('theme');if(u==='true'&&(t==='light'||t==='dark')){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
        <script src="https://t.contentsquare.net/uxa/f9a941e68d4ba.js" async></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.yashsrivastava.co.in" />
        <link rel="preload" as="video" href="/videos/hero-bg.mp4" type="video/mp4" />
        <link rel="dns-prefetch" href="https://cdn.yashsrivastava.co.in" />
      </head>
      <body className={`${inter.variable} ${bangers.variable} ${comicNeue.variable} ${permanentMarker.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <FlowingRibbon />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>

      </body>
    </html>
  );
}
