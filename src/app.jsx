import React, { Suspense, lazy } from 'react';
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

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback = {<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}
