import "./elitePopup.css"
import { useState, useEffect } from "react";

export default function ElitePopup() {
    const [userInput, setUserInput] = useState("");
    const [isElite, setIsElite] = useState(false);

    useEffect(() => {
        const detect1337 = (event) => {
            setUserInput((prevInput) => {
                let newInput = prevInput + event.key;

                if (newInput.includes("1337")) {
                    console.log(newInput);
                    setIsElite(true);
                    newInput = "";
                }

                if (newInput.length > 4) {
                    newInput = newInput.slice(-4);
                }

                return newInput;
            });
        };

        document.addEventListener("keydown", detect1337);
        return () => document.removeEventListener("keydown", detect1337); // ✅ Cleanup
    }, []); // ✅ Runs only once

    return (
        <article className={`elite-popup ${isElite ? "open-elite-popup" : ""}`}>
            <div className="close-elite-popup" onClick={() => setIsElite(false)}>
                &times;
            </div>
            <h2>WOW!</h2>
            <p>You entered 1337! You are truly elite.</p>
        </article>
    );
}
