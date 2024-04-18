"use client"
import React, { useState } from 'react';
import ReportPanel from "./components/RecentlyGeneratedReports/ReportPanel";
import ReportList from './components/RecentlyGeneratedReports/ReportTable.js';
import Paginator from './components/UI/Paginator';
import reportData from "./constants/ReportData";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle rows per page change
  const handleRowsPerPageChange = (rows) => {
    setRowsPerPage(rows);
  };

  // Calculate the index of the first and last report to be displayed based on current page and rows per page
  const indexOfLastReport = currentPage * rowsPerPage;
  const indexOfFirstReport = indexOfLastReport - rowsPerPage;
  const currentReports = reportData.slice(indexOfFirstReport, indexOfLastReport);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReportPanel>
        <ReportList reports={currentReports} />
        <Paginator
          totalPages={Math.ceil(reportData.length / rowsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </ReportPanel>
    </main>
  );
}