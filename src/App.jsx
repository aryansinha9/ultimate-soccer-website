import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

// Import all page components
import Homepage from './pages/Homepage.jsx';
import BookPitch from './pages/BookPitch.jsx';
import BookPitchInfo from './pages/BookPitchInfo.jsx'; // <-- THIS LINE IS ESSENTIAL
import BootRoom from './pages/BootRoom.jsx';
import Coaching from './pages/Coaching.jsx';
import KidsParties from './pages/KidsParties.jsx';
import LeagueTables from './pages/LeagueTables.jsx';
import Fixtures from './pages/Fixtures.jsx';
import LeagueRules from './pages/LeagueRules.jsx';
import BosmanBoard from './pages/BosmanBoard.jsx';
import MatchHighlights from './pages/MatchHighlights.jsx';
import KitStore from './pages/KitStore.jsx';
import RegisterTeam from './pages/RegisterTeam.jsx';
import Tournaments from './pages/Tournaments.jsx';
import JoinLeague from './pages/JoinLeague.jsx';
import AvailableLeagues from './pages/AvailableLeagues.jsx';
import About from './pages/About.jsx';
import Terms from './pages/Terms.jsx';
import FAQ from './pages/FAQ.jsx';
import Privacy from './pages/Privacy.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Navigation Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/bookpitchinfo" element={<BookPitchInfo />} /> {/* <-- AND THIS LINE IS ESSENTIAL */}
          <Route path="/bookpitch" element={<BookPitch />} />
          <Route path="/bootroom" element={<BootRoom />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/kidsparties" element={<KidsParties />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/joinleague" element={<JoinLeague />} />
          <Route path="/availableleagues" element={<AvailableLeagues />} />

          {/* Boot Room Sub-Routes */}
          <Route path="/leaguetables" element={<LeagueTables />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/leaguerules" element={<LeagueRules />} />
          <Route path="/bosmanboard" element={<BosmanBoard />} />
          <Route path="/matchhighlights" element={<MatchHighlights />} />
          <Route path="/kitstore" element={<KitStore />} />
          <Route path="/registerteam" element={<RegisterTeam />} />

          {/* Footer Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;