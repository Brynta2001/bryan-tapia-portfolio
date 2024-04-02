import { DiscordCard } from "./components/DiscordCard";
import { IntroCard } from "./components/IntroCard";

export const App = () => {
  return (
    // <div className='bg-blue-500'>Bryan</div>
    <div className="flex flex-col m-5 font-nunito">
      <div
        className="grid grid-cols-3 gap-2 md:grid-cols-4 
        md:gap-6 mt-5 container mx-auto xl:px-60"
      >
        <IntroCard />
        <DiscordCard />
      </div>
    </div>
  );
};
