import { useState } from "react";
import Image from "next/image";
import realisationJson from "../realisations.json";
import styles from "../styles/Carousel.module.scss";
import { Carousel } from "react-bootstrap";
export const CarouselComponent = ({ imageIndex, setImageIndex }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {realisationJson.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <article key={index}>
              <Image
                name={image.description}
                key={image.index}
                src={image.image}
                alt={image.description}
                //className={styles.image_carousel}
                width={720}
                height={540}
              />
            </article>
            <Carousel.Caption>
              <h3 className={styles.image_description}>{image.description}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
