
gdjs.evtsExt__AnimationSystem__AnimationBehavior = gdjs.evtsExt__AnimationSystem__AnimationBehavior || {};

/**
 * Behavior generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior = class AnimationBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData = class AnimationBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AnimationSystem_AnimationBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AnimationSystem_AnimationBehaviorSharedData = new gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._AnimationSystem_AnimationBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20968948);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20969868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20973220);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20974116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20975036);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20978388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 0.01);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Pulse has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Pulse");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20982060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20984060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20986100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20987188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20989188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 0.03);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Breath")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Breath has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Breath");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -(80), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getAngle()) <= -(60));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(20994892);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp(-(60), 80, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), 360, 0.09));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 359.9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(4);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -(80), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getAngle()) <= -(60));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21001828);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp(-(60), 80, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), 360, 0.09));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 360 - 0.03 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Smooth rotation has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Smooth rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_instant")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_instant")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_instant")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_instant")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_instant")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_instant")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Instant rotation has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Instant rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("Animationsystem").getChild("wobbleIntensity").setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21013316);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animationsystem").getChild("_wobble")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animationsystem").getChild("_wobble")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animationsystem").getChild("_Wobblespeed")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animationsystem").getChild("wobbleIntensity"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((Math.cos((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animationsystem").getChild("_Wobblespeed")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animationsystem").getChild("wobbleIntensity"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animationsystem").getChild("_Wobblespeed")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity2").setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale2").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21017916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_wobble2")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_wobble2")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed2")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity2"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale2")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((-(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed2"))))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity2"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale2")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed2")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity3").setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale3").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21022508);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_wobble3")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_wobble3")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed3")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity3"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale3")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY((Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed3")))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_").getChild("Animation system").getChild("wobble Intensity3"))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("ObjectScale3")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Wobble speed3")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("target_scale")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("scale_lerp")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("scdx")).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setScaleX(2);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setScaleY(0.5);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble once");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21032268);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21034724);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21036028);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21038556);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation speed")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21043908);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21046012);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("IDrotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21050628);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21052812);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21054156);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21056124);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21059572);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21061756);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation X")).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation X has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation X");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21065604);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21067788);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21069132);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21071100);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21074548);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21076732);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD rotation Y")).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_3D rotation Y has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation Y");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21080372);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Door loop")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D door loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21083684);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21085812);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)) + 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21087108);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D open door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21089508);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD open door")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21091668);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD close door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21093516);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D close door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21095652);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth((0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21097884);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)) + 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21100156);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD pre closed door")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D pre-closed door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21101972);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 6));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21107076);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 6));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_FloatY"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_FloatUp")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Float has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Float");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21113260);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21120372);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transitionX")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transitionY")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionX"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionY"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionX"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Triangle transitionX"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Triangle transition has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Triangle transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21129748);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition X"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition Y"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition X"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition Y"))));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21137916);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition X"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition Y"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition X"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Square transition X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Square transition has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Square transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21149140);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition Y"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21157908);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition Y"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) / 2)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))) - ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) / 2)));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Rhombus transition X"))));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Rhombus transition has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rhombus transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21167732);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(7);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(8);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(9);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(10);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21190228);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(7);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(8);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(9);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(10);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition X"))) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) - (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Maze transition Y"))) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) + (( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Maze transition has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Maze transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")) == 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade loop")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade out has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade out");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Fade in has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade in");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21223684);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21225972);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()) * 3, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 1.4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 5000, runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 80));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -(360), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 4));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 5));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(359) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21239332);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21241620);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()) * 3, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 1.4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 5000, runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 80));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -(360), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 4));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 5));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Squash and Stretch Y"))) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() <= -(359) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Squash and Stretch")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Squash & Stretch has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Squash & Stretch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21256012);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("240;0;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;132;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("247;255;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("48;242;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;255;234");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;102;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("183;0;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("235;135;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21265556);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("240;0;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;132;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("247;255;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("48;242;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;255;234");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;102;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("183;0;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("235;135;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].pauseTimer("_.Animation system._Rainbow effect");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Rainbow effect has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rainbow effect");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21276364);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21280812);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotateTowardAngle(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake rotation has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21287692);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake horizontal X"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake horizontal X"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21292388);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake horizontal X"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake horizontal X"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake horizontal X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake horizontal has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake horizontal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21299852);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake vertical Y"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake vertical Y"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21304548);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical Y")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake vertical Y"))) - 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake vertical Y"))) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Shake vertical Y"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Shake vertical has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake vertical");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21311980);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21322372);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation X")).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getVariables()).get("_").getChild("Animation system").getChild("_Line rotation X"))));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Line rotation has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Line rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21333724);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Land")).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), 1));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), 1));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Land")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Land has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList107 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Land");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList108 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21341212);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color")).setNumber(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) >= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")).sub((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) <= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) >= -((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList109 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(21348308);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color")).setNumber(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")))) + ";" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) >= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")).sub((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) <= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB")) >= -((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health color RGB reset")).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Low health")) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_Low health has finished")).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList110 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList108(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList109(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList111 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Low health");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList110(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList112 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList107(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList111(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystem = function(animations, speed, width, height, trigger, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "speed") return speed;
if (argName === "width") return width;
if (argName === "height") return height;
if (argName === "trigger") return trigger;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList112(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) * 2) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleX(0.5);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleY() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(0.5);
}
}}

}


{

/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")).setNumber(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx"))), (((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX())) * 0.5), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scale_lerp")))));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScaleX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")))));
}
}
{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).sub(1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AnimationSystem::AnimationBehavior", gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior);
