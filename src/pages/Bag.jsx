import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { IoIosArrowDown } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import ProductsData from '../data/api.json';
import NotFound from './NotFound';

const Bag = () => {
  const { id } = useParams();
  const product = ProductsData.sneakers.find((product) => product.id = id);

  const { cart, getTotalPrice, removeFromCart, updateQuantity } = useCart();
  const [isArrowOpen, setArrowOpen] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleArrowClick = () => {
    setArrowOpen(prev => !prev);
    console.log(product);

  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    addToCart({
      ...product,
      selectedSize,
      selectedColor: mainImage
    });
  };

  const handleApplyPromoCode = (e) => {
    e.preventDefault();

    if (!promoCode) {
      setError('<p className="errorMes">Введите промокод</p>');
      return;
    }

    let discountValue = 0;
    switch (promoCode.toUpperCase()) {
      case 'ABBOSAKABLE':
        discountValue = 10;
        break;
      case 'YABEDNIY':
        discountValue = 15;
        break;
      case 'PROMO20':
        discountValue = 20;
        break;
      case 'PROMO25':
        discountValue = 25;
        break;
      default:
        setError('<p>Неверный промокод</p>');
        return;
    }

    setDiscount(discountValue);
    setError('');
    setShowModal(true);
    setPromoCode('');
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const totalPrice = getTotalPrice();
  const totalAfterDiscount = totalPrice * (1 - discount / 100);
  const discountValue = totalPrice - totalAfterDiscount;

  const handlePromoCodeChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z]*$/.test(value) || value === '') {
      setPromoCode(value.toUpperCase());
    }
  };

  return (
    <section className='Bag'>
      <div className="container">
        <div className='Bag__wrap'>
          <main>
            <h1>Bag</h1>
            {cart.length === 0 ? (
              <div className='Bag__inner'>
                <p>There are no items in your bag</p>
              </div>
            ) : (
              <div className='Bag__inner'>
                {cart.map((item, index) => (
                  <div key={index} className='Bag__item'>
                    <Link to={`/product/${item.id}`}>
                      <img src={item.selectedColor ? item.selectedColor.url : 'N/A'} alt={item.name} className='Bag__item-img' />
                    </Link>

                    <div className='Bag__item-details'>
                      <h3>{item.name}</h3>
                      <p>{item.gender}</p>
                      <p>{item.brand_name}</p>
                      <p>Size: {item.selectedSize}</p>
                      <p>${item.price}</p>
                      <div className='Bag__item-quantity'>
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            } else {
                              removeFromCart(item.id);
                            }
                          }}
                        >
                          {item.quantity > 1 ? <CiCircleMinus /> : (
                            <svg className='trash' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                              <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25m0 0h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"></path>
                            </svg>
                          )}
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <CiCirclePlus />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
          <aside>
            <h2 className='Bag__title'>Summary</h2>
            <details className='Bag-arrow'>
              <summary onClick={handleArrowClick}>
                Do you have a promo code?
                <div className={`arrow ${isArrowOpen ? 'active' : ''}`}>
                  <IoIosArrowDown />
                </div>
              </summary>
              {isArrowOpen && (
                <div className='Bag-arrow-promo'>
                  <span>
                    <form onSubmit={handleApplyPromoCode}>
                      <div className='Bag-arrow-label'>
                        <div className='Bag-arrow-input'>
                          <input
                            type="text"
                            value={promoCode}
                            onChange={handlePromoCodeChange}
                            placeholder="Enter promo code"
                          />
                        </div>
                        <button type="submit" className='Bag-arrow__btn'>
                          Apply
                        </button>
                      </div>
                    </form>
                    {error && <div className="error-message" dangerouslySetInnerHTML={{ __html: error }} />}
                  </span>
                </div>
              )}
            </details>
            <div className='Bag-count'>
              <p>Subtotal</p>
              <b>${totalPrice.toFixed(2)}</b>
            </div>
            <div className='Bag-count'>
              <p>Discount</p>
              <b>${discountValue.toFixed(2)}</b>
            </div>
            <div className='Bag-total'>
              <b>Total</b>
              <b>${totalAfterDiscount.toFixed(2)}</b>
            </div>
            <div className='Bag-payment'>
              <a href="#">
                <button className='Bag-payment-btn1'>
                  <p>Pay</p>
                </button>
              </a>
              <a href="#">
                <button>
                  <p>Payment method</p>
                </button>
              </a>
            </div>
          </aside>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}><RxCross1 /></span>
            <p>Promo code applied successfully! {discount}%</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Bag;
