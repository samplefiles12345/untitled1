gdjs.Scene2Code = {};
gdjs.Scene2Code.GDNewSpriteObjects1= [];
gdjs.Scene2Code.GDNewSpriteObjects2= [];
gdjs.Scene2Code.GDNewSprite2Objects1= [];
gdjs.Scene2Code.GDNewSprite2Objects2= [];


gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Scene2Code.GDNewSpriteObjects1});
gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Scene2Code.GDNewSpriteObjects1});
gdjs.Scene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene2Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNewSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Scene2Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene2Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNewSprite2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Scene2Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene2Code.mapOfGDgdjs_46Scene2Code_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene2Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Scene2Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scene2Code.GDNewSprite2Objects1[i].hide();
}
}}

}


};

gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Scene2Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene2Code.GDNewSprite2Objects2.length = 0;

gdjs.Scene2Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
