import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Phan Hoài An",
  description:
    "Fullstack Engineer specialize in Web Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title?.toString()}</title>
        <link rel="shortcut icon" href="/favicon.co" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="description" content={metadata.description?.toString()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metadata.title?.toString()} />
        <meta name="description" content={metadata.description?.toString()} />

        <meta property="og:title" content={metadata.title?.toString()} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hoaian.netlify.app" />
        <meta
          property="og:image"
          content="https://hoaian.netlify.app/screenshot.png"
        />
        <meta
          property="og:description"
          content={metadata.description?.toString()}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hoaian" />
        <meta name="twitter:title" content={metadata.title?.toString()} />
        <meta
          name="twitter:description"
          content={metadata.description?.toString()}
        />
        <meta name="twitter:creator" content="@hoaian" />
        <meta
          name="twitter:image"
          content="https://hoaian.netlify.app/screenshot.png"
        />
        <script src="./gatsby.js" async={false}></script>
        <script src="./sw.js" async={false}></script>
      </head>

      {/* <meta itemprop="name" content="John Carlo Devera | Frontend Developer"/>
        <meta itemprop="description" content="Hey! I'm John Carlo Devera, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}

      <body className={`antialiased bg-zinc-800`} id="root">
        {children}
        <Analytics />
      </body>

      <script
        src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"
        async
      ></script>
    </html>
  );
}
