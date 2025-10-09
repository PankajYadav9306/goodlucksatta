"use client";
import { GAMES } from "@/utils/gameConfig";
import { Typewriter } from "react-simple-typewriter";
import GameSection from "./GameSection";
import SattaResultTable from "./SattaResultTable";

const SattaDashboard = ({
  todayResults = [],
  yesterdayResults = [],
  lastResult,
  setting,
  monthlyResults = [],
  disawarData,
  currentSite = "site 3",
  siteName = "Good Luck Satta",
}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Use site name from settings or props
  const displaySiteName = setting?.siteName || siteName;

  // Create monthly chart data using centralized config
  const createMonthlyChart = () => {
    const rows = [];
    const monthStr = String(currentDate.getMonth() + 1).padStart(2, "0");

    for (let day = 1; day <= daysInMonth; day++) {
      const row = { day };
      const dayStr = `${currentYear}-${monthStr}-${String(day).padStart(2, "0")}`;

      GAMES.forEach((game, index) => {
        // Find result for this specific date and game
        const result = monthlyResults.find(
          (r) => r.date === dayStr && r.game === game.key
        );
        row[`game${index}`] = result ? result.resultNumber : "--";
      });

      rows.push(row);
    }
    return rows;
  };

  const monthlyChartData = createMonthlyChart();

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="mx-auto bg-white">
        {/* Current Featured Game */}
        <div className="rounded-xl text-center">
          <div className="px-2 pt-20 pb-8">
            <p className="pb-8 mt-12 md:mt-16 lg:mt-24 px-4 text-2xl md:text-3xl font-semibold">
              <Typewriter
                words={["✨ ईमानदारी ही खाईवाल BHAI की पहचान है। 😎"]}
                cursor
                cursorBlinking={false}
                cursorStyle=""
                typeSpeed={80}
              />
            </p>
            <h2 className="text-4xl text-shadow-text-main bg-gradient-to-r via-yellow-400 to-orange-500 from-orange-500 py-5 -mx-3 lg:text-5xl text-white font-semibold text-theme-accent">
              👑 {displaySiteName} 👑
            </h2>
            <p className="pb-12 mt-10 text-black px-4 text-2xl md:text-3xl font-semibold">
              📰 यही आती है सबसे पहले खबर ⏳
              <br />
              🚀 SUPER FAST RESULTS ⚡
            </p>
          </div>
        </div>

        <GameSection
          data={lastResult}
          setting={setting}
          disawarData={disawarData}
        />
        <SattaResultTable
          todayResults={todayResults}
          yesterdayResults={yesterdayResults}
        />
       
        {/* Chart Grid */}
        <div>
          <div className=" bg-white pb-5 text-center">
            <div className="bg-gradient-to-r to-orange-500 from-orange-500 via-yellow-400 p-6">
              <h2 className="sm:text-4xl text-white lg:text-5xl text-2xl font-bold text-theme-accent mb-2 md:mb-6">
                {currentMonth} MONTH CHART
              </h2>
              <p className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold">
                {currentYear}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient2">
                  <th className="outline outline-white px-3 py-2 text-red-800 text-sm sticky left-0 bg-gradient2 z-10">
                    S.No
                  </th>
                  {GAMES.map((game, index) => (
                    <th
                      key={index}
                      className="border border-theme-primary px-3 py-2 text-red-800 border-white text-xs"
                    >
                      {game.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthlyChartData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={` ${rowIndex % 2 !== 0 ? "bg-gray-200" : ""}`}
                  >
                    <td className="px-3 py-2 text-center text-white bg-gradient2 outline text-sm font-medium sticky left-0 z-10">
                      {rowIndex + 1}
                    </td>
                    {GAMES.map((_, gameIndex) => (
                      <td
                        key={gameIndex}
                        className="border border-theme-primary px-3 py-2 hover:bg-[#fcb511] transition-colors text-center text-black text-sm"
                      >
                        {row[`game${gameIndex}`]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SattaDashboard;
