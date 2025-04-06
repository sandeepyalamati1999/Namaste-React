
import {Cdn_ImgLink} from "../utils.js/constants";

const Restaurents = (props) => {
  const { cloudinaryImageId, name,  rating , cuisines, costForTwo } = props;
    return (
      <div className="res-card">
        <img
          src={Cdn_ImgLink + cloudinaryImageId}
          style={{ width: "200px" , height: "200px" }}
        ></img>
        <h3> {name} </h3>
        <h4> {cuisines} </h4>
        <h5> {costForTwo} </h5>
        <p> {rating} </p>
      </div>
    );
  };
  export default Restaurents;