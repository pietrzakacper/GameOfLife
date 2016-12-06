import React from 'react';

import GameTools from './GameTools';

import Header from './components/Header';
import ControlBar from './components/ControlBar';
import Board from './components/Board';
import SettingsBar from './components/SettingsBar';
import Instruction from './components/Instruction';

class GameOfLife extends React.Component{
	constructor(){
		super();

		this.runGame = this.runGame.bind( this );
		this.pauseGame = this.pauseGame.bind( this );
		this.clearBoard = this.clearBoard.bind( this );
		this.handleCellClick = this.handleCellClick.bind( this );

		const boardSize = 11;
		this.state = {
			cellsData: GameTools.getBoardWithBlinker( boardSize )
		};
	}

	runGame(){

	}

	pauseGame(){

	}

	clearBoard(){

	}

	handleCellClick( idX, idY ){
		this.setState( {  cellsData: GameTools.getBoardAfterEvaluation( this.state.cellsData ) } );
	}

	render(){
		return (
  <div>
    <Header />
    <ControlBar run={this.runGame} pause={this.pauseGame} clear={this.clearBoard} />
    <Board cellsData={this.state.cellsData} handleCellClick={this.handleCellClick} />
    <SettingsBar />
    <Instruction />
  </div>
		);
	}
}

export default GameOfLife;
