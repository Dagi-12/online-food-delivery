import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function PartnerSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantName = queryParams.get("restaurantName");

  const capitalizedRestaurantName =
    restaurantName.charAt(0).toUpperCase() + restaurantName.slice(1);

  return (
    <div className="banner w-full md:w-full px-7 mx-auto relative flex items-center justify-center bg-white p-5 mt-20 mb-20">
      <div className="banner bg-white shadow-emerald-700 rounded-lg overflow-hidden shadow-md rounded-lg banner-description w-full md:w-1/2 p-3 ">
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="transition-all duration-1000 transform translate-y-10"
        >
          <h2 className="mb-6 text-4xl font-bold text-green-500 animate-fade-in-up">
            Dear Customer your application for your company{" "}
            <span className="text-orange-500">{capitalizedRestaurantName}</span>{" "}
            has been submitted successfully!
          </h2>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1500}
          classNames="transition-all duration-1500 transform translate-y-10"
        >
          <p className="font-semibold font-sans text-xl text-gray-600 py-2 p-5 animate-fade-in-up">
            Thank you again for your interest in partnering with us, and we look
            forward to potentially working with you soon.
          </p>
        </CSSTransition>
      </div>
    </div>
  );
}
