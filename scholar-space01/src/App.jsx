import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Event from "./pages/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Event />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
