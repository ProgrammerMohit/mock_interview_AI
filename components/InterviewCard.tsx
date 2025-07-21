// import React from 'react'
// import dayjs from 'dayjs'
// import Image from 'next/image';
// import {getRandomInterviewCover} from "@/public/utils"
// import { Button } from './ui/button';
// import Link from 'next/link';
// import DisplayTechIcons from './DisplayTechIcons';
// const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
//     const feedback = null as Feedback | null;
//     const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
//     const formattedDate = dayjs(feedback?.createdAt || createdAt ||Date.now()).format('MMM D, YYYY')
//   return (
//     <div className='card-border w-[360px] max-sm:w-full min-h-96'>
//       <div className='card-interview'>
//         <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
//             <p className='badge-text'>{normalizedType}</p>
//         </div>
//         <Image src={getRandomInterviewCover()} alt='cover-image' width={90} height={90} className='rounded-full object-fit size-[90px]' />
//         <h3 className='mt-5 capitalize'>
//           {role} Interview
//         </h3>
//         <div className='flex flex-row gap-5 mt-3'>
//           <div className='flex flex-row gap-2'>
//               <Image src="/calendar.svg" alt='calender' width={22} height={22}/>
//               <p>{formattedDate}</p>
//           </div>
//           <div className='flex flex-row gap-2 items-center'>
//             <Image src="/star.svg" alt="star" width={22} height={22}/>
//             <p>{feedback?.totalScore || '---'}/100</p>
//           </div>
//         </div>
//         <p className='line-clamp-2 mt-5'>
//           {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills." }
//         </p>
//       </div>
//       <div className='flex flex-row justify-between'>
//         <DisplayTechIcons techStack={techstack}/>
//         <Button className='btn-primary'>
//           <Link href={feedback? `/interview/${interviewId}/feedback`:`/interview/${interviewId}`}>
//             {feedback ? "Check Feedback" : "View Interview"}
//           </Link>
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default InterviewCard

import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { getRandomInterviewCover } from '@/public/utils'
import { Button } from './ui/button'
import DisplayTechIcons from './DisplayTechIcons'

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className="bg-[#111111] rounded-xl shadow-lg w-[360px] max-sm:w-full min-h-[400px] flex flex-col justify-between p-5">
      {/* Type badge */}
      <div className="relative">
        <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg bg-[#A0A0FF]">
          <p className="text-sm font-semibold text-black">{normalizedType}</p>
        </div>
      </div>

      {/* Interview info */}
      <div className="flex flex-col items-center text-center mt-6">
        <Image
          src={getRandomInterviewCover()}
          alt="Interview cover"
          width={90}
          height={90}
          className="rounded-full object-cover"
        />

        <h3 className="mt-4 text-lg font-semibold capitalize text-white">
          {role} Interview
        </h3>

        <div className="flex gap-6 mt-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" alt="calendar" width={18} height={18} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <span>{feedback?.totalScore || '---'}/100</span>
          </div>
        </div>

        <p className="mt-5 text-sm text-gray-400 px-2">
          {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>
      </div>

      {/* Footer section */}
      <div className="flex justify-between items-center mt-6">
        <DisplayTechIcons techStack={techstack} />
        <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
          <Button className="bg-[#D6CCFF] text-black hover:bg-[#c3b9f7] px-4 py-2 text-sm font-medium rounded-lg">
            {feedback ? 'Check Feedback' : 'View Interview'}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default InterviewCard



