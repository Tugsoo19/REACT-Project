import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div>
      <h1>Product details</h1>
      <div>
        <div>
          <img />
          <img />
          <img />
        </div>
        <div>
          <h5>title</h5>
          <p>price</p>
          <a>star voting</a>
          <p>Availability: </p>
          <a> Hurry up! only 34 product left in stock!</a>
          <hr />
          <p>Color:</p>
          <p>Size:</p>
          <p>Quantity: </p>
          <button>Add to cart</button>
          <button>Buy it now</button>
          <hr />
          <p>Sku: </p>
          <p>Category: </p>
          <p>Share: </p>
        </div>
      </div>
      <Link to="/description">
        <button>Description</button>
      </Link>

      <Link to="/reviews">
        <button>Reviews</button>
      </Link>
      <br />
    </div>
  );
}
