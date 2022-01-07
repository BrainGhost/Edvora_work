const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} />
      <div>
        <h2>{props.product_name}</h2>
        <p>{props.brand_name}</p>
        <h3>$ {props.price}</h3>

        <p>{props.address}</p>
        <p>{props.date}</p>

        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
