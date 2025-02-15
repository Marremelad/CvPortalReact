import parse from "html-react-parser"
import {useState} from "react";
import "./modalPopup.css"
import Shade from "../shade/Shade.jsx";

export default function ModalPopup({data}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <article onClick={() => setOpen(true)}>
                {parse(data[0].html)}
            </article>

            <article className={`popup ${open ? "open-popup" : "close-popup"}`} >
                <div onClick={() => setOpen(false)} className="close" >&times;</div>
                <h2>.NET</h2>
                <p>.NET is a Microsoft framework for building applications using C#, VB.NET, and F#. It provides
                   a large
                   library for web, desktop, and mobile development, simplifying tasks like database access and
                   UI
                   design.
                </p>
            </article>
            <Shade openShade={open} onClick={() => setOpen(false)}/>
        </>
    )
}