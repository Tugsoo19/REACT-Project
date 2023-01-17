import AliceCarousel from "react-alice-carousel";
import { brands, profiles, warranty } from "../../data/warranty";

const delivery = warranty.map((el, index) => {
  return (
    <div className="d-flex gap-4" key={index}>
      <img src={el.icon}></img>
      <div className="warranty-text">
        <p>{el.title}</p>
        <a>{el.detail}</a>
      </div>
    </div>
  );
});

const ThreeProfile = profiles.map((el, index) => {
  return (
    <div className="profiles border rounded-4 mx-1" key={index}>
      <img src={el.profile}></img>
      <a>{el.name}</a>
      <p>{el.text}</p>
    </div>
  );
});

const brandLogos = brands.map((el, index) => {
  return <img src={el.logo} className="logo" key={index}></img>;
});

export default function WarrantyProfilesBrand() {
  return (
    <div>
      <div className="warranty d-flex justify-content-around">{delivery}</div>

      <AliceCarousel>
        <div className="pro d-flex">{ThreeProfile}</div>
        <div className="pro d-flex">{ThreeProfile}</div>
        <div className="pro d-flex">{ThreeProfile}</div>
      </AliceCarousel>

      <div className="logos d-flex justify-content-around">{brandLogos}</div>
    </div>
  );
}
