import React, { useContext } from 'react';
import AuthContext from '../context/authContext';

function OrderHistory() {
  const { RegisterUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={RegisterUser}>
        <input type="text" name="fname" placeholder="First Name" />
        <input type="text" name="lname" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="password" />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default OrderHistory;
