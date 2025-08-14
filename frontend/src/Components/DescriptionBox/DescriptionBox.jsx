import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>

      </div>

      <div className="descriptionbox-description">
        <p>An e-commerce website is a digital platform that enables the buying and selling of products or services through the internet. 
        It acts as an online marketplace where businesses can display their offerings, connect with customers, and process secure transactions without the limitations of a physical store. 
        E-commerce websites are highly popular for their ease of use, time-saving nature, and ability to reach a wide audience across the globe.</p>
        <p>
            E-commerce Websites typically display products or services along with the detailed descriptions, images, prices, and any available variations(e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
