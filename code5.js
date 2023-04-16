gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDmodal2Objects1= [];
gdjs.Untitled_32sceneCode.GDmodal2Objects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("modal2"), gdjs.Untitled_32sceneCode.GDmodal2Objects1);
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "docs", "https://docs.google.com/document/d/e/2PACX-1vTWd210KgqILUM_JlRvvUGUrzdAQ5mYb_JCqT8GQSc_bhyWGsrXRpAdtDan9wuWq5VYyFLQCPJJOXdu/pub?embedded=true", 1100, 350, (( gdjs.Untitled_32sceneCode.GDmodal2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDmodal2Objects1[0].getPointX("")) + 170, (( gdjs.Untitled_32sceneCode.GDmodal2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDmodal2Objects1[0].getPointY("")) + 200, true, true, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmodal2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmodal2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
