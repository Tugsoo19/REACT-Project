import { footer1, footer2 } from "../data/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Footer() {
  const footerLeft = footer1.map((el, index) => {
    return (
      
      <div className="footerleft" key={index}>
        <img src={el.logo} className />
        <p>{el.address}</p>
        <hr />
        <div className="d-flex gap-5">
          <img src={el.google} />
          <img src={el.fb} />
          <img src={el.whatsapp} />
        </div>
      </div>
    );
  });

  const footerRight = footer2.map((el, index) => {
    return (
      <div className="footerright" key={index}>
        <h5>{el.title}</h5>
        <li>{el.li1}</li>
        <li>{el.li2}</li>
        <li>{el.li3}</li>
        <li>{el.li4}</li>
        <li>{el.li5}</li>
      </div>
    );
  });
  return (
    <div className="footer p-2">
      <div className="footer-top d-flex bg-white justify-content-around rounded-4 p-4 m-5 align-items-center">
        <a>Subscribe newsletter</a>
        <InputGroup>
          <Form.Control
            placeholder="Email address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="input"
          />
          <Button className="button" id="button-addon2">
            <img src="images/send-2.svg" alt="" />
          </Button>
        </InputGroup>
        <div className="phone d-flex gap-4 align-items-center">
          <img src="images/headphoneLogo.svg"></img>
          <p>
            Call us 24/7:
            <br />
            (+62) 0123 567 789
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-5">
        <div>{footerLeft}</div>
        <div className="d-flex col justify-content-around">{footerRight}</div>
      </div>
    </div>
  );
}
