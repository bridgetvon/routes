import {React, useEffect } from 'react';
import axios from 'axios'

function BikeBody() {

  // interface Node {
  //   activityPositions: any;
  //   activityName: string;
  // }

  // const [nodes, setNodes] = useState<Node[]>([]);

  const clientID = '77814';
  const clientSecret = 'ba4cf64706994d406df016b09df6d62ee55edaef';
  const refreshToken = 'e3c3bce7513bb09b9c19bfd2450855830fb0d313';
  const grant_type = 'refresh_token';
  const activities_link = `https://www.strava.com/api/v3/athlete/activities`; 
  const auth_link = "https://www.strava.com/oauth/token";

  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
      ]);
      
      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data[0]);
      // const polylines = [];
      // for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
      //   const activity_polyline = stravaActivityResponse.data[i].map.summary_polyline;
      //   const activity_name = stravaActivityResponse.data[i].name;
      //   polylines.push({activityPositions: polyline.decode(activity_polyline), activityName: activity_name});
      // }
      // console.log(polylines)
      // setNodes(polylines);
    }

    fetchData();
  }, []);

  


  return (
    <div className="container">
        <div>testing</div>
        <div>div 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet</div>

    </div>
    
  );
}

export default BikeBody;