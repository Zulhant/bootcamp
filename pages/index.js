import React from 'react'
import Nav from '../components/nav'
import ScreenImage from "../components/screenHome"
import Container from "../components/meta"
import Card from "../components/card"


import fetch from "node-fetch"

const Home = ({ data }) => {

    console.log("data", data)
    return (
    <Container>
        <Nav />
            <ScreenImage />
            <div className="container">
                <div style={{ textAlign: "center", marginTop: 50 }}>
                    <h2>Lakukan Percepatan dalam Belajar Coding</h2>
                    <p>Media belajar online yang akan membantumu mengembangkan keahlianmu dalam bidang pemrograman</p>
                </div>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}>   
                {
                    data.map(item => <Card item={item} />)
                }
                </div>
        </div>
    </Container>
    )
}

  Home.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c9ae52d6b0cd6c455542476a1ad114f4')
    const json = await res.json()
    return { data : json.results }
  }


export default Home
