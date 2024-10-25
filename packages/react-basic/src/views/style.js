import '../style/index.css'
import classNames from 'classnames'
const spanStyle = {
  color: 'red',
  fontSize: '50px'
}
const flag = true
const Style = () => {
  return <div>
    <span style={spanStyle}>this is span</span>
    <span className="foo">this is span</span>
    <span className={`foo ${flag && 'active'}`}>this is span</span>
    <span className={classNames('foo',{active: flag})}>this is span</span>
  </div>
}
export default Style
