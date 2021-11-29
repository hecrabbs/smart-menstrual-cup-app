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
import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, ResponsiveContainer, YAxis, XAxis, Tooltip, Legend } from 'recharts';
import './Style.css';

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
      <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#FF856A" />
      </LineChart>
    </ResponsiveContainer>
  ) 
}

function App() {
  const [showData, setShowData] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="App">
      <Container fluid className="ContainerStyle">
        <Row className="h-100">
          <Col className="ColDashboardItem">
            <Row className="h-50"> 
              <Col>              
                <Stack direction="horizontal" gap={3}>
                  <div>Calendar</div>
                  <Button className="ms-auto" onClick={() => setShowCalendar(true)}>Expand</Button>
                  </Stack>
              </Col>

              <Modal  
                show={showCalendar} 
                onHide={() => setShowCalendar(false)}
                dialogClassName="Modal" 
              >
                Test Modal
              </Modal>
            </Row>

            <Row className="h-50">
              <Col>
                <Stack direction="horizontal" gap={3}>
                  <div>Data</div>
                  <Button className="ms-auto" onClick={() => setShowData(true)}>Expand</Button>  
                </Stack>
              </Col>
              
              <div>
              <Chart/>
              </div>
              
              <Modal 
                show={showData} 
                onHide={() => setShowData(false)}
                dialogClassName="Modal"
              >
                Test Modal
                <Chart/>
              </Modal>
            </Row>
          </Col>
          <Col className="ColDashboardItem">
            <Row>
              Current Volume
            </Row>
            <Row>
              <ProgressBar now={60} className="progressBar"/>
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}



export default App;
