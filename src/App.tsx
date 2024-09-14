import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserTable from "./components/userTable.tsx/UserTable";

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <UserTable />
      </main>
      <Footer />
    </div>
  );
}
