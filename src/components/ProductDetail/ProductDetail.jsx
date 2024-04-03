import React, {useState} from 'react';
import "./index.scss";
import cartShop from "../../assets/shopping_cart.png";
import Modal from '../../components/Modal/Modal';
import { useParams } from "react-router-dom";


const ProductDetail = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="product-detail">
    <div className="product-detail__left-side">
      <div className="product-detail__card">
        <img src={data.imgPathDetail} alt={data.title} />
      </div>
      <div className="product-detail__description">
        <p>{data.title}</p>
        <h1>Descrição</h1>
        <h5>produtos para sua beleza</h5>
      </div>
    </div>
    <div className="product-detail__right-side">
      <h1>{data.title}</h1>
      <h2>{data.price}</h2>
      <h3>{data.marca}</h3>
      <p>
        Linha:{" "}
        {data.marca.length === 1
          ? data.marca.map((linha, index) => (
              <span key={index}>{linha}</span>
            ))
          : data.marca.map((linha, index) =>
              index + 1 === data.marca.length ? (
                <span key={index}>{linha}</span>
              ) : (
                <span key={index}>{linha}, </span>
              )
            )}
      </p>
      <div className="product-detail__cube-colors">
        {data.marca.map((linha) => (
          <div
            style={{
              width: "64px",
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "color",
              border: "1px solid black"
            }}
          ></div>
        ))}
      </div>
      <button className="modal-abrir" onClick={() => setIsModalVisible(true)}>
          <img src={cartShop} alt="cart shop" className=".search__search-cartShop"/>
          Adicionar ao carrinho 
      </button>

      {
        isModalVisible ? <Modal onClose={ () => setIsModalVisible(false)} data={data}/>
        : null
      }
    </div> 
  </div>
  );
};


export default ProductDetail;