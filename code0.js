gdjs.Scene1Code = {};
gdjs.Scene1Code.GDNewSprite2Objects1= [];
gdjs.Scene1Code.GDNewSprite2Objects2= [];
gdjs.Scene1Code.GDNewTextObjects1= [];
gdjs.Scene1Code.GDNewTextObjects2= [];
gdjs.Scene1Code.GDNewSpriteObjects1= [];
gdjs.Scene1Code.GDNewSpriteObjects2= [];


gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Scene1Code.GDNewSprite2Objects1});
gdjs.Scene1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene1Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.Scene1Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDNewSprite2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene1Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Scene1Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Scene1Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDNewSprite2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Scene1Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDNewSprite2Objects1.length = 0;
gdjs.Scene1Code.GDNewSprite2Objects2.length = 0;
gdjs.Scene1Code.GDNewTextObjects1.length = 0;
gdjs.Scene1Code.GDNewTextObjects2.length = 0;
gdjs.Scene1Code.GDNewSpriteObjects1.length = 0;
gdjs.Scene1Code.GDNewSpriteObjects2.length = 0;

gdjs.Scene1Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene1Code'] = gdjs.Scene1Code;
