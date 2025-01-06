'use client'

import { addBookmark, removeBookmark } from '@/services/media-action'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/20/solid'
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline'

export default function BookmarkButton({
  videoId,
  videoTitle,
  videoThumbnail,
  videoReg,
  isBookmarked,
}: {
  videoId: number
  videoTitle: string
  videoThumbnail: string
  videoReg: number
  isBookmarked: boolean
}) {
  const handleClick = async () => {
    if (isBookmarked) {
      const removeResult = await removeBookmark(videoId)
      if (removeResult && removeResult.message) {
        alert(removeResult.message)
      }
    } else {
      const result = await addBookmark(
        videoId,
        videoTitle,
        videoThumbnail,
        videoReg,
      )
      if (result && result.message) {
        alert(result.message)
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex w-44 items-center justify-center bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-500"
    >
      {isBookmarked ? (
        <SolidBookmarkIcon className="mr-2 h-4 w-4" />
      ) : (
        <OutlineBookmarkIcon className="mr-2 h-4 w-4" />
      )}
      {isBookmarked ? '북마크에 저장됨' : '북마크에 저장하기'}
    </button>
  )
}
