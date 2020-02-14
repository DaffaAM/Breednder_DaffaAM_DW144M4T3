import React, { Component } from 'react';
import "./Dashboard.css"
import profile from "./img/profile.jpg";
import { Image,Row,Button } from 'react-bootstrap';


console.log(profile);

class Dashboard extends Component {

    render(){
        return(
            <div>
            <div className="divkiri">
               <nav className="navkiri">
                   <img className="profilebulat" src={profile} style={{}} alt="profile" />;
                   <p className="profile">Kochenk</p>
                   </nav>  
                   <Button className="invisiblebtn" variant="link" href="/Profile">A</Button>
                   
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
            <div className="divkanan"></div>
            </div>
        );
    }
}

export default Dashboard;