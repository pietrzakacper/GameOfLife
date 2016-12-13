import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
const Statistics = ( props ) =>
( <Grid className='stats'>
  <Row>
    <Col className='text-center game-info' md={5}>Number of living cells: {props.cells}</Col>
    <Col className='text-center game-info' md={5} mdOffset={2}>Number of generations: {props.generations}</Col>
  </Row>
</Grid>
);

Statistics.propTypes = {
	cells: React.PropTypes.number,
	generations: React.PropTypes.number
};

export default Statistics;
