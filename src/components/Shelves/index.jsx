import axios from 'axios';
import  { useEffect, useState } from 'react';
import styles from './Shelves.module.css'
import {register} from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import discount from '../../assets/descaunt.svg'
import { updateCartCount } from '../Ultils/';
register();


export function Shelves(){
  const [products, setProducts] = useState([]);
  const [sliderPerView, setSliderPerView] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
      
    function handleSlider(){
      
      if(window.innerWidth < 720){
         setSliderPerView(2)
         setIsMobile(true);
        }else{
          setSliderPerView(4)
          setIsMobile(false);
            }
        }

        handleSlider()
        
        window.addEventListener("resize", handleSlider)

        return()=>{
            window.removeEventListener("resize", handleSlider)
        }
    }, [])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://corebiz-backend.onrender.com/api/products'); 
        setProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
    fetchProducts();
  }, []);

  useEffect(()=>{
    const savedCartCount = parseInt(localStorage.getItem('cartCount')) || 0  
    setCartCount(savedCartCount);
  },[])

  const addtoCart = () =>{
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
    updateCartCount(newCartCount);
  }

  const formatPrice = (price) => {
    return (price / 100).toFixed(2).replace('.', ',');
  };

  return (
    <div className={styles.shelves}>
      <h2>Mais vendidos</h2>
      <Swiper
        slidesPerView={sliderPerView}
        navigation={!isMobile && { clickable: true }}
        pagination={isMobile && { clickable: true }}
        className={styles.swiper}
        style={{
          "--swiper-navigation-color": "var(--black)",
          "--swiper-navigation-size": "1.5rem",
          "--swiper-pagination-color": "var(--red-300)",
          "--swiper-pagination-bullet-inactive-color": "var(--gray-400)",
          "--swiper-pagination-bullet-inactive-opacity": "1",

        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.productId} className={styles.swiperItems}>
            <div className={styles.productImageWrapper}>
              {product.listPrice !== null && <img src={discount} alt="OFF" className={styles.offImage} />}
              <img src={product.imageUrl} alt={product.productName} className={styles.productImage} />
            </div>
            <div className={styles.swiperItemsInformation}>
              <h3>{product.productName}</h3>
              <StarRating stars={product.stars} />
              <p>{product.listPrice ? `de R$ ${formatPrice(product.listPrice)}` : ''}</p>
              <strong>{`Por R$ ${formatPrice(product.price)}`}</strong>
              <p>{product.installments.length > 0 ? `ou em ${product.installments[0].quantity}x de R$ ${formatPrice(product.installments[0].value)}` : ''}</p>
              <footer>
                <button onClick={addtoCart}>COMPRAR</button>
              </footer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const StarRating = ({ stars }) => {
  const totalStars = 5;
  const filledStars = stars;

  return (
    <div className={styles.starRating}>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < filledStars ? styles.filledStar : styles.emptyStar}>★</span>
      ))}
    </div>
  );
};
