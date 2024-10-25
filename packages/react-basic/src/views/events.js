// const handleCLick = ()=>{
//   console.log('button被点击');
// }

// const handleCLick = (e)=>{
//   console.log('button被点击',e);
// }

// const handleCLick = (name)=>{
//   console.log('button被点击',name);
// }

const handleCLick = (name,e)=>{
  console.log('button被点击',name,e);
}
const events = ()=>{
  return <div>
    <button onClick={(e)=>handleCLick('jack',e)}>click me</button>
  </div>
}

export default events
