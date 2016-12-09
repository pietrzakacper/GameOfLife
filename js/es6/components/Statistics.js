import React from 'react';
import { Well } from 'react-bootstrap';
const Statistics = ( props ) =>
( <div className='stats'>
  	<span>Number of living cells: {props.cells}</span>{' '}<span>Number of generations: {props.generations}</span>
	</div>
);

export default Statistics;
