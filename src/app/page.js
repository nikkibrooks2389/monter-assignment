import ReportPanel from "./components/RecentlyGeneratedReports/ReportPanel";
import ReportList from './components/RecentlyGeneratedReports/ReportTable.js';
import reportData from "./constants/ReportData";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReportPanel >
        <ReportList reports={reportData} />
      </ReportPanel>
    </main>
  );
}
