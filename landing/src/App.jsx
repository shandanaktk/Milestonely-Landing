import './App.css'

function App() {
  return (
    <div className="landing-container">
      <h1>Welcome to Milestonely</h1>
      <div className="coming-soon">
        <span className="icon">🚀</span>
        <h2>Coming Soon</h2>
      </div>
      <p className="description">
        Exciting times ahead! Soon, you'll craft personalized roadmaps to monitor your journey and supercharge your productivity!
      </p>
      <div className="roadmap">
        <div className="step">Plan</div>
        <div className="line"></div>
        <div className="step">Track</div>
        <div className="line"></div>
        <div className="step">Achieve</div>
      </div>
      <div className="email-section">
        <input type="email" placeholder="Enter your email" />
        <button>Submit</button>
      </div>
      <p className="sub-text">Submit your email to get news related to our app</p>
    </div>
  )
}

export default App
