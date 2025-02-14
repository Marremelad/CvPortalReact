import "./footer.css"
export default function Footer() {
    const body = document.querySelector("body");
    const audio = new Audio("https://github.com/Marremelad/AssetsAndImages/raw/main/DIF-Sound.mp3");

    const theBestTeamInTheWorld = async () => {
        body.classList.toggle("the-best-team-in-the-world");
        if (audio.paused) {
            await audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset to start
        }
    }

    return (
        <>
            <footer>
                <div className="copy-right-symbol" onClick={theBestTeamInTheWorld}>
                    <p>C</p>
                </div>

                <p className="copy-right-text">
                    Created by
                    <a className="footer-linkedin-link" href="https://www.linkedin.com/in/mauricio-corte-343a6a22a/">
                        Mauricio Corte
                    </a>
                </p>
            </footer>
        </>
    )
}