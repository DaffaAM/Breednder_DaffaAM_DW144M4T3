import React, { Component } from 'react';
import profile from "./img/profile.jpg";
import { Image,Row } from 'react-bootstrap';
import './Dashboard.css';
import tinder from "./img/tinder.PNG";
import { Link } from "react-router-dom";

console.log(profile);

class Dashboard extends Component {

    render(){
        return(
            <div>
            <div className="divkiri">
               <nav className="navkiri" href="/Profile">
               <Link to="/profile"> <img className="profilebulat" src={profile} style={{}} alt="profile" /></Link>
                   <p className="profile">Kochenk</p>
                   </nav>
                   <p className="wowini">Match</p>
                   <div class="container">
                    <div class="row">
                        <Row className="rowkiri"/>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                        </div>

                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                </div>
                </div>

                <div class="container">
                    <div class="row">
                        <Row className="rowkiri"/>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                        </div>

                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                </div>
                </div>

                <div class="container">
                    <div class="row">
                        <Row className="rowkiri"/>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                        </div>

                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                </div>
                </div>

                <div class="container">
                    <div class="row">
                        <Row className="rowkiri"/>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                        </div>

                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                    <div class="col-md-4">
                    <Image className="matchphoto" src={profile} style={{}} alt="profile" rounded/>;
                    </div>
                </div>
                </div>
                 </div>
            <div className="divkanan">
            <Image src={tinder} className="gambartinder" />

            </div>
            </div>
        );
    }
}

export default Dashboard;
