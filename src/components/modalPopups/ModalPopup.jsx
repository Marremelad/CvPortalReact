import "./modalPopup.css";
import Shade from "../shade/Shade.jsx";

export default function ModalPopup({ data, open, setOpen, customClass = "" }) {

    return (
        <>
            <article className={`popup ${customClass} ${open ? "open-popup" : "closed-popup"}`} >
                <div onClick={setOpen} className="close" >&times;</div>
                <h2>{data.name}</h2>
                <p>
                    {data.description}
                </p>
            </article>
            <Shade openShade={open} onClick={() => setOpen(false)} />
        </>
    )
}