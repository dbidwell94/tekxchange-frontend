import Button, { ButtonColor } from "../../components/Button";
import { NavLink } from "react-router-dom";
import Card from "./card";

export default function MarketingPage() {
  return (
    <div className="flex justify-center flex-col">
      <section
        id="hero"
        className="app-height w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-white to-gray-100"
      >
        <span className="bg-clip-text h-fit py-1 lg:py-3 text-transparent bg-gradient-to-br from-red-600 to-blue-600">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl">
            Find what you need
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl mt-2">
            Right around the corner.
          </h3>
          <span className="w-full flex justify-center items-center mt-16">
            <NavLink to={"/app"}>
              <Button
                buttonColor={ButtonColor.Gold}
                buttonText="Start Browsing Now"
              />
            </NavLink>
          </span>
        </span>
      </section>

      <section
        id="details"
        className="app-height w-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white"
      >
        <div
          className={`
        grid grid-cols-1 gap-5 px-2 md:grid-cols-2 md:gap-10 lg:gap-20

        `.trim()}
        >
          <Card
            titleText="Advanced Search Feature:"
            subtitleText="Find exactly what you're looking for with our powerful search tool."
          />
          <Card
            titleText="Filter by User Rating:"
            subtitleText="Search for products and services with high ratings from other users."
          />
          <Card
            titleText="Geolocation Search:"
            subtitleText="Narrow your search results to a specific area or location."
          />
          <Card
            titleText="Price Filter:"
            subtitleText="Set a price range for your search results to find deals that fit your budget."
          />
          <Card
            titleText="Advanced Search History:"
            subtitleText="Keep track of your previous search history for quick access to previous results."
          />
          <Card
            titleText="Save Favorite:"
            subtitleText="Save your favorite products and services for easy access later."
          />
        </div>
      </section>
    </div>
  );
}
