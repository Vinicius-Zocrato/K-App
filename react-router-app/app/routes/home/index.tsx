import type { Route } from "./+types/index";
import HeroSection from "./HeroSection";
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
            <HeroSection />
            <HoursSection />
            <MenuSection />
            <ServicesSection />
            <LocationSection />
        </>
    );
}
