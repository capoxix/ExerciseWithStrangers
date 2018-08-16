import React from 'react';
import EventIndexItem from './event_index_item';

class EventCityIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {users, city, events, categories, currentUser} = this.props;
    // console.log(categories);
    let cityIndex = [<div className="city" href={`${city.name}`}>
                      <h3>{city.name}<br></br>👉</h3>
                      </div>];

    //

    let eventsArr = Object.values(events).sort(function(a, b) {
          if (Date.parse(a.date_time) < Date.parse(b.date_time)) {
            return -1;
          } else {
            return 1;
          }
        });


        for (let id in eventsArr) {
          let event = eventsArr[id];
          if (cityIndex.length === 4){
            break;
          }
          if (event.city_id === city.id) {
            cityIndex.push(
              <div>
                <EventIndexItem
                  key={event.id}
                  event={event}
                  user={users[event.user_id]}
                  city={city}
                  categories={categories}
                  currentUser = {currentUser}/>
              </div>
            );
          }
        }
      // eventsArr.forEach(event => {
      //
      //
      //     if (event.city_id === city.id) {
      //       cityIndex.push(
      //         <div>
      //           <EventIndexItem
      //             key={event.id}
      //             event={event}
      //             user={users[event.user_id]}
      //             city={city}
      //             categories={categories}
      //             currentUser = {currentUser}/>
      //         </div>
      //       );
      //     }
      //   });
    // for(let id in events){
    //   // console.log("id", id);
    //   let event = events[id];
    //   if (cityIndex.length === 4){
    //     break;
    //   }
    //   if (event.city_id === city.id && cityIndex.length < 4) {
    //     cityIndex.push(
    //       <div>
    //         <EventIndexItem
    //           key={event.id}
    //           event={event}
    //           user={users[event.user_id]}
    //           city={city}
    //           categories={categories}
    //           currentUser = {currentUser}/>
    //       </div>
    //     );
    //   }
    // }
    return (
      <div className='index-city-wrapper'>
        {cityIndex}
      </div>
    );
  }
}

export default EventCityIndex;
