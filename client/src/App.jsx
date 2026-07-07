import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser, } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProblemsPage from "./pages/ProblemsPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {

  const { isSignedIn } = useUser();

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the app</h1>

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App
