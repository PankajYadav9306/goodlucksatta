const YearlyTable = ({ year, data }) => {
  // Months
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Days (1–31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-center border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-gradient-to-r from-violet-700 to-violet-600">
            {/* Sticky year column */}
            <th className="border border-violet-600 bg-violet-700 text-white px-3 py-2.5 sticky left-0 z-10 font-bold">
              {year}
            </th>
            {months.map((month, idx) => (
              <th key={idx} className="border border-violet-600 px-3 py-2.5 text-white font-medium">
                {month}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {days.map((day, rowIndex) => (
            <tr key={day} className={rowIndex % 2 === 0 ? "bg-slate-800/50" : "bg-slate-800"}>
              {/* Sticky day column */}
              <td className="border border-slate-700 bg-slate-800 text-violet-400 font-semibold px-3 py-2 sticky left-0 z-10">
                {day}
              </td>
              {months.map((month, idx) => (
                <td key={idx} className="border border-slate-700 px-3 py-2 text-slate-300 hover:bg-violet-900/30 transition-colors">
                  {data[month]?.[day] || "xx"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YearlyTable;
