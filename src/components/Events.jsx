import event1 from "../assets/images/event-1.jpg"
import event2 from "../assets/images/event-2.jpg"
import event3 from "../assets/images/event-3.jpg"
import event4 from "../assets/images/event-4.png"
import Button from "./Button"
import Carousel from "./Carousel"
import Reservations from "./Reservations"

export const carouselImages = [
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC05070-qszvae4uadcb7427k2fuas4kzle40706ldhvrjnxjc.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC05067-qszv9sijx6ips2xm2b3f7fkzbqco35mcuehpq6jzig.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC05028-3-qszv8pz64z1yk2hlbcfpv7b2yxmmbkdd13qt1u54lk.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02917-2-qsf3xur56h2272ek5xl8tjq0jsfqakup89uz8daidk.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02912-1-qsf3xsvgsszhjuhagwrzok73d0ozv6n8k0k09tdaq0.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02904-2-qsf3xrxmlyy788inmedd42fmrmtmnhji7vwisjeow8.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02840-2-qszuzfcmjybvqvznlbsj7jqzhrfy7bgx33hy7bxa4o.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02939-2-qszv2l33iwnkrpeg56ye391rddvd2p0fuqfp9t8n7s.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02945-3-qsf3y617ghhi2dy6c2grngvjoew4uy3h9toszotsaw.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC02954-1-qsf3y7wvu5k2plvg13a0sgegv6mvacaxy2zry8qzyg.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/elementor/thumbs/DSC04989-qszv3pi5os6wmxrql6fckgukwyc59ogwcahkwpkps8.jpg",
]

const eventGallery = [
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04741.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04747.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04751.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04697-768x959.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04706-768x959.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04735.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04720-768x960.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04663-768x960.jpg",
    "https://farzicafecanada.ca/wp-content/uploads/2024/08/DSC04682.jpg",
]

export default function Events() {
  return (
    <div>
        <section id="1" className="border-b border-gold pb-10">
          <h2 className="text-6xl font-semibold my-5">Upcoming Events</h2>
          <div className="flex flex-wrap gap-3 justify-center my-12">
            <img className="min-w-80 w-1/5" src={event1} alt="event-1" />
            <img className="min-w-80 w-1/5" src={event2} alt="event-2" />
            <img className="min-w-80 w-1/5" src={event3} alt="event-3" />
            <img className="min-w-80 w-1/5" src={event4} alt="event-4" />
          </div>
          
          <Button classname="inline mr-6" text="Reservations" link="/events" />
          <Button classname="inline" text="Book a Table" link="/contact" />
        </section>

        <section id="2" className="border-b border-gold py-10">
          <h2 className="text-6xl font-semibold my-5">Events Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-7 w-fit mx-auto my-12">
            {eventGallery.map((image, index) => (
              <img key={index} className="max-h-96 w-fit aspect-[8/10] object-cover" src={image} alt={`Event ${index}`} />
            ))}
          </div>
        </section>

        <section id="3" className="mb-10 mx-auto">
            <Reservations />
            <div className="px-2">
              <Carousel images={carouselImages} slidesToShow={4} dots={true} className="w-96 h-96 mx-auto" />
            </div>
        </section>
    </div>
  )
}
