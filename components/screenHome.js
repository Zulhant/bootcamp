import React from "react";
import Link from "next/link";

const ScreenHome = () => (
  <div
    style={{
      backgroundImage: `url("https://st3.depositphotos.com/1954927/12577/v/950/depositphotos_125771504-stock-illustration-programmingcoding-flat-computing-background-code.jpg")`,
      width: "100%",
      backgroundSize: "cover",
      // backgroundColor: "green",
      height: 500
    }}
  >
    <div className="container">
      <div style={{ color: "white" }}>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ fontWeight: "bold" }}>Belajar Koding From Zero To Hero</h1>
        <p
          style={{
            fontSize: 30,
            fontFamily: "open sans,helvetica,arial,sans-serif;",
            lineHeight: 1.5,

            padding: 10
          }}
        >
          Semua yang kamu butuhkan untuk memulai belajar coding
          <br />
          dan meningkatkan keahlian codingmu hingga mahir dengan <br />
          alur belajar yang super jelas dan terarah.
        </p>
        <br />
        <button
          style={{
            fontWeight: "bold",
            padding: 10,
            backgroundColor: "#5bc0be",
            color: "white"
          }}
          type="button"
          class="btn btn-info"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  </div>
);

export default ScreenHome;
