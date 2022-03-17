import DefaultLayout from 'src/layout/index'
import React from 'react'
import { privateRouter } from '../index'
import ShowRouter from './ShowRouter'
import { Switch } from 'react-router-dom'
const PrivatePage: React.FC = () => {
  return (
    <Switch>
      {ShowRouter({ routers: privateRouter, MasterLayout: DefaultLayout })}
    </Switch>
  )
}
export default PrivatePage
