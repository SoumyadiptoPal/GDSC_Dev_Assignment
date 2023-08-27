import React from "react";
import "./item.css";
const Item = ({ item }) => {
  const getTime = (time) => {
    let pos = time.indexOf("T");
    let val =
      time.substring(0, pos) +
      " at " +
      time.substring(pos + 1, pos + 9) +
      "(UTC" +
      time.substring(pos + 9) +
      ")";
    return val;
  };
  return (
    <div className="cont1">
      <div className="cont2">
        <img src={item.banner_image} style={{ borderRadius: 20 }} />
      </div>
      <div className="cont3">
        <div style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
          {" "}
          {item.title}{" "}
        </div>
        <div className="cont4">
          <div className="cont5">
            <img src={item.organiser_icon} />
          </div>
          <div>
            <b>{item.organiser_name}</b>
          </div>
        </div>
        <p>{item.description}</p>
        <div className="cont6">
          <div>
            <b>On {getTime(item.date_time)}</b>
          </div>
          <div>
            <b>
              At {item.venue_name}, {item.venue_city}, {item.venue_country}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
