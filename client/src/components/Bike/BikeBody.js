import React from 'react';
const { clientId } = process.env;
const redirectUrl = "http://localhost:3000/redirect";
const scope = "read_all"

const handleLogin = () => {
  window.location = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
};


function BikeBody() {
 
  return (
    <div className="container">
       <button onClick={handleLogin}>Connect with strava</button>

    </div>
    
  );
}

export default BikeBody;