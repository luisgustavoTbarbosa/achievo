import { LogoContainer } from "./styles";
import logo from '../../assets/achievo.svg'

export function Logo () {
  return (
    <LogoContainer href="/">
      <img src={logo} alt="" />
      <p>Achievo</p>
    </LogoContainer>
  )
}
