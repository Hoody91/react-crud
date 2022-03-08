import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className="form">
        <label>Framework Name:</label>
        <input type="text" name="frameworkName" />
        <label>Framework Review:</label>
        <input type="text" name="frameworkReview" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
