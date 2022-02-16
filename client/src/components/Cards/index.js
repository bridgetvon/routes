import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
// // import database from '../../firebase';
// import './cards.css';
import ReactDOM from "react";
import axios from '../../axios';



function Cards() {
   
        const [people, setPeople] = useState([
            // {
            //     name: "ellen",
            //     url: "",
            // },
            // {
            //     name: 'dan',
            //     url: "",
            // },
            // {
            //     name: 'dianne',
            //     url: ""
            // },
        ]);

        useEffect(() => {
            async function fetchData() {
                //will probably need to change this route
                const req = await axios.get('/routes/cards');

                setPeople(req.data);
            }
            fetchData();
        }, [])

        console.log(people);


    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <Cards
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </Cards>
                ))}
            </div>
        </div>
    );
}
export default Cards;

//strava stuff

// class Act extends React.Component {
//     state = { activity: [], isLoading: true, error: null };
  
//     async componentDidMount() {
//       try {
//         const response = await fetch('https://www.strava.com/api/v3/athlete/activities?access_token=35b2879fd3a29d6bf20751a84121ff7be1ffea64');
//         const data = await response.json();
//         console.log(response.json());
//         this.setState({ activity: data.results, isLoading: false });
//       } catch (error) {
//         this.setState({ error: error.message, isLoading: false });
//       }
//     }
  
//     renderActivity = () => {
//       const { activity, isLoading, error } = this.state;
  
//       if (error) {
//         return <div>{error}</div>;
//       }
  
//       if (isLoading) {
//         return <div>Loading...</div>;
//       }
  
//       return activity.map(activity => (
//         <div key={activity.id.value}>
//           <img src={activity.picture.large} alt="avatar" />
//           <div>Hi, My name is</div>
//           <h3>{activity.name.first}</h3>
//         </div>
//       ));
//     };
  
//     render() {
//       return <main>{this.renderActivity()}</main>;
//     }
//   }
  
//   ReactDOM.render(<Act />, document.querySelector("#app"))

//   export default Act;