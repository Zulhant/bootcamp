import React from "react";

const Footer = () => (
  <div style={{ marginTop: 100 }}>
    <nav
      className="navbar"
      style={{
        backgroundColor: "#393A3A"
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{ padding: 20, color: "white", fontSize: 14 }}
        >
          <div className="col-md-4">
            <h5 className="card-title">Tentang Kami</h5>
            <hr />
            <p className="card-text">
              Masukkoding.com Adalah Media Belajar programing tingkat dasar,
              menengah dan atas bagi setiap orang yang memiliki minat belajar
              koding
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="card-title">Kontak</h5>
            <hr />
            <p className="card-text">
              Menghubungi Kami silahkan by kontak <br />
              <p>Phone : 08273737383833</p>
              Email : kampasi.deb@gmail.com
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="card-title">Alamat</h5>
            <hr />
            <p className="card-text">
              Jalan Jatimurni Dalam No.30 Jatipadang Pasar Minggu Jakarta
              Selatan
            </p>
          </div>
        </div>
      </div>
    </nav>
    <nav
      className="navbar"
      style={{
        backgroundColor: "#041010",
        justifyContent: "center"
      }}
    >
      <center>
        <p style={{ color: "#D9DDDD" }}>Copyright 2020 by masukkoding.com</p>
      </center>
    </nav>
  </div>
);

export default Footer;
