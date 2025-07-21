// import React from 'react'
// import Image from 'next/image';
// import { cn, getTechLogos } from '@/public/utils'
// const DisplayTechIcons = async ({techStack}: TechIconProps) => {
//     const techIcons = await getTechLogos(techStack);
//   return (
//     <div className='flex flex-row'>
//       {techIcons.slice(0,3).map(({tech, url}, index)=>(
//         <div key={tech} className={cn('relative group bg-dark-300 rounded-full p-2 flex-center', index >= 1 && '-ml-3')}>
//             <span className='tech-tooltip'>{tech}</span>
//             <Image src = {url} alt={tech} width={100} height={100} className='size-5'/>
//         </div>
//       ))}</div>
//   )
// }

// export default DisplayTechIcons

import React from 'react'
import Image from 'next/image'
import { cn, getTechLogos } from '@/public/utils'

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack)

  return (
    <div className="flex items-center">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            'relative rounded-full bg-[#1F1F1F] flex items-center justify-center',
            index > 0 && '-ml-3'
          )}
          style={{ width: 32, height: 32 }}
        >
          <Image
            src={url}
            alt={tech}
            width={20}
            height={20}
            className="w-[20px] h-[20px] object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default DisplayTechIcons


