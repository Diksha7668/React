import { useState } from "react";

function Create(){
    const[country,setCountry]=useState("");
    const[city,setCity]=useState("");
    const[state,setState]=useState("")
    function add(){
         console.log({country,city,state});
         let data={country,city,state}
         fetch("http://localhost:4000/details",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-type':'application/json',
            },

            body:JSON.stringify(data)

         }).then((result)=>{

    //    console.log("result",result);
            result.json().then((resp)=>{
                console.log("resp",resp)

            })
         })

    }
    return (
        <div className="container">
        <div className="head text-white bg-dark text-center">
        <h1>Add Details</h1>
        </div>
          <form>
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
             <button type="submit" onClick={add} class="btn btn-success">Submit</button>
         </form>
        </div>
        
     );

}

export default Create;