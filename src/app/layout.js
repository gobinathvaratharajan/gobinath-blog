import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import { cookies } from "next/headers";

import { LIGHT_TOKENS, DARK_TOKENS, BLOG_TITLE, BLOG_DESCRIPTION, COLOR_THEME_COOKIE_NAME } from "@/constants";
import Header from "@/components/Header";
import MotionPreferences from "@/components/MotionPreferences";

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

export const metadata = {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  };

export default function RootLayout({ children }) {
    // TODO: Dynamic theme depending on user preference
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "light";
  return (
    <MotionPreferences>
    <html lang="en"  className={clsx(geistSans.variable, geistMono.variable)}
    data-color-theme={theme}
    style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}>
      <body>
      <Header initialTheme={theme} />
      <main>{children}</main>
      </body>
    </html>
    </MotionPreferences>
  );
}
