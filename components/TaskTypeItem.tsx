interface TaskTypeItemProps {
  active: boolean
  id: number
}

export default function TaskTypeItem({ active, id }: TaskTypeItemProps) {
  return (
    <li
      id={`taskTypeItem#${id}`}
      className={`my-1 py-1 text-center ${
        active ? 'bg-iraGreen' : 'bg-iraLavend'
      }  rounded-xl hover:cursor-pointer unselectable`}
    >
      {`Тип ${id}`}
    </li>
  )
}
