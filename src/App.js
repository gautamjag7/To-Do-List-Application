import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content';
import Footer from './Footer';
import Header1 from './Header1';
import './index.css'
// import UseStateDemo from './UseStateDemo';
function App() {
  return (
    <div className="App">
      <Header1/>
      <Content/>
      <Footer/>
      {/* <UseStateDemo/> */}
    </div>
  );
}

export default App;
