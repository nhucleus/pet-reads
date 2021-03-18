import "./Footer.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Modal from "../Modal";
import {useState} from "react";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li><div className="footer-links"><IoPersonCircleOutline className="footer-icon" /><span> Portfolios</span></div></li>
        <li><div className="footer-links"><AiOutlineLinkedin className="footer-icon" /><span> LinkedIn</span></div></li>
        <li><a className="footer-links" href="https://github.com/nhucleus/pet-reads"><AiOutlineGithub className="footer-icon" /><span> GitHub</span></a></li>
        <li><div className="footer-links"><AiOutlineMail className="footer-icon" /><span> Contact</span></div></li>
      </ul>
    </div>
  )
};

export default Footer;