import React from 'react';

import Cell from './board-components/Cell';

const getCells = ( data, handleCellClick ) => {
	return data.map( ( cellRow, rowNumber ) => ( <div className='cell-row' key={rowNumber}>
  {
		cellRow.map( ( cellState, columnNumber ) =>
			( <Cell state={cellState} handleClick={handleCellClick} idX={rowNumber} idY={columnNumber} key={rowNumber * data.length + columnNumber} /> ) )
	}
		</div> ) );
};

const Board = props => (
  <div className='text-center'>
    <div className='board'>
      {getCells( props.cellsData, props.handleCellClick )}
    </div>
  </div>
);

Board.propTypes = {
	cellsData: React.PropTypes.array.isRequired,
	handleCellClick: React.PropTypes.func
};

export default Board;
