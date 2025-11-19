import { Link } from "react-router";
import { useState } from "react";
import Menu from "~/assets/svg/Menu";
import "./../scss/Header.scss";
import Close from "~/assets/svg/Close";

export default function Header() {
    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <nav className='navbar'>
            <div className='container'>
                <Link to='/#home' style={{ textDecoration: "None" }}>
                    <div className='nav-brand'>
                        <img
                            className='logo'
                            src='/logo.png'
                            alt='Logo K-fêt'
                        />
                        <span>K-Fêt</span>
                    </div>
                </Link>
                <div className='open-menu-btn'>
                    <Menu onClick={() => setOpen(true)} />
                </div>
            </div>
            {open && (
                <div
                    className='background-button'
                    onClick={() => setOpen(false)}
                />
            )}
            <div className={"nav-links" + (open ? " nav-links-open" : "")}>
                <div className='mini-header'>
                    <Close onClick={() => setOpen(false)} />
                    <Link to='/#home' style={{ textDecoration: "None" }}>
                        <img
                            className='logo'
                            src='/logo.png'
                            alt='Logo K-fêt'
                        />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to='/#horaires'>Horaires</Link>
                    </li>
                    <li>
                        <Link to='/#carte'>Carte</Link>
                    </li>
                    <li>
                        <Link to='/#services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/#localisation'>Localisation</Link>
                    </li>
                    <div className='separator' />
                    <li>
                        <Link to='/login'>Se connecter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
