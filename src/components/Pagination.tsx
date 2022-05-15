import React from 'react'
import { IPagination } from '../interfaces/components.interfaces'

const Pagination: React.FC<IPagination> = ({
  listPerPage,
  totalCountries,
  paginateFront,
  paginateBack,
  currentPage,
}) => (
  <div className="py-2 flex flex-row justify-between w-full mt-9">
    <div>
      <p className="text-base text-gray-700">
        Showing
        <span className="font-medium"> {currentPage * listPerPage - 10} </span>
        to
        <span className="font-medium"> {currentPage * listPerPage} </span>
        of
        <span className="font-medium"> {totalCountries} </span>
        countries
      </p>
    </div>
    <nav className="block"></nav>
    <div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          disabled={currentPage * listPerPage - 10 === 0}
          onClick={() => {
            paginateBack()
          }}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>Previous</span>
        </button>

        <button
          disabled={currentPage * listPerPage === totalCountries}
          onClick={() => {
            paginateFront()
          }}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>Next</span>
        </button>
      </nav>
    </div>
  </div>
)

export default Pagination
