import { Link } from "react-router";
import { useState } from "react";
import OpenMenuButton from "~/assets/svg/Menu";
import "./../scss/Header.scss";
import CloseMenuButton from "~/assets/svg/Close";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div className="nav-brand">
                    <OpenMenuButton onClick={open} />
                    <span>K-Fêt</span>
                </div>
                <Link to="/#home" style={{ textDecoration: "None" }}>
                    <img className="logo" src="/logo.png" alt="Logo K-fêt" />
                </Link>
            </div>
            {isOpen && <div className="background-button" onClick={close} />}
            <div className={"nav-links" + (isOpen ? " nav-links-open" : "")}>
                <div className="mini-header">
                    <CloseMenuButton onClick={close} />
                    <Link
                        to="/#home"
                        style={{ textDecoration: "None" }}
                        onClick={close}
                    >
                        <img
                            className="logo"
                            src="/logo.png"
                            alt="Logo K-fêt"
                        />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to="/#horaires" onClick={close}>
                            Horaires
                        </Link>
                    </li>
                    <li>
                        <Link to="/#carte" onClick={close}>
                            Carte
                        </Link>
                    </li>
                    <li>
                        <Link to="/#services" onClick={close}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/#localisation" onClick={close}>
                            Localisation
                        </Link>
                    </li>
                    <div className="separator" />
                    <li>
                        <Link to="/login" onClick={close}>
                            Se connecter
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
