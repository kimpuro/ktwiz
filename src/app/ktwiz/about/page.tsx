import { Banner } from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu2'
import { KTWIZ_BANNER_DATA } from '@/contants/index'

function KtwizAboutPage() {
  return (
    <div className="w-full">
      <Banner {...KTWIZ_BANNER_DATA['']}>
        <TabMenu tabs={KTWIZ_BANNER_DATA[''].tabs} />
      </Banner>

      <div className="page">KtwizPage</div>
    </div>
  )
}

export default KtwizAboutPage
