import React from 'react'
import Banner from './Banner'
import "./home.css";
import Slide from './Slide';




const Maincomp = () => {
  return (
    <div className='home_section'>
         <div className="banner_part">
            <Banner/>
         </div>

        <div className="slide_part">
            <div className="left_slide">
             
            <Slide title='Deal of the day'/>
            </div>
            <div className="right_slide">
                <h4>Festive latest launches</h4>
                <img src="https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY195_.jpg"></img>
                <a href='#'>see more</a>
                </div>

        </div>


         <Slide title='Best Seller'/>
                 <div className="center_img">
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3a04a81b-bafd-4f7c-8d08-0b26e5870ce3.jpeg" alt=''></img>
                 </div>
         <Slide title='Upto 64% OFF'/>
         <Slide title='Buy3 get 1 free'/>
         <Slide title='Kids'/>
         <Slide title='Home Kitchen'/>
         <Slide title='Mens Wear'/>


    </div>
  )
}

export default Maincomp
