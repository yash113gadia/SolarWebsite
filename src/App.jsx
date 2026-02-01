import React, { useState } from 'react';
import { Sun, Battery, Phone, Mail, MapPin, CheckCircle, Menu, X, ArrowRight, Lightbulb, Zap, Shield } from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('hi'); // Default to Hindi as per flyer focus
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Content Dictionary
  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        pricing: "Pricing",
        contact: "Contact",
        btn: "Get Quote"
      },
      hero: {
        title: "Save Big with Solar Energy",
        subtitle: "Making Inexhaustible Future. Official Partners for PM Suryaghar Yojna.",
        cta: "Contact Us Now",
        badge: "All Brands Available"
      },
      scheme: {
        title: "PM SURYAGHAR YOJNA",
        subsidy: "Subsidy up to ₹78,000/-",
        desc: "Get government subsidy on solar systems up to 3kW. Invest once, save for 25 years.",
        tag: "Government Scheme"
      },
      pricing: {
        title: "Non-Subsidy Schemes",
        subtitle: "High Quality Copper & Aluminum Cabling included",
        p1: { title: "5kW System", price: "₹1,80,000/-", sub: "Starting from" },
        p2: { title: "8kW System", price: "₹2,60,000/-", sub: "Starting from" },
        p3: { title: "10kW System", price: "₹3,00,000/-", sub: "Starting from" },
        features: ["High Quality Structure", "Branded Accessories", "Havells & Elmex Kits"]
      },
      services: {
        title: "Our Services",
        items: [
          "Solar Panel Installation",
          "System Maintenance & Repair",
          "Battery Storage Solutions",
          "Solar Pumps",
          "Solar Geysers",
          "EV Charging Stations",
          "Solar Street Lights",
          "On-Grid / Off-Grid Solutions"
        ]
      },
      about: {
        title: "About Us",
        desc: "At Avyoay Technologies, we are dedicated to providing renewable solar energy solutions. We take pride in our excellent customer service and high-quality products.",
        partners: "Our Partners:"
      },
      contact: {
        title: "Contact Us",
        call: "Call Us",
        email: "Email Us",
        visit: "Visit Us",
        address: "Near ICICI Bank, Shiv Colony, Station Road, Chhabra, Dist. Baran (Raj.) 325220",
        prop: "Prop.: Er. Abhilash Garg & Adv. Abhishek Gupta"
      }
    },
    hi: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएँ",
        pricing: "कीमतें",
        contact: "संपर्क",
        btn: "कोटेसन लें"
      },
      hero: {
        title: "सौर ऊर्जा से भारी बचत करें",
        subtitle: "अक्षय भविष्य का निर्माण। पीएम सूर्यघर योजना के लिए आज ही संपर्क करें।",
        cta: "अधिक जानकारी के लिए संपर्क करें",
        badge: "सभी ब्राण्ड उपलब्ध"
      },
      scheme: {
        title: "PM सूर्यघर योजना",
        subsidy: "₹78,000/- तक की सब्सिडी",
        desc: "3 किलोवाट तक के सोलर सिस्टम पर भारी सरकारी छूट। एक बार लगायें, 25 साल तक बिजली बिल से मुक्ति।",
        tag: "सरकारी योजना"
      },
      pricing: {
        title: "गैर सब्सिडी वाली योजनाएँ",
        subtitle: "उच्च गुणवत्ता वाले तांबे और एल्युमीनियम के केबल के साथ",
        p1: { title: "5 किलोवाट सिस्टम", price: "₹1,80,000/-", sub: "मात्र शुरू" },
        p2: { title: "8 किलोवाट सिस्टम", price: "₹2,60,000/-", sub: "मात्र शुरू" },
        p3: { title: "10 किलोवाट सिस्टम", price: "₹3,00,000/-", sub: "मात्र शुरू" },
        features: ["मजबूत स्ट्रक्चर", "ब्रांडेड एक्सेसरीज", "Havells और Elmex किट"]
      },
      services: {
        title: "हमारी सेवाएँ",
        items: [
          "सौलूर पैनल लगाना",
          "सौलूर सिस्टम रखरखाव व सुधार",
          "बैट्री स्टोरेज समाधान",
          "सौलूर पम्प",
          "सौलूर गीज़र",
          "EV चार्जिंग स्टेशन",
          "सौलूर लाईट",
          "ऑन ग्रिड, ऑफ ग्रिड व हाईब्रीड समाधान"
        ]
      },
      about: {
        title: "हमारे बारे में",
        desc: "अव्यय टेक्नولوژیज़ में हम नवीकरणीय सौर ऊर्जा समाधान प्रदान करने के लिए समर्पित है, और हमें अपनी उत्कृष्ट ग्राहक सेवा और उच्च गुणवत्ता वाले उत्पादों पर गर्व है।",
        partners: "हमारे सहयोगी ब्रांड्स:"
      },
      contact: {
        title: "संपर्क करें",
        call: "कॉल करें",
        email: "ईमेल करें",
        visit: "पता",
        address: "ICICI बैंक के पास, शिव कॉलोनी, स्टेशन रोड, छबड़ा जिला बाराँ (राज.) 325220",
        prop: "प्रो.: Er. अभिलाष गर्ग और Adv. अभिषेक गुप्ता"
      }
    }
  };

  const t = content[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'hi' : 'en');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      {/* Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
         <h1 className="text-6xl md:text-9xl font-black text-slate-300 opacity-20 transform -rotate-45 select-none whitespace-nowrap">
            qlaa developers
         </h1>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <Sun size={24} fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">AVYOAY</h1>
              <p className="text-xs text-orange-600 font-semibold tracking-wider">TECHNOLOGIES</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-orange-600 transition">{t.nav.home}</a>
            <a href="#scheme" className="hover:text-orange-600 transition">PM Suryaghar</a>
            <a href="#pricing" className="hover:text-orange-600 transition">{t.nav.pricing}</a>
            <a href="#services" className="hover:text-orange-600 transition">{t.nav.services}</a>
            <a href="#contact" className="hover:text-orange-600 transition">{t.nav.contact}</a>
            
            <button 
              onClick={toggleLang}
              className="px-4 py-1 rounded-full border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-50 transition"
            >
              {lang === 'en' ? 'हिंदी में देखें' : 'Switch to English'}
            </button>
            
            <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition shadow-lg">
              {t.nav.btn}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLang}
              className="text-sm font-bold text-orange-600 border border-orange-200 px-2 py-1 rounded"
            >
              {lang === 'en' ? 'HI' : 'EN'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
            <a href="#scheme" onClick={() => setIsMenuOpen(false)}>PM Suryaghar</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>{t.nav.pricing}</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 animate-pulse">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
                <Phone size={20} />
                {t.hero.cta}
              </a>
              <a href="#scheme" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-3 px-8 rounded-lg transition backdrop-blur-sm">
                PM Suryaghar
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg">
            {/* Illustrative Solar Home Graphic */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
               <div className="aspect-video bg-gradient-to-b from-sky-300 to-sky-100 rounded-lg overflow-hidden relative shadow-inner">
                  {/* Simple CSS Art for House/Solar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-slate-200 shadow-lg"></div>
                  <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-4/5 h-0 border-l-[100px] border-r-[100px] border-b-[80px] border-l-transparent border-r-transparent border-b-slate-800"></div>
                  {/* Solar Panel */}
                  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-2/3 h-16 bg-blue-900 rounded transform -skew-x-12 grid grid-cols-4 grid-rows-2 gap-0.5 border-2 border-slate-300 shadow-xl opacity-90">
                     {[...Array(8)].map((_,i) => <div key={i} className="bg-blue-600/80 border border-blue-400/30"></div>)}
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full blur-md animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80"></div>
               </div>
               <div className="mt-4 flex justify-between items-center text-white/90">
                  <span className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-400"/> 25 Years Warranty</span>
                  <span className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-green-400"/> Subsidy Available</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Section */}
      <section id="scheme" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-8 py-2 rotate-45 translate-x-8 translate-y-4 font-bold shadow-md">
              {t.scheme.tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-800 mb-4">{t.scheme.title}</h2>
            <div className="text-5xl md:text-6xl font-black text-orange-600 mb-6 drop-shadow-sm">
              {t.scheme.subsidy}
            </div>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.scheme.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Brand Placeholders */}
               <div className="font-bold text-slate-400 text-xl flex items-center gap-2"><Shield size={20}/> TATA Power</div>
               <div className="font-bold text-slate-400 text-xl flex items-center gap-2"><Shield size={20}/> ADANI Solar</div>
               <div className="font-bold text-slate-400 text-xl flex items-center gap-2"><Shield size={20}/> WAAREE</div>
               <div className="font-bold text-slate-400 text-xl flex items-center gap-2"><Shield size={20}/> VIKRAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.pricing.title}</h2>
            <p className="text-slate-600">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.pricing.p1.title}</h3>
                <p className="text-sm text-slate-500">{t.pricing.p1.sub}</p>
                <div className="text-3xl font-bold text-blue-600 my-4">{t.pricing.p1.price}</div>
                <ul className="space-y-3">
                   {t.pricing.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-green-500 mt-1 shrink-0" />
                        {f}
                      </li>
                   ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 border-t text-center">
                 <a href="#contact" className="text-blue-600 font-semibold text-sm hover:underline">{t.nav.btn} &rarr;</a>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-orange-500 transform md:-translate-y-4">
              <div className="bg-orange-500 text-white text-center py-1 text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.pricing.p2.title}</h3>
                <p className="text-sm text-slate-500">{t.pricing.p2.sub}</p>
                <div className="text-3xl font-bold text-orange-600 my-4">{t.pricing.p2.price}</div>
                <ul className="space-y-3">
                   {t.pricing.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-green-500 mt-1 shrink-0" />
                        {f}
                      </li>
                   ))}
                   <li className="flex items-start gap-2 text-sm text-slate-600 font-semibold">
                      <CheckCircle size={16} className="text-green-500 mt-1 shrink-0" />
                      Ideal for Medium Homes
                   </li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 border-t text-center">
                 <a href="#contact" className="text-orange-600 font-semibold text-sm hover:underline">{t.nav.btn} &rarr;</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border-t-4 border-blue-500">
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{t.pricing.p3.title}</h3>
                <p className="text-sm text-slate-500">{t.pricing.p3.sub}</p>
                <div className="text-3xl font-bold text-blue-600 my-4">{t.pricing.p3.price}</div>
                <ul className="space-y-3">
                   {t.pricing.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-green-500 mt-1 shrink-0" />
                        {f}
                      </li>
                   ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 border-t text-center">
                 <a href="#contact" className="text-blue-600 font-semibold text-sm hover:underline">{t.nav.btn} &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t.services.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.services.items.map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg border border-slate-100 transition group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                  {index === 0 ? <Sun size={24} /> : index === 2 ? <Battery size={24} /> : index === 3 ? <Zap size={24} /> : <Lightbulb size={24} />}
                </div>
                <h3 className="font-semibold text-slate-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
          <p className="text-lg text-blue-100 mb-12 leading-relaxed">
            {t.about.desc}
          </p>
          
          <div className="border-t border-blue-800 pt-8">
             <p className="text-sm text-blue-300 uppercase tracking-widest mb-6">{t.about.partners}</p>
             <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xl font-bold text-white/50">
               <span>Vikram Solar</span>
               <span>Waaree</span>
               <span>TATA Power Solar</span>
               <span>Adani Solar</span>
               <span>Premier Energies</span>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-orange-500 p-8 text-white md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contact.title}</h3>
                <p className="mb-6 opacity-90">{t.contact.prop}</p>
              </div>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <MapPin className="shrink-0" />
                    <p className="text-sm leading-relaxed">{t.contact.address}</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <Mail className="shrink-0" />
                    <p className="text-sm">avyoaytechnologies@gmail.com</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <Phone className="shrink-0" />
                    <div>
                      <p className="text-sm">+91-9887788562</p>
                      <p className="text-sm">+91-8003477303</p>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="p-8 md:w-3/5">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{t.nav.btn}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full p-3 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <input type="text" placeholder="Phone" className="w-full p-3 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-3 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <select className="w-full p-3 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-600">
                  <option>Select System Size</option>
                  <option>3kW (Subsidy)</option>
                  <option>5kW</option>
                  <option>8kW</option>
                  <option>10kW</option>
                  <option>Other</option>
                </select>
                <textarea rows="3" placeholder="Message" className="w-full p-3 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2">
                   {t.nav.btn} <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>&copy; 2024 Avyoay Technologies. All rights reserved.</p>
        <p className="mt-2">Making Inexhaustible Future</p>
      </footer>
    </div>
  );
};

export default App;