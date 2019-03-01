import React from 'react';
import ReactDOM from 'react-dom'


const x = document.createElement('div')
document.body.appendChild(x)
const inner = (
  <div>
    <div className="demo-block">
      输入框：
    </div>
    <div className="demo-block">
      按钮：
    </div>
  </div>
)
ReactDOM.render(
  inner,
  x
)