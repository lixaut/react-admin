
// 引入全局样式
import 'assets/styles/global.scss'
// 引入路由
import routes from 'router'
import { useRoutes } from 'react-router-dom'

function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
