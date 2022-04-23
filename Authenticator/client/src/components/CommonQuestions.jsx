import React from 'react'
import { Accordion } from 'react-bootstrap'

function CommonQuestions(props) {
  return (
      <div className='my-5'>
      <div className="display-2 text-center mb-3">FAQ Segment</div>
      <div className="container w-75 p-0"
       style={{boxShadow: "2px 4px 5px 2px rgb(0,0,0,0.3)", borderRadius:"8px"}}
       >
          <Accordion>
              {(props.faq).map((item, i) =>(
                  <div key={i}>
                    <Accordion.Item eventKey={item}>
                        <Accordion.Header>
                            <h5>{item.question}</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className='lead mb-0'>{item.description}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                  </div>
              ))}
        </Accordion>
      </div>
      </div>
      
  )
}

export default CommonQuestions