import data from "../artist_components/artist.json"
import './fans.css';
import Header from "../artist_components/header.js";
import Footer from "../artist_components/footer.js";

//For testing putposes set a temp image here, should pull 
import logo from "./logo.jpg"

export default function Fans() {
    return (
        <div id="fans-body">
        <Header/>
            <div id="fans-main">
                <div id="artist-info">
                    <div id="artist-image">
                        <img src={logo}  alt={data.artist.name} />
                    </div>
                    <div id="bio">
                        <p>{data.artist.description}</p>
                    </div>
                </div>
                <div id="sendMsg">
                    <p>Send {data.artist.name} a live message!:</p>
                    <form> 
                        <input type="text" id="message" name="message"/> 
                        <input type="submit" value="Send"/>
                    </form>
                </div>
                <div id="gallery">
                    <div id="fans-gallery-prev" className="fans-gallery-button"></div>
                    {/* add some code here that will scroll through artists gallery */}
                    <img src={logo} alt={data.artist.name} />
                    <div id="fans-gallery-nex" className="fans-gallery-button"></div>
                </div>
                <div id="signup">
                    <p>Sign up for the {data.artist.name} newsletter!:</p>
                    <form>
                        <input type="email" placeholder="enter your email address" id="email" name="email"/>
                        <input type="submit" value="Sign me up!"/>
                    </form>
                </div>
            </div>
        <Footer/>
        </div>
    )
}