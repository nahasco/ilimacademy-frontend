// import { Tab } from '@headlessui/react'

// export default function Tabs() {
//   return (
//     <Tab.Group>
//       <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
//         <Tab>Tab 1</Tab>
//         <Tab>Tab 2</Tab>
//         <Tab>Tab 3</Tab>
//       </Tab.List>
//       <Tab.Panels>
//         <Tab.Panel>Content 1</Tab.Panel>
//         <Tab.Panel>Content 2</Tab.Panel>
//         <Tab.Panel>Content 3</Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   )
// }


import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import Router from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Tabs() {
    const [selectedIndex, setSelectedIndex] = useState()

    // function initialindex() {
    //     if (Router.pathname.startsWith("/practice/math")) {
    //         return 0;
    //     }
    //     else if (Router.pathname.startsWith("/practice/iq")) {
    //         return 1;
    //     }
    //     else if (Router.pathname.startsWith("/practice/geometry")) {
    //         return 2;
    //     }
    // }

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
                'w-full rounded-lg py-2 text-sm font-medium leading-5 text-mathdark',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected
                    ? 'bg-mathlight'
                    : 'text-gray-200 hover:bg-mathlight hover:text-mathdark'
                )
            }>
                Math
            </Tab>
                <Tab
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2 text-sm font-medium leading-5 text-gray-200',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                    selected
                        ? 'bg-iqlight text-iqdark'
                        : 'text-gray-200 hover:bg-iqlight hover:text-iqdark'
                    )
                }>
                    IQ
                </Tab>
                <Tab
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2 text-sm font-medium leading-5 text-gray-200',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                    selected
                        ? 'bg-geometrylight text-geometrydark'
                        : 'text-gray-200 hover:bg-geometrylight hover:text-geometrydark'
                    )
                }>
                    Geometry
                </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
