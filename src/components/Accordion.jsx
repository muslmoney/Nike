import React from 'react'
import './components.css'
const Accordion = ({ title, className, link, categories }) => {
   className={className}
    return (
        <div className='Accordion'>
            <div className='Accordion__list'>
                <b>
                    {title}
                    dfdf
                </b>
                <div className='Accordion__arrow' >
                    <p>mens</p>
                    <label className="Accordion-label">
                    
                        <input checked="checked" type="checkbox"/>
                            <svg  viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="chevron-down"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                    </label>
                </div>
            </div>
            <div className='Accordion__checkbox'>
            <label className="Accordion__checkbox-label">
  <input checked="checked" type="checkbox"/>
  <div className="checkmark">sdf</div>
</label>
            </div>
        </div>
    )
}

export default Accordion
