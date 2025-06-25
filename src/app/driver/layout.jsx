export default function DriverLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <h1>Driver Dashboard</h1>
                <main>{children}</main>
            </body>
        </html>
    )
}