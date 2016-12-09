import SizeXY from './SizeXY';

const	getTargetSize = ( container, cellSize ) => {
	const containerWidth = container.clientWidth;
	const boardWidth = containerWidth / cellSize;
	const boardHeight = ( boardWidth < 30 ) ? boardWidth : 30;

	return new SizeXY( boardWidth, boardHeight );
};

export default { getTargetSize };
