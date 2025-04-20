import { Section } from "./Components/Section/Section.jsx";
import { Particles } from "./Components/Particles/Particles.jsx";
import { Carousel } from "./Components/Carousel/Carousel.jsx";
import { FooterButton } from "./Components/FooterButton/FooterButton.jsx";

import "./App.css";

export function App() {
  return (
    <>
      <div className="header-box">
        <img className="headshot"></img>
        <div>
          <h1 className="test size">Tobechukwu Okafor</h1>
          <p className="undercard">Frontend Developer</p>
        </div>
      </div>

      <Section head={"About Me"}>
        <div className="section-flex odd">
          <div className="body-text">
            <p>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis lorem in lorem eleifend commodo. Vivamus ullamcorper.
              <br />
              <br />
              Convallis urna vel varius. Proin mattis, quam at consequat
              tincidunt, orci dolor rhoncus dui, vel cursus tellus eros posuere
              risus. Proin et euismod leo. Etiam blandit dolor mauris, sit amet
              dictum ipsum consequat vel.
              <br />
              <br />
              Check out some of my past projects below!
            </p>
          </div>
          <Particles />
        </div>
      </Section>

      <Section head={"Projects"}>
        <Section subhead={"Project Name I"}>
          <div className="section-flex even">
            <div className='project-flex'>
            <div className="body-text">
              <p>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sagittis lorem in lorem eleifend commodo. Vivamus ullamcorper.
                <br />
                <br />
                Convallis urna vel varius. Proin mattis, quam at consequat
                tincidunt, orci dolor rhoncus dui, vel cursus tellus eros
                posuere risus. Proin et euismod leo. Etiam blandit dolor mauris,
                sit amet dictum ipsum consequat vel.
                <br />
                <br />
                Built with <span>tool1,</span> <span>tool2,</span> and{" "}
                <span>tool3.</span>
              </p>
            </div>
            <Carousel />
            </div>
          <Particles />
          </div>
        </Section>
        <Section subhead={"Project Name II"}>
          <div className="section-flex odd">
            <div className="project-flex">
              <div className="body-text">
                <p>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  sagittis lorem in lorem eleifend commodo. Vivamus ullamcorper.
                  <br />
                  <br />
                  Convallis urna vel varius. Proin mattis, quam at consequat
                  tincidunt, orci dolor rhoncus dui, vel cursus tellus eros posuere
                  risus. Proin et euismod leo. Etiam blandit dolor mauris, sit amet
                  dictum ipsum consequat vel.
                  <br />
                  <br />
                  Built with <span>tool1,</span> <span>tool2,</span> and{" "}
                  <span>tool3.</span>
                </p>
              </div>
              <Carousel />
            </div>
              <Particles />
          </div>
        </Section>
        <Section subhead={"Project Name III"}>
          <div className="section-flex even">
          <div className="body-text">
            <p>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis lorem in lorem eleifend commodo. Vivamus ullamcorper.
              <br />
              <br />
              Convallis urna vel varius. Proin mattis, quam at consequat
              tincidunt, orci dolor rhoncus dui, vel cursus tellus eros posuere
              risus. Proin et euismod leo. Etiam blandit dolor mauris, sit amet
              dictum ipsum consequat vel.
              <br />
              <br />
              Built with <span>tool1,</span> <span>tool2,</span> and{" "}
              <span>tool3.</span>
            </p>
          </div>
          <Particles />
          </div>
        </Section>
      </Section>

      <Section head={"Contact"} subhead={" "}>
        <p className="footer-text">
          Website made with ♥️ (& <span>React</span> + <span>Tailwind</span> +{" "}
          <span>Pts.js</span>.)
        </p>
        <div className="footer-button-container">
          <FooterButton />
          <FooterButton />
          <FooterButton />
          <FooterButton />
        </div>
      </Section>
    </>
  );
}