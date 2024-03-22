import Proposal from "@/pages/Proposal";
import { createBrowserRouter } from "react-router-dom";
import YaaayPage from "@/pages/YaaayPage";

const router = createBrowserRouter([
  {
    path: "/Will-You/",
    element: <Proposal />,
  },
  {
    path: "/Will-You/success",
    element: <YaaayPage />,
  },
]);

export default router;
