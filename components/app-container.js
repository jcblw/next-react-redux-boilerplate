import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { configStore } from '../store/'

export default ({
  title,
  children,
  props,
  className
}) => (
  <div className={className}>
    <Head>
      <title>{title || 'Hello world'}</title>
      <link href='static/base.css' rel='stylesheet' type='text/css' />
    </Head>
    <Provider store={configStore(props)}>
      {children}
    </Provider>
  </div>
)
