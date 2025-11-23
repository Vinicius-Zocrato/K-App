import "~/scss/Section.scss";

interface Props {
    id?: string;
    title?: string;
    className?: string;
    darkSection?: boolean;
    noAnchor?: boolean;
    children?: React.ReactNode;
}

function Section({
    id,
    title,
    className,
    darkSection,
    noAnchor,
    children,
}: Props) {
    return (
        <>
            {id && !noAnchor && (
                <div className='anchor'>
                    <div id={id} />
                </div>
            )}

            <section
                {...(noAnchor ? { id: id } : {})}
                className={`section ${darkSection ? "dark" : ""} ${className}`}
            >
                <div className='container'>
                    {title && <h2 className='section-title'>{title}</h2>}
                    {children}
                </div>
            </section>
        </>
    );
}

export default Section;
