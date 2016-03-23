<template>
  <project>
    <div style="background-image : url('../images/{{project.id}}.png'); background-size: cover; background-position: center center;">
      <div id="tags">
        <div class="tag {{tag}}" v-for="tag in project.tags"><div>{{tag}}</div></div>
      </div>
      <div id="info">
        <h3>{{project.name}}</h3>
        <div id="description">{{project.description}}</div>
      </div>
      <!-- <core-overlay backdrop id="overlay" closeSelector="#close-overlay">
        <core-icon icon="close" id="close-overlay"></core-icon>
        <div layout horizontal>
          <content select="pictures"></content>
          <div layout vertical>
          <div id="title">{{name}}</div>
            <content select="description"></content>
            <content select="links"></content>
          </div>
        </div>
      </core-overlay> -->
    </div>
  </project>
</template>


<script>
export default {
  props: ['project']
}
</script>

<style lang="less" scoped>
project
{
  display : block;
  background-color : #FFF;
  border-radius : 5px;
  overflow : hidden;
  border : 1px solid white;
  box-shadow : 0px 0px 5px rgba(0,0,0,0.25);
  margin : 10px;
  cursor: pointer;
  flex-grow : 1;
  flex-shrink : 0;
  flex-basis : 350px;
}
#info
{
  margin-top : 40px;
  padding : 10px 25px;
  color : white;
  background-color : rgba(0,0,0,0.5);
}
h3
{
  margin : 0px;
  text-shadow : 0px 1px 3px #000;
  font-size : 1.5em;
}
#description
{
  font-size : 0.9em;
  opacity : 0.8;
  text-shadow : 0px 1px 0px #000;
}
#tags
{
  text-align: right;
  color : white;
  display : flex;
  justify-content: flex-end;
  padding : 5px;
}

:host([small])
{
  flex-basis : 200px;
}
:host([small]) #info
{
  padding : 5px 25px;
}
:host([small]) h3
{
  margin : 0px;
  text-shadow : 0px 1px 5px #000;
  font-size : 1.1em;
}
:host([small]) #description
{
  display : none;
}
.tag
{
  background-color : #CCC;
  color : black;
  font-size : 0.8em;
  padding : 2px 5px;
  margin : 0px 5px;
  transform:skewX(-20deg);
  div {
    transform:skewX(20deg);
  }
}
.tag
.tag.haxe { background-color : orange;}
.tag.openfl { background-color : teal;}
.tag.javascript { background-color : #60B000;}
.tag.unity3d { background-color : #455463;}
.tag.cpp { background-color : #0080FF;}
.tag.csharp { background-color : #FF4020;}
.tag.haxor { background-color : #AAA;}
.tag.heaps { background-color : white;}

core-overlay
{
  background-color : white;
  padding: 20px;
  cursor :auto;
}
#title
{
  font-size : 2em;
}
::content pictures
{
  margin-right : 20px;
  display : flex;
  flex-direction: column;
}
::content pictures img
{
  max-width : 200px;
  max-height : 120px;
  margin : 10px 0px;
  box-shadow : 0px 2px 7px rgba(0,0,0,0.5);
}
::content description
{
  flex-grow : 1;
  max-width : 600px;
  margin : 10px;
  text-align: justify;
}
::content links a
{
  display : block;
  text-decoration : none;
  font-size : 1.33em;
  padding : 15px 10px;
  background-color : #888;
  color : #FFF;
  margin : 10px 0px;
  border-radius : 5px;
}
#close-overlay
{
  position : absolute;
  top : 10px;
  right : 5px;
  cursor : pointer;
}
</style>
