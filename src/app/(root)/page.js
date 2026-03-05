import { Geist, Geist_Mono } from "next/font/google";
import SattaDashboard from "@/components/SattaDashboard";
import {
  getTodayResult,
  getYesterdayResults,
  getLastResult,
  getMonthlyResults,
  getDisawarData,
} from "@/services/result";
import { getSettingsFromDB, buildSiteConfig } from "@/services/settingsServer";

export const metadata = {
  title: "Good Luck Satta",
  description: "Satta Play - Satta Matka Results, Charts, and More",
};

export default async function Home() {
  // Fetch all data
  const [todayResults, yesterdayResults, lastResult, disawarData, settings] =
    await Promise.all([
      getTodayResult(),
      getYesterdayResults(),
      getLastResult(),
      getDisawarData(),
      getSettingsFromDB(),
    ]);

  console.log("Settings from DB:", JSON.stringify(settings?.khaiwalSection1, null, 2));
  console.log("Settings from DB Section 2:", JSON.stringify(settings?.khaiwalSection2, null, 2));

  // Get current month's results
  const currentDate = new Date();
  const monthlyResults = await getMonthlyResults(
    currentDate.getMonth() + 1,
    currentDate.getFullYear()
  );

  // Build site config with khaiwal sections
  const siteConfig = buildSiteConfig(settings);

  return (
    <SattaDashboard
      todayResults={todayResults}
      yesterdayResults={yesterdayResults}
      lastResult={lastResult}
      setting={siteConfig}
      monthlyResults={monthlyResults}
      disawarData={disawarData}
    />
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
