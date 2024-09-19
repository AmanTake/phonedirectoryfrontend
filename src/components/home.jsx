import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'

function home() {
  return (
    <div className='image'>
      <div className='row'>
      <div className='col-6 mt-2'>
    <div style={{ display: 'block', width: '90%', padding: 30 }}> 

    <Carousel> 
      <Carousel.Item interval={1500}> 
        <img 
          className="d-block w-100"
          src="/image/p.book.webp"
          alt="Image One"
        /> 
      
      </Carousel.Item> 
      <Carousel.Item interval={500}> 
        <img 
          className="d-block w-100"
          src="/image/phonebook.jpeg"
          alt="Image Two"
        /> 
       
      </Carousel.Item> 
    </Carousel>  
    </div>
  </div>
  <div className='col-6 mt-2'>
    <h3 className='dep'> <b> Description </b></h3><br></br><br></br>
  <p>Subscriber names are generally listed in alphabetical order, together with their postal or
     street address and telephone number. In principle every subscriber in the geographical coverage area is listed,
      but subscribers may request the exclusion of their number from the directory, often for a fee;
       their number is then said to be "unlisted" (US and Canada), "ex-directory" (British English), or
        "private" (Australia and New Zealand).[5]
     A telephone directory may also provide instructions: how to use the telephone service,
      how to dial a particular number, be it local or international, what numbers to access important and emergency
       services, utilities, hospitals, doctors, and organizations who can provide support in times of crisis. 
       It may also have civil defense, emergency management, or first aid information. 
       There may be transit maps, postal code/zip code guides, international dialing codes or stadium seating charts,
        as well as advertising.
</p>
</div>
</div>
  </div>
  )
}




export default home
