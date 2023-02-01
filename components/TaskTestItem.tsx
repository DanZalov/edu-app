interface TaskTestItemProps {
  active: boolean
  parentId: number
  id: number
}

export default function TaskTestItem({
  active,
  parentId,
  id,
}: TaskTestItemProps) {
  return (
    <li
      id={`taskTestItem#${id}`}
      className={`w-1/2 my-1 py-1 text-center rounded-xl ${
        active ? 'bg-iraLightGreen' : 'bg-iraGrey'
      } hover:cursor-pointer unselectable`}
    >
      {`Тест ${parentId}.${id}`}
    </li>
  )
}
