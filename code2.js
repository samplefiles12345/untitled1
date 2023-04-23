gdjs.Scene3Code = {};
gdjs.Scene3Code.GDNewSpriteObjects1= [];
gdjs.Scene3Code.GDNewSpriteObjects2= [];
gdjs.Scene3Code.GDNewSprite2Objects1= [];
gdjs.Scene3Code.GDNewSprite2Objects2= [];


gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Scene3Code.GDNewSpriteObjects1});
gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scene3Code.GDNewSprite2Objects1});
gdjs.Scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Scene3Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Good Days - Yung Logos.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene3Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene3Code.mapOfGDgdjs_46Scene3Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene3Code.GDNewSprite2Objects2.length = 0;

gdjs.Scene3Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene3Code'] = gdjs.Scene3Code;
