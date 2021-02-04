import React from 'react';
import CardItem from './Carditem'; // li 
import './Cards.css'

function Cards(){
    return(
        <div className='cards'>
            <h1>check out these EPIC </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
         <ul className='cards__items'>
         <CardItem 
         src='images/img-9.jpg'
         text='Explore the hidden waterfall deep inside the Amazon Jungle'
         label='Adventrue'
         path='/Products'/>
         
          <CardItem 
           src='images/img-2.jpg'
         text=' Travel through the Islands of Bali in a Private Cruise'
         label='Adventrue'
         path='/SignUp'/>
           <CardItem 
           src='images/img-2.jpg'
         text=' Set Sail in the Atlantic Ocean visiting Uncharted Waters'
         label='Adventrue'
         path='/Products'/>
                    </ul>
         <ul className='cards__items'>
         <CardItem 
          src='images/img-4.jpg'
         text='  Experience Football on Top of the Himilayan Mountains'
         label='Adventrue'
         path='/products'/>
         
         <CardItem 
          src='images/img-8.jpg'
         text=' Ride through the Sahara Desert on a guided camel tour'
         label='Adventrue'
         path='/SigUp'/>
       
         
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards ;