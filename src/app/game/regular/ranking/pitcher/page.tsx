import { TabNavigation as TabMenu } from '@/components/common/tab-menu/tab'

import { Top5PitcherEras } from '@/types'

import RankingTable from './ranking-table'
import { Top3PitcherWins } from './top3-pitcher-wins'
import { TABS } from '../team/_lib/constants'
import { Top3PitcherEras } from './top3-pitcher-eras'
import { getTop5PitcherEras } from './_lib/api'
import {
  createTeamERAOverview,
  TeamERAOverview,
} from '../batter/team-era-overview'

async function Page() {
  const top5PitcherEras = await getTop5PitcherEras()

  return (
    <div className="mb-[250px] w-full">
      <TabMenu tabs={TABS} activeTab={TABS[1]} />

      <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Top3PitcherEras />
          <Top3PitcherWins />
        </div>
        <TeamERAOverview
          {...createTeamERAOverview(top5PitcherEras, '전체 투수 평균자책점')}
        />
      </section>
      <RankingTable />
    </div>
  )
}

export default Page
