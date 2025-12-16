import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Event from "./pages/event/Event";
import EventOne from "./pages/event/EventOne";
import EventThree from "./pages/event/EventThree";
import Eventtwo from "./pages/event/Eventtwo";
import NewsStore from "./pages/news/NewsStore";

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
    path: "/Tehi 2025",
    element: <Eventtwo />,
  },

  {
    path: "/eventabout",
    element: <EventThree />,
  },

  {
    path: "/news",
    element: <NewsStore />,
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
