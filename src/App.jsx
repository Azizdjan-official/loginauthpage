import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { UserLayout } from "./layout/user-layout";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/user/profile";
import { Address } from "./pages/user/address";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="user" element={<UserLayout />}>
            <Route index element={<Profile />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
