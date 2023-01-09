export default function PopularProdsFunc(props) {
  return (
    <div className="">
      <div className="border rounded">
        <div className="d-flex">
          <img src={props.image} className="w-50"></img>
          <a>
          <img src={props.icon1}></img>
          </a>
          
        </div>

        <p>{props.title}</p>
        <div className="d-flex justify-content-around">
          <p>{props.price}</p>
          <img src={props.icon2}></img>
        </div>
      </div>
    </div>
  );
}
