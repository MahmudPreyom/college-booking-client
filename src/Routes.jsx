import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Colleges from "./Components/Home/Colleges/Colleges";
import Admission from "./Components/Admission/Admission";
import AdmissionForm from "./Components/AdmissionForm/AdmissionForm";
import ViewDetails from "./Components/ViewDetails/ViewDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "colleges",
          element: <Colleges></Colleges>
        },
        {
          path: "admission",
          element: <Admission></Admission>
        },
        {
          path: "admissionapply",
          element: <AdmissionForm></AdmissionForm>
        }
        
      ]
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Register></Register>
    },
    {
      path: "viewdetails/:viewdetailsId",
      element: <ViewDetails></ViewDetails>,
      loader: ({params}) => fetch(`http://localhost:5000/colleges/${params.viewdetailsId}`)
    }
  ]);