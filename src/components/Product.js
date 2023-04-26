import styles from "./Product.module.scss";
import React from "react";
import iphone from "../assets/iphone.jpg";
import watch from "../assets/watch.jpg";
import noFoto from "../assets/no-foto.jpg"

function Product(props) {
  const remove = () => {
    props.onRemove(props.id);
  };

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={props.image === "iphone" ? iphone : props.image ==="Watch" ? watch : noFoto} />
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{props.name}</h1>
        <div className={styles.price}>{props.price}</div>
      </div>
      <button onClick={remove} type="button">
        Remove
      </button>
    </div>
  );
}

export default Product;
