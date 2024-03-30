import { useLoaderData } from "react-router-dom";
import Event from "./Event";
import { Helmet } from "react-helmet";

const Events = () => {
    const events = useLoaderData();


    
    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-6">
         <Helmet>
            <title>Book Buzz | Events</title>
         </Helmet>
         
         {
            events.map((event,idx) => <Event key={idx} event={event}></Event>)
         }  
        </div>
    );
};

export default Events;