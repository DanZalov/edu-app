import Image from 'next/image'
import checkbox from '../assets/Rectangle_19.svg'
import checkmark from '../assets/CheckMark_small.svg'

interface TestAnswerProps {
  checked: boolean
  text: string
  id: number
}

export default function TestAnswer({ text, id, checked }: TestAnswerProps) {
  return (
    <li className="flex items-center">
      {/* <div>
        <input
          type="checkbox"
          className="mx-3 my-1.5 rounded-3xl w-[32px] h-[32px] appearance-none"
          // id={`answer-${id}`}
          value={id}
        />
      </div> */}
      <div className="flex hover:cursor-pointer" id={`answer-${id}`}>
        <div className="mx-3 my-1.5 w-[28px] h-[28px] relative">
          <Image src={checkbox} alt="checkbox" sizes="28x28" fill />
        </div>
        <div
          className={`my-1.5 relative right-8 bottom-1 ${
            checked ? 'visible' : 'invisible'
          } w-[28px] h-[23px] relative`}
        >
          <Image src={checkmark} alt="checkmark" sizes="28x23" fill />
        </div>
      </div>
      <div className="relative right-8">{text}</div>
    </li>
  )
}
