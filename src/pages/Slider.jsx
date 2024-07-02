import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  const CarouselItems = [
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
      title: "Kung Fu Panda 4",
      genre: "Movie",
      vote: "7.151",
      date: "2024",
      quality: "HD",
      description:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will...",
      link: "/movies/kung-fu-panda-4-M1011985s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg",
      title: "Breathe",
      genre: "Movie",
      vote: "5.25",
      date: "2024",
      quality: "HD",
      description:
        "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated...",
      link: "/movies/breathe-M720321s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/cIztAxDn3H8JylRaJwiHHpkGe53.jpg",
      title: "Woody Woodpecker Goes to Camp",
      genre: "Movie",
      vote: "7.279",
      date: "2024",
      quality: "HD",
      description:
        "After getting kicked out of the forest, Woody thinks he's found a forever home at Camp Woo Hoo — until an inspector threatens to shut down the...",
      link: "/movies/woody-woodpecker-goes-to-camp-M1239146s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg",
      title: "Match of the Day",
      genre: "TV Serie",
      vote: "7.3",
      date: "1964",
      quality: "HD",
      description:
        "BBC's football highlights and analysis. 'The longest-running football television programme in the world' as recognised by Guinness World Records in...",
      link: "/shows/224/match-of-the-day/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg/",
      title: "Dune: Part Two",
      genre: "Movie",
      vote: "8.286",
      date: "2024",
      quality: "HD",
      description:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed...",
      link: "/movies/dune-part-two-M693134s/",
    },
    // Add more items as needed
  ];

  return (
    <div className="container pt-3">
      <Carousel>
        {CarouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={item.title}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
