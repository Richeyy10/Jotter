import react from "react";

const currentyear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
        <p>Copyright ⓒ {currentyear}</p>
        </footer>
    ); 
}

export default Footer;