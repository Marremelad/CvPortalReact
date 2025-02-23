import data from "../../assets/json/resume/education.json"

export default function Education() {
    return (
        <>
            {data.map((education, index) => (
                <article key={index}>
                    <p className="date">
                        {education.date}
                    </p>

                    <p className="program">
                        {education.program}
                    </p>

                    <p className="educational-institution">
                        {education.educationalInstitution}
                    </p>
                </article>
            ))}
        </>
    )
}