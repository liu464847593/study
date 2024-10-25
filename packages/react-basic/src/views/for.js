const list = [
  {id: 1000,name: 'Vue'},
  {id: 1001,name: 'React'},
  {id: 1002,name: 'Angular'},
]
const For = () => {
  return (
    <div>
      {list.map(item=><li key={item.id}>{item.name}</li>)}
    </div>
  )
}
export default For;
