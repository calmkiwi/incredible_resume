import './Section5.css';
import github from '../static/networks/github.png';
import linkedin from '../static/networks/lkd.png';
import ig from '../static/networks/ig.png';

const Section5 = () => {
    return(
        <div id="section5">
           <h1 className="titre_sec3">Hire me !</h1>
            <h1 className="titre_sec3 ombre_sec3" style={{color: '#6b07ad'}}>Hire me !</h1>
            <article>
                <h2>The internship of my dreams ! </h2>
                <p><strong>{'>>'}</strong> <span className="legend">What <strong>:</strong></span> I am looking for an internhip in <span className="underline"> IT Consulting</span>, <span className="underline">Software Development</span> or <span className="underline">Web Development</span>.</p>
                <p><strong>{'>>'}</strong> <span className="legend">Where <strong>:</strong></span> In North America (USA {'&'} Canada) or Australia. </p>
                <p><strong>{'>>'}</strong> <span className="legend">When <strong>:</strong> </span> Starting <span className="underline"> mid-April 2022</span>, and finishing in September, October or November 2022.</p>

                <h2>Contact me  ! </h2>
                <p><strong>{'>>'}</strong> <span className="legend">Email <strong>:</strong></span> stanislas.pielucha@student-cs.fr</p>
                <p><strong>{'>>'}</strong> <span className="legend">Phone <strong>:</strong></span> +33659327418</p>

                <h2>Check out my networks  ! </h2>
                <div className="networks">
                    <a href="https://www.linkedin.com/in/stanislas-pielucha/"><img src={linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/calmkiwi"><img src={github} alt="Github" /></a>
                    <a href="https://www.instagram.com/stanpiel/"><img src={ig} alt="Instagram" /></a>
                </div>
            </article>
        </div>
    );
};

export default Section5;