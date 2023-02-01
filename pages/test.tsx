import TaskTypeItem from '../components/TaskTypeItem'
import TaskTestItem from '../components/TaskTestItem'
import TestBarItem from '../components/TestBarItem'
import React, { useEffect, useState } from 'react'
import TestAnswer from '../components/TestAnswer'
import ArrowFooter from '../components/ArrowFooter'
import MainLayout from '../components/MainLayout'
import { ActiveAnswer, TaskType } from '../models'

interface TestPageProps {
  taskTypes: TaskType[]
}

export default function TestPage({ taskTypes }: TestPageProps) {
  // const containerWidthClass: string = 'w-[1000px]'
  const taskTypeBarHeightClass: string = 'h-[405px]'
  const taskTestsHeightClass: string = 'h-[265px]'

  // const [db, setdb] = useState([] as TaskType[])
  const db = taskTypes

  let taskTypeTestNum = [4, 5, 6, 8, 2, 3, 7, 5, 4, 3, 4, 4, 6, 3, 5]
  if (db) {
    taskTypeTestNum = []
    db.forEach((taskType) => {
      taskTypeTestNum.push(taskType.taskTests.length)
    })
  }

  const [activeTaskType, setActiveTaskType] = useState(0)
  const [activeTaskTest, setActiveTaskTest] = useState(0)

  const [completedArr, setCompletedArr] = useState(
    Array.from({ length: 20 }).map(() => [] as number[])
  )

  const [activeTestBarItem, setActiveTestBarItem] = useState(0)

  const [answerArr, setAnswerArr] = useState([
    { id: 1, text: 'Lorem ipsum dolor sit amet.', check: true, checked: false },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dolorum.',
      check: false,
      checked: false,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem libero porro quo tempora similique fugit?',
      check: false,
      checked: false,
    },
    { id: 4, text: 'Lorem, ipsum.', check: false, checked: false },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt id nulla minima vel sunt qui debitis rerum consequuntur fugiat?',
      check: false,
      checked: false,
    },
  ] as ActiveAnswer[])

  function answersCheck() {
    const result = completedArr.reduce((counter, answerNumbers, indexComp) => {
      return (
        counter +
        db[activeTaskType - 1].taskTests[activeTaskTest - 1].tasks[
          indexComp
        ].answers.reduce((factor, answer, indexAns) => {
          if (answer.check !== answerNumbers.includes(indexAns + 1)) {
            return factor * 0
          }
          return factor * 1
        }, 1)
      )
    }, 0)
    return `Результат: ${result} из 20`
  }

  function arrowStartHandler() {
    setActiveTestBarItem(0)
  }

  function arrowPrevHandler() {
    setActiveTestBarItem((prev) => (prev - 1 === 0 ? prev : prev - 1))
  }

  function arrowNextHandler() {
    setActiveTestBarItem((prev) => (prev + 1 === 21 ? prev : prev + 1))
  }

  function arrowEndHandler() {
    setActiveTestBarItem(21)
  }

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('http://localhost:4200/taskTypes')
  //     const json: TaskType[] = await response.json()
  //     setdb(json)
  //   }
  //   getData()
  // }, [])

  useEffect(() => {
    if (
      activeTaskType * activeTaskTest * activeTestBarItem > 0 &&
      activeTestBarItem < 21
    ) {
      setAnswerArr(
        db[activeTaskType - 1].taskTests[activeTaskTest - 1].tasks[
          activeTestBarItem - 1
        ].answers.map((answer, index) => {
          return {
            ...answer,
            checked: completedArr[activeTestBarItem - 1].includes(index + 1),
          }
        }) as ActiveAnswer[]
      )
    } else if (activeTestBarItem !== 21) {
      setCompletedArr(Array.from({ length: 20 }).map(() => [] as number[]))
    }
  }, [activeTaskType, activeTaskTest, activeTestBarItem])

  useEffect(() => {
    setCompletedArr((prev) => {
      if (activeTestBarItem) {
        prev[activeTestBarItem - 1] = []
      }
      answerArr.forEach((answer, index) => {
        if (answer.checked) {
          prev[activeTestBarItem - 1].push(index + 1)
        }
      })
      return prev
    })
  }, [answerArr])

  useEffect(() => {
    function typeClickHandler(event: MouseEvent) {
      const element = event.target as HTMLElement
      setActiveTaskType((prevState) => {
        const newStateArr: string[] = element.id.split('#')
        const newState: number = +newStateArr[newStateArr.length - 1]
        return newState === prevState ? 0 : newState
      })
      setActiveTaskTest(0)
      setActiveTestBarItem(0)
    }

    function testClickHandler(event: MouseEvent) {
      const element = event.target as HTMLElement
      setActiveTaskTest(() => {
        const newStateArr: string[] = element.id.split('#')
        const newState: number = +newStateArr[newStateArr.length - 1]
        return newState
      })
      setActiveTestBarItem(0)
    }

    function testBarClickHandler(event: MouseEvent) {
      const element = event.target as HTMLElement
      setActiveTestBarItem(() => {
        const newStateArr: string[] = element.id.split('#')
        const newState: number = +newStateArr[newStateArr.length - 1]
        return newState
      })
      // console.log(db, activeTaskType, activeTaskTest, activeTestBarItem)
      // setAnswerArr(
      //   db[activeTaskType - 1].taskTests[activeTaskTest - 1].tasks[
      //     activeTestBarItem - 1
      //   ].answers as ActiveAnswer[]
      // )
      // setAnswerCheckedArr(answerArr.map(() => false))
    }

    function answerClickHandler(event: MouseEvent) {
      const element = event.target as HTMLElement
      let parent = element.parentElement?.parentElement as HTMLElement
      parent = parent.id ? parent : (parent.parentElement as HTMLElement)
      setAnswerArr((prev) =>
        prev.map((answer, index) => {
          // let checked: boolean
          // const checkedID = +parent.id[parent.id.length - 1]
          // if (index + 1 === checkedID) {
          //   checked = !answer.checked
          //   setCompletedArr((prev) => {
          //     if (prev[activeTestBarItem - 1].includes(checkedID)) {
          //       const checkedIDIndex =
          //         prev[activeTestBarItem - 1].indexOf(checkedID)
          //       prev[activeTestBarItem - 1].splice(checkedIDIndex, 1)
          //     } else {
          //       prev[activeTestBarItem - 1].push(checkedID)
          //     }
          //     console.log(prev[activeTestBarItem - 1].includes(checkedID))
          //     return prev
          //   })
          // } else {
          //   checked = answer.checked
          // }
          const checked =
            index + 1 === +parent.id[parent.id.length - 1]
              ? !answer.checked
              : answer.checked
          return { ...answer, checked } as ActiveAnswer
        })
      )
      // setCompletedArr((prev) => {
      //   const checkedID = +parent.id[parent.id.length - 1]
      //   if (prev[activeTestBarItem - 1].includes(checkedID)) {
      //     const checkedIDIndex = prev[activeTestBarItem - 1].indexOf(checkedID)
      //     prev[activeTestBarItem - 1].splice(checkedIDIndex, 1)
      //   } else {
      //     prev[activeTestBarItem - 1].push(checkedID)
      //   }
      //   console.log(prev[activeTestBarItem - 1])
      //   console.log(checkedID)
      //   return prev
      // })

      // setCompletedArr((prev) => {
      //   prev[activeTestBarItem - 1] = +parent.id[parent.id.length - 1] - 1
      //   return prev
      // })
      // setAnswerCheckedArr((prev) =>
      //   prev.map((value, index) => {
      //     return index + 1 === +parent.id[parent.id.length - 1] ? !value : value
      //   })
      // )
    }

    const taskTypes = document.querySelectorAll('[id^=taskTypeItem]')
    for (let i = 0; i < taskTypes.length; i++) {
      const element = taskTypes[i] as HTMLElement
      element.addEventListener('click', typeClickHandler)
    }

    const taskTests = document.querySelectorAll('[id^=taskTestItem]')
    for (let i = 0; i < taskTests.length; i++) {
      const element = taskTests[i] as HTMLElement
      element.addEventListener('click', testClickHandler)
    }

    const testBarItems = document.querySelectorAll('[id^=testBarItem]')
    for (let i = 0; i < testBarItems.length; i++) {
      const element = testBarItems[i] as HTMLElement
      element.addEventListener('click', testBarClickHandler)
    }

    const answers = document.querySelectorAll('[id^=answer-]')
    for (let i = 0; i < answers.length; i++) {
      const element = answers[i] as HTMLElement
      element.addEventListener('click', answerClickHandler)
    }

    document
      .querySelector('#arrow-start')
      ?.addEventListener('click', arrowStartHandler)
    document
      .querySelector('#arrow-prev')
      ?.addEventListener('click', arrowPrevHandler)
    document
      .querySelector('#arrow-next')
      ?.addEventListener('click', arrowNextHandler)
    document
      .querySelector('#arrow-end')
      ?.addEventListener('click', arrowEndHandler)

    return () => {
      for (let i = 0; i < taskTypes.length; i++) {
        const element = taskTypes[i] as HTMLElement
        element.removeEventListener('click', typeClickHandler)
      }
      for (let i = 0; i < taskTests.length; i++) {
        const element = taskTests[i] as HTMLElement
        element.removeEventListener('click', testClickHandler)
      }
      for (let i = 0; i < testBarItems.length; i++) {
        const element = testBarItems[i] as HTMLElement
        element.removeEventListener('click', testBarClickHandler)
      }
      for (let i = 0; i < answers.length; i++) {
        const element = answers[i] as HTMLElement
        element.removeEventListener('click', answerClickHandler)
      }
      document
        .querySelector('#arrow-start')
        ?.removeEventListener('click', arrowStartHandler)
      document
        .querySelector('#arrow-prev')
        ?.removeEventListener('click', arrowPrevHandler)
      document
        .querySelector('#arrow-next')
        ?.removeEventListener('click', arrowNextHandler)
      document
        .querySelector('#arrow-end')
        ?.removeEventListener('click', arrowEndHandler)
    }
  })

  return (
    <MainLayout title="Tests Page">
      <div className={`mx-auto flex flex-col`}>
        <div className="flex justify-between text-2xl font-bold font-iraBody mb-2 text-center text-white unselectable">
          <div className="py-2 w-[156px] bg-iraPurple rounded-lg">ЕГЭ</div>
          <div className="py-2 w-[812px] bg-iraPurple rounded-lg">
            НЕОРГАНИЧЕСКАЯ ХИМИЯ
          </div>
        </div>
        <div className={`flex mx-auto ${taskTypeBarHeightClass} font-iraBody`}>
          <ul className="flex flex-col list-none pr-1 mr-1 w-[180px] overflow-y-scroll scrollbar">
            {taskTypeTestNum.map((num, i) => {
              if (activeTaskType === i + 1) {
                let testArr: JSX.Element[] = []
                for (let j = 0; j < num; j++) {
                  testArr.push(
                    <TaskTestItem
                      active={activeTaskTest === j + 1}
                      parentId={activeTaskType}
                      id={j + 1}
                      key={j}
                    />
                  )
                }
                return (
                  <React.Fragment key={i}>
                    <TaskTypeItem active={true} id={i + 1} />
                    <ul className="flex flex-col items-end list-none">
                      {testArr}
                    </ul>
                  </React.Fragment>
                )
              } else {
                return <TaskTypeItem active={false} id={i + 1} key={i} />
              }
            })}
          </ul>
          <div className="flex flex-col my-1 ml-1 w-[812px] bg-iraLightGrey rounded-md text-xs">
            {activeTaskTest !== 0 && (
              <>
                <div className="flex justify-evenly items-center text-center align-middle my-1">
                  {completedArr.map((completed, ind) => {
                    return (
                      <TestBarItem
                        key={ind}
                        completed={completed}
                        id={ind + 1}
                        active={activeTestBarItem === ind + 1}
                      />
                    )
                  })}
                </div>
                <div className=" h-full rounded-md">
                  <div className="px-4 py-2 text-start bg-iraGreen rounded-md leading-normal">
                    <strong>
                      {db[activeTaskType - 1].title}. <br />
                    </strong>
                    {db[activeTaskType - 1].description}
                  </div>
                  {activeTestBarItem !== 0 ? (
                    activeTestBarItem !== 21 ? (
                      <div
                        className={`flex flex-col justify-between ${taskTestsHeightClass}`}
                      >
                        <div>
                          <div className="my-1.5 px-4 py-2 text-start bg-iraGrey rounded-md leading-normal">
                            <strong>{`${activeTestBarItem}`}. </strong>
                            {
                              db[activeTaskType - 1].taskTests[
                                activeTaskTest - 1
                              ].tasks[activeTestBarItem - 1].title
                            }
                          </div>
                          <ul className="flex flex-col list-none mx-1">
                            {answerArr.map((answer) => {
                              return (
                                <TestAnswer
                                  text={answer.text}
                                  key={answer.id}
                                  id={answer.id}
                                  checked={answer.checked}
                                />
                              )
                            })}
                          </ul>
                        </div>
                        <ArrowFooter active={activeTestBarItem} />
                      </div>
                    ) : (
                      <div
                        className={`flex flex-col items-center justify-center ${taskTestsHeightClass}`}
                      >
                        <div className="m-2 p-2 bg-iraDarkGreen text-white text-lg rounded-xl">
                          {answersCheck()}
                        </div>
                        <div
                          className={`m-2 p-2 bg-iraDarkGreen text-white text-lg rounded-xl unselectable ${
                            activeTaskTest !==
                            taskTypeTestNum[activeTaskType - 1]
                              ? 'hover:cursor-pointer'
                              : 'invisible'
                          }`}
                          onClick={() => {
                            activeTaskTest !==
                              taskTypeTestNum[activeTaskType - 1] &&
                              setActiveTaskTest((prev) => prev + 1)
                            setActiveTestBarItem(1)
                            setCompletedArr(
                              Array.from({ length: 20 }).map(
                                () => [] as number[]
                              )
                            )
                          }}
                        >
                          Следующий тест
                        </div>
                      </div>
                    )
                  ) : (
                    <div
                      className={`flex items-center justify-center ${taskTestsHeightClass}`}
                    >
                      <div
                        className="p-2 bg-iraDarkGreen text-white text-lg rounded-xl hover:cursor-pointer unselectable"
                        onClick={arrowNextHandler}
                      >
                        Начать Тест!
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

// TestPage.getInitialProps = async () => {
//   const response = await fetch('http://localhost:4200/taskTypes')
//   const json: TaskType[] = await response.json()

//   return {
//     taskTypes: json,
//   }
// }

// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4200/taskTypes')
//   const json: TaskType[] = await response.json()

//   return {
//     props: { taskTypes: json },
//   }
// }

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/db')
  const json: database = await response.json()
  return {
    props: json,
  }
}

export interface database {
  tasktypes: TaskType[]
}
