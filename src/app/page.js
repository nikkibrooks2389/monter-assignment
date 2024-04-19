/**
 * Home Component
 * 
 * This is the main container component for the application. It manages the state for modal visibility,
 * integrates the usePagination hook for handling pagination logic, and organizes the layout of the modal,
 * report list, and pagination controls.
 *
 * State:
 *  - isModalOpen (Boolean): Controls the visibility of the modal.
 *
 * Components:
 *  - Modal: Displays the modal with report details.
 *  - ReportTableWrapper: A wrapper component for report content.
 *  - ReportList: Lists all the reports.
 *  - Paginator: Controls page navigation.
 */
"use client"
import React, { useState } from 'react';
import ReportTableWrapper from './components/RecentlyGeneratedReports/ReportTableWrapper';
import ReportList from './components/RecentlyGeneratedReports/ReportTable.js';
import Paginator from './components/UI/Paginator';
import reportData from "./constants/ReportData";
import Modal from './components/UI/Modal';
import ReportsTableHeader from './components/RecentlyGeneratedReports/ReportTableHeader';
import usePagination from './hooks/usePagination';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    rowsPerPage,
    handleRowsPerPageChange,
  } = usePagination(reportData, 5);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={() => setModalOpen(true)}>Open Reports</button>
      <Modal isOpen={isModalOpen} headerContent={<ReportsTableHeader setModalOpen={setModalOpen} />}>
        <ReportTableWrapper>
          <ReportList reports={currentItems} />
          <div className="p-4 border-t border-gray-200">
            <Paginator
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </div>
        </ReportTableWrapper>
      </Modal>
    </main>
  );
}