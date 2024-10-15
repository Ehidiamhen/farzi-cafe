import business1 from "../assets/images/business-1.webp"
import business2 from "../assets/images/business-2.webp"
import Button from "./Button"
import Carousel from "./Carousel"
import Reservations from "./Reservations"

export default function Business() {
    const businessCarousel = [
        "https://farzicafecanada.ca/wp-content/uploads/2024/10/9825beac7d233bea7843f9c41ba312c019084fc0-2500x1798-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/10/c81e506fd56fe3a6c3269ade51d209f874802971-720x900-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/10/84465848408725c2d684799133ccbce4bae34836-768x699-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/10/cb05bd2479f4b7737fc5cd8136c277103282896e-4708x4708-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/food-2.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/currey-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/food-1.webp",
        "https://farzicafecanada.ca/wp-content/uploads/2024/09/indian-food-item-3webp.webp",
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
              Business Lunch and Dinner at Farzi Café Mississauga: Elevate Your Professional Dining Experience
            </h2>
            <p className="my-2.5 leading-7">
              When it comes to hosting a business lunch or dinner, choosing the right setting can make all the difference. 
              At Farzi Café Mississauga, we offer more than just a meal—we provide a sophisticated environment where you can 
              impress clients, strengthen professional relationships, and conduct business in style.
            </p>
          </div>
          <div className="md:px-2 w-screen md:w-[941px] mx-auto">
              <Carousel images={businessCarousel} slidesToShow dots={false} className="h-[500px] w-[941px] object-cover" />
          </div>
        </section>

        <section id="2" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-b border-gold">
          <div className="w-1/2 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">NORTHERN INDIAN DISHES</p>
            <h2 className="text-6xl font-semibold my-5">A Refined Setting for Professional Gatherings</h2>
            <p className="w-11/12 my-2.5 leading-7">
              Farzi Café is designed with the modern professional in mind. Our elegant décor, combined with a relaxed yet upscale ambiance, creates the perfect backdrop for business meetings and corporate dining. 
              Whether you’re closing a deal, brainstorming new ideas, or simply catching up with colleagues, our restaurant offers the ideal environment to foster productive conversations.
            </p>
            <Button
             text="Reservations" 
             link="https://www.google.com/maps/reserve/v/dine/c/yp1ppZKtVrE?source=pa&opi=89978449&hl=en-CA&gei=7gKvZqq9GtStptQPh_Ob2QU&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfarzi%2Bcafe%2Bcanada%26rlz%3D1C5CHFA_enCA1017CA1017%26oq%3Dfarzi%2Bcafe%2Bcan%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIJCAQQABgKGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1"
            />
          </div>
          <div>
            <img className="border border-gold" src={business1} alt="" />
          </div>
        </section>

        <section id="3" className="w-4/5 mx-auto flex flex-wrap py-20 justify-evenly border-b border-gold">
          <div>
            <img className="border border-gold" src={business2} alt="" />
          </div>
          <div className="w-2/5 flex flex-col justify-center text-left">
            <p className="text-gold tracking-[0.35em] font-bold text-sm">GET IN TOUCH</p>
            <h2 className="text-6xl font-semibold my-5">Book Your Business Lunch or Dinner Today</h2>
            <p className="w-11/12 my-2.5 leading-7">
              Make your next business lunch or dinner a success by choosing Farzi Café Mississauga. 
              With our sophisticated setting, diverse menu, and professional service, we provide everything you need to make a lasting impression. 
              Whether you’re hosting a small meeting or a large corporate event, we’re here to ensure that your experience is seamless and enjoyable.
            </p>
            <p className="w-11/12 my-2.5 leading-7">
              Book your table today and discover why Farzi Café is the go-to choice for business dining in Mississauga. 
              Let us help you elevate your professional dining experience and create an environment where business thrives.
            </p>
            <Button 
             text="Order Online" 
             link="https://www.google.com/search?sca_esv=1926c2955f272b3e&sca_upv=1&rlz=1C5CHFA_enCA1017CA1017&q=Farzi+Cafe+%7C+Modern+Spice+Bistro&ludocid=7698142137783639181&lsig=AB86z5Wc0ZFLKTjZFuAQPH2wlWz3&shndl=-1&shem=lsde,vslcea&source=sh/x/loc/act/m1/1&kgs=e0b1e38578c96a39#vhid=33:/g/11v6g13zp5&vssid=menu-viewer-entrypoint"
            />
          </div>
        </section>

        <section id="4">
            IMAGES
        </section>

        <section id="5">
            <Reservations />
        </section>
    </div>
  )
}
