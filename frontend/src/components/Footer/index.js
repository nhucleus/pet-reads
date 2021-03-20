import "./Footer.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Modal from "../Modal";
import {useState} from "react";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li><div onClick={() => setModalOpen(true)} className="footer-links"><IoPersonCircleOutline className="footer-icon" /><span> Portfolios</span></div></li>
        <li><div onClick={() => setModal2Open(true)} className="footer-links"><AiOutlineLinkedin className="footer-icon" /><span> LinkedIn</span></div></li>
        <li><a className="footer-links" href="https://github.com/nhucleus/pet-reads" target="_blank"><AiOutlineGithub className="footer-icon" /><span> GitHub</span></a></li>
        <li><a className="footer-links" href="mailto: nhucleus@gmail.com, monaco.james18@gmail.com" target="_blank"><AiOutlineMail className="footer-icon" /><span> Contact</span></a></li>
      </ul>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="modal-container">
          <div className="modal-title">
            Contributors
          </div>
          <div className="modal-left">
            <div className="modal-photos-container">
            <a className="modal-links" href="https://nhucleus.io/" target="_blank"><img draggable="false" className="modal-photos" src="https://avatars.githubusercontent.com/u/70211658?s=460&v=4" /></a>
            <a className="modal-links" href="https://monaco021.github.io/" target="_blank"><img draggable="false" className="modal-photos" src="https://avatars.githubusercontent.com/u/70599412?s=460&u=9d760acc7ca3e2a0c16b52cbdc6a46fc4e560a43&v=4" /></a>
            </div>
          </div>
          <div className="modal-right">
          <div className="modal-links-container">
            <a className="modal-links" href="https://nhucleus.io/" target="_blank">Nhu-y Phan</a>
            <a className="modal-links" href="https://monaco021.github.io/" target="_blank">James Monaco</a>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={modal2Open} onClose={() => setModal2Open(false)}>
        <div className="modal-container">
          <div className="modal-title">
            LinkedIn
          </div>
          <div className="modal-left">
          <div className="modal-photos-container">
            <a className="modal-links" href="https://www.linkedin.com/in/nhu-yphan/" target="_blank"><img draggable="false" className="modal-photos" src="https://avatars.githubusercontent.com/u/70211658?s=460&v=4" /></a>
            <a className="modal-links" href="https://www.linkedin.com/in/james-monaco-770127175/" target="_blank"><img draggable="false" className="modal-photos" src="https://avatars.githubusercontent.com/u/70599412?s=460&u=9d760acc7ca3e2a0c16b52cbdc6a46fc4e560a43&v=4" /></a>
            </div>
          </div>
          <div className="modal-right">
            <div className="modal-links-container">
              <a className="modal-links" href="https://www.linkedin.com/in/nhu-yphan/" target="_blank">Nhu-y Phan</a>
              <a className="modal-links" href="https://www.linkedin.com/in/james-monaco-770127175/" target="_blank">James Monaco</a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Footer;