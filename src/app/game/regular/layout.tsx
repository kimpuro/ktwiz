import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu2'
import { GAME_BANNER_DATA } from '@/contants'
import React from 'react'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Banner>
        <Banner.Heading
          title={GAME_BANNER_DATA['/regular'].title}
          subtitle={GAME_BANNER_DATA['/regular'].description}
        />
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page"> {children}</div>
    </div>
  )
}

export default Layout
