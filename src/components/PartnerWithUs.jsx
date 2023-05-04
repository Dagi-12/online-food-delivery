import React from 'react'

export const PartnerWithUs=()=> {
  return (< >
  <div className="bg-orange-400 w-full py-1">
  <h2 className="mb-6 text-4xl font-bold text-black text-center max-w-screen-xl mx-auto px-4">Looking For A Place To Provide Your Products?</h2>
</div>

  <div className="banner-image w-full md:w-full p-3">

    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-center ">
     
     
        <img src={require("../assets/images/partner.jpg")} alt="banner" className="max-h-95" />
        
         </div> 
         <h2 className="mb-6 text-4xl font-bold text-orange-400 text-center ">No Worries You can Apply Using the following link 👍🏼 </h2> 
         <h2 className=" text-center "><a  href="/partner-registration" className="justify-center text-black center w-900 font-bold text-3xl    hover:bg-orange-500 hover:text-white font-bond  text-decoration-line px 4 ">Become A Partner  </a></h2> 
     
    </div>
        
          
       
</>
  )
  
}
