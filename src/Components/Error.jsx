/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-page space-y-4 flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-7xl px-4 lg:px-0 font-bold text-red-500">404</h1>

      <h1 className="text-2xl px-4 lg:px-0 font-bold text-red-500">Oops! We can't find that page.</h1>
      <img
        src="/error.png" // Replace with your image path
        alt="Error 404"
        className=" h-32"
      />
      <p className="text-gray-700 w-10/12 lg:w-2/4">
        The page you're looking for seems to be lost in the internet void. But don't worry, we can help you get back on track.
      </p>
    
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Go Back Home
          </Link>
      
    </div>
    );
};

export default Error;