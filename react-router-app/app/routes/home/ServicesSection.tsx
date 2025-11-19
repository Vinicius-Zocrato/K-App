import Section from "./Section";
import "./../../scss/ServicesSection.scss";

interface ServiceCardProps {
    title: string;
    icon: string;
    children: React.ReactNode;
}

function ServiceCard({ title, icon, children }: ServiceCardProps) {
    return (
        <div className='service-card'>
            <div className='service-icon'>{icon}</div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}

function ServicesSection() {
    return (
        <Section id='services' title='Nos Services' darkSection>
            <div className='services-grid'>
                <ServiceCard icon='🎱' title='Billard'>
                    Table de billard disponible pour vos parties entre amis
                </ServiceCard>
                <ServiceCard icon='⚽' title='Baby-foot'>
                    Baby-foot pour des matchs endiablés
                </ServiceCard>
                <ServiceCard icon='🎵' title='Musique'>
                    Ambiance musicale et soirées à thème
                </ServiceCard>
            </div>
        </Section>
    );
}

export default ServicesSection;
