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
    <input id="searchFilter" type="search" v-model="searchFilter">
    <project v-for="project in projects | filterBy searchFilter in'name'" :project="project"></project>
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
      searchFilter: '',
      projects: [
        {id: 'hardcorefarmers', name: 'Hardcore Farmers', description: 'Global Game Jam 2016',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'thedryingseed', name: 'The Drying Seeds', description: 'Game Jam Bordeaux #3',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'quantumarcana', name: 'Quantum Arcana', description: 'A video game playable at the Musée d\'Aquitaine in Bordeaux',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'cerberus', name: 'Cerberus', description: 'Ludum Dare #33',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'tkbv', name: 'The Knight of the Buffet à Vaisselle', description: 'Global Game Jam 2015',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'remoteisland', name: 'Remote Island', description: 'Ludum Dare #31, "Entire Game on One Screen"',
        tags: ['Haxe', 'OpenFL'], sources: 'http://google.fr'},
        {id: 'absolutezero', name: 'Absolute Zero', description: 'Game Jam Bordeaux #2, Theme : Shiver',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'taleofalostsoul', name: 'Tale of a Lost Soul', description: 'Ludum Dare #27, Theme : 10 Secondes',
        tags: ['Haxe', 'OpenFL'], sources: 'http://google.fr'},
        {id: 'rhythmpropaganda', name: 'RhythmPropaGanda', description: 'Game Jam Bordeaux, Theme : Rhythm',
        tags: ['Haxe', 'OpenGL'], sources: 'http://google.fr'},
        {id: 'rool', name: 'Rool', description: 'Created with the Flat226 team',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'shards', name: 'Shards', description: 'Ludum Dare #30, Theme : Connected Worlds',
        tags: ['Haxe', 'Heaps'], sources: 'http://google.fr'},
        {id: 'ihatecircles', name: 'I Hate Circles', description: 'Created with the Flat226 team',
        tags: ['Haxe', 'Haxor'], sources: 'http://google.fr'},
        {id: 'imblockible', name: 'Imblockible', description: 'A game where you have to jump over obstacles',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'droidshooter', name: 'DroidShooter', description: 'A shoot\'em\'up for Android',
        tags: ['Java', 'LibGDX'], sources: 'http://google.fr'},
        {id: 'tictactoe', name: 'Tic Tac Toe', description: 'A TicTacToe game to play with your friends',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'vrvizualizer', name: 'VR Visualizer', description: 'Student project for Virtual Reality',
        tags: ['C++', 'OpenFrameworks'], sources: 'http://google.fr'},
        {id: 'raytracer', name: 'RayTracer', description: 'Student project for Image Rendering',
        tags: ['C++', 'OpenGL'], sources: 'http://google.fr'},
        {id: 'mapgenerator', name: 'Map Generator', description: 'Tool for generating 2D biome maps',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'hxiris', name: 'hxIris', description: 'Experiment on Virtual Reality',
        tags: ['Haxe', 'OpenFrameworks'], sources: 'http://google.fr'},
        {id: 'towerrift', name: 'Tower Rift', description: 'Student project with Kinect and Oculus Rift',
        tags: ['Unity3D'], sources: 'http://google.fr'},
        {id: 'faceblur', name: 'Faceblur', description: 'Internship project on automatic face blurring',
        tags: ['C++', 'OpenCV', 'Qt'], sources: 'http://google.fr'},
        {id: 'tuliptwitter', name: 'Twitter Plugin for Tulip',
        tags: ['C++', 'Qt'], sources: 'http://google.fr'},
        {id: 'asfml', name: 'aSFML',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'automathaxe', name: 'automatHaxe',
        tags: ['Haxe'], sources: 'http://google.fr'},
        {id: 'croustibash', name: 'Croustibash',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'gameoflife', name: 'Game of Life',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'treegenerator', name: 'Tree Generator',
        tags: ['C++', 'SFML'], sources: 'http://google.fr'},
        {id: 'flat226', name: 'Flat226', description: 'Association Bordelaise de création de jeux vidéo',
        tags: ['HTML', 'CSS', 'Haxe'], sources: 'http://google.fr'},
        {id: 'labeli', name: 'Label[i]', description: 'Asso étudiante Informatique de l\'Univ. de Bdx',
        tags: ['HTML', 'CSS', 'Haxe'], sources: 'http://google.fr'},
        {id: 'farore', name: 'Farore', description: 'Framework PHP/JS featuring native AJAX loading',
        tags: ['PHP', 'Javascript'], sources: 'http://google.fr'}
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
/*#searchFilter {
  width : 100%;
  font-size: 2em;
  margin: 10px;
}*/
</style>
