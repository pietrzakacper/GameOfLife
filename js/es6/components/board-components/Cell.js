import React from 'react';

const Cell = props => (
  <div className={`cell ${props.state}`} onClick={() => props.handleClick( props.idX, props.idY )} />
		);

Cell.propTypes = {
	state: React.PropTypes.string,
	handleClick: React.PropTypes.func,
	idX: React.PropTypes.number,
	idY: React.PropTypes.number
};

Cell.defaultProps = {
	state: 'dead'
};

export default Cell;
