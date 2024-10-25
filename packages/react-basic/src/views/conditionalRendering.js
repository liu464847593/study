const isLogin = true
const articleType = 0;

function getArticleType(){
  if (articleType === 0) {
    return <h1>文章</h1>
  } else if (articleType === 1) {
    return <h1>视频</h1>
  } else {
    return <h1>其他</h1>
  }
}

const ConditionalRendering = () => {
  return (
    <div>
      {isLogin ? <h1>登录</h1> : <h1>未登录</h1>}
      {isLogin && <h1>登录</h1>}
      {getArticleType()}
    </div>
  )
}

export default ConditionalRendering
