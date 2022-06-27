import React from 'react';
import Cartouche from "./Cartouche";
import {faEnvelope, faMapMarker, faPhone, faCar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

const SideBar = (data: any) => {
    return (
        <aside id="sidebar">
            <img src="./photo-profil-b&w.png" className="avatar" alt={"Avatar"}/>
            <div className="side-block" id="contact">
                <h1>
                    Info
                </h1>
                <ul>
                    <li><FontAwesomeIcon icon={faMapMarker}/> Nantes (44200)</li>
                    <li><FontAwesomeIcon icon={faEnvelope}/> jeremie.gambin@gmail.com</li>
                    <li><FontAwesomeIcon icon={faPhone}/> 06.24.89.44.49</li>
                    <li>
                        <FontAwesomeIcon icon={faGithub}/>
                        <a href="https://github.com/jbigman"> github.com/jbigman</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStackOverflow}/>
                        <a href="https://stackoverflow.com/users/2988788/jbigman"> jbigman</a>
                    </li>
                    <li><FontAwesomeIcon icon={faCar}/> Permis B</li>
                </ul>
            </div>
            <div className="side-block" id="skills">
                <h1>
                    Compétences
                </h1>
                {
                    data.stacks.map((collection: any) => {
                        return (
                            <div>
                                <strong>{collection.type}</strong>
                                <ul>
                                    {
                                        collection.stack.map((element: string) => {
                                            return (
                                                <li>
                                                    {Cartouche(element)}
                                                </li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="side-block" id="disclaimer">
                {/* */}
            </div>
        </aside>
    );

};

export default SideBar;
