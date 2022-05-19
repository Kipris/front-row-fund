import React, { Suspense, lazy, useState, useMemo } from 'react';
import { Header } from './blocks';

const Banner = lazy(() => import('./blocks/banner'));
const Partners = lazy(() => import('./blocks/partners'));
const About = lazy(() => import('./blocks/about'));
const Benefits = lazy(() => import('./blocks/benefits'));
const Help = lazy(() => import('./blocks/help'));
const WeAreLooking = lazy(() => import('./blocks/we-are-looking'));
const Team = lazy(() => import('./blocks/team'));
const Portfolio = lazy(() => import('./blocks/portfolio'));
const Contact = lazy(() => import('./blocks/contact'));
const Footer = lazy(() => import('./blocks/footer'));
const DialogContainer = lazy(() => import('./dialogs/dialogs-container'));

export const dialogs = {
  termsOfUse: {
    id: 'terms-of-use',
    title: '',
    content: {},
  },
  privacyPolicy: {
    id: 'privacy-policy',
    title: '',
    content: {},
  },
  legalDisclaimer: {
    id: 'legal-disclaimer',
    title: '',
    content: {},
  },
  teamMember: {
    id: 'team-member',
    title: '',
    content: {},
  },
  advisorMember: {
    id: 'advisor-member',
    title: '',
    content: {},
  },
};

export const DialogContext = React.createContext(null);

export const App = () => {

  const [activeDialog, setActiveDialog] = useState(null);

  const providerActiveDialog = useMemo(() => ({ activeDialog, setActiveDialog }), [activeDialog, setActiveDialog]);

  return (
    <>
      <Header />
      <Suspense fallback = {<div>Loading...</div>}>
        <DialogContext.Provider value={providerActiveDialog}>
          <Banner />
          <Partners />
          <About />
          <Benefits />
          <Help />
          <WeAreLooking />
          <Team />
          <Portfolio />
          <Contact />
          <Footer />
          <DialogContainer />
        </DialogContext.Provider>
      </Suspense>
    </>
  );
}
