import AuthForm from "../components/authForm"
import signup from "./api/signup"

const Signup = () => {
  return <AuthForm mode="signup" />
}
Signup.authPage = true
export default Signup
