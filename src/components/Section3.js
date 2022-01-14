import './Section3.css';
import Fleche_Bas from '../static/fleche_bas.svg';
import Fleche_Bas_Purple from '../static/fleche_bas_purple.svg';
import frigate from '../static/Frigate_purple.svg';
import frigate_black from '../static/Frigate_black.svg';
import NG from '../static/Naval_group.svg';
import Laz from '../static/lazarus.png';
import Matlab from '../static/matlab.png';
import tcpip from '../static/TCP-IP.png';
import wifi_wave from '../static/wifi-wave.png';

const Section3 = () => {

    return(
        <div id="section3">
            <h1 className="titre_sec3">Experience</h1>
            <h1 className="titre_sec3 ombre_sec3">Experience</h1>
            <div className="mainBloc">
                <div className="code_screen">
                    <h2><strong>{'>>'} </strong>man StanislasPielucha</h2>
                    <h3>Software Developer Apprentice at Naval Group.</h3>
                    <div>
                        <h2><strong>{'>>'}</strong> man Naval Group</h2>
                        <h3>The company that builds warships and submarines for the french navy and several foreign navies.</h3>
                    </div>
                    <h2><strong>{'>>'}</strong> when StanislasPielucha NavalGroup</h2>
                    <h3>From October 2019 to April 2022.</h3>
                    <h2><strong>{'>>'}</strong> what mission StanislasPielucha</h2>
                    <h3>The development of a software for the optimization of electromagnetic fields on frigates.</h3>
                    <h2><strong>{'>>'}</strong> which Technologies --used</h2>
                    <h3>Pascal Object</h3>
                    <h3>Matlab</h3>
                    <h3>TCP/IP Communications</h3>
                    <h2><strong>{'>>'}</strong></h2>
                </div>
                <div className="animation_part">
                    
                    <img src={frigate_black} alt="frigate" className="frigate"/>
                    <img src={frigate} alt="frigate" className="frigate ombre_fri"/>
                    <img src={NG} alt="Naval Group" className='ng' />
                    <img src={Laz} alt="Lazarus" className="Laz" />
                    <img src={Matlab} alt="Matlab" className="ML" />
                    <img src={tcpip} alt="Tcp-ip" className="TCPIP" />
                    <img src={wifi_wave} alt="Wifi wave" className="wifi" />
                </div>
            </div>
        </div>
    );
}

export default Section3;
