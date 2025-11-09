"use client";
import Image from "next/image";
import Link from "next/link";
import DateTime from "./DateTime";

const GamePage = ({ data, setting, disawarData }) => {
  const schedule = [
    { name: "SHIRDI DHAM", time: "12:55 PM", number: "45" },
    { name: "KALIYAR", time: "01:55 PM", number: "62" },
    { name: "DELHI BAZAR", time: "03:00 PM", number: "27" },
    { name: "SHRI GANESH", time: "04:30 PM", number: "84" },
    { name: "FARIDABAD ", time: "05:45 PM", number: "11" },
    { name: "SHAKTI PEETH", time: "07:25 PM", number: "32" },
    { name: "GAZIYABAD ", time: "09:00 PM", number: "90" },
    { name: "MATHURA", time: "10:00 PM", number: "75" },
    { name: "GALI ", time: "11:30 PM", number: "41" },
    { name: "DISAWAR ", time: "04:50 PM", number: "11" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* === TOP DYNAMIC SECTION === */}
      <div className="bg-white pt-2 pb-3">
        <div className="text-center mt-2">
          <DateTime />
        </div>
        <hr className="border-dashed w-full mx-auto my-3" />

        <div className="flex uppercase mx-auto text-center w-full font-semibold flex-col gap-3 sm:gap-5 items-center justify-center">
          {/* ✅ Previous game */}
          {data && (
            <>
              <p className="text-[#fc6311] text-3xl">
                {data.game.replace("_", " ")}
              </p>
              <p className="text-2xl md:text-3xl">{data.resultNumber}</p>

              {/* ✅ Next game (WAITING) */}

              <p className="text-[#fc6311] text-[28px]">
                {data.waitingGame.replace("_", " ")}
              </p>
              <Image
                className="mx-auto -mt-2"
                alt="wait icon"
                width={40}
                height={40}
                src="https://i.ibb.co/HffXjQCh/wait.gif"
              />
            </>
          )}
        </div>
      </div>
      <div className="p-3 text-center w-full mx-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 py-2.">
        <Link href={`/disawer-yearly-chart-${currentYear}`} className="text-3xl font-bold text-black mb-4">DISAWAR</Link>
        <div className="flex items-center gap-3 text-black justify-center max-w-[350px] mx-auto">
          <span className="text-xl font-semibold">
            {disawarData?.yesterday || "--"}
          </span>
          <Image
            className="mx-4"
            src="https://cdn.prod.website-files.com/67a6672d42bf0f0674721094/67a68eca12044dd0fb8bdf06_arrow.gif"
            alt="Arrow"
            width={20}
            height={20}
          />
          <span className="text-xl text-black font-semibold">
            {disawarData?.today || (
              <Image
                className="inline"
                alt="wait icon"
                width={28}
                height={28}
                src="https://i.ibb.co/HffXjQCh/wait.gif"
              />
            )}
          </span>
        </div>
      </div>
      {/* === BOTTOM STATIC SECTION === */}
      <section className="flex flex-col md:flex-row md:space-x-1 bg-white">
        <div className="text-center w-full px-3 sm:px-6 p-6">
          <div className="flex-1 mx-auto px-4 max-sm:px-2 pb-6 text-base font-semibold text-gray-900 rounded-2xl bg-gradient-to-b from-yellow-300 to-orange-500 border-black border-dashed border-[1px]">
            <div className="py-3">

              <p className="text-lg lg:text-xl mt-2 mb-0 md:my-5 text-black max-md:text-2xl">
                -- सीधे सट्टा कंपनी का No. 1 खाईवाल --
              </p>
              <p className="uppercase mb-2 font-bold text-base lg:text-xl">
                ♕♕ &nbsp;TEJU BHAI KHAIWAL &nbsp;♕♕
              </p>
              <div className="text-start mx-auto max-w-[380px]">
                {schedule.map((game, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm items-center font-semibold py-1"
                  >
                    <span className="flex items-center gap-1 text-nowrap w-[130px] truncate">
                      <span>⏰</span>
                      {game.name}
                    </span>
                    <Image
                      className="max-w-[60px] sm:max-w-[100px] w-full"
                      src="https://cdn.prod.website-files.com/67a6672d42bf0f0674721094/67a9da533c0090c26d77ef6b_Vector.svg"
                      alt="Example image"
                      width={100}
                      height={20}
                    />
                    <span className="text-nowrap">
                      {game.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>


            <p className="text-black my-3">
              👑👑जोड़ी रेट👑👑
              <br />
              <p className="mt-2"> जोड़ी रेट 10-------{setting?.rate}</p>
              <p>हरूफ रेट 100-----{setting?.rate}</p>
            </p>
            <p className="uppercase text-black mb-1">
              ♕♕ &nbsp;TEJU BHAI KHAIWAL &nbsp;♕♕
            </p>
            <p className="text-black max-sm:text-base">
              Game play करने के लिये नीचे लिंक पर क्लिक करे
            </p>
            <div className="mx-auto max-w-[300px] mt-4 hover:scale-110 transition-all duration-300">
              <Link
                target="_blank"
                href={`https://wa.me/+${setting?.whatsappNumber}`}
              >
                <Image
                  className="max-sm:w-[200px] mx-auto max-sm:h-16"
                  width={300}
                  height={100}
                  src="https://i.ibb.co/4RJCLbSB/whatsapp.png"
                  alt="whatsapp"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamePage;
