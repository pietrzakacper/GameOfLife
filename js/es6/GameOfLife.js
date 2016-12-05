import React from 'react';
import { range } from 'underscore';
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
			cellsData: range( boardSize ).map( () => range( boardSize ).map( () => 'dead' ) )
		};
	}

	runGame(){

	}

	pauseGame(){

	}

	clearBoard(){

	}

	handleCellClick( idX, idY ){
		const cellsData = this.state.cellsData.splice( 0 );

		cellsData[ idX ][ idY ] = ( cellsData[ idX ][ idY ] === 'dead' ) ? 'alive' : 'dead';

		this.setState( { cellsData } );
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
