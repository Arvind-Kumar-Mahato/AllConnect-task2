import React, { useState, useContext } from "react";
import { NavLink } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
const Register = () => {
  const { udata, setUdata } = useContext(adddata);

     const navigate = useNavigate();
   const [inpval, setInp] = useState({
     name: "",
     email: "",
     age: "",
     mobile: "",
     work: "",
     address: "",
     desc: "",
   });

    
       const setdata = (e) => {
         console.log(e.target.value);
         const { name, value } = e.target;
         setInp((preval) => {
           return {
             ...preval,
             [name]: value,
           };
         });
       };

       const addinpdata = async(e)=>{
        e.preventDefault();
        const {name,
              email,
              age,
              mobile,
              work,
              address,
              desc} = inpval;

              const res = await fetch("/register", {
                method: "post",
                 headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                  name,
                  email,
                  age,
                  mobile,
                  work,
                  address,
                  desc,
                }),
              });
             const data = await res.json();
             console.log(data); 

             if(res.status === 404 || !data){
              alert("error");
              console.log("error");
             }else{
              alert("data added");
              setUdata(data);
              console.log("data added");
              navigate("/");
             }
              

       }
    
  return (
    <div>
      <div className="container">
     

        <Form>
          <div className="row">
            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12  col-lg-6 col-md-6 col-12 "
              controlId="formBasicEmail"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={inpval.name}
                onChange={setdata}
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inpval.email}
                onChange={setdata}
                placeholder="Enter Your Email"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={inpval.age}
                onChange={setdata}
                placeholder="Enter Your Age"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                value={inpval.mobile}
                onChange={setdata}
                placeholder="Enter Your Mobile Number"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Work</Form.Label>
              <Form.Control
                type="text"
                name="work"
                value={inpval.work}
                onChange={setdata}
                placeholder="Enter Your Work"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-6 col-md-6 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={inpval.address}
                onChange={setdata}
                placeholder="Enter Your Address"
              />
            </Form.Group>

            <Form.Group
              className="mb- col-lg-12 col-md-12 col-12 "
              controlId="formBasicPassword"
            >
              <Form.Label>Description</Form.Label>

              <textarea
                className="form-control"
                name="desc"
                value={inpval.desc}
                onChange={setdata}
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </Form.Group>

            <Button className="mt-2" variant="primary" onClick={addinpdata} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register
