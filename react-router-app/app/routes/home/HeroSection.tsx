import Section from "./Section";
import "./../../scss/HeroSection.scss";

export default function HeroSection() {
    return (
        <Section id="home" className="hero" noAnchor>
            <div className="hero-content">
                <img src="/logo.png" alt="Logo K-fêt" className="hero-image" />
                <h1 className="hero-title">K-Fêt</h1>
                <p className="hero-subtitle">Le Bar Étudiant de l'INSA Lyon</p>
                <p className="hero-description">
                    Votre lieu de détente et de convivialité sur le campus
                </p>
                <a href="#horaires" className="cta-button">
                    Découvrir
                </a>
            </div>
        </Section>
    );
}
