import farziLogo from "../assets/farzi.svg";
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import Reservations from "./Reservations";
import one from "../assets/images/one.jpg"
import two from  "../assets/images/two.webp";
import three from "../assets/images/three.webp";
import indianFoodItem1 from "../assets/images/indian-food-item-1.webp"
import indianFoodItem2 from "../assets/images/indian-food-item-2.webp"
import Button from "./Button";

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

            <h1 className="text-5xl font-bold tracking-[0.5em]">FARZI CANADA</h1>
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

      <section id="2" className="p-20 border-b border-gold">
        <p className="text-gold tracking-[0.35em] font-bold text-sm">BEST INDIAN RESTAURANT IN MISSISSAUGA</p>
        <h2 className="text-6xl font-semibold my-5">Farzi Cafe Canada</h2>
        <p className="my-2.5 leading-7">Welcome to Farzi Cafe, one of Mississauga’s most esteemed fine dining establishments. Located in the heart of Mississauga, Farzi Cafe brings the wondrous flavors of India to North America, offering an unparalleled sensory gourmet experience.</p>
        <div className="flex flex-wrap w-11/12 mx-auto pt-14">
          <img className="w-80 m-2.5" src={one} alt="" />
          <img className="w-80 m-2.5" src={two} alt="" />
          <img className="w-80 m-2.5" src={three} alt="" />
        </div>
      </section>
 
      <section id="3" className="w-4/5 mx-auto flex flex-wrap py-20 justify-between border-b border-gold">
        <div className="w-1/2 flex flex-col justify-center text-left">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">BLENDING TRADITION AND MODERNITY</p>
          <h2 className="text-6xl font-semibold my-5">Family Lunch & Dinner</h2>
          <p className="w-11/12 my-2.5 leading-7">At Farzi Cafe Mississauga, family lunches become a cherished experience with our welcoming ambiance and diverse menu.</p>
          <p className="w-11/12 my-2.5 leading-7">Gather around our comfortable tables and enjoy a range of delectable dishes that cater to all tastes, from vibrant appetizers to hearty mains and delightful desserts.</p>
          <Button 
           text="Reservations" 
           link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
          />
        </div>
        <div>
          <img className="border border-gold" src={indianFoodItem1} alt="" />
        </div>
      </section>
 
      <section id="4" className="w-4/5 mx-auto flex flex-wrap py-20 justify-between border-b border-gold">
        <div>
          <img className="border border-gold" src={indianFoodItem2} alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center text-left">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">MISSISSAUGA'S FINEST</p>
          <h2 className="text-6xl font-semibold my-5">Business Lunch & Dinner</h2>
          <p className="w-11/12 my-2.5 leading-7">At Farzi Cafe Mississauga, a business lunch is more than just a meal; it’s an opportunity to impress clients and colleagues in a refined setting.</p>
          <p className="w-11/12 my-2.5 leading-7">Our menu features a range of sophisticated options, from gourmet starters to elegant main courses, designed to cater to various tastes and dietary needs.</p>
          <Button 
           text="Menu" 
           link="https://farzicafecanada.ca/wp-content/uploads/2024/08/Business-lunch-menu-farzi-print.pdf"
          />
        </div>
      </section>
 
      <section id="5">IMAGES</section>
 
      <section id="6"><Reservations /></section>
    </>
  );
}
