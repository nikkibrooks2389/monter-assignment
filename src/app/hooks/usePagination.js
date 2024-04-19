/**
 * usePagination Hook
 *
 * Manages pagination logic for a dataset. Provides functionality to change pages,
 * adjust the number of items per page, and computes the items visible on the current page.
 *
 * Returns:
 *   - currentItems (Array): The subset of data items for the current page.
 *   - currentPage (Number): The current page number.
 *   - totalPages (Number): Total number of pages based on the data and items per page.
 *   - handlePageChange (Function): Function to handle changing to a new page.
 *   - rowsPerPage (Number): Number of items per page.
 *   - handleRowsPerPageChange (Function): Function to handle changing the number of items per page.
 */
import { useState, useEffect } from 'react';

const usePagination = (data, initialItemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(initialItemsPerPage);

    useEffect(() => {
        // Reset to the first page if rows per page changes
        setCurrentPage(1);
    }, [rowsPerPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRowsPerPageChange = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
    };

    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return {
        currentItems,
        currentPage,
        totalPages: Math.ceil(data.length / rowsPerPage),
        handlePageChange,
        rowsPerPage,
        handleRowsPerPageChange,
    };
};

export default usePagination;