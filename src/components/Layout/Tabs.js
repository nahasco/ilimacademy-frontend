import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import Router from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Tabs() {
    const [selectedIndex, setSelectedIndex] = useState()

    useEffect(() => {
        if (Router.pathname.startsWith("/practice/math")) {
            setSelectedIndex(0);
        }
        else if (Router.pathname.startsWith("/practice/iq")) {
            setSelectedIndex(1);
        }
        else if (Router.pathname.startsWith("/practice/geometry")) {
            setSelectedIndex(2);
        }
    }, [])

  return (
    <div className="w-full max-w-md sm:px-0">
      <Tab.Group manual selectedIndex={selectedIndex}
      
        onChange={(index) => {
            if (index == 0) {
                Router.push("/practice/math")
            } else if (index == 1) {
                Router.push("/practice/iq")
            } else if (index == 2) {
                Router.push("/practice/geometry")
            }
            console.log('Changed selected tab to:', index)
        }}>

        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1.5 -mt-8 mb-8">
            <Tab
            className={({ selected }) =>
                classNames(
                'w-full rounded-lg py-2 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected
                    ? 'bg-mathlight text-mathdark'
                    : 'text-gray-300 hover:bg-gray-50'
                )
            }>
                Math
            </Tab>
                <Tab
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                    selected
                        ? 'bg-iqlight text-iqdark'
                        : ' hover:bg-gray-50 text-gray-300'
                    )
                }>
                    IQ
                </Tab>
                <Tab
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                    selected
                        ? 'bg-geometrylight text-geometrydark'
                        : 'hover:bg-gray-50 text-gray-300'
                    )
                }>
                    Geometry
                </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
