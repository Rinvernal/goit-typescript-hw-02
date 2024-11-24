import s from "./ImageCard.module.css"
const ImageCard = ({image}) => {
  return (
    <div className={s.box}>
      <img src={image.urls.small} alt={image.alt_description} className={s.image}/>
      <h3>Likes: {image.likes}</h3>
    </div>
  )
}

export default ImageCard