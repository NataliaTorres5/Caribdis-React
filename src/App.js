import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import WebsiteLayout from "./layouts/WebsiteLayout";
import SignInSignUpPage from "./pages/SignInSignUpPage";


function App() {
  return (
    <WebsiteLayout>
      { /* <WelcomePage /> */}
      <SignInSignUpPage />
    </WebsiteLayout>
  );
}

export default App;
