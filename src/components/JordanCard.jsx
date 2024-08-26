import React from 'react'

const JordanCard = ({title , about , className, size1,size8,size7,color,size2,size3,size4,size5,size6,color2,color3,color1, ...props }) => {
  className={className}
    return (

    <div className='Jordan__card'>
        <h1>
    {title}
        </h1>
        <p>
    {about}
        </p>
        
        <div>
            <h3>
                Select Size
            </h3>
         
        </div>
        <div>
            <h3>Select Color</h3>
            <div  className='Jordan__colors'    >
            <button className={color1}></button>
            <button className={color2}></button>
            <button className={color3}></button>
            </div>
        </div>
    </div>
  )
}

export default JordanCard