import "./RatingSystem.css";
import { IoPawOutline, IoPaw } from "react-icons/io5";

const RatingSystem = ({ rating }) => {
  return (
    <div>
      {rating < 0.5 ? <IoPawOutline className="paw" /> : <IoPaw className="paw filled" />}
      {rating < 1.5 ? <IoPawOutline className="paw" /> : <IoPaw className="paw filled" />}
      {rating < 2.5 ? <IoPawOutline className="paw" /> : <IoPaw className="paw filled" />}
      {rating < 3.5 ? <IoPawOutline className="paw" /> : <IoPaw className="paw filled" />}
      {rating < 4.5 ? <IoPawOutline className="paw" /> : <IoPaw className="paw filled" />}
    </div>
  )
};

export default RatingSystem;