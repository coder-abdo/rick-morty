import * as React from "react";
import { IEpisode } from "../Interfaces";
const Episode = (props: IEpisode): JSX.Element => (
  <div className="card text-capitalize">
    <h3 className="card-header text-center h1 text-primary font-weight-bold">
      {props.name}
    </h3>
    <div className="card-body">
      <h5 className="card-title h3 text-warning font-weight-bold">
        Season: {props.season}
      </h5>
      <h6 className="card-subtitle font-weight-bold mb-3 h3 text-warning">
        Episode No: {props.number}
      </h6>

      <img
        style={{
          height: "20rem",
          width: "100%"
        }}
        src={
          props.image
            ? props.image.original
            : "https://image-placeholder.com/images/actual-size/200x200.png"
        }
        alt={props.name}
      />
      <p className="card-text mt-2 lead content">
        {props.summary
          ? props.summary.replace(/<p>|<\/p>/gi, "")
          : "this is rick and morty"}
      </p>
    </div>
    <div className="card-footer">
      <button className="btn btn-info" type="button" onClick={props.addToFav}>
        {props.favText}
      </button>
    </div>
  </div>
);
export default Episode;
