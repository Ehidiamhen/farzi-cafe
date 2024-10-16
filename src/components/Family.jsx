import family1 from "../assets/images/family-1.webp"
import family2 from "../assets/images/family-2.webp"
import family3 from "../assets/images/family-3.webp"
import Button from "./Button";
import Carousel from "./Carousel";
import Reservations from "./Reservations";

export default function Family() {
    const familyCarousel =[
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/food-2.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/currey-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/food-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item-3webp.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/bar-2.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/wine.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/bar.webp",
    ]
  return (
    <div>
        <section id="1" className="py-12 border-b border-gold">
          <div className="hidden md:flex flex-col justify-center text-center py-12 w-5/6 mx-auto">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">
              CHERISHED MOMENTS
            </p>
            <h2 className="text-6xl font-semibold my-5">
              Family Lunch and Dinner at Farzi Cafe Mississauga
            </h2>
            <p className="my-2.5 leading-7">
              If you’re searching for the ideal spot in Mississauga for a family lunch or dinner, <b>Farzi Cafe</b> is where your search ends. 
              Conveniently located and renowned for its inviting atmosphere, our restaurant offers an exceptional dining experience tailored to families. 
              Whether you’re planning a casual lunch or a special dinner, Farzi Cafe is the perfect setting to gather your loved ones.
            </p>
          </div>
          <div className="md:px-2 w-screen md:w-[941px] mx-auto">
              <Carousel images={familyCarousel} slidesToShow dots={false} className="h-[500px] w-[941px] object-cover" />
          </div>
        </section>

        <section id="2" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-b border-gold">
          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">BLENDING TRADITION AND MODERNITY</p>
            <h2 className="text-6xl font-semibold my-5">Celebrate Special Family Moments</h2>
            <p className="w-11/12 my-2.5 leading-7">
              Farzi Café is more than just a place to eat—it’s a place to celebrate life’s special moments with family. 
              Whether you’re marking a birthday, anniversary, or simply enjoying a meal together, our restaurant provides the perfect backdrop for creating lasting memories. 
              Our team is dedicated to making every occasion special, with personalized service that ensures your experience is tailored to your family’s needs.
            </p>
            <Button
             text="Reservations" 
             link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
            />
          </div>
          <div>
            <img className="border border-gold" src={family1} alt="" />
          </div>
        </section>

        <section id="3" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-b border-gold">
          <div>
            <img className="border border-gold" src={family2} alt="" />
          </div>
          <div className="w-2/5 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">NORTHERN INDIAN DISHES</p>
            <h2 className="text-6xl font-semibold my-5">Kid-Friendly Dining Experience</h2>
            <p className="w-11/12 my-2.5 leading-7">
              Dining with children can sometimes be a challenge, but at Farzi Café, we’ve taken steps to make it a breeze. 
              Our menu includes options that appeal to younger diners, ensuring that even the pickiest eaters leave happy. 
              We’ve also trained our staff to be attentive to the needs of families, offering high chairs and quick service to make your meal as stress-free as possible.
            </p>
            <Button 
             text="Menu" 
             link="https://www.google.com/search?sca_esv=1926c2955f272b3e&sca_upv=1&rlz=1C5CHFA_enCA1017CA1017&q=Farzi+Cafe+%7C+Modern+Spice+Bistro&ludocid=7698142137783639181&lsig=AB86z5Wc0ZFLKTjZFuAQPH2wlWz3&shndl=-1&shem=lsde,vslcea&source=sh/x/loc/act/m1/1&kgs=e0b1e38578c96a39#vhid=33:/g/11v6g13zp5&vssid=menu-viewer-entrypoint"
            />
          </div>
        </section>

        <section id="4" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly">
          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">MODERN INNOVATION. INSPIRED.</p>
            <h2 className="text-6xl font-semibold my-5">Reserve Your Table Today</h2>
            <p className="w-11/12 my-2.5 leading-7">
              If you’re looking for a family-friendly restaurant in Mississauga that offers a welcoming atmosphere and a diverse menu, Farzi Café is the place to be. 
              Whether it’s a weekend lunch, an evening dinner, or a special celebration, we’re here to make your family dining experience enjoyable and memorable.
            </p>
            <p className="w-11/12 my-2.5 leading-7">
              Don’t wait—reserve your table today and discover why Farzi Café is a favorite among families in Mississauga.
              We look forward to welcoming you and your loved ones for a meal that’s as special as the time you spend together.
            </p>
            <Button
             text="Order Online" 
             link="https://food.google.com/chooseprovider?restaurantId=/g/11v6g13zp5&g2lbs=AOHF13ns_xfGuPejJajTPyZt12NvLLJxYG9-DLtIDcXS5iwIACEr5fR7RvlEaVCiVvfk4ilO7PzksZCC6vPYlMM1iyvNIs5pXED0AdW8UZwXHEd3ZaEHkD5Hy5yOH683eoBeEcMGDy7J&hl=en-CA&gl=ca&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=7gKvZqq9GtStptQPh_Ob2QU&ei=7gKvZqq9GtStptQPh_Ob2QU&fo_s=OA&opi=89978449&foub=mcpp&sa=X&ved=2ahUKEwiq7Oqzv9qHAxXUlokEHYf5JlsQjYwDKAF6BAggEAk&sei=CSkbTjUBNV6eEb9r9eDSaSUe&utm_campaign&utm_source=search"
            />
          </div>
          <div>
            <img className="hidden sm:block border border-gold" src={family3} alt="" />
          </div>
        </section>

        <section id="5">
          <div id="5" className="flex mb-6 w-[99%] mx-auto h-60 sm:h-fit">
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/food-2.webp" alt="family-img" />
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food.webp" alt="family-img" />
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/wine.webp" alt="family-img" />
          </div>
          <div id="5" className="flex mb-14 w-[99%] mx-auto h-60 sm:h-fit">
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/bar-2.webp" alt="family-img" />
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item-3webp.webp" alt="family-img" />
            <img className="w-1/3 border-2 border-[#cfcfcf] object-cover" src="https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item-4.webp" alt="family-img" />
          </div>
        </section>

        <section id="6">
            <Reservations />
        </section>
    </div>
  )
}
