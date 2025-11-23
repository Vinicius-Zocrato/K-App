import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";
import MainLayout from "~/layouts/MainLayout";

export function ErrorBoundary() {
    const navigate = useNavigate();
    const error = useRouteError();
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = "Error" + error.status;
        details = error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <MainLayout>
            <div id='error-message' className='center'>
                <h1>{message}</h1>
                <p>{details}</p>
                <button onClick={() => navigate(-1)}>Retour</button>
                {stack && (
                    <pre>
                        <code>{stack}</code>
                    </pre>
                )}
            </div>
        </MainLayout>
    );
}
