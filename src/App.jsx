import { useState } from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import PortofolioModal from './components/PortofolioModal.jsx';
import bgImage from './img/bg.jpg';

function App() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-margin-mobile md:p-0 bg-surface text-on-surface bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.1)), url('${bgImage}')`
      }}
    >
      <ProfileCard onOpenPortfolio={() => setPortfolioOpen(true)} />
      <PortofolioModal
        open={portfolioOpen}
        onClose={() => setPortfolioOpen(false)}
      />
    </div>
  );
}

export default App;
