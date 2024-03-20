import React,{ useState } from "react";
import {useForm} from 'react-hook-form';
export default function Form1(){
    const {register,handleSubmit}=useForm();
    const [data,setData]=useState("");
    return(
        <div>
            <form onSubmit={handleSubmit((data)=>setData(JSON.stringify (data)))}>
            <div class="form-group">
                <label htmlFor="firstName">Name</label>
                 <input className="form-control"
                 {...register("firstName",{required:true})}placeholder="First Name" />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select {...register("category",{required:true})}>
                    <option value="">Select..</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
            </div>
            <div className="form-group">
              <label className="form-control">Suggestion</label>
              <textarea  {...register("about You")} placeholder="About You"/>
            </div>
           <input type="submit" className="btn btn-primary"/>
           <div className="container">
            {data}
           </div>
           </form>
        </div>
    );
}