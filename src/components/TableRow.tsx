import React from 'react'
import { IRepositories } from '../interfaces/repositories.interfaces'

const TableRow: React.FC<IRepositories | any> = ({ repository, className, openModal }) => (
  <tr className={` border-b text-left ${className}`}>
    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
      {repository.name}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.full_name}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.owner.login}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.created_at}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      {repository.language}
    </td>
    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
    <button
      type="button"
      onClick={openModal}
      className="rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
        View Contributors
    </button>
    </td>
  </tr>
)

export default TableRow
