import React from 'react'
import Loader from './Loader';

export default function FullPageLoader() {
  return (
    <div id='FullPageLoader'>
      <div className='block'><Loader size={60} color={"#25114E"}/></div>
      <div>Loading</div>
    </div>
  )
}
