import { Route, Routes } from "react-router-dom"
import ConnectButton from "./ConnectButton"
import AuthenticationGuard from "./AuthenticationGuard"
import ConfirmPage from "./ConfirmPage"
import LogoutPage from "./LogoutPage"
import DonePage from "./DonePage"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ConnectButton />} />
      <Route element={<AuthenticationGuard />}>
        <Route path="confirm" element={<ConfirmPage />} />
        <Route path="done" element={<DonePage />} />
      </Route>
      <Route path="logout" element={<LogoutPage />} />
    </Routes>
  )
}

export default AppRoutes
