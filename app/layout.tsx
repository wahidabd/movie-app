import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import RootProvider from "@/components/RootProvider";
import React from "react";
import PrimaryLayout from "@/components/PrimaryLayout";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Movie App',
    description: 'A website for learning next js',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link rel="icon" href="/" />
        </head>
        <body className={inter.className}>
        <RootProvider>
            <PrimaryLayout>{children}</PrimaryLayout>
        </RootProvider>
        </body>
        </html>
    );
}