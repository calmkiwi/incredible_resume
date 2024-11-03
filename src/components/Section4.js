import './Section4.css';
import Fleche_Bas from '../static/fleche_bas.svg';
import Fleche_Bas_Purple from '../static/fleche_bas_purple.svg';
import Logo_ReactNative from '../static/portfolio/reactnative/logo_reactnative.png';
import video_old from '../static/portfolio/reactnative/video_myvr_old.mp4';
import video_new from '../static/portfolio/reactnative/video_myvr_new.mp4';
import logo_angular from '../static/logo_angular.svg';
import { useState } from 'react';

const Section4 = () => {
    
    const [toggled, setToggled] = useState(false);


    const toggle = () =>{
        var old_design = document.getElementById('OD_title');
        var new_video = document.getElementsByClassName('video_new')[0];
        old_design.style.color = toggled ? "#000" : "#6b07ad";
        old_design.innerText = toggled ? "Old design" : "New design";
        new_video.style.opacity = toggled ? 0 : 1;
        setToggled(!toggled);
    }

    return(
        <div id="section4">
            <h1 className="titre_sec3">Dev Projects</h1>
            <h1 className="titre_sec3 ombre_sec3" style={{color: '#6b07ad'}}>Dev Projects</h1>
            <div className="p_mainbloc">
                <div className="p_bloc1">
                    <div className="p_bloc1_1">
                        <h2>Full redesign of the mobile app MyVR</h2>
                        <h3><strong>{'>>'} </strong>Created by ViaRezo, my school's network association.</h3>
                        <h3><strong>{'>>'} </strong>An app for members of the campus internet network.</h3>
                        <div className="reactnative">
                            <h3><strong>{'>>'} </strong>Redesigned alone using <a href="https://reactnative.dev/">React Native.</a> </h3>
                            <img src={Logo_ReactNative} alt="logo Angular" className="logoreactnative"/> 
                        </div>
                        <div className="old_design">
                            <button id="OD"
                            onClick={toggle}>Click me !</button>
                            <h2 id='OD_title'>Old design</h2>
                        </div>
                        <div className="checktheapp">
                            <h2>Check the app <a href="https://apps.apple.com/fr/app/myvr/id1542530024">on IOS </a>{'&'} <a href="https://play.google.com/store/apps/details?id=fr.viarezo.myvr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">on Android !</a></h2>
                        </div>
                    </div>
                    <div className="p_bloc1_2">
                        <video className="video_old" autoplay="autoplay" muted loop disablePictureInPicture height="380">
                                            <source src={video_old} type="video/mp4" />
                        </video>
                        <video className="video_new" autoplay="autoplay" muted loop disablePictureInPicture height="380">
                                            <source src={video_new} type="video/mp4" />
                        </video>
                    </div>
                    
                
                </div>
                <div className="p_bloc2">
                    <h2>Manager of the project for the update of the main website of Viarezo</h2>
                    <div className="vitrineinfos">
                        <h3><strong>{'>>'} </strong>Adding of the numerous ViaRezo's partners on the website.</h3>
                        <h3><strong>{'>>'} </strong>Modification of several design aspects.</h3>
                        <h3><strong>{'>>'} </strong>Management of the team, the calendar related to the project and the meetings.</h3>
                        <div className="angular">
                            <h3><strong>{'>>'} </strong>Using <a href="https://angular.io/">Angular.</a> </h3>
                            <img src={logo_angular} alt="logo Angular" className="logoangular"/> 
                        </div>
                      
                    </div>
                    <div className="checkthewebsite">
                        <h2>Check the <a href="https://viarezo.fr/">website here !</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;