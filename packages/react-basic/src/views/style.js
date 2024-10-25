import '../style/index.css'
const spanStyle = {
  color: 'red',
  fontSize: '50px'
}
const Style = () => {
  return <div>
    <span style={spanStyle}>this is span</span>
    <span className="foo">this is span</span>
  </div>
}
export default Style
