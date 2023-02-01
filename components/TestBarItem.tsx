interface TestBarItemProps {
  completed: number[]
  id: number
  active: boolean
}

export default function TestBarItem({
  completed,
  id,
  active,
}: TestBarItemProps) {
  return (
    <div
      id={`testBarItem#${id}`}
      className={`mx-1 w-[30px] h-[30px] rounded-full hover:cursor-pointer unselectable text-xs leading-[30px] ${
        completed.length ? 'bg-iraDarkGreen text-white' : 'bg-gray-400'
      } ${active && 'bg-iraRed text-white'}`}
    >
      {id}
    </div>
  )
}
