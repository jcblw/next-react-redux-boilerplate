import React from 'react'
import css from 'next/css'
import AppContainer from '../components/app-container'

const container = css({
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export default () => (
  <AppContainer className={container}>
    <div>
      <div>
        <h3>React App</h3>
        <p>This is the content of the React app.</p>
      </div>
    </div>
  </AppContainer>
)
