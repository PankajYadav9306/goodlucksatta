"use client";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { GAMES } from "@/utils/gameConfig";

const ChartSattaTable = () => {
  const sattaLinks = GAMES.map((game) => ({
    id: game.order,
    href: `${game.key.replace("_", "-")}-yearly-chart-2025`,
    href2: `${game.key.replace("_", "-")}-yearly-chart-2024`,
    currentYear: `2025`,
    lastYear: '2024',
    name: `${game.name}`
  }));

  return (
    <>
      <div className="overflow-x-auto mt-2">
        <p className="pb-8 mt-5 text-center px-4 text-2xl md:text-3xl font-semibold">
          <Typewriter
            words={["ईमानदारी ही हमारी पहचान है।"]}
            cursor
            cursorBlinking={false}
            cursorStyle=""
            typeSpeed={80}
          />
        </p>
        <table className="table-auto w-full border-2 border-black text-center text-sm">
          <thead>
            <tr className="bg-yellow-400 font-bold text-[#FF0000]">
              <th className="border-2 border-black px-2 py-2">Games</th>
              <th className="border-2 border-black px-2 py-2">2025 Charts</th>
              <th className="border-2 border-black px-2 py-2">2024 Charts</th>
            </tr>
          </thead>
          <tbody>
            {sattaLinks.map((link, index) => (
              <tr key={index}
                className="bg-[linear-gradient(361deg,#ff7500e0,#ff7a20_0%,#ff3a11d4_100%,#ff0004ad)] font-semibold"
              >
                <td className="border-2 border-black px-2 py-2 text-white sm:max-w-[0]">
                  <p>{link.name}</p>
                </td>
                <td className="border-2 border-black px-2 bg-orange-500 font-semibold text-black hover:bg-[#f3cf0090] duration-300">
                  <Link key={link.id} href={link.href}>
                    <p className="text-base max-sm:text-sm m-0 font-semibold uppercase text-white">
                      {link.currentYear}
                    </p>
                  </Link>
                </td>
                <td className="border-2 border-black px-2 py-2 bg-orange-500 font-semibold text-black hover:bg-[#f3cf0090] duration-300">
                  <Link key={link.id} href={link.href2}>
                    <p className="text-base max-sm:text-sm m-0 font-semibold uppercase text-white">
                      {link.lastYear}
                    </p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChartSattaTable;
