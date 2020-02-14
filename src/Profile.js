import React, { Component} from 'react';
import {Form, Button } from 'react-bootstrap';
import profile from "./img/profile.jpg";


console.log(profile);

class Profile extends Component {
    render(){
        return(
            <div>
            <div className="divkiri">
               <nav className="navkiri">
               <img className="profilebulat" src={profile} style={{}} alt="profile"/>;
                   <p className="profileedit">Edit Profile Pet</p>
                   </nav>  
                    <div>
                      <Form.Label className="textsetting">Account Setting</Form.Label>
                      </div>
                   <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control className="email1" type="email" placeholder="name@example.com" />
                      <Form.Control className="nomor" type="phone" placeholder="+62.." />  
                     </Form.Group>

                     <div>
                      <Form.Label id="margin1" className="textsetting1">Discovery Setting</Form.Label>
                      </div>
                      <Form.Group>
                          <Form.Label  className="tebelaja">Maximum Distance</Form.Label>
                      </Form.Group>
                      
                        <div class="form-group">
                         <input type="range" class="form-control-range" id="formControlRange" max="10" min="0" />
                        </div>

                        <Form.Label className="tebelaja">Age</Form.Label>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" className="formpet">
                            <option>Baby</option>
                            <option>Child</option>
                            <option>Adult</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Label className="tebelaja">Species</Form.Label>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" className="formpet">
                            <option>Cat</option>
                            <option>Dog</option>
                            <option>Snake</option>
                            <option>Crocodile</option>
                            <option>Iguana</option>




                            </Form.Control>
                        </Form.Group>

                        <Button className="buttonedit" variant="primary" type="submit">Logout</Button>



                </div>
            <div className="divkanan"></div>
            </div>
        );
    }
}

export default Profile;