import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart";

function ProduceDetails({ produce, id }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const addItem = (id) => {
    dispatch(addItemToCart(id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => addItem(id)}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
