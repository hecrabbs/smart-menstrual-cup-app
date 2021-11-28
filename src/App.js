import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState } from 'react';
import './Style.css';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Toast from 'react-bootstrap/Toast'

function Chart(props) {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]; 
  return(
    <ResponsiveContainer>
      <LineChart width="90%" height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  ) 
}

function App() {
  const [showData, setShowData] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);


  return (
    <div className="App">
      <Container fluid>
        <Row>
            <Col>
              <Row className="RowDashboardItem"> 
                <Card className="RowDashboardItem">
                  Calendar
                  <Button onClick={() => setShowCalendar(true)}>
                    Expand
                  </Button>
                  <Modal 
                    show={showCalendar} 
                    onHide={() => setShowCalendar(false)}
                    dialogClassName="Modal"
                  >
                    Test Modal
                  </Modal>
                </Card>
              </Row>
              <Row className="RowDashboardItem">
                <Card className="RowDashboardItem">
                  Data
                  <Button onClick={() => setShowData(true)}>
                    Expand
                  </Button>
                  <Modal 
                    show={showData} 
                    onHide={() => setShowData(false)}
                    dialogClassName="Modal"
                  >
                    Test Modal
                    <Chart/>
                  </Modal>
                </Card>
              </Row>
            </Col>
            <Col className="ColDashboardItem">
            <Toast onClose={toggleShowB} show={showB} animation={false}>
                <Toast.Header>
                  <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>Time to remove soon!</Toast.Body>
              </Toast>
              Current Volume
              <ProgressBar now={60} className="progressBar"/>
            </Col>
        </Row>
      </Container>

    </div>
  );
}



export default App;
