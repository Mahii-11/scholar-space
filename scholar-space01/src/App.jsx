import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Event from "./pages/event/Event";
import EventOne from "./pages/event/EventOne";
import EventThree from "./pages/event/EventThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/aboutevent",
    element: <EventOne />,
  },

  {
    path: "/eventabout",
    element: <EventThree />,
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
