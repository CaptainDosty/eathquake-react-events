import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
function Home() {
   const [events,setEvents]= useState([]);

   useEffect(async() => {
    const respond = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=20`);
    const data = await respond.json();
    setEvents(data.features);

      
   }, []);
   
    return (
        <>
            <h1 className='title'>Recent Earthquakes:</h1>
            <div className='event-wrapper'>
                    { 
                        events.map(event=>(
                            
                            <Link to={`./Details/${event.id}`} className="events" key={event.id}>
                                <p>Place: {event.properties.place}</p>
                                <p>Time: {event.properties.time}</p>
                            </Link>
                        ))
                    }
            </div>
        </>
    )
}

export default Home
