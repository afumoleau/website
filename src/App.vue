<template>
  <div id="app" class="container">
    <header layout horizontal>
        <img src="assets/picture.png" alt="">
        <div class="info" layout vertical>
          <h1>Alix Fumoleau</h1>
            <p>
              Hi! I'm a software developer developer at BeTomorrow, France. I work on 3D environments and virtual reality.<br>
              On my spare time, I'm creating video games, I'm a absolute fan of game jams!
            </p>
          <div class="links">
            Follow me on
            <a target="_blank" href="https://github.com/eolhing">GitHub</a>
            <a target="_blank" href="https://twitter.com/eolhing">Twitter</a>
            <a target="_blank" href="https://www.linkedin.com/pub/alix-fumoleau/32/981/aa1">LinkedIn</a>
          </div>
        </div>
    </header>

    <div class="row">
      <div class="input-field col s11">
        <i class="material-icons prefix">search</i>
        <input id="searchFilter"  type="search" v-model="searchFilter">
        <!-- <label class="active" for="searchFilter">Recherche</label> -->
      </div>
    </div>

    <project v-for="project in projects | filterBy searchFilter" :project="project"></project>
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
        tags: ['Unity3D'], play: 'http://www.eolhing.me/games/hardcorefarmers', sources: 'https://github.com/eolhing/hardcore-farmers'},
        {id: 'thedryingseeds', name: 'The Drying Seeds', description: 'Game Jam Bordeaux #3',
        tags: ['Unity3D'], download: 'http://www.eolhing.me/games/thedryingseeds.zip', sources: 'https://github.com/eolhing/thedryingseeds'},
        {id: 'quantumarcana', name: 'Quantum Arcana', description: 'A video game playable at the Musée d\'Aquitaine in Bordeaux',
        tags: ['Unity3D'], download: 'https://play.google.com/store/apps/details?id=com.flat226.quantumarcana&hl=en', sources: 'https://github.com/eolhing/quantumarcana'},
        {id: 'cerberus', name: 'Cerberus', description: 'Ludum Dare #33',
        tags: ['Unity3D'], play: 'http://www.eolhing.me/games/cerberus', sources: 'https://github.com/eolhing/cerberus'},
        {id: 'tkbv', name: 'The Knight of the Buffet à Vaisselle', description: 'Global Game Jam 2015',
        tags: ['Unity3D'], play: 'http://www.eolhing.me/games/tkbv', sources: 'https://github.com/eolhing/tkbv'},
        {id: 'remoteisland', name: 'Remote Island', description: 'Ludum Dare #31, "Entire Game on One Screen"',
        tags: ['Haxe', 'OpenFL'], play: 'http://www.eolhing.me/games/remoteisland', sources: 'https://github.com/eolhing/remoteisland'},
        {id: 'absolutezero', name: 'Absolute Zero', description: 'Game Jam Bordeaux #2, Theme : Shiver',
        tags: ['Unity3D'], download: 'https://drive.google.com/file/d/0By2YCm_3D0JKVWdVVVVwMWhpN00/view', sources: 'https://github.com/eolhing/AbsoluteZero'},
        {id: 'taleofalostsoul', name: 'Tale of a Lost Soul', description: 'Ludum Dare #27, Theme : 10 Secondes',
        tags: ['Haxe', 'OpenFL'], download: 'http://gamejolt.com/games/adventure/tale-of-a-lost-soul/17225/', sources: 'https://github.com/eolhing/taleofalostsoul'},
        {id: 'rhythmpropaganda', name: 'RhythmPropaGanda', description: 'Game Jam Bordeaux, Theme : Rhythm',
        tags: ['Haxe', 'OpenGL'], play: 'http://gamejambordeaux.flat226.fr/files/RythmPropaGanda', sources: 'https://github.com/eolhing/rhythmpropaganda'},
        {id: 'rool', name: 'Rool', description: 'Created with the Flat226 team',
        tags: ['Unity3D'], play: 'http://rool.flat226.fr/web/'},
        {id: 'shards', name: 'Shards', description: 'Ludum Dare #30, Theme : Connected Worlds',
        tags: ['Haxe', 'Heaps'], play: 'http://eolhing.me/games/shards', sources: 'https://github.com/eolhing/shards'},
        {id: 'ihatecircles', name: 'I Hate Circles', description: 'Created with the Flat226 team',
        tags: ['Haxe', 'Haxor'], playDisabled: 'disabled:Server is offline :('},
        {id: 'imblockible', name: 'Imblockible', description: 'A game where you have to jump over obstacles',
        tags: ['C++', 'SFML'], download: 'http://eolhing.me/games/imblockible.zip'},
        {id: 'droidshooter', name: 'DroidShooter', description: 'A shoot\'em\'up for Android',
        tags: ['Java', 'LibGDX'], sources: 'https://github.com/eolhing/droidshooter'},
        {id: 'tictactoe', name: 'Tic Tac Toe', description: 'A TicTacToe game to play with your friends',
        tags: ['C++', 'SFML'], sources: 'https://github.com/eolhing/tictactoe'},
        {id: 'vrvizualizer', name: 'VR Visualizer', description: 'Student project for Virtual Reality',
        tags: ['C++', 'OpenFrameworks']},
        {id: 'raytracer', name: 'RayTracer', description: 'Student project for Image Rendering',
        tags: ['C++', 'OpenGL']},
        {id: 'mapgenerator', name: 'Map Generator', description: 'Tool for generating 2D biome maps',
        tags: ['C++', 'SFML']},
        {id: 'hxiris', name: 'hxIris', description: 'Experiment on Virtual Reality',
        tags: ['Haxe', 'OpenFrameworks'], sources: 'https://github.com/eolhing/hxIris'},
        {id: 'towerrift', name: 'Tower Rift', description: 'Student project with Kinect and Oculus Rift',
        tags: ['Unity3D'], sources: 'https://github.com/eolhing/towerRift'},
        {id: 'faceblur', name: 'Faceblur', description: 'Internship project on automatic face blurring',
        tags: ['C++', 'OpenCV', 'Qt']},
        {id: 'tuliptwitter', name: 'Twitter Plugin for Tulip',
        tags: ['C++', 'Qt']},
        {id: 'asfml', name: 'aSFML',
        tags: ['C++', 'SFML'], sources: 'https://github.com/eolhing/aSFML'},
        {id: 'automathaxe', name: 'automatHaxe',
        tags: ['Haxe'], sources: 'https://github.com/eolhing/automathaxe'},
        {id: 'croustibash', name: 'Croustibash',
        tags: ['C++', 'SFML']},
        {id: 'gameoflife', name: 'Game of Life',
        tags: ['C++', 'SFML']},
        {id: 'treegenerator', name: 'Tree Generator',
        tags: ['C++', 'SFML']},
        {id: 'flat226', name: 'Flat226', description: 'Association Bordelaise de création de jeux vidéo',
        tags: ['HTML', 'CSS', 'Haxe']},
        {id: 'labeli', name: 'Label[i]', description: 'Asso étudiante Informatique de l\'Univ. de Bdx',
        tags: ['HTML', 'CSS', 'Haxe']},
        {id: 'farore', name: 'Farore', description: 'Framework PHP/JS featuring native AJAX loading',
        tags: ['PHP', 'Javascript'], sources: 'https://github.com/eolhing/Farore'}
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
.input-field input[type=search] {
  padding-left : 0px;
  width : 100%;
  font-size: 2em;
}
.input-field input[type=search]:focus {
  background-color: rgba(255,255,255,0);
}
header {
	display : flex;
	flex-direction: row;
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
/*#main {
	max-width: 800px;
	margin:auto;
}*/
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
