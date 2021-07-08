import { Button } from "antd";
import './App.css';

const colors = ['red','blue','yellow','green']
var n = 0
function App() {
  const change = () => {
    var color = colors[n%4]
    n++
    window.less
      .modifyVars({
        '@primary-color': color,
        '@layout-header-padding': '0px'
      })
      .then(() => {
        console.log(color);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="app">
        <Button onClick={change}>换肤</Button>
        <div className="field">field</div>
    </div>
  );
}

export default App;
