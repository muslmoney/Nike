import React from 'react';
import { useCart } from '../context/CartContext';
import { IoIosArrowDown } from "react-icons/io";

const Bag = () => {
  const { cart, getTotalPrice, removeFromCart, updateQuantity } = useCart();
  const [isArrowOpen, setArrowOpen] = React.useState(false);

  const handleArrowClick = () => {
    setArrowOpen(prev => !prev);
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
                    <img src={item.images[0].url} alt={item.name} className='Bag__item-img' />
                    <div className='Bag__item-details'>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <div className='Bag__item-quantity'>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className='Bag__btn-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
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
                    <form>
                      <div className='Bag-arrow-label'>
                        <div className='Bag-arrow-input'>
                          <input type="text" />
                        </div>
                        <button type="submit" className='Bag-arrow__btn'>
                          Apply
                        </button>
                      </div>
                    </form>
                  </span>
                </div>
              )}
            </details>
            <div className='Bag-count'>
              <p>Subtotal</p>
              <b>${getTotalPrice().toFixed(2)}</b>
            </div>
            <div className='Bag-count'>
              <p>Discount</p>
              <b>$0.00</b>
            </div>
            <div className='Bag-total'>
              <b>Total</b>
              <b>${getTotalPrice().toFixed(2)}</b>
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
    </section>
  );
};

export default Bag;
