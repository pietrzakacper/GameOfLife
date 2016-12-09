import React from 'react';

import GameTools from './GameTools';
import getTargetSize from './BoardResponsivenessController';
import Header from './components/Header';
import ControlBar from './components/ControlBar';
import Board from './components/Board';
import SettingsBar from './components/SettingsBar';
import Instruction from './components/Instruction';

class GameOfLife extends React.Component{
	constructor( props ){
		super( props );

		this.cellSize = 26;

		this.runGame = this.runGame.bind( this );
		this.pauseGame = this.pauseGame.bind( this );
		this.clearBoard = this.clearBoard.bind( this );
		this.handleCellClick = this.handleCellClick.bind( this );
		this.onRunGameClick = this.onRunGameClick.bind( this );
		this.onResize = this.onResize.bind( this );

		this.boardSize = getTargetSize( props.container, this.cellSize );

		this.state = {
			cellsData: GameTools.getBoardFilledWithRandomCells( this.boardSize ),
			isRunning: false
		};
	}

	componentDidMount(){
		this.appContainer = document.getElementById( 'app' );
		window.addEventListener( 'resize', this.onResize );

		// start Game
		this.runGame();
		this.setState( { isRunning: true } );
	}

	onResize(){
		this.boardSize = getTargetSize( this.props.container, this.cellSize );
		this.clearBoard();
	}
	onRunGameClick(){
		if ( this.state.isRunning ){
			return;
		}
		this.setState( { isRunning: true } );
		this.runGame();
	}

	runGame(){
		this.setState( {  cellsData: GameTools.getBoardAfterEvaluation( this.state.cellsData ) } );

		if ( GameTools.isFilledWithDeadCellsOnly( this.state.cellsData ) ){
			this.pauseGame();
			return;
		}
		this.gameTimer = setTimeout( this.runGame, 250 );
	}

	pauseGame(){
		clearTimeout( this.gameTimer );
		this.setState( { isRunning: false } );
	}

	clearBoard( ){
		this.setState( { cellsData: GameTools.getBoardFilledWithDeadCells( this.boardSize ) } );
		this.pauseGame();
	}

	handleCellClick( idX, idY ){
		this.setState( {  cellsData: GameTools.getBoardAfterCellStateToggle( this.state.cellsData, idX, idY ) } );
	}

	render(){
		return (
  <div>
    <Header />
    <ControlBar run={this.onRunGameClick} pause={this.pauseGame} clear={this.clearBoard} />
    <Board cellsData={this.state.cellsData} handleCellClick={this.handleCellClick} />
    <SettingsBar />
    <Instruction />
  </div>
		);
	}
}

GameOfLife.propTypes = {
	container: React.PropTypes.object
};

export default GameOfLife;
