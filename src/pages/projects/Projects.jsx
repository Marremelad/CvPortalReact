import Header from "../../components/header/Header.jsx"

export default function Projects() {
    return (
        <>
            <figure>
                <img class="coat-of-arms" src="../images/MauricioCoatOfArmsTextTop.png" alt=""/>
            </figure>

            <div class="title-container">
                <h1 class="title-text">My<br/>projects</h1>
            </div>

            <div class="down-arrow">
                <p>&#8595;</p>
            </div>

            <section class="projects-container">
                <article id="project-one" class="project">

                    <figure class="project-image-container">
                        <img class="project-image" src="../images/SalamanderBankDemoGif.gif" alt="Salamander Bank gif"/>
                    </figure>

                    <div class="project-info-container">
                        <h2 class="project-name">Salamander Bank</h2>
                        <p class="project-description">Bank app simulation in the console</p>

                        <section class="project-button-container">
                            <article>
                                <a class="learn-more-button" href="#learn-more-popup-one">learn more</a>
                            </article>

                            <article>
                                <a href="https://github.com/Marremelad/SalamanderBank">
                                    <i class="fa-brands fa-github projects-github-icon"></i>
                                </a>
                            </article>

                            <article id="learn-more-popup-one" class="popup">
                                <a href="#project-one" class="close">&times;</a>
                                <h2>Salamander Bank</h2>
                                <p>
                                    Salamander Bank is a C# console application that simulates the functionality of a
                                    bank app. The application features E-mail and SMS integration through the mail-kit
                                    library and the 46Elks telecommunication API.
                                </p>
                            </article>
                            <a href="#project-one" class="close-popup"></a>
                        </section>
                    </div>
                </article>

                <article id="project-two" class="project">

                    <figure class="project-image-container">
                        <img class="project-image" src="../images/BirdDodgerScreenRecording.gif" alt="Test image"/>
                    </figure>

                    <div class="project-info-container">
                        <h2 class="project-name">Bird Dodger</h2>
                        <p class="project-description">2D survival game</p>

                        <section class="project-button-container">
                            <article>
                                <a class="learn-more-button" href="#learn-more-popup-two">learn more</a>
                            </article>

                            <article>
                                <a href="https://github.com/Marremelad/bird_dodger">
                                    <i class="fa-brands fa-github projects-github-icon"></i>
                                </a>
                            </article>

                            <article id="learn-more-popup-two" class="popup">
                                <a href="#project-two" class="close">&times;</a>
                                <h2>Bird Dodger</h2>
                                <p>
                                    Bird dodger is a simple, 2D survival, enemy dodger, made with Python's PyGame
                                    library. The game gets progressively harder the longer you play.
                                </p>
                            </article>
                            <a href="#project-two" class="close-popup"></a>
                        </section>
                    </div>
                </article>

                <article id="project-three" class="project">

                    <figure class="project-image-container">
                        <img class="project-image" src="../images/ChessBoardScreenRecording.gif" alt="Test image"/>
                    </figure>

                    <div class="project-info-container">
                        <h2 class="project-name">ChessBoard</h2>
                        <p class="project-description">Console chess board generator</p>

                        <section class="project-button-container">
                            <article>
                                <a class="learn-more-button" href="#learn-more-popup-three">learn more</a>
                            </article>

                            <article>
                                <a href="https://github.com/Marremelad/ChessBoard">
                                    <i class="fa-brands fa-github projects-github-icon"></i>
                                </a>
                            </article>

                            <article id="learn-more-popup-three" class="popup">
                                <a href="#project-three" class="close">&times;</a>
                                <h2>ChessBoard</h2>
                                <p>
                                    This is a C# application that lets the user generate a customized chess board in the
                                    console. This application features an interactive menu built with the
                                    Spectre.Console library. The user can navigate through the menu with the up and down
                                    arrows and the enter key.
                                </p>
                            </article>
                            <a href="#project-three" class="close-popup"></a>
                        </section>
                    </div>
                </article>
            </section>

        </>
    )
}