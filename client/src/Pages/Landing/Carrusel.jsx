import { useEffect, useState } from "react";
import { dataImg } from "../../dataHardcodeo/constants";
import styles from "./styles.module.css";
export default function Carousel()  {
const images = ["Burger.png", "Pizza.png","Sandwich.png"]
const [selectedIndex , SetSelectedIndex] = useState(0)
const [selectImage, setSelectedImage] = useState(images[0])
const [loaded, setLoaded] = useState(false)

const selectNewImage = (index, images) => {
    setLoaded(false);
setTimeout(() => {
setSelectedImage(images[index]);
    SetSelectedIndex(index);
}, 300)
    
  };

  const next = () => {
    setTimeout(() => {
    const lastIndex = images.length - 1;
    const nextIndex = selectedIndex < lastIndex ? selectedIndex + 1 : 0;
    selectNewImage(nextIndex, images);

    },500)
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedIndex]);



  const imgStyles = {
    width: "50rem",
    height: "30rem",
    margin:"20px 0 0 0",
    objectFit: "scale-down",
    opacity: loaded ? 1 : 0,
    transition: "opacity 0.5s",
  };
  
return (
    <div className={styles.carousel}>
        <div className={styles.pagination_circular}>
        {images.map((_, index) => (
          <span
          key={index}
          className={index === selectedIndex ? styles.active : ""}
          onClick={() => {
            selectNewImage(index, images);
          }}
        >{index + 1}</span>
        ))}
      </div>
      <div className={styles.container_carouselImg}>
            {
            dataImg.map((el) => (
            <img 
            key = {el.id}
            style={imgStyles}
            src={require(`./img/${selectImage}`).default} 
            alt={el.alt}
            onLoad={() => setLoaded(true)}
        />
        ))}
        </div>
    </div>
    
)
}