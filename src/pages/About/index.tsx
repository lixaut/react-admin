
import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux/es/exports"

const About: React.FC = () => {

  // 取值
  const { num } = useSelector<StateType, StateType>((state) => ({
    num: state.num
  }))
  // 派发
  const dispatch = useDispatch()
  // +1 函数
  const add1Click = () => {
    dispatch({ type: 'add1', val: 1 })
  }
  // +5 函数
  const add5Click = () => {
    dispatch({ type: 'add5', val: 5 })
  }

  return (
    <div>
      <h1>About component</h1>
      <div>{num}</div>
      <button onClick={add1Click}>+1</button>
      <button onClick={add5Click}>+5</button>
    </div>
  )
}

export default About