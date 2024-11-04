import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Fullpage.css'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <div className="fullpage">
      <div className="section s1">
        <Page1 />
      </div>
      <div className="section s2" id="s2">
        <Page2 />
      </div>
      <div className="section s3" id="s3">
        <Page3 />
      </div>
      <div className="section s4" id="s4">
        <Page4 />
      </div>
      <div className="section s5" id="s5">
        <Page5 />
      </div>
    </div>
  </React.StrictMode>
)
