import React, { Component } from 'react';



export default class modal1 extends Component {
   style={
    // display: grid,
    //  padding: 20px  
   }
    render() {
        return (
            
<div>
            <div className="bg-image"></div>
              <div className=" bg-text modal-form-container">
                <div className="text-1">
                <p>
                Intersted in our Exclusive Products?
                </p> 
                 </div> 
            
              <div className="text-2">
              <p>To get informed about our
               <span className="special-deal">
               special deals
               </span> 
               , Please input your email address.
               </p> 
               </div>
              <div className="mt-1 d-flex" >
                   
                <input   id="ex3" type="text" placeholder="Please Insert Your Email Addreess" />
              </div>
           
             <button type="submit"  type="button" className="btn btn-lg buttn-sub" >Submit</button>
            </div>
</div>


        );
    }
}