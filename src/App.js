
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./components/Dashboard";
import Payment from "./components/Payment";
import Recipients from "./components/Recipients";
import Transactions from "./components/Transactions";
import Accounts from "./components/Accounts";

function App() {
  return (
    <div className="bg-[#f5f6f9] min-h-screen">
      <Router>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/recipients" element={<Recipients />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
