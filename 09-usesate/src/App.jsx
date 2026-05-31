import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  function increase(params) {
    console.log("click increase button");
    
    setNum(num+1)
  }

  function decrease(params) {
    console.log("click decrease button");
    
    setNum(num-1)
  }

  function jump5num(params) {
    console.log("increase by 5");
    
    setNum(num+5)
  }



  return (
    <main className="app-shell">
      <section className="counter-card">
        <p className="eyebrow">Counter Playground</p>

        <div className="h1Div">
          <h1 className="counter-value">{num}</h1>
        </div>

        <p className="counter-text">
          A cleaner, more vibrant layout for your useState counter UI.
        </p>

        <div className="button-grid">
          <button onClick={increase} className="action-btn action-btn--primary" type="button">
            Increase
          </button>
          <button onClick={decrease} className="action-btn action-btn--secondary" type="button">
            Decrease
          </button>
          <button onClick={jump5num} className="action-btn action-btn--accent" type="button">
            Increase by 5
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
