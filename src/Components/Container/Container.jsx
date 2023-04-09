import React from 'react'
import { Rightdiv } from '../Rightdiv/Rightdiv'
import { Leftdiv } from '../Leftdiv/Leftdiv'

import './Container.css'

export const Container = () => {
  return (
    <div className="container">
      <Leftdiv />
      <Rightdiv />
    </div>
  );
}