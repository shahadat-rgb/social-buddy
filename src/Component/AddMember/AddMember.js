import React from 'react';

const AddMember = (props) => {
    const {name, salary}=props.addMember;
    return (
        <div className="addCart text-center" >
          <div style={{float:'left',marginRight:"60px"}}>
                <h6>{name}</h6>
                </div>
               <div>
                   <h6>{salary}</h6>
                </div>
        </div>
    );
};

export default AddMember;