import "./index.scss";

import {useState} from 'react';
import { Link } from "react-router-dom";
import Pay from "../Pay/Pay";


const Modal = ({data, onClose = () => {}}) => { 
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
    <div className="modal">
        <div className="container">
            <img src={data.imgPathDetail} alt={data.title} className="container-img"/>
            <div className="modal__right">
                <h2 className="cart">Meu carrinho</h2>
                <button className="close-button" onClick={onClose}></button>
                    <p className="item-title">{data.title}</p>
                    <h2 className="item-price">{data.price}</h2>
                    <p className="item-name-color">
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
                    <div className="marca-products">
                    {data.marca.map((linha) => (
                    <div
                        style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "yellow",
                        border: "1px solid black",
                        

                        }}
                    ></div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="button-buy">
                        <Link to={`/home`}>Continuar Comprando </Link>
                    </button>

                    <button className="button-finish" onClick={() => setIsModalVisible(true)}>Finalizar Compra</button>

                    {
                        isModalVisible ? <Pay onClose={ () => setIsModalVisible(false)} data={data}/>
                        : null
                    }

                    </div>
                </div>
            </div>
        </div>

  )
}

export default Modal;