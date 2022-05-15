import React, { useState, Fragment } from 'react'
import { CheckIcon, FilterIcon } from '@heroicons/react/outline'
import { Menu, RadioGroup, Transition } from '@headlessui/react'
import {
  IfilterComponent,
  IfilterList,
} from '../interfaces/components.interfaces'

const FilterComponent: React.FC<IfilterComponent> = ({
  selected,
  setSelected,
  filterList,
}) => (
  <Menu as="div" className="relative mr-3">
    <div>
      <Menu.Button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 flex flex-row text-gray-800 text-base font-medium rounded-md focus:bg-black focus:text-white">
        <FilterIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        Filter
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {filterList.map(({ label, value }) => (
              <RadioGroup.Option
                key={label}
                value={value}
                className={({ active, checked }) => `${
                  active
                    ? 'ring-2 ring-offset-2 ring-grey-100 ring-white ring-opacity-60'
                    : 'hover:bg-grey-400'
                }
    ${checked ? 'bg-grey-900 bg-opacity-75 text-white' : 'bg-white'}
      relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full ">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-base ${
                              checked ? 'text-white' : 'text-grey-900'
                            }`}
                          >
                            {label}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </Menu.Items>
    </Transition>
  </Menu>
)

export default FilterComponent
