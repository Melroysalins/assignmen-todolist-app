"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { appstore } from "@/store/appstore";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={appstore}>{children}</Provider>
      </body>
    </html>
  );
}
