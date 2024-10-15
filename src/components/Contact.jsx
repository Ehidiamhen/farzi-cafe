import Button from "./Button";
import Reservations from "./Reservations";
import contact1 from "../assets/images/contact-1.webp"

export default function Contact() {
  return (
    <div className="">
        <section id="1" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-y border-gold">
          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">GET IN TOUCH</p>
            <h2 className="text-6xl font-semibold my-5">CONTACT US</h2>
            <div className="leading-7 text-lg">
              <a href="https://www.google.com/maps/dir//100+City+Centre+Dr,+Mississauga,+ON+L5B+2C9/@43.5924842,-79.728356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b47c8519b1a8f:0x6ad54b7ce10f5c8d!2m2!1d-79.6459553!2d43.5925138?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">
                100 City Centre Dr, Mississauga, ON L5B 2C9
              </a>
              <p className="my-2">
                Email: <a href="mailto:info@farzicafecanada.ca">info@farzicafecanada.ca</a>
              </p>
              Phone: <a href="tel:(905) 848-8482">(905) 848-8482</a>
            </div>
            <Button
             text="Map" 
             link="/"
            />
          </div>
          <div>
            <Reservations />
          </div>
        </section>

        <section id="2" className="bg-green w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-b border-gold">
          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">IN THE HEART OF MISSISSAUGA</p>
            <h2 className="text-6xl font-semibold my-5">Opening Hours</h2>
            <p className="w-11/12 my-2.5 leading-7"><b>Monday: </b>11:00 AM – 4:00 PM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Tuesday: </b>11:00 AM – 4:00 PM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Wednesday: </b>11:00 AM – 4:00 PM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Thursday: </b>11:00 AM – 4:00 PM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Friday: </b>11:00 AM – 4:00 PM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Saturday: </b>12:00 PM – 1:00 AM</p>
            <p className="w-11/12 my-2.5 leading-7"><b>Sunday: </b>12:00 PM – 1:00 AM</p>
            <Button
             text="Reservations" 
             link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
            />
          </div>
          <div>
            <img className="border border-gold" src={contact1} alt="" />
          </div>
        </section>

        <section></section>
    </div>
  )
}
