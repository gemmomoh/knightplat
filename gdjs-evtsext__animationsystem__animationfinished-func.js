
if (typeof gdjs.evtsExt__AnimationSystem__AnimationFinished !== "undefined") {
  gdjs.evtsExt__AnimationSystem__AnimationFinished.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationSystem__AnimationFinished = {};
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects2= [];


gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Breath has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Instant rotation has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation X has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation Y has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Float has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade out has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade in has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Squash & Stretch has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Rainbow effect has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Land has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Low health has finished")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Pulse");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Breath");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Smooth rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Instant rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation X");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation Y");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Float");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Triangle transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Square transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rhombus transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Maze transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade out");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade in");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Squash & Stretch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rainbow effect");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake horizontal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake vertical");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList18(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Line rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList19(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Land");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Low health");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList21(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AnimationSystem__AnimationFinished.func = function(runtimeScene, animations, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "animations") return animations;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationFinished.GDObjectObjects2.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationFinished.eventsList22(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AnimationSystem__AnimationFinished.registeredGdjsCallbacks = [];