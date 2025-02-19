import "./shade.css";
export default function Shade({ openShade, onClick }) {
    return (
        <>
            <article
                className={`shade ${openShade ? "open-shade" : "closed-shade"}`}
                onClick={onClick}
            ></article>
        </>
    )
}