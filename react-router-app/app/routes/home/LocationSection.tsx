import Section from "./Section";
import "./../../scss/LocationSection.scss";

function LocationSection() {
    return (
        <Section id='localisation' title='Nous Trouver'>
            <div className='location-content'>
                <div className='location-info'>
                    <h3>Adresse</h3>
                    <p>
                        K-Fêt - Bar Étudiant
                        <br />
                        Campus INSA Lyon
                        <br />
                        20 Avenue Albert Einstein
                        <br />
                        69100 Villeurbanne
                    </p>
                    <div className='location-details'>
                        <div className='detail-item'>
                            <span className='icon'>🚇</span>
                            <span>Tram T1/4 - Insa Einstein</span>
                        </div>
                        <div className='detail-item'>
                            <span className='icon'>🚌</span>
                            <span>Bus C26 - Insa Einstein</span>
                        </div>
                    </div>
                </div>
                <div className='map-container'>
                    <iframe
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=K-Fêt+INSA+Lyon'
                        width='100%'
                        height='100%'
                        style={{ border: 0 }}
                        loading='lazy'
                    />
                </div>
            </div>
        </Section>
    );
}

export default LocationSection;
