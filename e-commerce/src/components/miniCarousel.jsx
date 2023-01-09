function MiniCarousel(props) {
  return (
    <div className="border border-secondary w-50">
      <img src={props.image} className="w-50" />
      {props.title}
      {props.items}
    </div>
  );
}

export default MiniCarousel;
