
if (typeof gdjs.evtsExt__AnimationSystem__DoorIsOpen !== "undefined") {
  gdjs.evtsExt__AnimationSystem__DoorIsOpen.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationSystem__DoorIsOpen = {};
gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects2= [];


gdjs.evtsExt__AnimationSystem__DoorIsOpen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1[i].getVariables().get("_").getChild("Animation system").getChild("_ThreeD door is open")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AnimationSystem__DoorIsOpen.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__DoorIsOpen.GDObjectObjects2.length = 0;

gdjs.evtsExt__AnimationSystem__DoorIsOpen.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AnimationSystem__DoorIsOpen.registeredGdjsCallbacks = [];