import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        width: "40px",           // Adjust size of the arrows
        height: "40px",
        position: "absolute",
        top: "50%",              // Vertically center the arrows
        transform: "translateY(-50%)",
        zIndex: 1,               // Ensure arrows are on top of the carousel
        left: direction === "left" ? "0px" : "unset", // Left arrow positioning
        right: direction === "right" ? "0px" : "unset", // Right arrow positioning
      }}
      onClick={onClick}
    />
  );

export default function Carousel({ images, slidesToShow = 3, autoplaySpeed = 2000, className, dots }) {
    const settings = {
      dots: dots,               // Show navigation dots
      infinite: true,           // Enable infinite loop
      speed: 500,               // Transition speed in ms
      slidesToShow: slidesToShow, // Use the prop to determine number of images to show
      slidesToScroll: 1,        // Scroll one image at a time
      autoplay: true,           // Enable autoplay
      autoplaySpeed: autoplaySpeed, // Autoplay duration from props
      arrows: true,
      prevArrow: <CustomArrow direction="left" />,  // Use custom arrow for previous
      nextArrow: <CustomArrow direction="right" />, // Use custom arrow for next
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(2, slidesToShow), // 2 on medium screens
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: Math.min(1, slidesToShow), // 1 on small screens
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index} >
            <img className={className} src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    );
}
