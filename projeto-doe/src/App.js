import React from 'react';

import Header from './Components/Header/Header';
import SectionOne from './Components/SectionOne/SectionOne';
import FormSection from './Components/FormSection/FormSection';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
       <Header />
       <SectionOne />
       <FormSection />
       <Experience />
       <Footer />
    </React.Fragment>
  );
}

export default App;


