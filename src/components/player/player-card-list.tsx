'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PlayerCode } from '@/types'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
  position?: string
}

interface PlayerCardListProps {
  onCardClick: (pcode: PlayerCode) => void
  cards: PlayerCard[]
  pcode: PlayerCode
}

export default function PlayerCardList({
  onCardClick,
  cards,
  pcode,
}: PlayerCardListProps) {
  const [selectedCard, setSelectedCard] = useState<PlayerCode | null>(pcode)

  const handleCardClick = (pcode: PlayerCode) => {
    setSelectedCard(pcode)
    onCardClick(pcode)
  }

  return (
    <div className="h-[32rem] overflow-y-auto p-2">
      <div className="flex flex-col gap-4">
        {cards.map((card) => (
          <div
            key={card.pcode}
            role="button"
            className={`group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg transition-all duration-300 ${
              selectedCard === card.pcode
                ? 'bg-blue-300 shadow-lg'
                : 'bg-gray-200 hover:bg-gray-300 hover:shadow-md'
            } active:scale-95`}
            onClick={() => handleCardClick(card.pcode)}
          >
            <Image
              src={card.playerPrvwImg || '/images/ktwiz-basic-img.png'}
              alt={card.playerName}
              className="h-full w-full rounded-lg object-cover"
              layout="fill"
              objectFit="cover"
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg text-white transition-opacity duration-300 ${
                selectedCard === card.pcode
                  ? 'bg-black bg-opacity-60 opacity-100'
                  : 'bg-black bg-opacity-50 opacity-0 group-hover:opacity-100'
              }`}
            >
              <div className="text-lg font-bold">{card.playerName}</div>
              {card.position && (
                <div className="mt-1 text-sm text-gray-300">
                  {card.position}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
