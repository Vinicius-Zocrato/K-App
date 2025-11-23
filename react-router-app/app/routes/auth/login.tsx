import { Form } from "react-router";
import type { Route } from "../home/+types";
import "~/scss/login.scss";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Login" },
        { name: "description", content: "Page de login" },
    ];
}

export default function Login() {
    return (
        <div className='center'>
            <div className='login-container'>
                <h3>Se connecter</h3>
                <Form method='post'>
                    <input type='text' placeholder='Mail BdE' id='username' />
                    <input
                        type='password'
                        placeholder='Mot de passe'
                        id='password'
                    />
                    <button type='submit'>Connexion</button>
                </Form>
            </div>
        </div>
    );
}
