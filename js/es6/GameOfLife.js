import React from 'react';

import GameTools from './GameTools';
import getTargetSize from './BoardResponsivenessController';
import Header from './components/Header';
import ControlBar from './components/ControlBar';
import Board from './components/Board';
import Statistics from './components/Statistics';

class GameOfLife extends React.Component{
	constructor( props ){
		super( props );

		this.cellSize = 26;
		this.refreshInterval = 250; // in miliseconds
		this.runGame = this.runGame.bind( this );
		this.pauseGame = this.pauseGame.bind( this );
		this.clearBoard = this.clearBoard.bind( this );
		this.handleCellClick = this.handleCellClick.bind( this );
		this.onRunGameClick = this.onRunGameClick.bind( this );
		this.onResize = this.onResize.bind( this );

		this.boardSize = getTargetSize( props.container, this.cellSize );

		this.state = {
			cellsData: GameTools.getBoardFilledWithRandomCells( this.boardSize ),
			generations: 0
		};

		this.isRunning = false;
	}

	componentDidMount(){
		this.appContainer = document.getElementById( 'app' );
		window.addEventListener( 'resize', this.onResize );

		this.isRunning = true;
		this.runGame();
	}

	onResize(){
		this.boardSize = getTargetSize( this.props.container, this.cellSize );
		this.clearBoard();
	}
	onRunGameClick(){
		if ( this.isRunning ){
			return;
		}
		this.isRunning = true;
		this.runGame();
	}

	runGame(){
		this.setState( prevState => ( {  cellsData: GameTools.getBoardAfterEvaluation( prevState.cellsData ), generations: prevState.generations + 1 } ) );

		if ( GameTools.isFilledWithDeadCellsOnly( this.state.cellsData ) ){
			this.pauseGame();
			return;
		}
		this.gameTimer = setTimeout( this.runGame, this.refreshInterval );
	}

	pauseGame(){
		clearTimeout( this.gameTimer );
		this.isRunning = false;
	}

	clearBoard( ){
		this.setState( { cellsData: GameTools.getBoardFilledWithDeadCells( this.boardSize ), generations: 0 } );
		this.pauseGame();
	}

	handleCellClick( idX, idY ){
		this.setState( prevState => ( {  cellsData: GameTools.getBoardAfterCellStateToggle( prevState.cellsData, idX, idY ) } ) );
	}

	render(){
		return (
  <div>
    <Header />
    <ControlBar run={this.onRunGameClick} pause={this.pauseGame} clear={this.clearBoard} />
    <Board cellsData={this.state.cellsData} handleCellClick={this.handleCellClick} />
    <Statistics cells={GameTools.getLivingCellsNumber( this.state.cellsData )} generations={this.state.generations} />
  </div>
		);
	}
}

GameOfLife.propTypes = {
	container: React.PropTypes.object
};

export default GameOfLife;
