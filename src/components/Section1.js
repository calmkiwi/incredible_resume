import Stan from '../static/photos_main_page-baw.jpg';
import './Section1.css';
import Fleche_Bas_Black from '../static/fleche_bas_black.svg';
import kiwi_logo from '../static/kiwi_logo.png';


const Section1 = () => {
    return(
        <div id="section1">
            <header>
                <img src={kiwi_logo} alt="Logo de kiwi" className="kiwi_logo" />
                <div className="links">
                    <a href="">Education</a>
                    <a href="">Experience</a>
                    <a href="">IT Projects</a>
                    <a href="">Skills</a>
                    <a href="">Hire me!</a>
                </div>
            </header>
           <section className="blocprez">
            <div className="ombre ombre1">Stanislas</div>
            <div className="ombre ombre2">software developer.</div>
            <div className="main_title">
                <h1>Hi,</h1>
                <h1>I'm Stanislas,</h1>
                <h1>software developer.</h1>
            </div>
                <img className="PDP" alt="Image profil Stanislas" src={Stan} /> 
           </section>
           
            <div className="ombre_cercle"></div>
            <div className="ombre_cercle2"></div>
            <img className="bg_shape" src={Fleche_Bas_Black}/>
        </div>
    )
}

export default Section1;