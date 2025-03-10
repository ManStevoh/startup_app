import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import your local font using the helper from next/font/local
const workSans = localFont({
  src: [
    { 
      path: './fonts/workSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-extraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    { 
      path: './fonts/._WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    { 
      path: './fonts/workSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: '--font-work-sans',
});

// Initialize your Google fonts. (Adjust options as needed)
const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
  
}
