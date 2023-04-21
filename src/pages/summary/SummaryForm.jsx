import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const SummaryForm = () => {
  const [toChecked, setToChecked] = useState(false)


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      No ice cream will actually be delivered
    </Tooltip>
  );



  const checkboxLabel =(
    <span>
      I agree to
      <OverlayTrigger
      placement='right'
      // delay={{show:250, hide:400}}
      overlay={renderTooltip}
      >
       <span style={{color:'blue'}}> 
      Terms and Conditions</span>
    </OverlayTrigger>
    </span>
  )

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={toChecked}
          onChange={(e)=>setToChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!toChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
