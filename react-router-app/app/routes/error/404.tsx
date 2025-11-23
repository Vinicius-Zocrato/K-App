import { useNavigate } from "react-router";
import type { Route } from "../home/+types";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Erreur 404" },
        { name: "description", content: "Page 404" },
    ];
}

export default function Home() {
    const navigate = useNavigate();
    return (
        <div id='error-message' className='center'>
            <h1>404</h1>
            <p>Oups... Cette page n'existe pas :/</p>
            <button onClick={() => navigate(-1)}>Retour</button>
        </div>
    );
}
