
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior || {};

/**
 * Behavior generated from Simple Scrollable List Behavior
 */
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior = class SimpleScrollableListBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.IconOffsetX = behaviorData.IconOffsetX !== undefined ? behaviorData.IconOffsetX : Number("8") || 0;
    this._behaviorData.IconOffsetY = behaviorData.IconOffsetY !== undefined ? behaviorData.IconOffsetY : Number("8") || 0;
    this._behaviorData.TitleOffsetX = behaviorData.TitleOffsetX !== undefined ? behaviorData.TitleOffsetX : Number("80") || 0;
    this._behaviorData.TitleOffsetY = behaviorData.TitleOffsetY !== undefined ? behaviorData.TitleOffsetY : Number("10") || 0;
    this._behaviorData.TextOffsetX = behaviorData.TextOffsetX !== undefined ? behaviorData.TextOffsetX : Number("80") || 0;
    this._behaviorData.TextOffsetY = behaviorData.TextOffsetY !== undefined ? behaviorData.TextOffsetY : Number("45") || 0;
    this._behaviorData.Z_Order = behaviorData.Z_Order !== undefined ? behaviorData.Z_Order : Number("10") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.IconOffsetX !== newBehaviorData.IconOffsetX)
      this._behaviorData.IconOffsetX = newBehaviorData.IconOffsetX;
    if (oldBehaviorData.IconOffsetY !== newBehaviorData.IconOffsetY)
      this._behaviorData.IconOffsetY = newBehaviorData.IconOffsetY;
    if (oldBehaviorData.TitleOffsetX !== newBehaviorData.TitleOffsetX)
      this._behaviorData.TitleOffsetX = newBehaviorData.TitleOffsetX;
    if (oldBehaviorData.TitleOffsetY !== newBehaviorData.TitleOffsetY)
      this._behaviorData.TitleOffsetY = newBehaviorData.TitleOffsetY;
    if (oldBehaviorData.TextOffsetX !== newBehaviorData.TextOffsetX)
      this._behaviorData.TextOffsetX = newBehaviorData.TextOffsetX;
    if (oldBehaviorData.TextOffsetY !== newBehaviorData.TextOffsetY)
      this._behaviorData.TextOffsetY = newBehaviorData.TextOffsetY;
    if (oldBehaviorData.Z_Order !== newBehaviorData.Z_Order)
      this._behaviorData.Z_Order = newBehaviorData.Z_Order;

    return true;
  }

  // Properties:
  
  _getIconOffsetX() {
    return this._behaviorData.IconOffsetX !== undefined ? this._behaviorData.IconOffsetX : Number("8") || 0;
  }
  _setIconOffsetX(newValue) {
    this._behaviorData.IconOffsetX = newValue;
  }
  _getIconOffsetY() {
    return this._behaviorData.IconOffsetY !== undefined ? this._behaviorData.IconOffsetY : Number("8") || 0;
  }
  _setIconOffsetY(newValue) {
    this._behaviorData.IconOffsetY = newValue;
  }
  _getTitleOffsetX() {
    return this._behaviorData.TitleOffsetX !== undefined ? this._behaviorData.TitleOffsetX : Number("80") || 0;
  }
  _setTitleOffsetX(newValue) {
    this._behaviorData.TitleOffsetX = newValue;
  }
  _getTitleOffsetY() {
    return this._behaviorData.TitleOffsetY !== undefined ? this._behaviorData.TitleOffsetY : Number("10") || 0;
  }
  _setTitleOffsetY(newValue) {
    this._behaviorData.TitleOffsetY = newValue;
  }
  _getTextOffsetX() {
    return this._behaviorData.TextOffsetX !== undefined ? this._behaviorData.TextOffsetX : Number("80") || 0;
  }
  _setTextOffsetX(newValue) {
    this._behaviorData.TextOffsetX = newValue;
  }
  _getTextOffsetY() {
    return this._behaviorData.TextOffsetY !== undefined ? this._behaviorData.TextOffsetY : Number("45") || 0;
  }
  _setTextOffsetY(newValue) {
    this._behaviorData.TextOffsetY = newValue;
  }
  _getZ_Order() {
    return this._behaviorData.Z_Order !== undefined ? this._behaviorData.Z_Order : Number("10") || 0;
  }
  _setZ_Order(newValue) {
    this._behaviorData.Z_Order = newValue;
  }
}

/**
 * Shared data generated from Simple Scrollable List Behavior
 */
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.SharedData = class SimpleScrollableListBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SimpleScrollableListExtension_SimpleScrollableListBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SimpleScrollableListExtension_SimpleScrollableListBehaviorSharedData = new gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._SimpleScrollableListExtension_SimpleScrollableListBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_Num")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_StartY")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_BeforeY")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_SpeedY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_SelectIndex")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_RefreshPositionY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("ListItems"));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("__SSLE_AddItem"));
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDBackGroundObjects2Objects = Hashtable.newFrom({"BackGround": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDIconObjects2Objects = Hashtable.newFrom({"Icon": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDTitleObjects2Objects = Hashtable.newFrom({"Title": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDTextObjects2Objects = Hashtable.newFrom({"Text": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_Num")).setNumber(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1);

const repeatCount2 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1[0].getVariables()).get("ListItems")));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2);

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDBackGroundObjects2Objects, (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointX("")), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointY("")), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[i].setPosition((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointX("")),(( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointY("")) + ((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[i].getHeight()) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[i].getVariables().get("__SSLE_Index")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num"))));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDIconObjects2Objects, (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointX("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIconOffsetX()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointY("")) + ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[0].getHeight()) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIconOffsetY()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getLayer()));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDTitleObjects2Objects, (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointX("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTitleOffsetX()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointY("")) + ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[0].getHeight()) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTitleOffsetY()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getLayer()));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListContext_46GDTextObjects2Objects, (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointX("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTextOffsetX()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getPointY("")) + ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[0].getHeight()) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTextOffsetY()), (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2[i].setZOrder((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getZ_Order()));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2[i].setZOrder((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getZ_Order()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2[i].setZOrder((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getZ_Order()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2[i].setZOrder((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getZ_Order()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2[i].setAnimationName((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("ListItems").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))).getChild("Icon"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("ListItems").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))).getChild("Title"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("ListItems").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[0].getVariables()).get("__SSLE_Num")))).getChild("Text"))));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_Num")).add(1);
}
}}
}

}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_RefreshPositionY")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ScrollPosition")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateList = function(BackGround, Icon, Title, Text, ScrollPosition, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BackGround": BackGround
, "Icon": Icon
, "Title": Title
, "Text": Text
},
  _objectArraysMap: {
"Object": thisObjectList
, "BackGround": gdjs.objectsListsToArray(BackGround)
, "Icon": gdjs.objectsListsToArray(Icon)
, "Title": gdjs.objectsListsToArray(Title)
, "Text": gdjs.objectsListsToArray(Text)
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
if (argName === "ScrollPosition") return ScrollPosition;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDBackGroundObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDIconObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.GDTextObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDBackGroundObjects1Objects = Hashtable.newFrom({"BackGround": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDIconObjects1Objects = Hashtable.newFrom({"Icon": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDTextObjects1Objects = Hashtable.newFrom({"Text": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1[i].getVariables().get("ListItems"));
}
}{gdjs.evtTools.network.jsonToObjectVariableStructure((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("JsonText") : ""), (gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1[0] : null), ((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1[0].getVariables()).get("ListItems"));
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateList(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDBackGroundObjects1Objects, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDIconObjects1Objects, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDTitleObjects1Objects, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46CreateListFromJsonTextContext_46GDTextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ScrollPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonText = function(BackGround, Icon, Title, Text, ScrollPosition, JsonText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BackGround": BackGround
, "Icon": Icon
, "Title": Title
, "Text": Text
},
  _objectArraysMap: {
"Object": thisObjectList
, "BackGround": gdjs.objectsListsToArray(BackGround)
, "Icon": gdjs.objectsListsToArray(Icon)
, "Title": gdjs.objectsListsToArray(Title)
, "Text": gdjs.objectsListsToArray(Text)
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
if (argName === "ScrollPosition") return ScrollPosition;
if (argName === "JsonText") return JsonText;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDBackGroundObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDIconObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.GDTextObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.CreateListFromJsonTextContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects4= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects4= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects3= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects4= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects3= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects4= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects3= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects4= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getVariables().get("__SSLE_StartY")) != -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getVariables().get("__SSLE_SpeedY")).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getLayer()), 0) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getVariables().get("__SSLE_BeforeY"))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_StartY")) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_StartY")).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getLayer()), 0));
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDBackGroundObjects3Objects = Hashtable.newFrom({"BackGround": gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3});
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDBackGroundObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[i].getVariables().get("__SSLE_SelectIndex")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3[0].getVariables()).get("__SSLE_Index"))));
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[0].getLayer()), 0) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3[0].getVariables()).get("__SSLE_StartY")))) < 5);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_StartY")).setNumber(-(1));
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_BeforeY")).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i].getVariables().get("__SSLE_Index")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i].getY() < (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_SpeedY")).setNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getPointY("")) - (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getPointY(""))) * 0.5);
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i].getVariables().get("__SSLE_Index")) == (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getVariables()).get("ListItems"))) - 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getPointY("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getHeight()) < (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getPointY("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getHeight()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getVariables().get("__SSLE_SpeedY")).setNumber((((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getPointY("")) + (gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[i].getHeight())) - ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getPointY("")) + (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getHeight()))) * 0.5);
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2);
gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getVariables()).get("ListItems"))) * (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getHeight()) <= (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2);
gdjs.copyArray(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1, gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getVariables()).get("ListItems"))) * (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2[0].getHeight()) > (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2[0].getHeight()));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1);
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].getVariables().get("__SSLE_Index")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].getY() > (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1 */
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_SpeedY")).setNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getPointY("")) - (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[0].getPointY(""))) * 0.5);
}
}}

}


};gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_SelectIndex")).setNumber(-(1));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_StartY")).setNumber(-(1));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.mapOfGDgdjs_46evtsExt_95_95SimpleScrollableListExtension_95_95SimpleScrollableListBehavior_46SimpleScrollableListBehavior_46prototype_46UpdateListContext_46GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_StartY")) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SpeedY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SpeedY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SpeedY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SpeedY")))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_RefreshPositionY")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1);
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_RefreshPositionY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_RefreshPositionY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_RefreshPositionY")))));
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1[i].setY(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1[i].getY() + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[0].getVariables()).get("__SSLE_RefreshPositionY")))));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1[i].getVariables().get("__SSLE_RefreshPositionY")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateList = function(BackGround, Icon, Title, Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BackGround": BackGround
, "Icon": Icon
, "Title": Title
, "Text": Text
},
  _objectArraysMap: {
"Object": thisObjectList
, "BackGround": gdjs.objectsListsToArray(BackGround)
, "Icon": gdjs.objectsListsToArray(Icon)
, "Title": gdjs.objectsListsToArray(Title)
, "Text": gdjs.objectsListsToArray(Text)
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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects3.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDBackGroundObjects4.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects3.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDIconObjects4.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects3.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTitleObjects4.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects3.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.GDTextObjects4.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.UpdateListContext.eventsList7(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1[i].getVariables().get("__SSLE_SelectIndex")) != -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelected = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsSelectedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SelectIndex"))); }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndex = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedIndexContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[i].getVariables().get("__SSLE_SelectIndex")) != -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[0].getVariables()).get("ListItems").getChild((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1[0].getVariables()).get("__SSLE_SelectIndex")))).getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ChildName") : "")))); }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedString = function(ChildName, parentEventsFunctionContext) {

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
if (argName === "ChildName") return ChildName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.SelectedStringContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1[i].getVariables().get("__SSLE_Index")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1[0].getPointY("")) - (( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects1[0].getPointY("")); }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPosition = function(BackGround, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BackGround": BackGround
},
  _objectArraysMap: {
"Object": thisObjectList
, "BackGround": gdjs.objectsListsToArray(BackGround)
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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.GDBackGroundObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ScrollPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.userFunc0x739108 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const ListItems = objects[0].getVariables().get("ListItems");
const AddItem = objects[0].getVariables().get("__SSLE_AddItem");
ListItems.pushVariableCopy(AddItem);
};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].getVariables().get("__SSLE_AddItem").getChild("Icon")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Icon") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].getVariables().get("__SSLE_AddItem").getChild("Title")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Title") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1[i].getVariables().get("__SSLE_AddItem").getChild("Text")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Text") : ""));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1);
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.userFunc0x739108(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItem = function(Icon, Title, Text, parentEventsFunctionContext) {

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
if (argName === "Icon") return Icon;
if (argName === "Title") return Title;
if (argName === "Text") return Text;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.AddItemContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1[i].variableRemoveAt(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1[i].getVariables().get("ListItems"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Index")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItem = function(Index, parentEventsFunctionContext) {

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
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.RemoveItemContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects2= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BackGround"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Icon"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Text"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1[i].getVariables().get("ListItems"));
}
}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItems = function(BackGround, Icon, Title, Text, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BackGround": BackGround
, "Icon": Icon
, "Title": Title
, "Text": Text
},
  _objectArraysMap: {
"Object": thisObjectList
, "BackGround": gdjs.objectsListsToArray(BackGround)
, "Icon": gdjs.objectsListsToArray(Icon)
, "Title": gdjs.objectsListsToArray(Title)
, "Text": gdjs.objectsListsToArray(Text)
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

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDBackGroundObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDIconObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.GDTextObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.ClearListItemsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1[i].getVariables().get("__SSLE_SelectIndex")) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Index")) || 0 : 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1[k] = gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelected = function(Index, parentEventsFunctionContext) {

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
if (argName === "Index") return Index;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsIndexSelectedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext = {};
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects1= [];
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects2= [];


gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SelectedString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ChildName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("String") : ""));
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelected = function(ChildName, String, parentEventsFunctionContext) {

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
if (argName === "ChildName") return ChildName;
if (argName === "String") return String;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.IsStringSelectedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SimpleScrollableListExtension::SimpleScrollableListBehavior", gdjs.evtsExt__SimpleScrollableListExtension__SimpleScrollableListBehavior.SimpleScrollableListBehavior);
