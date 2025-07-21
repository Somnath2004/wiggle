import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Somnath Teli</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className="footerLinks">
        <a href="https://github.com/Somnath2004" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQElwhPvuCE16gAAAZgqXTQAbg8oNqjY2ORTpe3enNsebPOHH-HVnSrSncPGZtiUo3sTAe_rjrYY2jfqDO4UhoZ1V27G1SeJI7gv1A3bYxrOQOcXykYdlMNNRvn2WaXtbtjgNLc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsomnathteli%2F"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:somnathteli21@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/somnathteli/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
