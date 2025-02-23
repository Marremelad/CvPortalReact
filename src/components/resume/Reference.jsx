import data from "../../assets/json/resume/references.json"

export default function Reference() {
    return (
        <>
            {data.map((reference, index) => (
                <article key={index}>
                    <p className="reference-name">
                        {reference.name}
                    </p>

                    <p className="reference-role">
                        {reference.role}
                    </p>

                    <p className="reference-employer">
                        {reference.employer}
                    </p>

                    <p className="reference-phone-number">
                        {reference.phoneNumber}
                    </p>
                </article>
            ))}
        </>
    )
}