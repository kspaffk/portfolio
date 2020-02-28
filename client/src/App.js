import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring'
import './App.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
      <header>
        <div>
        <h1>Kent Spafford</h1>
        </div>
        <div>
        <div onClick={onClick}>
          About
        </div>
        </div>
      </header>
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        console.log(item)
        console.log(props)
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
    </div>
  )
}