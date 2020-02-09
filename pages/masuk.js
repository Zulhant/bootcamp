import React from "react";
import Nav from "../components/nav";
import Container from "../components/meta";

import { Link } from "../routes";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Masuk = () => (
  <Container>
    <Nav />
    <div
      className="card"
      style={{
        width: "27rem",
        margin: "auto",
        top: 80,
        border: "none"
      }}
    >
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title" style={{ textAlign: "center" }}>
          Login
        </h5>

        <div class="form-group">
          <label for="exampleInputEmail1">Alamat Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>

        <button style={{ width: "100%" }} type="submit" class="btn btn-info">
          Login
        </button>

        <br />
        <br />

        <p>
          Lupa kata sandi ? <br />
          Belum punya akun ? <Link href="/daftar">Register disini</Link>{" "}
        </p>
      </div>
    </div>
  </Container>
);

export default Masuk;
