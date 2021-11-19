import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './Style.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
            <Col>
              <Row className="RowDashboardItem"> 
                Calendar
              </Row>
              <Row className="RowDashboardItem">
                Data
              </Row>
            </Col>
            <Col className="ColDashboardItem">
              Current Volume
              <Image src="" />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
