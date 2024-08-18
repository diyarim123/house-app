interface Card {
  src: string,
}

export default function Carousel(props: Card) {
  return (
    <div className="carousel-item">
      <img src={props.src} />
    </div>
  )
}
