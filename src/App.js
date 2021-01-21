import React, {useState} from 'react'
import {Container, Row, Toast, Col} from 'react-bootstrap'

import NavBar from './components/NavBar'
import Search from './components/Search'
import Result from './components/Result'

import './App.css'

const App = () => {
  const baseUrl = "https://restcountries.eu/rest/v2"

  const [result, setResult] = useState()
  const [show, setShow] = useState(false);

  const sendBack = (data) => {
    setResult(data)
  }

  const styles = {
    container: {
      paddingTop: '20px'
    },
    search: {
      marginBottom: '20px',
      marginTop: '20px',
      justifyContent: 'center'
    },
  }

  return (
    <div className="App">
      <NavBar />
        <Container style={styles.container}>
          <Row>
            <Col></Col>
            <Col>
              <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body style={{backgroundColor: 'red', color: 'white'}}>
                  We couldn't find what you're looking for :(
                </Toast.Body>
            </Toast>
            </Col>
          </Row>
          <Row style={styles.search}>  
              <Search baseUrl={baseUrl} sendBack={sendBack} setShow={setShow} />
          </Row>
          <Row style={{gap: '10px'}}>
            <Result result={result} />
          </Row>
        </Container>
    </div>
  );
}

export default App;
