import React from 'react'

function TableHeader() {
  return (
    <thead className="bg-white border-b">
      <tr>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Name
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Full Name
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Owner
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Created At
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Language
        </th>
        <th
          scope="col"
          className="text-base font-medium text-gray-900 px-6 py-4 text-left"
        >
          Action
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
