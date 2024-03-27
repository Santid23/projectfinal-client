import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import HomePage from "../pages/HomePage/HomePage"
import CompetitionsPage from "../pages/CompetitionsPage/CompetitionsPage"
import LoaderCompetitionsPage from "../pages/CompetitionsPage/LoaderCompetitionsPage"
import CreateCompetitionPage from "../pages/CreateCompetitionPage/CreateCompetitionPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import CompetitionDetailsPage from "../pages/CompetitionDetailsPage/CompetitionDetailsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import CompetitionDetPage from "../pages/CompetitionDetPage/CompetitionDetPage"

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/profile",
          element: (
            <AuthMiddleware>
              <ProfilePage />
            </AuthMiddleware>
          ),
        },
        {
          path: "/competitions",
          element: <CompetitionsPage />,
          loader: LoaderCompetitionsPage,
        },
        {
          path: "/competitions/:id",
          element: <CompetitionDetPage />,
        },
        {
          path: "/competitions/create",
          element: <CreateCompetitionPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ])
  
  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
