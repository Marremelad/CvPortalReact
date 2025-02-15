import data from "../../assets/json/techStack.json"
export default function TechStackPopup() {
    // console.log(data[0].name)

    return (

        <>
            <article onClick={() => console.log(data[0].name)}>
                <p className="dot-net-icon">.NET</p>
            </article>

            <article id="dot-net-popup" className="popup">
                <a href="#" className="close">&times;</a>
                <h2>.NET</h2>
                <p>.NET is a Microsoft framework for building applications using C#, VB.NET, and F#. It provides
                   a large
                   library for web, desktop, and mobile development, simplifying tasks like database access and
                   UI
                   design.
                </p>
            </article>
            <a href="#" className="close-popup"></a>
        </>
    )
}