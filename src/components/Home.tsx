import Filters from "./layout/Filters";
import ListHomeCars from "./car/ListHomeCars";
import { LoadingSpinner } from "./layout/LoadingSpinner";

const Home = () => {
  return (
    <main className="my-8 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-10">
      <div className="md:col-span-2 lg:col-span-2 flex flex-col">
        <Filters />
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 md:col-span-4 lg:col-span-4 flex flex-col">
        <ListHomeCars />
      </div>
      <div className="md:col-span-6 lg:col-span-4 flex flex-col">
        <div className="flex items-center justify-center h-screen"></div>
        {/* Google Map Component */}
      </div>
    </main>
  );
};

export default Home;
