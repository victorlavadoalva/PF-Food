import { useEffect, useState } from "react";
import { dataImg } from "../../dataHardcodeo/constants";
import styles from "./styles.module.css";
export default function Carousel()  {
const images = ["Burger.png", "Pizza.png","Sandwich.png"]
const [selectedIndex , SetSelectedIndex] = useState(0)
const [selectImage, setSelectedImage] = useState(images[0])
const [loaded, setLoaded] = useState(false)

const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
    const lastIndex = images.length - 1;
    const condition = next ? selectedIndex < lastIndex : selectedIndex > 0;
    const nextIndex = next
    ? condition
        ? selectedIndex + 1
        : 0
    : condition
    ? selectedIndex - 1
    : lastIndex;
    setSelectedImage(images[nextIndex])
    SetSelectedIndex(nextIndex)
    }, 500)
    
}

const next = () => {
    selectNewImage(selectedIndex, images)
}

useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedIndex])

  const imgStyles = {
    width: "50rem",
    height: "40rem",
    objectFit: "scale-down",
    opacity: loaded ? 1 : 0,
    transition: "opacity 0.5s",
  };
  
return (
    <div className={styles.carousel}>
        {
            dataImg.map((el) => (
                
            <img 
            key = {el.id}
            style={imgStyles}
            src={require(`./img/${selectImage}`).default} 
            alt={el.alt}
            onLoad={() => setLoaded(true)}
        />
            ))
        }
        
    </div>
)
}