import React, {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io"
const Bag = () => {
    const  [Arrow, setArrow] = useState(false)
    const onClickArrow = () => setArrow ((prev) => !prev)
    return (
        <section className='Bag'>
            <div className="container">
                <div className='Bag__wrap'>
                    <main>
                        <div>
                        <h1>
                                Bag
                            </h1>

                        </div>
                          <div className='Bag__inner'>
                          <p >
                                There is no items in your bag
                            </p>
                          </div>
                    </main>
                    <aside>
                        <h2 className='Bag__title'>
                            Summary
                        </h2>
              <details className='Bag-arrow'  >
                            <summary onClick={onClickArrow}>Do you have a promo code? <div   className={`arrow  ${Arrow && 'active'}`}> <IoIosArrowDown /></div> </summary>
                            <div className='Bag-arrow-promo' >
                                <span>
                                    <form > 
                                        <div className='Bag-arrow-label' >
                                            <div className='Bag-arrow-input' >
                                                <input type="text"       />
                                            </div>
                                            <button type="submit"  className='Bag-arrow__btn'>
                                                Apply
                                            </button>
                                        </div>
                                        {/* <div >
                                            Enter a Promo Code
                                        </div> */}
                                    </form>
                                </span>
                            </div>
                        </details>
                        
                        <div className='Bag-count'>
                            <p>
                                Subtotal
                            </p>
                            <b>
                                $
                            </b>
                        </div>
                        <div className='Bag-count'>
                            <p>
                                Discount
                            </p>
                            <b>
                                $
                            </b>
                        </div>
                        <div className='Bag-total'>
                            <b>
                                Total
                            </b>
                            <b>
                                $
                            </b>
                        </div>
                        <div className='Bag-payment'>
                            <a href="">
                                <button className='Bag-payment-btn1'>
                                    <p>
                                        Pay
                                    </p>
                                </button>
                            </a>
                            <a href="">
                                <button>
                                    <p>
                                        payment method

                                    </p>
                                </button>
                            </a>
                        </div>
                    </aside>
                </div>

            </div>
        </section>
    )
}

export default Bag
