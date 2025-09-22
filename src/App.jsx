import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

// Import all page components
import Homepage from './Pages/Homepage.jsx';
import BookPitch from './Pages/BookPitch.jsx';
import BookPitchInfo from './Pages/BookPitchInfo.jsx'; // <-- THIS LINE IS ESSENTIAL
import BootRoom from './Pages/BootRoom.jsx';
import Coaching from './Pages/Coaching.jsx';
import KidsParties from './Pages/KidsParties.jsx';
import LeagueTables from './Pages/LeagueTables.jsx';
import Fixtures from './Pages/Fixtures.jsx';
import LeagueRules from './Pages/LeagueRules.jsx';
import BosmanBoard from './Pages/BosmanBoard.jsx';
import MatchHighlights from './Pages/MatchHighlights.jsx';
import KitStore from './Pages/KitStore.jsx';
import RegisterTeam from './Pages/RegisterTeam.jsx';
import Tournaments from './Pages/Tournaments.jsx';
import JoinLeague from './Pages/JoinLeague.jsx';
import AvailableLeagues from './Pages/AvailableLeagues.jsx';
import About from './Pages/About.jsx';
import Terms from './Pages/Terms.jsx';
import FAQ from './Pages/FAQ.jsx';
import Privacy from './Pages/Privacy.jsx';

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