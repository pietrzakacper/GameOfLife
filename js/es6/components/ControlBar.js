import React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

const ControlBar = props => (
  <div className='text-center'>
    <ButtonGroup className='control-bar text-center'>
      <Button bsStyle='default' onClick={props.run}>Run</Button>
      <Button bsStyle='default' onClick={props.pause}>Pause</Button>
      <Button bsStyle='default' onClick={props.clear}>Clear</Button>
    </ButtonGroup>
  </div>
		);

ControlBar.propTypes = {
	run: React.PropTypes.func,
	pause: React.PropTypes.func,
	clear: React.PropTypes.func
};

export default ControlBar;
