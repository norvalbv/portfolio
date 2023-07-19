import Particles from "react-tsparticles";
import "./intro/intro.scss";

export default function LandingChild() {
  return (
    <div>
      <Particles
        id="tsparticles"
        className="background"
        options={{
          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: true, mode: "push" },
              onhover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: true, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              grab: { distance: 400, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
              repulse: { distance: 100, duration: 0.3 },
            },
          },
          particles: {
            color: {
              value: ["#ffa0c7", "#72d865", "#ffffff"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 0.75,
            },
            collisions: {
              enable: true,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          fullScreen: {
            enable: true,
          },
          polygon: {
            draw: { enable: true, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 100 },
            scale: 1,
            type: "none",
            url: "",
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
