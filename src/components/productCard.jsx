import "./productCard.css";

export default function ProductCard(props){

console.log(props.name)
    return(
        <div className="product-card">
        <img
          src={props.image}
          alt="Michael Kors Watch"
        />
        <div className="title">
          {props.description}
        </div>
        <div className="rating">
          ★★★★☆
          <span>{props.starPrice}</span>
        </div>
        <div className="price">{props.price}</div>
        <div className="list-price">List: $200.00</div>
        <div className="delivery-info">${props.dCharge}delivery · Ships to Sri Lanka</div>
      </div>
    )
}