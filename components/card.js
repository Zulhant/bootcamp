import React from "react";

const startList = [1, 2, 3, 4, 5];

const CardComponent = ({ item }) => (
  <div className="col-md-3 col-12 mt-4">
    <div className="card">
      <img class="card-img-top" height="200" src={item.main_image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text" style={{ fontSize: 15 }}>
          {String(item.address).substr(0, 100)}...
        </p>
        {startList.map((item, i) => (
          <i className="fa fa-star" style={{ color: "yellow" }} key={i}></i>
        ))}
      </div>
      <center>
        <a href="#" style={{ width: "100%" }} className="btn btn-light">
          Baca Selengkapnya
        </a>
      </center>
    </div>
  </div>
);

export default CardComponent;
