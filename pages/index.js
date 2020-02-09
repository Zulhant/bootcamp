import React from "react";
import Container from "../components/meta";
import Card from "../components/card";

import { GetListData } from "../actions/axios";
import Nav from "../components/nav";
// import ScreenHome from "../components/screenHome";

const Home = ({ data }) => {
  let data1 = data;
  let data2 = data;
  let data3 = data;
  let data4 = data;

  let newData = data1.concat(data2, data3, data4);

  return (
    <Container>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-12 mt-4 ">
            <button type="button" className="btn btn-light">
              <i className="fa fa-filter"></i> Type
            </button>
            <span /> <span />
            <button type="button" className="btn btn-light">
              <i className="fa fa-filter"></i> Rating
            </button>
            <span /> <span />
            <div class="btn-group">
              <button type="button" class="btn btn-light">
                Kategori
              </button>
              <button
                type="button"
                class="btn btn-light dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-4 ">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i className="fa fa-search" />
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Cari Tempat Favorit kamu disini"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className="row">
          {newData.map(item => (
            <Card item={item} />
          ))}
        </div>
        <br />
        <center>
          <button type="button" class="btn btn-light">
            Lihat Lainya...
          </button>
        </center>
      </div>
      <br />
    </Container>
  );
};

Home.getInitialProps = async ({ req }) => {
  let newList = [];
  const res = await GetListData("/v1/wisata");

  if (res && res.status_code == 200) {
    newList = res.payload;
  }

  return { data: newList };
};

export default Home;
