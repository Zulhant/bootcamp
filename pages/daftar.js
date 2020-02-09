import React from "react";
import Nav from "../components/nav";
import Container from "../components/meta";

import { Link } from "../routes";

const Daftar = () => (
  <Container>
    <Nav />
    <div
      className="card"
      style={{
        width: "27rem",
        margin: "auto",
        top: 20,
        border: "none"
      }}
    >
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          Register
        </h5>
        <hr />

        <div class="form-group">
          <label for="exampleInputEmail1">Nama Lengkap</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nama Lengkap"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Alamat Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Nomor Handphone / WhatsApp</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="No.Handphone/WhatsApp"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Kata Sandi</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Kata sandi"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Kata sandi"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <button style={{ width: "100%" }} type="submit" class="btn btn-info">
          Daftar
        </button>

        <br />
        <br />

        <p style={{ float: "right" }}>
          Sudah pernah registrasi ? <Link href="/masuk">login disini</Link>
        </p>
      </div>
    </div>
    <br />
    <br />
  </Container>
);

export default Daftar;
