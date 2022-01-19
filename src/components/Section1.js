import Stan from '../static/photos_main_page-baw.jpg';
import './Section1.css';
import Fleche_Bas_Black from '../static/fleche_bas_black.svg';
import kiwi_logo from '../static/kiwi_logo.png';
import {useRef, useEffect} from 'react';


const Section1 = () => {
    const smoothScroll = (section) =>{
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return(
        <div id="section1">
            <header>
                <a href='' className="a_kiwi"><img src={kiwi_logo} alt="Logo de kiwi" className="kiwi_logo" /></a>
                <div className="links">
                    <span onClick={() => {smoothScroll("s2")}} className="yellowlink">Education</span>
                    <span onClick={() => {smoothScroll("s3")}} className="purplelink">Experience</span>
                    <span onClick={() => {smoothScroll("s4")}} className="yellowlink">Dev Projects</span>
                    <span onClick={() => {smoothScroll("s5")}} className="purplelink">Hire me!</span>
                </div>
            </header>
           <section className="blocprez">
                <div className="hibloc">
                    <div className="ombre ombre1">Stanislas</div>
                    <div className="ombre ombre2">software developer.</div>
                    <div className="main_title">
                        <h1>Hi,</h1>
                        <h1>I'm Stanislas,</h1>
                        <h1>software developer.</h1>
                    </div>
                </div>
            
            <div className="PDPbloc">
                <img className="PDP" alt="Image profil Stanislas" src={Stan} /> 
                <div className="ombre_cercle"></div>
                <div className="ombre_cercle2"></div>
            </div>
           </section>
           
            
            <img className="bg_shape" src={Fleche_Bas_Black}/>
        </div>
    )
}

export default Section1;