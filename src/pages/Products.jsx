import React from 'react'
import Accordion from '../components/Accordion'
const Products = () => {
    return (
        <section className='Products'>
            <div className="container">
                <marquee behavior="" direction=""></marquee>
                <div className="Products__wrap">
                    <div className='Products__top'>
                        <div>
                            <h2>New</h2>
                        </div>
                        <div className='Products__top-btns'>
                            <button>Sort By</button>
                            <button>Sort By</button>
                        </div>

                    </div>

                    <div className="Products__content">
                        <aside className='Products__aside-filter'>
                            <Accordion />   
                        </aside>
                        <main className='Products__main'></main>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Products
