// import ReactFullpage from '@fullpage/react-fullpage';
import './Fullpage.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Fullpage = () => {
        
  
      return(
          <div className="fullpage">
            <div className="section s1">
              <Section1 />
            </div>
            <div className="section s2" id="s2">
              <Section2 />
            </div>
            <div className="section s3" id="s3">
             <Section3 />
            </div>
            <div className="section s4" id="s4">
              <Section4 />
            </div>
            <div className="section s5" id="s5">
              Hire me !
            </div>
          </div>
        );
      };

export default Fullpage;
