import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col className="DashboardItem">
                  Calendar
                </Col>
              </Row>
              <Row>
                <Col className="DashboardItem">
                  Data
                </Col>
              </Row>
            </Col>
            <Col className="DashboardItem">
              Current Volume
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
