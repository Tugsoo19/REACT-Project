import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import {heart} from 'react-bootstrap-icons/dist/icons'
import { BsSuitHeartFill } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs'
import { BiCart } from 'react-icons/bi'

export default function PopularProdsFunc(props) {
  // const [like, setLike] = useState(false)
  // console.log('PopularProducs', props.wishlist)
  // console.log(props)
  // wishlist = [{productId: 1, isChecked: false}, {}]
  // const [addWishlist, setAddWishlist] = useState([])
  // let p = [];

  const like = props.wishlist.filter(wish => wish.productId === props.id)[0]

  return (
    <div className="popular">
      <div className="border rounded-5">
        <div className="pop-top d-flex justify-content-center">
          <img src={props.image} className="pop-image"></img>
          <a className="pop-like" onClick={() => {
            // setLike(true)
            if (!like) {
              const likedProduct = {
                productId: props.id,
                productImage: props.image,
                productTitle: props.title,
                productPrice: props.price,
                like: true,

              }
              props.setWishlist([...props.wishlist, likedProduct])
            } else {
              console.log(props.id)
              props.setWishlist(
                props.wishlist.filter(w => w.productId !== props.id)
              )
            }

            // console.log(likedProduct)
            // console.log(props.setWishlist)

            console.log(props.wishlist)
            // console.log(props.target.value);
          }}
          >
            {like ? <BsSuitHeartFill className="liked" /> : < BsSuitHeart />}
          </a>
        </div>

        <div className="pop-bottom d-flex justify-content-between p-3">
          <div>
            <p className="pop-title px-2">{props.title}</p>
            <p className="pop-price px-2">{props.price}</p>
            <Rating initialValue={props.stars} />
          </div>

          {/* <img src={props.icon2} className="pop-cart"></img> */}
          <BiCart className="pop-cart" />

        </div>
      </div>
    </div>
  );
}
