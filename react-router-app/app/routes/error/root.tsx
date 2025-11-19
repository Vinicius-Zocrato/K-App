import { isRouteErrorResponse, useRouteError } from "react-router";
import MainLayout from "~/layouts/MainLayout";

export function ErrorBoundary() {
    const error = useRouteError();
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <MainLayout>
            <div id='error-message'>
                <h1>{message}</h1>
                <a href='.'>Back to home</a>
                <p>{details}</p>
                {stack && (
                    <pre>
                        <code>{stack}</code>
                    </pre>
                )}
            </div>
        </MainLayout>
    );
}
