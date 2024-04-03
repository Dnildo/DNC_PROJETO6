import './index.scss'
import banner1 from "../../assets/produtos0.png";
import banner2 from "../../assets/produto1.png";
import banner3 from "../../assets/produto2.png";
import banner4 from "../../assets/produtos-organizar.png";
import banner5 from "../../assets/produto5.png";
import banner6 from "../../assets/produto6.png";
import banner7 from "../../assets/produto7.png";
const Banner = () => {
  return (
    <div className="carrosel"  id='next'>
        <div className="container-banner" id='img'>
            <img src={banner1} alt='banner 1' />
            <img src={banner2} alt='banner 2' />
            <img src={banner3} alt='banner 3' />
            <img src={banner4} alt='banner 4' />
            <img src={banner5} alt='banner 5' />
            <img src={banner6} alt='banner 6' />
            <img src={banner7} alt='banner 7' />

        </div>
    </div>
  )
}


export default Banner