"use client";
import Image from "next/image";
import Link from "next/link";
import DateTime from "./DateTime";

// Default schedule fallback
const defaultSchedule = [
  { name: "SHIRDI DHAM", time: "12:55 PM" },
  { name: "KALIYAR", time: "01:55 PM" },
  { name: "DELHI BAZAR", time: "03:00 PM" },
  { name: "SHRI GANESH", time: "04:30 PM" },
  { name: "FARIDABAD", time: "05:45 PM" },
  { name: "SHAKTI PEETH", time: "07:25 PM" },
  { name: "GAZIYABAD", time: "09:00 PM" },
  { name: "MATHURA", time: "10:00 PM" },
  { name: "GALI", time: "11:30 PM" },
  { name: "DISAWAR", time: "04:50 AM" },
];

// Khaiwal Card Component
const KhaiwalCard = ({ section, colorScheme = "violet" }) => {
  const schedule = section?.gameSchedule?.length > 0
    ? section.gameSchedule
    : defaultSchedule;

  const contactName = section?.contactName || "KHAIWAL";
  const whatsappNumber = section?.whatsappNumber || "";
  const rate = section?.rate || "";

  const gradientClass = colorScheme === "violet"
    ? "from-violet-600 to-violet-500"
    : "from-amber-600 to-amber-500";

  return (
    <div className="glass-dark rounded-2xl p-6 border-animate shadow-2xl h-full">
      <p className="text-lg lg:text-xl text-center text-amber-100 mb-3 font-bold hindi-text">
        -- सीधे सट्टा कंपनी का No. 1 खाईवाल --
      </p>
      <p className="uppercase text-center mb-5 text-xl lg:text-2xl text-white font-black">
        {contactName}
      </p>

      <div className="space-y-1 mb-6 bg-white/10 rounded-xl p-4">
        {schedule.map((game, index) => (
          <div
            key={index}
            className="flex justify-between text-sm items-center py-2 border-b border-white/10 last:border-0 hover:bg-white/5 px-2 rounded transition-colors"
          >
            <span className="text-violet-100 font-semibold">
              {game.name}
            </span>
            <span className="text-amber-300 font-bold">
              {game.time}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center my-5 py-4 bg-white/10 rounded-xl">
        <p className="text-amber-300 font-bold mb-2 text-lg hindi-text">जोड़ी रेट</p>
        <p className="text-violet-100 text-sm font-medium hindi-text">जोड़ी रेट 10 ------- {rate}</p>
        <p className="text-violet-100 text-sm font-medium hindi-text">हरूफ रेट 100 ----- {rate}</p>
      </div>

      <p className="text-center text-violet-100 text-sm mb-5 hindi-text">
        Game play करने के लिये नीचे लिंक पर क्लिक करे
      </p>

      <div className="text-center">
        <Link
          target="_blank"
          href={`https://wa.me/+91${whatsappNumber}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 btn-glow"
        >
          <span>📱</span>
          <span className="hindi-text">WhatsApp पर संपर्क करें</span>
        </Link>
      </div>
    </div>
  );
};

const GamePage = ({ data, setting, disawarData }) => {
  const currentYear = new Date().getFullYear();

  // Get khaiwal sections from settings
  const khaiwalSection1 = setting?.khaiwalSection1 || {
    enabled: true,
    contactName: setting?.contactName || "TEJU BHAI KHAIWAL",
    whatsappNumber: setting?.whatsappNumber || "",
    rate: setting?.rate || "",
    gameSchedule: defaultSchedule
  };

  const khaiwalSection2 = setting?.khaiwalSection2 || {
    enabled: false,
    contactName: "",
    whatsappNumber: "",
    rate: "",
    gameSchedule: defaultSchedule
  };

  // Check if second section is enabled
  const showSecondSection = khaiwalSection2?.enabled && khaiwalSection2?.contactName;

  return (
    <div className="bg-transparent">
      {/* === TOP DYNAMIC SECTION === */}
      <div className="glass-card mx-2 md:mx-4 mt-4 rounded-2xl pt-5 pb-6 shadow-sm">
        <div className="text-center">
          <DateTime />
        </div>
        <hr className="border-slate-700 w-11/12 mx-auto my-5" />

        <div className="flex uppercase mx-auto text-center w-full font-semibold flex-col gap-4 items-center justify-center">
          {data && (
            <>
              <p className="text-amber-500 text-2xl sm:text-3xl font-bold">
                {data.game.replace("_", " ")}
              </p>
              <p className="text-violet-400 text-3xl md:text-4xl font-black">
                {data.resultNumber}
              </p>

              <div className="h-px w-32 bg-gradient-to-r from-transparent via-violet-400 to-transparent my-2"></div>

              <p className="text-amber-500 text-2xl sm:text-[28px] font-bold">
                {data.waitingGame.replace("_", " ")}
              </p>
              <Image
                className="mx-auto"
                alt="wait icon"
                width={45}
                height={45}
                src="https://i.ibb.co/HffXjQCh/wait.gif"
              />
            </>
          )}
        </div>
      </div>

      {/* DISAWAR Section */}
      <div className="glass-card mx-2 md:mx-4 mt-4 rounded-2xl py-5 text-center shadow-sm">
        <Link href={`/disawer-yearly-chart-${currentYear}`} className="text-2xl sm:text-3xl font-black text-violet-400 hover:text-amber-500 transition-colors">
          🎯 DISAWAR 🎯
        </Link>
        <div className="flex items-center gap-4 justify-center max-w-[350px] mx-auto mt-3">
          <span className="text-xl font-bold text-violet-400 bg-violet-900/50 px-4 py-2 rounded-lg">
            {disawarData?.yesterday || "--"}
          </span>
          <Image
            className="mx-2"
            src="https://cdn.prod.website-files.com/67a6672d42bf0f0674721094/67a68eca12044dd0fb8bdf06_arrow.gif"
            alt="Arrow"
            width={24}
            height={24}
          />
          <span className="text-xl font-bold text-amber-500 bg-amber-900/50 px-4 py-2 rounded-lg">
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

      {/* === BOTTOM KHAIWAL SECTIONS === */}
      <section className="py-8 px-2 md:px-4">
        <div className={`max-w-6xl mx-auto ${showSecondSection ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'max-w-md'}`}>
          {/* Khaiwal Section 1 - Always shown */}
          <KhaiwalCard section={khaiwalSection1} colorScheme="violet" />

          {/* Khaiwal Section 2 - Only shown if enabled */}
          {showSecondSection && (
            <KhaiwalCard section={khaiwalSection2} colorScheme="amber" />
          )}
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="mx-2 md:mx-4 mt-4 bg-slate-800 rounded-lg py-3 px-4 overflow-hidden">
        <p className="text-xs md:text-sm text-center text-violet-300 font-semibold leading-relaxed uppercase">
          SATTA MATKA SATTA FAST RESULT KALYAN TOP MATKA RESULT KALYAN FAST RESULT MILAN RATAN RAJDHANI MAIN BAZAR MATKA FAST TIPS RESULT MATKA CHART JODI CHART PANEL CHART FIX GAME SATTAMATKA ! MATKA MOBI SATTA 143 DPBOSS.NET TOP NO1 RESULT FULL RATE MATKA ONLINE GAME PLAY BY APP DPBOSS
        </p>
      </div>
    </div>
  );
};

export default GamePage;
