import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reecycle.app"),
  title: "REE — The Waste Reduction Company",
  description: "Waste reduction systems, recycling, ESG-ready reporting, circular products and hands-on workshops across the UAE.",
  icons: {
    icon: "/assets/ree-logo.svg",
    shortcut: "/assets/ree-logo.svg",
  },
  openGraph: {
    title: "REE — The Waste Reduction Company",
    description: "Find what is in the bags, recover what still has value and turn the result into reportable data.",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "REE — The Waste Reduction Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "REE — The Waste Reduction Company",
    description: "Independent waste reduction, recycling and reporting in the UAE.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=G-LJJ0ZDZVH8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '1644121047197168');\nfbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1644121047197168&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `_linkedin_partner_id = "10430556";\nwindow._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\nwindow._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(l) {\nif (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};\nwindow.lintrk.q=[]}\nvar s = document.getElementsByTagName("script")[0];\nvar b = document.createElement("script");\nb.type = "text/javascript";b.async = true;\nb.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";\ns.parentNode.insertBefore(b, s);})(window.lintrk);`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=10430556&fmt=gif" />
        </noscript>
      </body>
    </html>
  );
}
