export interface Answer {
  id: number
  text: string
  check: boolean
}

export interface ActiveAnswer extends Answer {
  checked: boolean
}

export interface Task {
  id: number
  title: string
  answers: Answer[]
}

export interface TaskTest {
  id: number
  title: string
  tasks: Task[]
}

export interface TaskType {
  id: number
  title: string
  description: string
  taskTests: TaskTest[]
}

export interface database {
  tasktypes: TaskType[]
}
