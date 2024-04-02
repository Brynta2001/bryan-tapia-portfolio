import { motion } from "framer-motion";
// import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export const DiscordCard = () => {
  return (
    <>
      <motion.a
			href="#"
			rel="noreferrer"
			whileHover="groupHover"
			variants={{
				groupHover: {
					scale: 0.95,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
			className="rounded-3xl bg-indigo-300 dark:bg-indigo-600 flex justify-center items-center col-span-1 relative aspect-square group"
		>
			<div className="h-full w-full flex justify-center items-center">
				<img src="/images/staticdiscordspinner.png" className="absolute w-72 md:w-72 lg:w-72 xl:w-[500px] xl:scale-125 group-hover:opacity-0" />
				<img src="/images/discordspinner.gif" className="absolute w-72 md:w-72 lg:w-72 xl:w-[500px] xl:scale-125 group-hover:opacity-100 opacity-0" />
			</div>
		</motion.a>
    </>
  );
};
