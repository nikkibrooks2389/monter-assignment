
/**
 * Paginator Component
 *
 * This component handles the pagination functionality for a list of items. 
 * It provides buttons to navigate to the first page, previous page, specific pages, 
 * next page, and the last page. The component displays a maximum of 5 page 
 * number buttons at a time and allows the user to change the number of items 
 * shown per page.
 *
 * Props:
 *   - totalPages (Number): The total number of pages.
 *   - currentPage (Number): The current active page.
 *   - onPageChange (Function): Function to invoke when a new page is selected.
 *   - rowsPerPage (Number): The number of items to show per page.
 *   - onRowsPerPageChange (Function): Function to invoke when the number of items per page is changed.
 */

import React from 'react';

const Paginator = ({ totalPages, currentPage, onPageChange, rowsPerPage, onRowsPerPageChange }) => {
    const handleFirstPage = () => {
        onPageChange(1);
    };

    const handleLastPage = () => {
        onPageChange(totalPages);
    };

    const handlePrevious = () => {
        onPageChange(Math.max(currentPage - 1, 1));
    };

    const handleNext = () => {
        onPageChange(Math.min(currentPage + 1, totalPages));
    };

    const handleRowsPerPageChange = (e) => {
        const newRowsPerPage = parseInt(e.target.value, 10);
        onRowsPerPageChange(newRowsPerPage);
        onPageChange(1); // Reset to the first page whenever the rows per page changes
    };

    const pageNumbers = () => {
        const pages = [];
        const pageLimit = 5;
        let startPage = Math.max(currentPage - 2, 1);
        let endPage = Math.min(startPage + pageLimit - 1, totalPages);

        // Adjust the start and end page if close to totalPages
        if (endPage === totalPages) {
            startPage = Math.max(totalPages - pageLimit + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={handleFirstPage}
                disabled={currentPage === 1}
                className="px-2 py-1 mr-1 text-sm  rounded-md"
            >
                {'<<'}
            </button>
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 mr-2 text-sm  rounded-md"
            >
                Prev
            </button>
            {pageNumbers().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 mx-1 text-sm rounded-md ${currentPage === page
                        ? 'bg-red-500 text-white' // Selected page is red with white text
                        : 'bg-white border border-gray-200 hover:bg-gray-100' // Non-selected pages are white with a light grey border
                        }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 mr-2 text-sm  rounded-md"
            >
                Next
            </button>
            <button
                onClick={handleLastPage}
                disabled={currentPage === totalPages}
                className="px-2 py-1 mr-1 text-sm  rounded-md"
            >
                {'>>'}
            </button>
            <div className="mr-2 ml-10">
                Rows per page:
                <select
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="px-2 py-1 ml-2 text-sm  border border-gray-300 rounded-md"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    );
};

export default Paginator;