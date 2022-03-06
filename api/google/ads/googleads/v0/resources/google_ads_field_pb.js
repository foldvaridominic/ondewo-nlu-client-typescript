// source: google/ads/googleads/v0/resources/google_ads_field.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v0_enums_google_ads_field_category_pb = require('../../../../../google/ads/googleads/v0/enums/google_ads_field_category_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_enums_google_ads_field_category_pb);
var google_ads_googleads_v0_enums_google_ads_field_data_type_pb = require('../../../../../google/ads/googleads/v0/enums/google_ads_field_data_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v0_enums_google_ads_field_data_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.google.ads.googleads.v0.resources.GoogleAdsField', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v0.resources.GoogleAdsField.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v0.resources.GoogleAdsField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v0.resources.GoogleAdsField.displayName = 'proto.google.ads.googleads.v0.resources.GoogleAdsField';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.repeatedFields_ = [7,8,9,10,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v0.resources.GoogleAdsField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v0.resources.GoogleAdsField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    category: jspb.Message.getFieldWithDefault(msg, 3, 0),
    selectable: (f = msg.getSelectable()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    filterable: (f = msg.getFilterable()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    sortable: (f = msg.getSortable()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    selectableWithList: jspb.Message.toObjectList(msg.getSelectableWithList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    attributeResourcesList: jspb.Message.toObjectList(msg.getAttributeResourcesList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    segmentsList: jspb.Message.toObjectList(msg.getSegmentsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    enumValuesList: jspb.Message.toObjectList(msg.getEnumValuesList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    dataType: jspb.Message.getFieldWithDefault(msg, 12, 0),
    typeUrl: (f = msg.getTypeUrl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    isRepeated: (f = msg.getIsRepeated()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v0.resources.GoogleAdsField;
  return proto.google.ads.googleads.v0.resources.GoogleAdsField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v0.resources.GoogleAdsField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSelectable(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setFilterable(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSortable(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addSelectableWith(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addAttributeResources(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addMetrics(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addSegments(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addEnumValues(value);
      break;
    case 12:
      var value = /** @type {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTypeUrl(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setIsRepeated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v0.resources.GoogleAdsField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v0.resources.GoogleAdsField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSelectable();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFilterable();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSortable();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSelectableWithList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAttributeResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSegmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEnumValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getTypeUrl();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getIsRepeated();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue name = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v0.enums.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory category = 3;
 * @return {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getCategory = function() {
  return /** @type {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldCategoryEnum.GoogleAdsFieldCategory} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.BoolValue selectable = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getSelectable = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setSelectable = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearSelectable = function() {
  return this.setSelectable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasSelectable = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.BoolValue filterable = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getFilterable = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setFilterable = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearFilterable = function() {
  return this.setFilterable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasFilterable = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue sortable = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getSortable = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setSortable = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearSortable = function() {
  return this.setSortable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasSortable = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated google.protobuf.StringValue selectable_with = 7;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getSelectableWithList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setSelectableWithList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.addSelectableWith = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearSelectableWithList = function() {
  return this.setSelectableWithList([]);
};


/**
 * repeated google.protobuf.StringValue attribute_resources = 8;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getAttributeResourcesList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setAttributeResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.addAttributeResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearAttributeResourcesList = function() {
  return this.setAttributeResourcesList([]);
};


/**
 * repeated google.protobuf.StringValue metrics = 9;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};


/**
 * repeated google.protobuf.StringValue segments = 10;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getSegmentsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setSegmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.addSegments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearSegmentsList = function() {
  return this.setSegmentsList([]);
};


/**
 * repeated google.protobuf.StringValue enum_values = 11;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getEnumValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setEnumValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.addEnumValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearEnumValuesList = function() {
  return this.setEnumValuesList([]);
};


/**
 * optional google.ads.googleads.v0.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType data_type = 12;
 * @return {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getDataType = function() {
  return /** @type {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.google.ads.googleads.v0.enums.GoogleAdsFieldDataTypeEnum.GoogleAdsFieldDataType} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional google.protobuf.StringValue type_url = 13;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getTypeUrl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 13));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setTypeUrl = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearTypeUrl = function() {
  return this.setTypeUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasTypeUrl = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.BoolValue is_repeated = 14;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.getIsRepeated = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 14));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
*/
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.setIsRepeated = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v0.resources.GoogleAdsField} returns this
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.clearIsRepeated = function() {
  return this.setIsRepeated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v0.resources.GoogleAdsField.prototype.hasIsRepeated = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v0.resources);