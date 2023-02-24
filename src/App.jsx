import { useDispatch, } from 'react-redux'
import { Quote } from './components/Quote';
import { fetchQuote } from './redux/quotesSlice'
import './App.css'

function App() {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchQuote())
  }

  return (
    <div className="App">
      <h1>Quotes</h1>
      <div className="card">
        <button onClick={fetchData}>
          Click to generate a new quote
        </button>
      </div>
      <Quote />
    </div>
  )
}

export default App