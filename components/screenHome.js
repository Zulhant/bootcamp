
import React from 'react'
import Link from 'next/link'

const ScreenHome = () => (

    <div style={{
        backgroundImage: `url("https://www.theme-junkie.com/wp-content/uploads/Coding-Programming-Background-5.jpg)`,
        width: "100%",
        height: 500,
        position: "fixed"
    
    }}>

        <div className="container">
            <div style={{ marginTop: 120, color: "white" }}>
                <h1 style={{ fontWeight: "bold"}}>Belajar Koding From Zero To Hero</h1>
                <p style={{ fontSize: 30, fontFamily: "open sans,helvetica,arial,sans-serif;", lineHeight: 1.5 }}>Semua yang kamu butuhkan untuk memulai belajar coding<br />
                 dan meningkatkan keahlian codingmu hingga mahir dengan <br />alur belajar yang super jelas dan terarah.</p>
                <br />

                <button style={{ fontWeight: "bold", padding: 10}} type="button" class="btn btn-info">Telusuri Kelas Online</button>
                <span />   <span />   <span /> 
                <button style={{ fontWeight: "bold", padding:10}} type="button" class="btn btn-secondary">Menjadi Fullstack Developer</button>
          
            </div>
        </div>
    </div>

)


export default ScreenHome