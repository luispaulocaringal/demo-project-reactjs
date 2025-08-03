import { Outlet } from "react-router-dom";

import './AuthRoot.css'

function AuthRoot() {
  return (
    <>
      <div className="auth d-flex justify-content-center">
        <Outlet/>
      </div>
    </>
  )
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  // const company = formData.get("company");

  // Here you would typically send a request to your backend to authenticate the user
  // For now, we will just return a dummy response
  if (username === "test" && password === "password") {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid credentials." };
  }
}

export default AuthRoot