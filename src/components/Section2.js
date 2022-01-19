import './Section2.css';
import Fleche_Bas from '../static/fleche_bas.svg';
import Fleche_Bas_Purple from '../static/fleche_bas_purple.svg';
import dino_gg from '../static/dino_gg.png';
import arrow1 from '../static/arrow_01.svg';
import arrow2 from '../static/arrow_02.svg';
import arrow3 from '../static/arrow_03.svg';
import curly_brace from '../static/curly_brace.svg';
import curly_brace2 from '../static/curly_brace2.svg';


const Section2 = () => {

    return(
        <div id="section2">
             {
               //Background images !
             }
             <div className="title_bar">
                <img src={dino_gg} className="dino" />
                <h1 className="titre">Education</h1>
                <img src={dino_gg} className="dino dino_2" />
                <h1 className="titre ombre3">Education</h1>
            </div>
            <div className="chronoligne">
                <div className="ligne ombre_l_1"></div>
                <div className="ligne"></div>
                {
                  //Circles
                }
                <div className="big_circle" style={{left: "90%"}}></div>
                <div className="big_circle ombre_bc"></div>
                <div className="big_circle" style={{left: "10vh"}}></div>
                <div className="big_circle ombre_bc_abs" style={{left: "10vh"}}></div>
                <div className="big_circle" style={{left: "85.2vh"}}></div>
                <div className="big_circle ombre_bc_abs" style={{left: "85.2vh"}}></div>
                <div className="big_circle" style={{left: "152.4vh"}}></div>
                <div className="big_circle ombre_bc_abs" style={{left: "152.4vh"}}></div>
                {
                  //Dates
                }
                <h2 className="dates" style={{left:"6vh"}}>2017</h2>
                <h2 className="dates" style={{left:"81.2vh"}}>2019</h2>
                <h2 className="dates" style={{left:"147vh"}}>2021</h2>
                <h2 className="dates" style={{left:"180vh"}}>2022</h2>
            </div>
            <div className="chrono_container">
                <div className="card c1">
                    <h2>Jules Ferry Prep School</h2>
                    <p>This was a 2 years intensive and <strong>(hard)</strong> school in the <strong>Physics and Technology</strong> field order to prepare for the competitive 
                        exams to have the opportunity to enter the best french schools of engineering. The school is in <strong>Versailles, France.</strong>
                      </p>
                      <div className="main_features">
                          <div>
                            2 years
                          </div>
                          <div>
                            Physics and Tech
                          </div>
                          <div>
                            Ranked 148/France
                          </div>
                      </div>
                </div>
                <div className="card c2">
                    <h2>CentraleSupélec</h2>
                
                      <p> CentraleSupélec is a french school of engineering near <strong>Paris, France </strong>
                       and ranked first french school in terms of international employment by the Times.
                      
                      I'm expected to graduate in Software Sciences in <strong>Fall 2022</strong>.
                        </p>
                      <div className="main_features">
                          <div>
                            1st french school
                          </div>
                          <div>
                            GPA of 3,79/4
                          </div>
                          <div>
                            Software Sciences
                          </div>
                      </div>
                    
                </div>
                <div className="card c3">
                    <h2>IELTS</h2>
                      <p>The IELTS is an International English Language Testing System. I sit the IETLS in <strong>December 2021.</strong></p>
                      <div className="main_features">
                          <div>
                           December 2021
                          </div>
                          <div>
                            Grade : 7/9 (C1 level)
                          </div>
                      </div>
                </div>
            </div>

            {
              //Background arrows
            }
            <img className='arrow1' alt="arrow" src={arrow1}/>
            <img className='arrow2' alt="arrow" src={arrow2}/>
            <img className='arrow3' alt="arrow" src={arrow3}/>
            <img className='cb' alt="curly_brace" src={curly_brace}/>
            <img className='cb2' alt="curly_brace2" src={curly_brace2}/>
        </div>
    )
}

export default Section2;