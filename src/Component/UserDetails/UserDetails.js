import React from "react";
import './UserDetails.css'
const UserDetails = (props) => {
  const { name, email, phone, company, salary,img } = props.user;
  const handleClick = props.handleClick
  console.log(props);
  return (
    <div>
      <div className="card">
          <img style={{width:"70%",height:'270px',margin:"auto",marginTop:"10px",borderRadius:"50%"}} src={img} alt=""/>
        <div className="card-body text-white text-center">
            <h3 className="text-warning text-center">{name}</h3>
            <h6 className="mb-3">company : {company}</h6>
            <h6>email : {email}</h6>
            <h6>phone : {phone}</h6>
            <h6>salary : {salary}</h6>
        <div className="text-center">
            <button onClick={()=>handleClick(props.user)} className="btn btn-primary mt-3">Add Member</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
