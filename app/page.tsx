// @refresh reset
/*  
      <Header />
      <HeaderAbout />
      <Banking />
      <Statistic />
      <Spend />
      <Paint />
      <Inside />
      <AccessInStyle />
      <Wealth />
      <Mortgage />
      <Crypto />
      <Community />
      <MobileApp />
      <Security />
      <MoreInfo />
      <Footer /> */
import styles from "./page.module.scss";
import Header from './components/Header/page'
import HeaderAbout from './components/HeaderAbout/page'
import Banking from './components/Banking/page'
import Statistic from './components/Statistic/page'
import Spend from './components/Spend/page'
import Paint from './components/Paint/page'
import Inside from './components/Inside/page'
import AccessInStyle from './components/AccessInStyle/page'
import Wealth from './components/Wealth/page'
import Mortgage from './components/Mortgage/page'
import Crypto from './components/Crypto/page'
import Community from './components/Community/page'
import MobileApp from './components/MobileApp/page'
import Security from './components/Security/page'
import MoreInfo from './components/MoreInfo/page'
import Footer from './components/Footer/page'
import Calculator from "./components/Calculator/page";
export default function Home() {
  return (
    <main className={styles.main}>
      
      <Calculator />
    </main>
  );
}
