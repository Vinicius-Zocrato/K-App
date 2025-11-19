import "./../../scss/Section.scss";

interface Props {
    id?: string;
    title?: string;
    darkSection?: boolean;
    children?: React.ReactNode;
}

function Section({ id, title, darkSection, children }: Props) {
    return (
        <>
            {id && (
                <div className='anchor'>
                    <div id={id} />
                </div>
            )}

            <section className={"section" + (darkSection ? " dark" : "")}>
                <div className='container'>
                    {title && <h2 className='section-title'>{title}</h2>}
                    {children}
                </div>
            </section>
        </>
    );
}

export default Section;
