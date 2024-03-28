/* eslint-disable react/prop-types */
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Event = ({event}) => {

const {image, location, event_name, date_of_event, event_description, event_host_publication_name} = event;

    return (
        <div className="card card-compact   bg-base-100 shadow-xl">
        <figure><img className="h-[150px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{event_name}</h2>
          <p className="text-justify">{event_description}</p>

          <div className="flex  justify-between items-center">
            <p className="flex gap-2 items-center"><IoCalendarOutline />
{date_of_event}</p>
            <p className="flex gap-2 items-center"><IoLocationOutline />
{location}</p>
          </div>
          <div>
            <p className="font-bold">Event hosted by: {event_host_publication_name}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 ">
          <p className="bg-[#328EFF26] w-1/4 text-center hover:bg-[#328EFF66] active:scale-90 text-black px-3 py-2 rounded-xl">Interested</p>
        <p className="bg-[#FFAC3326] active:scale-90 w-1/4 text-center hover:bg-[#FFAC3366] text-black px-3 py-2 rounded-xl">Going</p>
        <Link className="bg-[#23BE0A66] w-1/4 text-center hover:bg-[#23BE0AD9] active:scale-90 cursor-pointer text-black px-3 py-2 rounded-xl">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Event;