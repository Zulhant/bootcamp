import React from 'react'
import Link from 'next/link'

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position: sticky" sticky style={{
      backgroundColor: "#f1e7e8c7"
    }} >
      <div className="container">
  <a className="navbar-brand" href="#">
    <img width="250" src="https://www.masukkoding.com/wp-content/uploads/2019/07/12.png" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="nav navbar-nav navbar-right" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto right">
      <li className="nav-item active">
      <Link href="/">
         <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </Link>  
      </li>
      <li className="nav-item">
        <Link href="/bootcamp">
        <a className="nav-link" href="#">BootCamp</a>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link href="/publikasi">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Publikasi
          </a>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
      <Link href="/masuk">
      <button style={{ marginLeft: 5 }} type="button" class="btn btn-light">Masuk</button>
        </Link>
      </li>
      <li className="nav-item">
      <Link href="/daftar">
      <button style={{ marginLeft: 5 }}  type="button" class="btn btn-success">Daftar</button>
        </Link>
      </li>
    </ul>
   
  </div>
  </div>
</nav>
)



export default Nav
