import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Template = () => {
  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to(elem, { opacity: 1, y: 0, duration: duration || 0.6 }),
          onLeaveBack: () => gsap.to(elem, { opacity: 0, y: -200, duration: duration || 0.6 }),
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
          onEnter: () => gsap.to(elem, { opacity: 1, x: 0, duration: duration || 0.6 }),
          onLeaveBack: () => gsap.to(elem, { opacity: 0, x: -200, duration: duration || 0.6 }),
        },
      }
    );
  };

  useEffect(() => {
    slideInTop("#box1");
  }, []);

  useEffect(() => {
    slideInTop("#box2");
  }, []);

  useEffect(() => {
    slideInLeft("#box3");
  }, []);

  useEffect(() => {
    slideInLeft("#box4");
  }, []);

  return (
    <section className="nexsection">
      <Link className='passer' to="/home">Passer</Link>
      <div className="sectiont">
        <div id="box1" className="box">
          Bienvenu dans votre Application LexCam
        </div>
        <div id="box2" className="box">
          <p>Une Application qui vous permet de maitriser la loie juridique du cameroun commme le font de votre poche en un laps de temps</p>
        </div>
        <div id="box3" className="box">
          <p>Contrairement aux supports physiques, amener avec vous ou que vous soyez vos loies juridique numerique, consultez à tout moment et sortez de l&apos;ignorence</p>
        </div>
        <div id="box4" className="box">
          <p></p>
        </div>
        <div id="lastsection" className="box">
          last box
        </div>
      </div>
    </section>
  );
};

export default Template;