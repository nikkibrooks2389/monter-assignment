import React from 'react';

const Paginator = ({ totalPages, currentPage, onPageChange, rowsPerPage, onRowsPerPageChange }) => {
    const handlePrevious = () => {
        onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    const handleRowsPerPageChange = (e) => {
        const newRowsPerPage = parseInt(e.target.value);
        onRowsPerPageChange(newRowsPerPage);
    };

    return (
        <div className="flex justify-center items-center mt-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 mr-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
            >
                Previous
            </button>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 mr-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
            >
                Next
            </button>
            <div className="mr-2">
                Rows per page:
                <select
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="px-2 py-1 ml-2 border border-gray-300 rounded-md"
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