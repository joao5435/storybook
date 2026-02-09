export default function iconButton({src, alt}){
    return(
        <button type="button">
        <img src={src} alt={alt} />
        {label}
        </button>
    );
}