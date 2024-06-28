import './Home.css';
import logo from './logoMain.jpeg'

function Nav(){
    return <div id="nav">
            <span id="nav-title">ConnectUs</span>
            <div>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a>
            </div>
        </div>
}

function Main(){
    return <div id="main">
        <img src={logo} id='logo'></img>
        <h2 id="main-title">ConnectUs</h2>
        <p id="intro">
        The world feels smaller with ConnectUs. No matter the miles, have face-to-face conversations with crystal-clear audio and video calls. Ditch the endless email chains and experience real-time connections.  ConnectUs goes beyond video conferencing - jump into instant chat conversations for quick updates or brainstorm together with collaborative features. It's your one-stop shop for seamless communication, bringing people together virtually and making every interaction feel like being in the same room.
        </p>
        <a href='' id='link-to-app'>Open ConnectUs</a>
    </div>
}

function Footer(){
    return <div id="footer">
        <span>Copyright</span>
    </div>
}


export default function Home(){
    return <>
        <Nav/>
        <Main/>
        <Footer/>
    </>
}