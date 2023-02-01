import Image from 'next/image'
import start from '../assets/Arrow-start.svg'
import prev from '../assets/Arrow-prev.svg'
import next from '../assets/Arrow-next.svg'
import end from '../assets/Arrow-end.svg'

interface ArrowFooterProps {
  active: number
}

export default function ArrowFooter({ active }: ArrowFooterProps) {
  return (
    <div className="flex justify-end">
      <div
        className="mx-3 w-[60px] h-[60px] relative hover:cursor-pointer"
        id="arrow-start"
      >
        <Image src={start} alt="arrow-start" sizes="60x60" fill />
      </div>
      <div
        className={`w-[60px] h-[60px] relative ${
          active === 1 ? 'opacity-5' : 'hover:cursor-pointer'
        }`}
        id="arrow-prev"
      >
        <Image src={prev} alt="arrow-prev" sizes="60x60" fill />
      </div>
      <div
        className={`w-[60px] h-[60px] relative ${
          active === 20 ? 'opacity-5' : 'hover:cursor-pointer'
        }`}
        id="arrow-next"
      >
        <Image src={next} alt="arrow-next" sizes="60x60" fill />
      </div>
      <div
        className="mx-3 w-[60px] h-[60px] relative hover:cursor-pointer"
        id="arrow-end"
      >
        <Image src={end} alt="arrow-end" sizes="60x60" fill />
      </div>
    </div>
  )
}
