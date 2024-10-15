import event1 from "../assets/images/event-1.jpg"
import event2 from "../assets/images/event-2.jpg"
import event3 from "../assets/images/event-3.jpg"
import event4 from "../assets/images/event-4.png"
import Button from "./Button"
import Reservations from "./Reservations"

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
          Image Carousel
        </section>

        <section id="3">
            <Reservations />
            Image Carousel
        </section>
    </div>
  )
}
