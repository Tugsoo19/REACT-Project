import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import {heart} from 'react-bootstrap-icons/dist/icons'
import { BsSuitHeartFill } from 'react-icons/bs';
import {BsSuitHeart} from 'react-icons/bs'
import {BiCart} from 'react-icons/bi'

export default function PopularProdsFunc(props) {
  const [like, setLike] = useState(false)
  const [addWishlist, setAddWishlist] = useState([])
  let p = [];
  

  return (
    <div className="popular">
      <div className="border rounded-5">
        <div className="pop-top d-flex justify-content-center">
          <img src={props.image} className="pop-image"></img>
          <BsSuitHeart className="pop-like" onClick={() => {
            props.setWishlist(props.wishlist + 1)
            setLike(true)

          }}/>
          {like ? <BsSuitHeartFill className="liked" onClick={() => {
            props.setWishlist(props.wishlist - 1)
            setLike(false)
          }} /> : ""}
        </div>

        <div className="pop-bottom d-flex justify-content-between p-3">
          <div>
            <p className="pop-title px-2">{props.title}</p>
            <p className="pop-price px-2">{props.price}</p>
            <Rating initialValue={props.stars} />
          </div>

          {/* <img src={props.icon2} className="pop-cart"></img> */}
          <BiCart className="pop-cart"/>

        </div>
      </div>
    </div>
  );
}
