import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, createTheme, DEFAULT_THEME } from '@mantine/core'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ]
})

const theme = createTheme({
  fontFamily: satoshi.style.fontFamily,
  headings: { fontFamily: `${satoshi.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`}
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme={'light'}>
          <div className="h-screen">{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
