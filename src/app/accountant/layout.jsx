export default function AccountantLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <h1>Accountant Dashboard</h1>
                <main>{children}</main>
            </body>
        </html>
    )
}