import type { Route } from "./+types/index";
import HoursSection from "./HoursSection";
import MenuSection from "./MenuSection";
import ServicesSection from "./ServicesSection";
import LocationSection from "./LocationSection";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "K-App" },
        { name: "description", content: "Site web de la K-fêt de l'INSA Lyon" },
    ];
}

export default function Home() {
    return (
        <>
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
        </>
    );
}
