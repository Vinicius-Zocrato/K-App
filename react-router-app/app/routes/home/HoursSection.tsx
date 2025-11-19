import Section from "./Section";
import "./../../scss/HoursSection.scss";

interface HoursItemProps {
    day: string;
    time?: string;
}

function HoursItem({ day, time }: HoursItemProps) {
    return (
        <div className={"hours-item" + (time ? "" : " closed")}>
            <span className='day'>{day}</span>
            <span className='time'>{time ? time : "Fermé"}</span>
        </div>
    );
}

function HoursSection() {
    return (
        <Section id='horaires' title="Horaires d'Ouverture" darkSection>
            <div className='hours-card'>
                <div className='hours-grid'>
                    <HoursItem day='Lundi - Jeudi' time='18h00 - 00h00' />
                    <HoursItem day='Vendredi' time='18h00 - 02h00' />
                    <HoursItem day='Samedi' time='20h00 - 02h00' />
                    <HoursItem day='Dimanche' />
                </div>
                <p className='hours-note'>
                    * Horaires susceptibles de changer selon les événements
                </p>
            </div>
        </Section>
    );
}

export default HoursSection;
