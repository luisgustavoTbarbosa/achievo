import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app-container">
        <div>
          <Logo />
        </div>
        <div></div>
      </div>
    </>
  )
}
