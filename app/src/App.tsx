import HoursSection from "./components/HoursSection";
import MenuSection from "./components/MenuSection";
import ServicesSection from "./components/ServicesSection";
import LocationSection from "./components/LocationSection";
import "./App.scss";

function App() {
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <a href='#home' style={{ textDecoration: "None" }}>
                        <div className='nav-brand'>
                            <img
                                className='logo'
                                src='/logo.png'
                                alt='Logo K-fêt'
                            />
                            <span>K-Fêt</span>
                        </div>
                    </a>
                    <ul className='nav-links'>
                        <li>
                            <a href='#horaires'>Horaires</a>
                        </li>
                        <li>
                            <a href='#carte'>Carte</a>
                        </li>
                        <li>
                            <a href='#services'>Services</a>
                        </li>
                        <li>
                            <a href='#localisation'>Localisation</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section id='home' className='hero'>
                <div className='hero-content'>
                    <img src='/logo.png' alt='Logo K-fêt' />
                    <h1 className='hero-title'>K-Fêt</h1>
                    <p className='hero-subtitle'>
                        Le Bar Étudiant de l'INSA Lyon
                    </p>
                    <p className='hero-description'>
                        Votre lieu de détente et de convivialité sur le campus
                    </p>
                    <a href='#horaires' className='cta-button'>
                        Découvrir
                    </a>
                </div>
                <div className='hero-overlay'></div>
            </section>

            <HoursSection />

            <MenuSection />

            <ServicesSection />

            <LocationSection />

            <footer className='footer'>
                <div className='container'>
                    <div className='footer-content'>
                        <div className='footer-section'>
                            <h3>Contact</h3>
                            <p>Email: contact@kfet-insa.fr</p>
                        </div>
                        <div className='footer-section'>
                            <h3>Suivez-nous</h3>
                            <div className='social-links'>
                                <a href='#'>
                                    <svg
                                        className='medias-svg'
                                        xmlns='http://www.w3.org/2000/svg'
                                        x='0px'
                                        y='0px'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z' />
                                    </svg>
                                </a>
                                <a href='#'>
                                    <svg
                                        className='medias-svg'
                                        xmlns='http://www.w3.org/2000/svg'
                                        x='0px'
                                        y='0px'
                                        viewBox='0 0 24 24'
                                    >
                                        <path d='M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom'>
                        <p>&copy; 2025 K-App. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
