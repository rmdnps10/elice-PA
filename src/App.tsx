import CategorySelectSection from 'components/CategorySelectSection';
import Header from 'components/Header';
import ResultSection from 'components/ResultSection';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <CategorySelectSection />
        <ResultSection />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
