import { useLoaderData } from "react-router-dom";
import Event from "./Event";

const Events = () => {
    const events = useLoaderData();


    
    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-5 mt-6">
         {
            events.map((event,idx) => <Event key={idx} event={event}></Event>)
         }  
        </div>
    );
};

export default Events;