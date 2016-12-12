import { range } from 'underscore';
import SizeXY from './SizeXY';

const	getBoardFilledWithRandomCells = boardSize =>
		range( boardSize.x ).map( () => range( boardSize.y ).map( () =>
			(  Math.floor( Math.random() * 3 ) ) ? 'dead' : 'alive' // possiblitiy 2:1
		) );

const	getBoardFilledWithDeadCells = boardSize =>
		range( boardSize.x ).map( () => range( boardSize.y ).map( () => 'dead' ) );

const isCellAlive =  cell => cell === 'alive' || cell === 'newborn';

const getNumberOfNeighbours = ( board, indexX, indexY ) => {

	const lengthX = board.length;
	const lengthY = board[ 0 ].length;

	const left = ( indexX === 0 ) ? lengthX - 1 : indexX - 1;
	const right = ( indexX === lengthX - 1 ) ? 0 : indexX + 1;
	const top = ( indexY === 0 ) ? lengthY - 1 : indexY - 1;
	const bottom = ( indexY === lengthY - 1 ) ? 0 : indexY + 1;

	const neighboursIndexes = [
		[ left, top ],
		[ left, indexY ],
		[ left, bottom ],
		[ indexX, top ],
		[ indexX, bottom ],
		[ right, top ],
		[ right, indexY ],
		[ right, bottom ]
	];

	let neighbours = 0;

	neighboursIndexes.forEach( indexesPair => {
		if ( isCellAlive( board[ indexesPair[ 0 ] ][ indexesPair[ 1 ] ] ) ){
			neighbours++;
		}
	} );

	return neighbours;
};

const	getBoardAfterEvaluation = board => {

	const rt =		board.map( ( cellRow, indexX, boardTMP ) => cellRow.map( ( cellData, indexY ) => {
		const neighbours = getNumberOfNeighbours( boardTMP, indexX, indexY );

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

	return rt;
};

const getBoardAfterCellStateToggle = ( board, idX, idY ) => {
	const boardTMP = board.slice();
	const cellData = boardTMP[ idX ][ idY ];

	boardTMP[ idX ][ idY ] = ( cellData === 'dead' ) ? 'alive' : 'dead';

	return boardTMP;
};

const isFilledWithDeadCellsOnly =  board =>
	JSON.stringify( board ) === JSON.stringify( getBoardFilledWithDeadCells( new SizeXY( board.length, board[ 0 ].length ) ) );

const getLivingCellsNumber = board => {
	return board.reduce( ( p, c ) => p + c.reduce( ( previousValue, currentCell ) => ( currentCell === 'alive' || currentCell === 'newborn' ) ? previousValue + 1 : previousValue, 0 ), 0 );
};

export default {
	getBoardAfterEvaluation, getBoardFilledWithDeadCells, getBoardFilledWithRandomCells, getBoardAfterCellStateToggle, isFilledWithDeadCellsOnly, getLivingCellsNumber
};
