import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import router from "./router";
console.log(process.env, 'process.env)') // 打印环境变量
function App() {
  return <div className="App">{router()}</div>;
}

export default App;
