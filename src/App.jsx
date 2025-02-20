import React from "react";
import Review from "./components/Review";
import "./css/app.css";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our team</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
