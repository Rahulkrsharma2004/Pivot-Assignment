import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin"; // Adjust the import path as needed

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const typeColors: { [key: string]: string } = {
  grass: "bg-green-500",
  fire: "bg-red-200",
  water: "bg-blue-200",
  poison: "bg-purple-200",
  flying: "bg-gray-200",
  electric: "bg-yellow-200",
  bug: "bg-lime-200",
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  types,
  sprite,
}) => {
  return (
    <PinContainer title={name}>
      <motion.div
        className="flex backdrop-blur-sm bg-black-500 bg-opacity-100 flex-col p-4 tracking-tight text-slate-100/50 w-[16rem] h-[16rem] mx-auto max-w-full max-h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={sprite}
          alt={name}
          className="bg-white w-30 h-30 mx-auto mb-4 rounded-full border-4 border-black "
          // whileHover={{ rotate: 360, scale: 1.1 }}
        />
        <motion.p
          className="text-center text-gray-700 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {types.map((type) => (
            <span
              key={type}
              className={`text-xl font-semibold inline-block px-2 py-1 rounded-md text-black ${typeColors[type]}`}
            >
              {type}
            </span>
          ))}
        </motion.p>
        <div>
          <h3 className="max-w-xs m-0 font-bold text-4xl text-center  text-black">
            {name}
          </h3>
        </div>
      </motion.div>
    </PinContainer>
  );
};

export default PokemonCard;
