import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/main/Main'
import Login from './pages/member/Login';
import Register from './pages/member/Register';
import Error from './pages/Error';
import NotAdult from './pages/main/NotAdult';
import MyPageLayout from './layouts/MyPageLayout';
import Payment from './pages/member/Payment';
import Profile from './pages/member/Profile';
import All from './pages/wines/All'
import Red from './pages/wines/Red';
import White from './pages/wines/White';
import Rose from './pages/wines/Rose';
import Sparkling from './pages/wines/Sparkling';
import WineDetail from './pages/wines/WineDetail';
import WineUpdate from './pages/wines/WineUpdate';
import WineRegistration from './pages/wines/WineRegistration';
import WineSearch from './pages/wines/WineSearch'
import Purchase from './pages/Purchase/Purchase';
import AboutCompany from './pages/footerContent/AboutCompany';
import ContactUs from './pages/footerContent/ContactUs';
import PrivacyPolicy from './pages/footerContent/PrivacyPolicy';
import TermsAndConditions from './pages/footerContent/TermsAndConditions';
import Information from './pages/informations/Information';
import InformationDetail from './pages/informations/InformationDetail';
import InfoSearch from './pages/informations/InfoSearch';
import InfoRegistration from './pages/informations/InfoRegistration';
import InfoUpdate from './pages/informations/InfoUpdate';
import IdPwFind from './pages/member/IdPwFind';
import ScrollToTop from './pages/main/ScrollToTop';



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="informations" element={ <Information/> }/>  
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/idpwsearch" element={ <IdPwFind/> } />
          <Route path="*" element={ <Error/> }/>
          <Route path="/notAdult" element={ <NotAdult/> } />
          <Route path="mypage" element={ <MyPageLayout/> } >
          <Route index element={ <Profile /> } />
          <Route path="profile" element={ <Profile /> } /> 
          <Route path="payment" element={ <Payment /> } />
          </Route>
          <Route path="wines" element={<All/>}/>
          <Route path="wines/red" element={ <Red/> }/>
          <Route path="wines/white" element={ <White/> }/>
          <Route path="wines/rose" element={ <Rose/> }/>
          <Route path="wines/sparkling" element={ <Sparkling/> }/>
          <Route path="wine/update/:wineCode" element={ <WineUpdate/>} />
          <Route path="wine/registration" element={<WineRegistration/>} />
          <Route path="wines/:wineCode" element={<WineDetail />} />
          <Route path="wines-management" element={<All/>}/>
          <Route path="wineSearch" element={<WineSearch/>}/>


          <Route path="Purchase" element={ <Purchase/> } />
          <Route path="informations" element={ <Information/> }/> 
          <Route path="info-detail/:infoNo" element={ <InformationDetail/> }/> 
          <Route path="infosearch" element={ <InfoSearch/> }/>
          <Route path="info-registration" element={ <InfoRegistration/> }/>
          <Route path="info-update/:infoNo" element={ <InfoUpdate/> }/>
          <Route path="info-management" element={ <Information/> }/>
          <Route path="aboutCompany" element={ <AboutCompany/> } />
          <Route path="footerContent/contactUs" element={ <ContactUs/> } />
          <Route path="footerContent/privacyPolicy" element={ <PrivacyPolicy/> } />
          <Route path="footerContent/termsAndConditions" element={ <TermsAndConditions/> } />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;