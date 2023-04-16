gdjs.OverCode = {};
gdjs.OverCode.GDagainTextObjects1= [];
gdjs.OverCode.GDagainTextObjects2= [];
gdjs.OverCode.GDagainTextObjects3= [];
gdjs.OverCode.GDyesTextObjects1= [];
gdjs.OverCode.GDyesTextObjects2= [];
gdjs.OverCode.GDyesTextObjects3= [];
gdjs.OverCode.GDnoTextObjects1= [];
gdjs.OverCode.GDnoTextObjects2= [];
gdjs.OverCode.GDnoTextObjects3= [];
gdjs.OverCode.GDTransitionObjects1= [];
gdjs.OverCode.GDTransitionObjects2= [];
gdjs.OverCode.GDTransitionObjects3= [];
gdjs.OverCode.GDgameoverObjects1= [];
gdjs.OverCode.GDgameoverObjects2= [];
gdjs.OverCode.GDgameoverObjects3= [];


gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDagainTextObjects2Objects = Hashtable.newFrom({"againText": gdjs.OverCode.GDagainTextObjects2});
gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDgameoverObjects2Objects = Hashtable.newFrom({"gameover": gdjs.OverCode.GDgameoverObjects2});
gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDyesTextObjects2Objects = Hashtable.newFrom({"yesText": gdjs.OverCode.GDyesTextObjects2});
gdjs.OverCode.asyncCallback22767556 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("currentStage")), false);
}}
gdjs.OverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.OverCode.asyncCallback22767556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "src\\sounds\\Sound FX\\Select 3.wav", false, 100, 1);
}
{ //Subevents
gdjs.OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDyesTextObjects2Objects = Hashtable.newFrom({"yesText": gdjs.OverCode.GDyesTextObjects2});
gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDnoTextObjects2Objects = Hashtable.newFrom({"noText": gdjs.OverCode.GDnoTextObjects2});
gdjs.OverCode.asyncCallback22770828 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}
gdjs.OverCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.OverCode.asyncCallback22770828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "src\\sounds\\Sound FX\\Select 3.wav", false, 100, 1);
}
{ //Subevents
gdjs.OverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDnoTextObjects1Objects = Hashtable.newFrom({"noText": gdjs.OverCode.GDnoTextObjects1});
gdjs.OverCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.OverCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.OverCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDTransitionObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 2, "Flash", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "src\\sounds\\Sound FX\\Stinger_Negative Defeat.wav", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("againText"), gdjs.OverCode.GDagainTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("gameover"), gdjs.OverCode.GDgameoverObjects2);
gdjs.copyArray(runtimeScene.getObjects("noText"), gdjs.OverCode.GDnoTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("yesText"), gdjs.OverCode.GDyesTextObjects2);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDagainTextObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDgameoverObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.OverCode.GDyesTextObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDyesTextObjects2[i].setX((( gdjs.OverCode.GDagainTextObjects2.length === 0 ) ? 0 :gdjs.OverCode.GDagainTextObjects2[0].getX()) + 30);
}
}{for(var i = 0, len = gdjs.OverCode.GDnoTextObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDnoTextObjects2[i].setX((( gdjs.OverCode.GDyesTextObjects2.length === 0 ) ? 0 :gdjs.OverCode.GDyesTextObjects2[0].getX()) + 210);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesText"), gdjs.OverCode.GDyesTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDyesTextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverCode.GDyesTextObjects2 */
{for(var i = 0, len = gdjs.OverCode.GDyesTextObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDyesTextObjects2[i].setScale(1.2);
}
}
{ //Subevents
gdjs.OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yesText"), gdjs.OverCode.GDyesTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDyesTextObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.OverCode.GDyesTextObjects2 */
{for(var i = 0, len = gdjs.OverCode.GDyesTextObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDyesTextObjects2[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("noText"), gdjs.OverCode.GDnoTextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDnoTextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.OverCode.GDnoTextObjects2 */
{for(var i = 0, len = gdjs.OverCode.GDnoTextObjects2.length ;i < len;++i) {
    gdjs.OverCode.GDnoTextObjects2[i].setScale(1.2);
}
}
{ //Subevents
gdjs.OverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("noText"), gdjs.OverCode.GDnoTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.OverCode.mapOfGDgdjs_46OverCode_46GDnoTextObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.OverCode.GDnoTextObjects1 */
{for(var i = 0, len = gdjs.OverCode.GDnoTextObjects1.length ;i < len;++i) {
    gdjs.OverCode.GDnoTextObjects1[i].setScale(1);
}
}}

}


};gdjs.OverCode.eventsList5 = function(runtimeScene) {

{


gdjs.OverCode.eventsList4(runtimeScene);
}


};

gdjs.OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OverCode.GDagainTextObjects1.length = 0;
gdjs.OverCode.GDagainTextObjects2.length = 0;
gdjs.OverCode.GDagainTextObjects3.length = 0;
gdjs.OverCode.GDyesTextObjects1.length = 0;
gdjs.OverCode.GDyesTextObjects2.length = 0;
gdjs.OverCode.GDyesTextObjects3.length = 0;
gdjs.OverCode.GDnoTextObjects1.length = 0;
gdjs.OverCode.GDnoTextObjects2.length = 0;
gdjs.OverCode.GDnoTextObjects3.length = 0;
gdjs.OverCode.GDTransitionObjects1.length = 0;
gdjs.OverCode.GDTransitionObjects2.length = 0;
gdjs.OverCode.GDTransitionObjects3.length = 0;
gdjs.OverCode.GDgameoverObjects1.length = 0;
gdjs.OverCode.GDgameoverObjects2.length = 0;
gdjs.OverCode.GDgameoverObjects3.length = 0;

gdjs.OverCode.eventsList5(runtimeScene);

return;

}

gdjs['OverCode'] = gdjs.OverCode;
