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

import Toast from 'react-bootstrap/Toast'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MonthView } from 'react-calendar';

const locales = {
  "en-US" : require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const symptoms = [
  {
    title: "Cramps",
    start: new Date(2021, 10, 27),
    end: new Date(2021,10, 27)
  },
  {
    title: "Nausea",
    start: new Date(2021, 10, 27),
    end: new Date(2021,10, 27)
  },
  {
    title: "Irritable Mood",
    start: new Date(2021, 10, 27),
    end: new Date(2021,10, 27)
  },
  {
    title: "Cramps",
    start: new Date(2021, 10, 28),
    end: new Date(2021,10, 28)
  },
  {
    title: "Nausea",
    start: new Date(2021, 10, 28),
    end: new Date(2021,10, 28)
  },
  {
    title: "Cramps",
    start: new Date(2021, 10, 29),
    end: new Date(2021,10, 29)
  }
]

const t_day = [
  { 
    start: new Date(),
    end: new Date()
  }
]

const vol = Math.floor(Math.random()*31); 
const val = (vol/30) * 100; 

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
  const today = new Date(); 
  const t = (today.getFullYear(), today.getMonth(), today.getDay());

  const [showData, setShowData] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);


  const [newSymptom, changeNewSymptom] = useState({title: "", 
  start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay() - 2) , 
  end: ""}) 
  const setNewSymptom = (symptom) => {
    // maintaining name to reduce refactor complexity 
    symptom.end = symptom.start; 
  
    changeNewSymptom(symptom); 

  }
  const [allSymptoms, setAllSymptoms] = useState(symptoms)

  function addSymptom(){ 
    setAllSymptoms([...allSymptoms, newSymptom])
  }

  const formats = {
    eventTimeRangeFormat: () => { 
      return "";
    },
  };

  function notif(){ 
    if (val > 85){ 
      return ( 
        <Toast onClose={toggleShowB} show={showB} animation={false} style = {{marginBottom: "10px"}}>
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Time to remove soon!</Toast.Body>
      </Toast>
      );
    } else { 
      return null; 
    }
  }

  
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
                 How are you feeling today?
                <input type="text" placeholder ="Add Symptom" style={{width: "20%", marginRight:"10px"}}
                value={newSymptom.title} onChange={(e) => setNewSymptom({...newSymptom, title: e.target.value})} 
                />
                
                  <button style={{marginTop: "10px"}} onClick={addSymptom}>
                     Add Symptom
                  </button>
            
              </Col>

              <Modal  
                show={showCalendar} 
                onHide={() => setShowCalendar(false)}
                dialogClassName="Modal" 
              >
                                    <div className ='App'>
                      <h1> Calendar </h1>
                      <h2>How are you feeling today?</h2>
                      <div>
                        <input type="text" placeholder ="Add Symptom" style={{width: "20%", marginRight:"10px"}}
                          value={newSymptom.title} onChange={(e) => setNewSymptom({...newSymptom, title: e.target.value})} 
                      /> 

                      <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newSymptom.start} 
                      onChange={(start) => setNewSymptom({ ...newSymptom, start })} />


                        <button style={{marginTop: "10px"}} onClick={addSymptom}>
                          Add Symptom
                        </button>

                      </div>
                      <Calendar 
                      formats = {formats}
                      localizer={localizer} 
                      events={allSymptoms} 
                      startAccessor={"start"} 
                      endAccessor={"end"} 
                      style={{height:500, margin: "50px"}} />

                    </div>
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
              <div> 
               {notif()} 
              </div>
              Current Volume: {vol} mL
              <ProgressBar now={val} className="progressBar"/> 
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}



export default App;
