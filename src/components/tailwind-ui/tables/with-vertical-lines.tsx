const people = [
  {
    name: 'Lindsay Walton',
    title: 'df',
    email: 'ldf',
    role: 'Medfr',
  },
  // More people...
]
const TH_KEYs = [
  { title: '선수', key: 'name' },
  { title: '타수', key: 'changeinn' },
  { title: '득점', key: 'title' },
  { title: '안타', key: 'email' },
  { title: '타점', key: 'role' },
  { title: '홈런', key: 'role' },
  { title: '볼넷', key: 'role' },
  { title: '타점', key: 'role' },
  { title: '타율', key: 'role' },
]
const TH_KEY = [
  { title: '선수', key: 'name' },
  { title: '등판', key: 'changeinn' },
  { title: '결과', key: '' },
  { title: '승', key: 'w' },
  { title: '패', key: 'l' },
  { title: '세', key: 's' },
  { title: '이닝', key: 'inn' },
  { title: '타자', key: 'pa' },
  { title: '타구수', key: 'bf' },
  { title: '타수', key: 'ab' },
  { title: '피안타', key: 'hit' },
  { title: '피홈런', key: 'hr' },
  { title: '사구', key: 'bbhp' },
  { title: '삼진', key: 'kk' },
  { title: '실점', key: 'r' },
  { title: '자책', key: 'er' },
  { title: '평균 자책점', key: '' },
]

export function WithVerticalLines({
  team,
  data,
}: {
  team: { ishome: boolean; name: string }
  data: any
}) {
  return (
    <div className="">
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  {TH_KEY.map((th, idx) => {
                    return (
                      <th
                        key={th.key + idx}
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        {th.title}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((player, idx) => (
                  <tr
                    key={player.name + idx}
                    className="divide-x divide-gray-200"
                  >
                    {TH_KEY.map((th, idx) => {
                      return (
                        <td
                          key={th.key + idx}
                          className="whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium text-gray-900 sm:pl-0"
                        >
                          {player[th.key]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
