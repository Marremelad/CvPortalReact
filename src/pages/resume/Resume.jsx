import "./resume.css"

export default function Resume() {
    return (
        <>
            <figure>
                <img className="coat-of-arms" src="../../../public/images/MauricioCoatOfArmsTextTop.png" alt=""/>
            </figure>

            <div className="title-container">
                <h1 className="title-text">Browse<br/>Resumé</h1>
            </div>

            <div className="down-arrow">
                <p>&#8595;</p>
            </div>

            <section className="personal-information-container">
                <figure className="cv-picture-container">
                    <img className="cv-picture" src="../../../public/images/CvPicture.jpg" alt="Portrait picture"/>
                </figure>

                <article className="personal-information">
                    <p>Name: Mauricio Corte</p>
                    <p>Location: Stockholm, Sweden</p>
                    <p>E-mail: corte.mauricio98@gmail.com</p>
                </article>
            </section>

            <div className="employment-and-assignments-and-references-container">
                <section className="employment-and-assignments">
                    <h2>Employment<br/>and<br/>Assignments</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="date">
                                2023.04 - Ongoing
                            </p>

                            <p className="role">
                                Football coach
                            </p>

                            <p className="employer-and-location">
                                Enskede IK
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2022.07 - 2024.10
                            </p>

                            <p className="role">
                                Armed Security
                            </p>

                            <p className="employer-and-location">
                                Securitas AB
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2021.11- 2021-12
                            </p>

                            <p className="role">
                                Tank Gunner
                            </p>

                            <p className="employer-and-location">
                                Wartofta Kompani, P4, Skaraborgs
                                regemente
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2019.06 - 2021.10
                            </p>

                            <p className="role">
                                Mechanized infantry soldier
                            </p>

                            <p className="employer-and-location">
                                Roma Kompani, P18, Gotlands regemente
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2015.03 - 2016.04
                            </p>

                            <p className="role">
                                Stage and Sound Manager
                            </p>

                            <p className="employer-and-location">
                                Hillsong Church, Stockholm
                            </p>
                        </article>
                    </div>
                </section>

                <section className="references">
                    <h2>References</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="reference-name">
                                Fredrik Liljecrantz
                            </p>

                            <p className="reference-role">
                                Football coach
                            </p>

                            <p className="reference-employer">
                                Enskede IK
                            </p>

                            <p className="reference-phone-number">
                                +46 702 69 66 99
                            </p>
                        </article>

                        <article>
                            <p className="reference-name">
                                Oscar Hennius
                            </p>

                            <p className="reference-role">
                                Security manager
                            </p>

                            <p className="reference-employer">
                                Securitas AB
                            </p>

                            <p className="reference-phone-number">
                                +46 708 80 10 22
                            </p>
                        </article>

                        <article>
                            <p className="reference-name">
                                Oscar Hovstadius
                            </p>

                            <p className="reference-role">
                                Systems Engineer
                            </p>

                            <p className="reference-employer">
                                Swedish Armed Forces
                            </p>

                            <p className="reference-phone-number">
                                +46 765 76 52 85
                            </p>
                        </article>
                    </div>
                </section>
            </div>

            <div className="education-and-languages-container">
                <section className="education">
                    <h2>Education</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="date">
                                2024.09 - Ongoing
                            </p>

                            <p className="program">
                                .NET Fullstack developer
                            </p>

                            <p className="educational-institution">
                                Chas Academy
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2022.06 - 2022.06
                            </p>

                            <p className="program">
                                Security guard
                            </p>

                            <p className="educational-institution">
                                Securitas AB
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2018.07 - 2019.06
                            </p>

                            <p className="program">
                                Military service, Tank Gunner
                            </p>

                            <p className="educational-institution">
                                Wartofta Kompani, P4,
                                Skaraborgs regemente
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                2014.08 - 2017.06
                            </p>

                            <p className="program">
                                Natural Science Program
                            </p>

                            <p className="educational-institution">
                                Jensen Gymnasium Södra
                            </p>
                        </article>
                    </div>
                </section>

                <section className="languages">
                    <h2>Language skills</h2>

                    <div className="cv-information-container">
                        <article>
                            <p className="date">
                                Portuguese
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>

                        </article>

                        <article>
                            <p className="date">
                                Swedish
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                English
                            </p>

                            <p className="role">
                                Fluent in speech and writing
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                Spanish
                            </p>

                            <p className="role">
                                Good comprehension. Basic speaking and writing skills
                            </p>
                        </article>

                        <article>
                            <p className="date">
                                French
                            </p>

                            <p className="role">
                                Basic speaking, writing, and comprehension skills
                            </p>
                        </article>
                    </div>
                </section>
            </div>
        </>
    )
}