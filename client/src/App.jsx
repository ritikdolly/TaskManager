import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Tasks } from "./pages/Tasks";
import { Users } from "./pages/Users";
import { Trash } from "./pages/Trash";
import { TaskDetails } from "./pages/TaskDetails";
import { Layout } from "./pages/Layout";
import { StatusPage } from "./pages/StatusPage";
import { Toaster } from "sonner";

const App = () => {
  const theme = "light";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/dashboard" /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/tasks", element: <Tasks /> },
        { path: "/completed/:status", element: <Tasks /> },
        { path: "/in-progress/:status", element: <Tasks /> },
        { path: "/todo/:status", element: <Tasks /> },
        { path: "/team", element: <Users /> },
        { path: "/trashed", element: <Trash /> },
        { path: "/task/:id", element: <TaskDetails /> },
      ],
    },
    { path: "/log-in", element: <Login /> },
  ]);

  return (
    <main className={theme}>
      <div className="w-full min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0df4]">
        <RouterProvider router={router} />
      </div>
      <Toaster richColors position="top-center" />
    </main>
  );
};

export default App;
