import React from "react";
import { Link } from "../routes";

const Nav = () => (
  <div>
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#f2f0f0",
        paddingBottom: 0,
        paddingTop: 0,
        borderBottom: "1px solid #E2E7E7"
      }}
    >
      <a
        style={{ marginRight: "auto" }}
        type="button"
        className="btn btn-link btn-sm"
      >
        Tentang
      </a>

      <a type="button" className="btn btn-link btn-sm">
        <i class="fa fa-question"></i> Pusat Bantuan
      </a>

      <a type="button" className="btn btn-link btn-sm">
        <i className="fa fa-globe"></i> Bahasa
      </a>
    </nav>
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #E2E7E7"
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            width="200"
            src="https://www.masukkoding.com/wp-content/uploads/2019/07/12.png"
            // src="https://static.tiket.photos/image/upload/v1581095323/logo/2020/02/08/d6cad2e4-0ec5-46ef-879c-f30df54ef3d5-1581095322488-39283d6b5117aeb48285b063fb6b2a87.png"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto right">
            <li style={{ margin: 5 }} className="nav-item active">
              <a href="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li style={{ margin: 5 }} className="nav-item">
              <Link href="/bootcamp">
                <a className="nav-link">Wisata</a>
              </Link>
            </li>
            <li style={{ margin: 5 }} className="nav-item">
              <Link href="/bootcamp">
                <a className="nav-link">Tips & Trik</a>
              </Link>
            </li>
            <li style={{ margin: 5 }} className="nav-item dropdown">
              <Link href="/publikasi">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Travelling
                </a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Pantai
                </a>
                <a className="dropdown-item" href="#">
                  Alam
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Air Terjun
                </a>
              </div>
            </li>
          </ul>

          <div
            className="nav navbar-nav navbar-right"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto right">
              <li style={{ margin: 5 }} className="nav-item">
                <Link href="/masuk">
                  <button type="button" className="btn btn-light">
                    Masuk
                  </button>
                </Link>
              </li>
              <li style={{ margin: 5 }} className="nav-item">
                <Link href="/daftar">
                  <button type="button" class="btn btn-dark">
                    Daftar
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
