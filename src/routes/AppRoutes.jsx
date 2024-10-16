import { Routes, Route } from "react-router-dom";
//import { useUser } from '../context/userProvider'
import Login from "../Pages/Login";
import HomeRoute from "./HomeRoute";

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={
              // <PrivateRoute>
                <HomeRoute/>
              // </PrivateRoute>
            }>
                
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes