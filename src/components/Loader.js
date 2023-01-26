import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

export default function Loader({size}) {
  return (
      <div><MoonLoader size={size} color={"#25114E"}/></div>
  )
}