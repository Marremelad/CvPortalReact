import data from "../../assets/json/resume/employments.json"

export default function Employment() {
    return (
        <>
            {data.map((employment, index) => (
                <article key={index}>
                    <p className="date">
                        {employment.date}
                    </p>

                    <p className="role">
                        {employment.role}
                    </p>

                    <p className="employer-and-location">
                        {employment.employer}
                    </p>
                </article>
            ) )}
        </>
    )
}