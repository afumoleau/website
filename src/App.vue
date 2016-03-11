<template>
  <div id="app">
    <header layout horizontal>
        <img src="assets/picture.png" alt="">
        <div class="info" layout vertical>
          <h1>Alix Fumoleau</h1>
            <p>
              Hi ! I'm a student in Computer Science at Université de Bordeaux.
              I love programming and I make video games.
            </p>
          <div class="links">
            Follow me on
            <a target="_blank" href="https://github.com/eolhing">GitHub</a>
            <a target="_blank" href="https://twitter.com/eolhing">Twitter</a>
            <a target="_blank" href="https://www.linkedin.com/pub/alix-fumoleau/32/981/aa1">LinkedIn</a>
          </div>
        </div>
    </header>
  </div>

  <div id="main">
    <project v-for="project in projects" :project="project"></project>
  </div>
</template>

<script>
import Project from './Project'

export default {
  components: {
    Project
  },
  data: function () {
    return {
      projects: [
        {id: 'remoteisland', name: 'Remote Island', description: 'Ludum Dare #31, "Entire Game on One Screen"'},
        {id: 'absolutezero', name: 'Absolute Zero', description: 'Game Jam Bordeaux #2, Theme : Shiver'},
        {id: 'taleofalostsoul', name: 'Tale of a Lost Soul', description: 'Ludum Dare #27, Theme : 10 Secondes'},
        {id: 'rhythmpropaganda', name: 'RhythmPropaGanda', description: 'Game Jam Bordeaux, Theme : Rhythm'},
        {id: 'rool', name: 'Rool', description: 'Created with the Flat226 team'},
        {id: 'shards', name: 'Shards', description: 'Ludum Dare #30, Theme : Connected Worlds'},
        {id: 'ihatecircles', name: 'I Hate Circles', description: 'Created with the Flat226 team'},
        {id: 'imblockible', name: 'Imblockible', description: 'A game where you have to jump over obstacles'},
        {id: 'droidshooter', name: 'DroidShooter', description: 'A shoot\'em\'up for Android'},
        {id: 'tictactoe', name: 'Tic Tac Toe', description: 'A TicTacToe game to play with your friends'},
        {id: 'vrvizualizer', name: 'VR Visualizer', description: 'Student project for Virtual Reality'},
        {id: 'raytracer', name: 'RayTracer', description: 'Student project for Image Rendering'},
        {id: 'mapgenerator', name: 'Map Generator', description: 'Tool for generating 2D biome maps'},
        {id: 'hxiris', name: 'hxIris', description: 'Experiment on Virtual Reality'},
        {id: 'towerrift', name: 'Tower Rift', description: 'Student project with Kinect and Oculus Rift'},
        {id: 'faceblur', name: 'Faceblur', description: 'Internship project on automatic face blurring'},
        {id: 'tuliptwitter', name: 'Twitter Plugin for Tulip'},
        {id: 'asfml', name: 'aSFML'},
        {id: 'automathaxe', name: 'automatHaxe'},
        {id: 'croustibash', name: 'Croustibash'},
        {id: 'gameoflife', name: 'Game of Life'},
        {id: 'treegenerator', name: 'Tree Generator'},
        {id: 'flat226', name: 'Flat226', description: 'Association Bordelaise de création de jeux vidéo'},
        {id: 'labeli', name: 'Label[i]', description: 'Asso étudiante Informatique de l\'Univ. de Bdx'},
        {id: 'farore', name: 'Farore', description: 'Framework PHP/JS featuring native AJAX loading'}
      ]
    }
  }
}
</script>

<style lang="less">
body {
	margin: 0;
  background : url("assets/background.png")
}
* {
	font-family: 'Open Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
	font-family: 'Questrial', sans-serif;
}
a {
	color : black;
}
header {
	display : flex;
	flex-direction: row;
	max-width: 800px;
	margin:auto;
	padding: 20px 0px;
	img {
		flex-grow : 0;
		flex-shrink : 0;
		width : 200px;
		height : 200px;
		border-radius: 200px;
		border : 5px solid white;
		box-shadow : 0px 0px 20px rgba(0,0,0,0.25);
	}
  .links {
    a {
      text-decoration: none;
      padding : 7px 10px;
      margin: 5px;
      border-radius : 3px;
      &:hover { box-shadow : 0px 0.5px 2px rgba(0,0,0,0.5); }
    }
  }
	.info {
		margin : 20px;
		h1 {
			margin-top : 0px;
			margin-bottom : 0px;
			font-size : 3em;
		}
	}
}
#main {
	max-width: 800px;
	margin:auto;
}
h2 {
	font-size : 2em;
}
#projects, #web, #tools {
	display : flex;
	flex-wrap: wrap;
}
</style>
