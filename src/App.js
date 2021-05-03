import { useEffect, useState } from "react";
import UserDetails from "./Component/UserDetails/UserDetails.js";
import { fakeData } from "./Component/FakeData/FakeData";
import AddMember from "./Component/AddMember/AddMember.js";
import './App.css'
function App() {
  const [users, setUsers] = useState([]);
  const [addMember, setAddMember]= useState([]);
  useEffect(() => {
    setUsers(fakeData);
  }, []);
  const handleClick = (member) => {
    const newMember =[...addMember, member];
    setAddMember(newMember)
};
   const totalSalary =addMember.reduce((sum, newAdded)=> sum + newAdded.salary,0)

  return (
       
          <div className="container">
      <h1 className="text-center mt-3 mb-4">Our Team Member : {users.length}</h1>

      <div className="row">
        <div id="card-header" className="col-md-9">
          {users.map((user) => (
            <UserDetails user={user} handleClick={handleClick} key={users.id}></UserDetails>
          ))}
        </div>

        <div className="col-md-3">
          <h3 className="text-center">Added Member: {addMember.length} </h3>
             {
                addMember.map(addMember => <AddMember addMember={addMember} key={addMember.id}></AddMember>)
             }
              <button type="button" className="checkout-btn">
                  Total Salary =<span className="badge badge-light"> ${totalSalary}</span>
             </button>
        </div>
      </div>
    </div>
       
  );
}

export default App;
