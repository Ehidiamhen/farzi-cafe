import farziLogo from "../assets/farzi.svg";
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import Reservations from "./Reservations";

export default function Home() {
  return (
    <>
      <section
        className="h-screen w-screen flex flex-col items-center justify-center"
        id="hero"
      >
        <div className="relative w-full h-screen overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dAOzXabcc-c?autoplay=1&mute=1&loop=1&playlist=dAOzXabcc-c&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; loop; muted; fullscreen"
            allowFullScreen
          ></iframe>

          <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <img src={farziLogo} className="hero-img" alt="Farzi logo" />

            <h1 className="text-5xl font-bold">FARZI CANADA</h1>
            <h2 className="heading-sm md:text-xl text-light uppercase tracking-[0.4em] font-semibold text-3xl mb-2">
              MODERN INDIAN BISTRO
            </h2>
              <div className="flex gap-6 items-center">
              <a href="https://www.instagram.com/farzicanada/?hl=en" target="_blank"><img src={instagram} alt="insta" className="w-9" /></a>
              <a href="https://www.facebook.com/farzicanada/" target="_blank"><img src={facebook} alt="facebook" className="w-9" /></a>
              </div>
          </div>

          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
      </section>

      <section id="2"><h2>Farzi Cafe Canada</h2></section>
 
      <section id="3"><h2>Family Lunch & Dinner</h2></section>
 
      <section id="4"><h2>Business Lunch & Dinner</h2></section>
 
      <section id="5">IMAGES</section>
 
      <section id="6"><Reservations /></section>
    </>
  );
}
