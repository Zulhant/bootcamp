
import React from 'react'
import Link from 'next/link'

const ScreenHome = () => (

    <div style={{
        backgroundImage: `url("https://www.theme-junkie.com/wp-content/uploads/Coding-Programming-Background-5.jpg)`,
        width: "100%",
        backgroundSize: "cover",
        height: 500
    }}>

        <div className="container">
            <div style={{  color: "white" }}>
                <br />
                <br />
                <br />
                <br />
                <h1 style={{ fontWeight: "bold" }}>Belajar Koding From Zero To Hero</h1>
                <p style={{ fontSize: 30, fontFamily: "open sans,helvetica,arial,sans-serif;", lineHeight: 1.5 }}>Semua yang kamu butuhkan untuk memulai belajar coding<br />
                 dan meningkatkan keahlian codingmu hingga mahir dengan <br />alur belajar yang super jelas dan terarah.</p>
                <br />

                <button style={{ fontWeight: "bold", padding: 10, backgroundColor: "#5bc0be", color: "white" }} type="button" class="btn btn-info">Telusuri Kelas Online</button>
                <span />   <span />   <span /> 
                <button style={{ fontWeight: "bold", padding:10, backgroundColor: "#1c2541", color: "white"}} type="button" class="btn btn-secondary">Menjadi Fullstack Developer</button>
          
            </div>
        </div>
    </div>

)


export default ScreenHome