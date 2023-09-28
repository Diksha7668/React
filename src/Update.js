import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Update(){
    const navigate = useNavigate()
    const[country,setCountry]=useState("");
    const[city,setCity]=useState("");
    const[state,setState]=useState("")
    const[UserId,setUserId]=useState(null)

    let a=window.location.href
    let id =a.split('update/')[1]

    console.log(id)

    function Update(){
        let data={country,city,state}
        fetch(`http://localhost:4000/details/${UserId}`,{
           method:'PUT',
           headers:{
               'Accept':'application/json',
               'content-type':'application/json',
           },

           body:JSON.stringify(data)

        }).then((result)=>{

   //    console.log("result",result);
           result.json().then((resp)=>{
              demo();
navigate('/')
           })
        })

   }

    function demo() {

        fetch(`http://localhost:4000/details`).then((result) => {
            result.json().then((resp) => {
                console.log("result", resp);
                setCountry(resp[id].country)
                setCity(resp[id].city)
                setState(resp[id].state)
                setUserId(resp[id].id)

            })
        })

    }
    useEffect(() => {
        demo();

    }, [])
    return (
        <div className="container">
        <div className="head text-white bg-dark text-center">
        <h1>Update Details</h1>
        </div>
         
          <div class="form-group">
                 <label for="country">Country:</label>
                 <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} name="country" class="form-control"  />
             </div>
             <div class="form-group">
                 <label for="city">City:</label>
                 <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" class="form-control" />
             </div>
             <div class="form-group">
                 <label for="state">state:</label>
                 <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} name="state"class="form-control" />
             </div>
             <br>
             </br>
             <div class="checkbox">
                 <label><input type="checkbox" /> Remember me</label>
             </div>
             <br>
             </br>
             {/* <button type="submit" onClick={add} class="btn btn-success">Submit</button> */}
             <button class="btn btn-success" onClick={Update}>Update</button>
         
        </div>
     );
}

export default Update;