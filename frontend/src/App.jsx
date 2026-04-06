import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Konservatoriya from './pages/Konservatoriya';
import OdobAhloq from './pages/OdobAhloq';
import Rektorat from './pages/Rektorat';
import Kafedralar from './pages/Kafedralar';
import MarkazVaBolimlar from './pages/MarkazVaBolimlar';
import DavlatRamzlari from './pages/DavlatRamzlari';
import Tuzilma from './pages/Tuzilma';
import IlmiyFaoliyat from './pages/IlmiyFaoliyat';
import IlmiyUslubiy from './pages/IlmiyUslubiy';
import Korrupsiya from './pages/Korrupsiya';
import Xalqaro from './pages/Xalqaro';
import Yoshlar from './pages/Yoshlar';
import Xabar from './pages/Xabar';
import YashilMakon from './pages/YashilMakon';
import Moliyaviy from './pages/Moliyaviy';
import OquvUslubiy from './pages/OquvUslubiy';
import GrantAriza from './pages/GrantAriza';
import GrantTest from './pages/GrantTest';
import YakuniyJarayon from './pages/YakuniyJarayon';
import DarsBakalavr from './pages/DarsBakalavr';
import DarsMagistratura from './pages/DarsMagistratura';
import TalabaYutuqlari from './pages/TalabaYutuqlari';
import Ekofaol from './pages/Ekofaol';
import QabulDasturlari from './pages/QabulDasturlari';
import IjodiyNatijalar from './pages/IjodiyNatijalar';
import VirtualTour from './pages/VirtualTour';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
        <TopBar />
        <Header />

        <main className="flex-grow">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/konservatoriya" element={<Konservatoriya />} />
            <Route path="/odob-ahloq" element={<OdobAhloq />} />
            <Route path="/rektorat" element={<Rektorat />} />
            <Route path="/kafedralar" element={<Kafedralar />} />
            <Route path="/markaz-va-bolimlar" element={<MarkazVaBolimlar />} />
            <Route path="/davlat-ramzlari" element={<DavlatRamzlari />} />
            <Route path="/tuzilma" element={<Tuzilma />} />

            <Route path="/ilmiy-faoliyat" element={<IlmiyFaoliyat />} />
            <Route path="/ilmiy-uslubiy" element={<IlmiyUslubiy />} />
            <Route path="/korrupsiya" element={<Korrupsiya />} />
            <Route path="/xalqaro" element={<Xalqaro />} />
            <Route path="/yoshlar" element={<Yoshlar />} />
            <Route path="/xabar" element={<Xabar />} />
            <Route path="/yashil-makon" element={<YashilMakon />} />
            <Route path="/moliyaviy" element={<Moliyaviy />} />
            <Route path="/oquv-uslubiy" element={<OquvUslubiy />} />
            <Route path="/grant-ariza" element={<GrantAriza />} />
            <Route path="/grant-test" element={<GrantTest />} />
            <Route path="/yakuniy-jarayon" element={<YakuniyJarayon />} />
            <Route path="/dars-bakalavr" element={<DarsBakalavr />} />
            <Route path="/dars-magistratura" element={<DarsMagistratura />} />
            <Route path="/talaba-yutuqlari" element={<TalabaYutuqlari />} />
            <Route path="/ekofaol" element={<Ekofaol />} />
            <Route path="/qabul-dasturlari" element={<QabulDasturlari />} />
            <Route path="/ijodiy-natijalar" element={<IjodiyNatijalar />} />
            <Route path="/fakultetlar" element={<Kafedralar />} />
            <Route path="/kafedra" element={<Kafedralar />} />
            <Route path="/filial" element={<Konservatoriya />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            {/* Add more routes here */}

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
