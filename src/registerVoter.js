import Nav from "./Navbar"
import './css/Registration-Form-with-Photo.css'
// import { useHistory } from "react-router";
import { useState } from "react";
// import axios from "axios";

function RegisterVoter() {
  // const history = useHistory();

  const [Name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCNIC] = useState("");

  function updateName(e) {
    setName(e.target.value);
  }

  function updateUserName(e) {
    setUserName(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }
  function updateCNIC(e) {
    setCNIC(e.target.value);
    // console.log(password);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const user = {
    //   "name": Name,
    //   "username": userName,
    //   "password": password,
    //   "cnic": cnic
    // };

    // let result = false;

    // axios.post(`http://localhost:8001/setUpProfile`, user)
    //   .then(res => {
    //     console.log(res);
    //     result = res.data;
        // if (result == "success") {
        //   history.push('/login');
        // }
        // else {
        //   alert("user already exist");
        //   console.log("error");
        // }




      // }
      // )
      // .catch(err => {
      //   // Do something for an error here
      //   console.log("Error Reading data " + err);
      // });


  }


  return (

    <div>
      <Nav />
      <section class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 class="text-center"><strong>Register</strong> your Vote.</h2>
            <div class="mb-3"><input class="form-control" id="inputName" onChange={updateName} value={Name} type="text" name="text" placeholder="Name" /></div>
            <div class="mb-3">
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input class="form-control" id="inputUserName" onChange={updateUserName} value={userName} type="text" name="text" placeholder="User Name" />
              </div>
            </div>
            <div class="mb-3"><input class="form-control" id="inputPassword" onChange={updatePassword} value={password} type="password" name="password" placeholder="Password" /></div>
            <div class="mb-3"><input class="form-control" id="inputPasswordRep" onChange={updateCNIC} value={cnic} type="text" name="password-repeat" placeholder="CNIC" /></div>
            <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Sign Up</button></div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default RegisterVoter;