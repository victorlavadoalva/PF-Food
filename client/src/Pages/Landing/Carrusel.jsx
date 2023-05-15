import { useEffect, useState } from "react";
import { dataImg } from "../../dataHardcodeo/constants";
import styles from "./styles.module.css";
export default function Carousel()  {
const images = ["Burger.png", "Pizza.png","Sandwich.png"]
const [selectedIndex , SetSelectedIndex] = useState(0)
const [selectImage, setSelectedImage] = useState(images[0])

const selectNewImage = (index, images, next = true) => {
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


  
return (
    <div className={styles.carousel}>
        {
            dataImg.map((el) => (
                
            <img 
            key = {el.id}
            className={styles.imgCarousel}
            src={require(`./img/${selectImage}`).default} 
            alt={el.alt}
        />
            ))
        }
        
    </div>
)
}