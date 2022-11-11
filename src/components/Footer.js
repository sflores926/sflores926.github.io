import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {

    const styles = {
        footer: {
            position: "fixed",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            padding: "15px"

        },
        icon: {
            paddingRight: "10px",
            
            

        }
    }


    return (
        <div style={styles.footer}>
            <a  style={styles.icon} href="https://github.com/sflores926"><FaGithub /></a>
            <a style={styles.icon} href="https://www.linkedin.com/in/stephany-m-flores/"><FaLinkedin /></a>
        </div>
    )
}

export default Footer