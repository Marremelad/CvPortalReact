import data from "../../assets/json/resume/languages.json"

export default function Language() {
    return (
        <>
            {data.map((language, index) => (
                <article key={index}>
                    <p className="date">
                        {language.language}
                    </p>

                    <p className="role">
                        {language.proficiency}
                    </p>
                </article>
            ))}
        </>
    )
}