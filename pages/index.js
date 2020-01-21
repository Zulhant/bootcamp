import React from 'react'
import Nav from '../components/nav'
import ScreenImage from "../components/screenHome"
import Container from "../components/meta"
import Card from "../components/card"

const Home = () => {

    const data = [1,2,3]

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
                    data.map(_ => <Card />)
                }
                </div>
        </div>
    </Container>
    )
}


export default Home
