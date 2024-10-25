import {useState} from 'react'

const UseState = () => {
  /**
   * 1.调佣useState添加一个状态变量
   * 2.调用useState返回一个数组，第一个元素是状态变量，第二个元素是更新状态变量的函数
   */
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  /**
   * 修改对象状态
   */
  const [form, setForm] = useState({
    name:'jack',
  })
  const changeForm = () => {
    setForm({
      ...form,
      name:'rose'
    })
  }
  return <div>
    <button onClick={handleClick}>{count}</button>
    <button onClick={changeForm}>changeFom{form.name}</button>
  </div>
}

export default UseState
