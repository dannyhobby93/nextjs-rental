import "@/assets/styles/global.css";

export const metadata = {
    title: "Property Pulse",
    keywords: ["rental", "property", "find", "local"],
    description: "Find local rental properties",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
