import { getAuth } from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginBootstrap from "./components/LoginBootstrap";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <RegisterReactBootstrap />,
      },
      {
        path: "/register",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/login",
        element: <LoginBootstrap></LoginBootstrap>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
