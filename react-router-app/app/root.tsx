import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import { ErrorBoundary } from "./routes/error/root";
import MainLayout from "./layouts/MainLayout";
import App from "./layouts/App";
import "./scss/error.scss";
import "./app.scss";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
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

export function HydrateFallback() {
    return (
        <MainLayout>
            <div style={{ textAlign: "center", paddingTop: "10rem" }}>
                <p>Chargement de l'application...</p>
            </div>
        </MainLayout>
    );
}

export { ErrorBoundary };
