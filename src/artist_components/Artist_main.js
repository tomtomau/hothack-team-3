import logo from '../qr-code.png';
import './Artist_main.css';
import ChatBox from './chat';
import Header from '../other_components/header'
import Footer from '../other_components/footer'



function App() {
  return (
    <div className='App'>
      <div className='header'>
      <Header />
      </div>
      <div className="qr_code">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="chat_box">
        <ChatBox />
      </div>
      <div className="report_link">
      <a href="/artist/report"><button>Report</button></a>
      </div>
      <div className='footer'>
      <Footer />
      </div>
    </div>

  )
}

export default App;
