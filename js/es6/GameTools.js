import { range } from 'underscore';

const	getBoardFilledWithRandomCells = boardSize =>
		range( boardSize ).map( () => range( boardSize ).map( () =>
			(  Math.floor( Math.random() * 3 ) ) ? 'dead' : 'alive' // possiblitiy 2:1
		) );

const	getBoardFilledWithDeadCells = boardSize =>
		range( boardSize ).map( () => range( boardSize ).map( () => 'dead' ) );

const	getBoardAfterEvaluation = board =>
		board.map( ( cellRow, indexX, boardTMP ) => cellRow.map( ( cellData, indexY ) => {
			let neighbours = 0;

			for ( let x = -1; x <= 1 ; ++x ){
				for ( let y = -1; y <= 1; ++y ){
					if ( x === 0 && y === 0 ){
						continue;
					}
					let neighbourIndexX = ( x + indexX >= 0 ) ? ( x + indexX ) : ( board.length + x );
					neighbourIndexX = ( neighbourIndexX < board.length ) ? ( neighbourIndexX ) : ( x );

					let neighbourIndexY = ( y + indexY >= 0 ) ? ( y + indexY ) : ( cellRow.length + y );
					neighbourIndexY = ( neighbourIndexY < cellRow.length ) ? ( neighbourIndexY ) : ( y );

					if ( boardTMP[ neighbourIndexX ][ neighbourIndexY ] === 'alive' || boardTMP[ neighbourIndexX ][ neighbourIndexY ] === 'newborn' ){
						neighbours++;
					}
				}
			}

			if ( neighbours === 3 && cellData === 'dead' ){
				return 'newborn';
			}
			if ( neighbours !== 3 && neighbours !== 2 && ( cellData === 'alive' || cellData === 'newborn' ) ){
				return 'dead';
			}
			if ( cellData === 'newborn' ){
				return 'alive';
			}
			return cellData;

		} ) );

const getBoardWithBlinker =  boardSize => {
	const board = getBoardFilledWithDeadCells( boardSize );

	board[ 4 ][ 5 ] = board[ 5 ][ 5 ] = board[ 6 ][ 5 ] = board[ 5 ][ 4 ] = board[ 5 ][ 6 ] = 'alive';

	return board;
};

export default {
	getBoardAfterEvaluation, getBoardFilledWithDeadCells, getBoardFilledWithRandomCells, getBoardWithBlinker
};
