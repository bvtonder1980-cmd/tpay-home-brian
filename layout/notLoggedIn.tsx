
export default function NotLoggedInLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="ru">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <meta name="format-detection" content="telephone=no"/>
                    <title>travelPay - Revolutionising travel payments</title>
                </head>
                <body>{children}</body>
            </html>
        </>
    );
}