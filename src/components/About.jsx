import { Link } from "react-router-dom";
import about1 from "../assets/images/about-1.jpg"
import about2 from "../assets/images/about-2.jpg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import lamb from "../assets/Lamb-Shank.mov"
import Button from "./Button";
import Carousel from "./Carousel";
import { carouselImages } from "./Events";

const aboutCarousel2 = [
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04747-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04720-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04663-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04751-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04735-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04682-800x500.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04741-800x500.jpg",
]

export default function About() {
  return (
    <div>
      <section id="1">
        <img className="max-h-[455px] object-cover bg-cover bg-no-repeat w-full" src={about1} alt="" />
        <div className="flex flex-col justify-center text-center py-12 w-5/6 mx-auto">
          <p className="tracking-[0.35em] font-bold text-sm">
            INDIAN FINE DINING
          </p>
          <h2 className="text-6xl font-semibold my-5">Farzi Cafe Canada</h2>
          <p className="my-2.5 leading-7">
            Welcome to Farzi Cafe, one of Mississauga’s most esteemed fine
            dining establishments. Located in the heart of Mississauga, Farzi
            Cafe brings the wondrous flavors of India to North America, offering
            an unparalleled sensory gourmet experience.
          </p>
          <Button
            classname="mt-8"
            text="RESERVE A TABLE"
            link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
          />
        </div>
      </section>

      <section id="2" className="flex flex-wrap mx-auto py-12">
        <div className="flex flex-col justify-center text-center w-80 mx-auto">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">
            Our selection
          </p>
          <h2 className="text-6xl font-semibold mt-5">FOOD</h2>
          <p className="my-2.5 leading-7 w-4/5 mx-auto">
            At our Mississauga restaurant, we take pride in crafting a diverse
            menu that highlights fresh, high-quality ingredients. From mouth
            watering appetizers to delectable entrees and delightful desserts,
            each dish is thoughtfully prepared to provide an unforgettable
            dining experience. Join us for a taste of something extraordinary!
          </p>
          <Button
            classname="mt-8"
            text="FOOD MENU"
            link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
          />
        </div>

        <img
          className="w-80 aspect-[16.2/21] mx-auto md:mx-0"
          src={about2}
          alt=""
        />

        <div className="flex flex-col justify-center text-center w-80 mx-auto">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">
            Our choice
          </p>
          <h2 className="text-6xl font-semibold mt-5 mb-3">DRINKS</h2>
          <p className="my-2.5 leading-7 w-4/5 mx-auto">
            Cheers to Great Taste: Quench your thirst with our thoughtfully
            curated drink menu! From handcrafted cocktails and premium wines to
            refreshing non-alcoholic beverages, we have something for everyone.
            Each drink is expertly crafted to complement your meal and elevate
            your dining experience in Mississauga.
          </p>
          <Button
            classname="mt-8"
            text="DRINKS MENU"
            link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
          />
        </div>
      </section>

      <section id="3" className="my-12">
        <div className="flex flex-col justify-center">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">
            Fusion. Flavor. Farzi
          </p>
          <h2 className="text-6xl font-semibold my-5">The Perfect Ambiance</h2>
          <p className="w-4/5 mx-auto my-2.5 leading-7">
            From our elegant dining area to our cozy bistro section, Farzi Cafe
            offers a high-energy ambiance that’s perfect for any gathering. Our
            warm lighting, contemporary decor, and attentive service create an
            environment where you can relax and enjoy.
          </p>
          <div className="px-2 my-12">
              <Carousel images={carouselImages} slidesToShow={4} dots={true} className="w-96 h-96" />
            </div>
        </div>
      </section>

      <section id="4">
        <div className="flex flex-col justify-center">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">
            Rock The Night
          </p>
          <h2 className="text-6xl font-semibold my-5">Events</h2>
          <p className="w-4/5 mx-auto my-2.5 leading-7">
            Experience the rhythm of the night with electrifying live music and
            boundless energy. Where the music never stops and the fun is always
            in full swing.
          </p>
        </div>
        <div className=" w-screen lg:w-11/12 mx-auto pt-14 pb-6">
            <Carousel images={aboutCarousel2} slidesToShow={2} dots={false} className="px-1.5 w-fit mx-auto" />
        </div>
        <Button text="VIEW MORE" link="/events" />
      </section>

      <section id="5" className="flex flex-wrap mt-12">
        <div className="w-1/2 min-w-80 mx-auto flex flex-col justify-center">
          <p className="text-gold tracking-[0.35em] font-bold text-sm">
            Premier Mississauga Restaurant
          </p>
          <h2 className="text-6xl font-semibold my-5">VISIT US</h2>

          <div className="leading-7 text-lg">
            <a href="https://www.google.com/maps/dir//100+City+Centre+Dr,+Mississauga,+ON+L5B+2C9/@43.5924842,-79.728356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b47c8519b1a8f:0x6ad54b7ce10f5c8d!2m2!1d-79.6459553!2d43.5925138?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
              100 City Centre Dr, Mississauga, ON L5B 2C9
            </a>
            <p className="mt-2">
              <a href="https://www.google.com/search?sca_esv=f10c793940d61d3a&sca_upv=1&rlz=1C1VDKB_enCA941CA946&q=farzi+cafe+%7C+modern+spice+bistro+phone&ludocid=7698142137783639181&sa=X&ved=2ahUKEwiV0LXYseOHAxV8CTQIHZFXHQIQ6BN6BAg8EAI"
              >Phone:</a> <a href="tel:(905) 848-8482">(905) 848-8482</a>
            </p>
            Reservations: <Link to="/contact">farzicafecanada.ca</Link>
          </div>

          <div className="flex justify-center items-center gap-5 pt-1 pb-5">
            <a href="https://www.facebook.com/farzicanada/" target="_blank"><img src={facebook} alt="facebook" className="w-6" /></a>
            <a href="https://www.instagram.com/farzicanada/?hl=en" target="_blank"><img src={instagram} alt="insta" className="w-6" /></a>
          </div>
        </div>
        <video className=" w-full sm:w-1/2 min-w-80 mx-auto aspect-[1.777777] object-cover" src={lamb} autoPlay loop muted="muted"></video>
      </section>
    </div>
  );
}
