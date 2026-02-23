import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchClick = async () => {
    setIsLoading(true); // Start loading animation/text
    try {
      const response = await axios.get("http://localhost:5000");
      // If your API returns a single HTML string, wrap it in an array or change the state type
      setData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to reach the Flask server!");
    } finally {
      setIsLoading(false); // Stop loading regardless of success/fail
    }
  }

  return (
    <div className="App">
      <h1>Flask + React Integration</h1>
      
      <div className="card">
        {/* The Interactive Button */}
        <button 
          onClick={handleFetchClick} 
          disabled={isLoading}
          style={{ padding: '10px 20px', fontSize: '1.1rem', cursor: 'pointer' }}
        >
          {isLoading ? 'Fetching Data...' : 'Load Content from API'}
        </button>
      </div>

      <div className="results-container">
        {data.length > 0 ? (
          data.map((htmlItem, index) => (
            <div 
              key={index} 
              className="api-content"
              dangerouslySetInnerHTML={{ __html: htmlItem }} 
            />
          ))
        ) : (
          <p>No data loaded yet. Click the button!</p>
        )}
      </div>
    </div>
  )
}

export default App