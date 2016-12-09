import SizeXY from './SizeXY';

const mobileCellSize = 26;
const desktopCellSize = 16;
const desktopMinWidth = 940;

const	getTargetSize = ( container ) => {
	const containerWidth = container.clientWidth;

	let boardWidth = 0;
	let boardHeight = 0;

	if ( container.offsetWidth > desktopMinWidth ){
		boardWidth = containerWidth / desktopCellSize;
		boardHeight = ( boardWidth < 48 ) ? boardWidth : 48;
	} else {
		boardWidth = containerWidth / mobileCellSize;
		boardHeight = ( boardWidth < 30 ) ? boardWidth : 30;
	}

	return new SizeXY(  boardHeight, boardWidth );
};

export default getTargetSize;
