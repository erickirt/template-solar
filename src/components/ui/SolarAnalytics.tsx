import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden">
      <div>
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          Solar Analytics
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Turn field data into profitable harvests with real-time insights
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={
            <RiNavigationFill className="mb-2 size-6 shrink-0 text-orange-400" />
          }
          title="Autonomous Navigation"
          description="Smart tractors that navigate fields independently using GPS."
        />
        <StickerCard
          Icon={
            <RiRobot3Fill className="mb-2 size-6 shrink-0 text-orange-400" />
          }
          title="Robotic Harvesting"
          description="AI-powered robots that identify and harvest crops at optimal ripeness."
        />
        <StickerCard
          Icon={<RiDropFill className="mb-2 size-6 shrink-0 text-orange-400" />}
          title="Smart Irrigation"
          description="Automated irrigation systems that optimize water usage."
        />
        <StickerCard
          Icon={
            <RiPieChartFill className="mb-2 size-6 shrink-0 text-orange-400" />
          }
          title="Yield Analytics"
          description="Advanced analytics platform that predicts crop yields."
        />
      </div>
    </section>
  )
}
