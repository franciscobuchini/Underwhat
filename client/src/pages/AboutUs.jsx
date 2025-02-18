import { Link } from 'react-router-dom';
import nav01 from "../assets/Logo/nav01.webp";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4"> <span className="icon-[tabler--scuba-mask]"></span>Who we are!?</h1>
      <p className='text-gray-600 px-10'>Underwhat!? was created by UWH players for UWH players. We know how important it is to represent the sport with pride and style, both in and out of the pool. That's why we decided to create a casual clothing brand designed not only for everyday wear but also to take the spirit of UWH everywhere, always keeping a touch of style.

      Each item we offer is designed with meticulous attention to detail. From the very beginning, we made it clear that quality would be a priority. We're not just looking for comfort and durability, but also the best aesthetics so that we, as players, can proudly display our commitment to the sport in an elegant and modern way.

      Our biggest goal is to reach every country with UWH, bringing our brand and the passion for this sport to every corner of the world. We believe in the importance of building a global community of players who can feel represented and connected through our clothing.

      We are committed to offering products that not only provide high quality but also allow you to express your identity as an UWH player, no matter where you are. This brand is here to showcase our way of life and share the passion for a sport that is much more than just a game.</p>
      <img src={nav01} className="h-16"></img>
    </div>
  );
};

export default AboutUs;