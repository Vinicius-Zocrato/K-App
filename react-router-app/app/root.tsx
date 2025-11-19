import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import App from "./layouts/App";
import { ErrorBoundary } from "./routes/error/root";
import "./app.scss";
import "./scss/error.scss";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default App;

export { ErrorBoundary };
