import { Outlet } from "react-router";
import MainLayout from "./MainLayout";

export default function App() {
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
}
