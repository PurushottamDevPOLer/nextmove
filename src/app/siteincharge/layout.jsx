export default function SiteinchargeLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <h1>Siteincharge Dashboard</h1>
                <main>{children}</main>
            </body>
        </html>
    )
}