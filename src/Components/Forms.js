import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema= yup.object().shape({
fname:yup.string().required("Name Field Is Mandatory"),
age:yup.number().integer().positive().required(),
email:yup.string().email("Enter A Valid Email").required("Email Field Is Mandatory"),
password:yup.string().required().min(8,'Minimum 4 Characters Required').max(15,"Password Should Not Exceed 15 Characters"),
confirmPassword:yup.string().required().oneOf([yup.ref("password"),null]),
})

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm( { resolver:yupResolver(schema), mode:"onChange" });

  console.log(errors);
  console.log(isValid);

  return (
    // <div className="Forms">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit((data)=>{
    //      console.log(data);
    //     })}>
    //     <div className="email-cont">
    //       <Input {...register("email",{ required:"Email is Required", minLength: { value:6,message:"Minimum 6 Characters Required" } } )} type="email" placeholder="Enter Your Email" />
    //       {errors.email && <p style={{color:"red"}}> *{errors.email.message} </p>}
    //     </div>
    //     <div className="email-cont">
    //       <Input {...register("pass",{ required:"Password is Required", minLength: { value:4,message:"Minimum 4 Characters Required" } } )} type="password" placeholder="Enter Your Password" />
    //       {errors.pass && <p style={{color:"red"}}> *{errors.pass.message} </p>}
    //     </div>
    //     <Button type="submit" colorScheme="teal" variant="outline">
    //       Button
    //     </Button>
    //   </form>
    // </div>

    <div className="Formss">
      <h2>Practice</h2>
      <form
      className="Formm"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input {...register("fname")} placeholder="Enter Your Name" />
        {errors.fname && <p style={{color:"Red"}}>{errors.fname.message} </p>}
        <Input {...register("age")} placeholder="Enter Your Age" />
        {errors.age && <p style={{color:"Red"}}>{errors.age.message} </p>}
        <Input {...register("email")} placeholder="Enter Your Email" />
        {errors.email && <p style={{color:"Red"}}>{errors.email.message} </p>}
        <Input {...register("password")} type="password" placeholder="Enter Your Password" />
        {errors.password && <p style={{color:"Red"}}>{errors.password.message} </p>}
        <Input {...register("confirmPassword")} type="password" placeholder="Enter Your Confirm Password" />
        {errors.confirmPassword && <p style={{color:"Red"}}>{errors.confirmPassword.message} </p>}


        <Button type="submit" isDisabled={!isValid} colorScheme="blue" variant="outline">
          Button
        </Button>
      </form>
    </div>
  );
}
