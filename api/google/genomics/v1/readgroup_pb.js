// source: google/genomics/v1/readgroup.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.google.genomics.v1.ReadGroup', null, global);
goog.exportSymbol('proto.google.genomics.v1.ReadGroup.Experiment', null, global);
goog.exportSymbol('proto.google.genomics.v1.ReadGroup.Program', null, global);
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
proto.google.genomics.v1.ReadGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.genomics.v1.ReadGroup.repeatedFields_, null);
};
goog.inherits(proto.google.genomics.v1.ReadGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.genomics.v1.ReadGroup.displayName = 'proto.google.genomics.v1.ReadGroup';
}
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
proto.google.genomics.v1.ReadGroup.Experiment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.genomics.v1.ReadGroup.Experiment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.genomics.v1.ReadGroup.Experiment.displayName = 'proto.google.genomics.v1.ReadGroup.Experiment';
}
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
proto.google.genomics.v1.ReadGroup.Program = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.genomics.v1.ReadGroup.Program, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.genomics.v1.ReadGroup.Program.displayName = 'proto.google.genomics.v1.ReadGroup.Program';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.genomics.v1.ReadGroup.repeatedFields_ = [10];



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
proto.google.genomics.v1.ReadGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.google.genomics.v1.ReadGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.genomics.v1.ReadGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datasetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sampleId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    experiment: (f = msg.getExperiment()) && proto.google.genomics.v1.ReadGroup.Experiment.toObject(includeInstance, f),
    predictedInsertSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    programsList: jspb.Message.toObjectList(msg.getProgramsList(),
    proto.google.genomics.v1.ReadGroup.Program.toObject, includeInstance),
    referenceSetId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    infoMap: (f = msg.getInfoMap()) ? f.toObject(includeInstance, proto.google.protobuf.ListValue.toObject) : []
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
 * @return {!proto.google.genomics.v1.ReadGroup}
 */
proto.google.genomics.v1.ReadGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.genomics.v1.ReadGroup;
  return proto.google.genomics.v1.ReadGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.genomics.v1.ReadGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.genomics.v1.ReadGroup}
 */
proto.google.genomics.v1.ReadGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSampleId(value);
      break;
    case 6:
      var value = new proto.google.genomics.v1.ReadGroup.Experiment;
      reader.readMessage(value,proto.google.genomics.v1.ReadGroup.Experiment.deserializeBinaryFromReader);
      msg.setExperiment(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPredictedInsertSize(value);
      break;
    case 10:
      var value = new proto.google.genomics.v1.ReadGroup.Program;
      reader.readMessage(value,proto.google.genomics.v1.ReadGroup.Program.deserializeBinaryFromReader);
      msg.addPrograms(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceSetId(value);
      break;
    case 12:
      var value = msg.getInfoMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.ListValue.deserializeBinaryFromReader, "", new proto.google.protobuf.ListValue());
         });
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
proto.google.genomics.v1.ReadGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.genomics.v1.ReadGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.genomics.v1.ReadGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSampleId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExperiment();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.genomics.v1.ReadGroup.Experiment.serializeBinaryToWriter
    );
  }
  f = message.getPredictedInsertSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getProgramsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.google.genomics.v1.ReadGroup.Program.serializeBinaryToWriter
    );
  }
  f = message.getReferenceSetId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getInfoMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.ListValue.serializeBinaryToWriter);
  }
};





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
proto.google.genomics.v1.ReadGroup.Experiment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.genomics.v1.ReadGroup.Experiment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.genomics.v1.ReadGroup.Experiment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.Experiment.toObject = function(includeInstance, msg) {
  var f, obj = {
    libraryId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platformUnit: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sequencingCenter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    instrumentModel: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment}
 */
proto.google.genomics.v1.ReadGroup.Experiment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.genomics.v1.ReadGroup.Experiment;
  return proto.google.genomics.v1.ReadGroup.Experiment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.genomics.v1.ReadGroup.Experiment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment}
 */
proto.google.genomics.v1.ReadGroup.Experiment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLibraryId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformUnit(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSequencingCenter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentModel(value);
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
proto.google.genomics.v1.ReadGroup.Experiment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.genomics.v1.ReadGroup.Experiment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.genomics.v1.ReadGroup.Experiment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.Experiment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibraryId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatformUnit();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSequencingCenter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstrumentModel();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string library_id = 1;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.getLibraryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment} returns this
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.setLibraryId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform_unit = 2;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.getPlatformUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment} returns this
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.setPlatformUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sequencing_center = 3;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.getSequencingCenter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment} returns this
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.setSequencingCenter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string instrument_model = 4;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.getInstrumentModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Experiment} returns this
 */
proto.google.genomics.v1.ReadGroup.Experiment.prototype.setInstrumentModel = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





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
proto.google.genomics.v1.ReadGroup.Program.prototype.toObject = function(opt_includeInstance) {
  return proto.google.genomics.v1.ReadGroup.Program.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.genomics.v1.ReadGroup.Program} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.Program.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandLine: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    prevProgramId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    version: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.genomics.v1.ReadGroup.Program}
 */
proto.google.genomics.v1.ReadGroup.Program.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.genomics.v1.ReadGroup.Program;
  return proto.google.genomics.v1.ReadGroup.Program.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.genomics.v1.ReadGroup.Program} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.genomics.v1.ReadGroup.Program}
 */
proto.google.genomics.v1.ReadGroup.Program.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandLine(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevProgramId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.google.genomics.v1.ReadGroup.Program.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.genomics.v1.ReadGroup.Program.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.genomics.v1.ReadGroup.Program} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.genomics.v1.ReadGroup.Program.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandLine();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrevProgramId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string command_line = 1;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.getCommandLine = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Program} returns this
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.setCommandLine = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Program} returns this
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Program} returns this
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string prev_program_id = 4;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.getPrevProgramId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Program} returns this
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.setPrevProgramId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string version = 5;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup.Program} returns this
 */
proto.google.genomics.v1.ReadGroup.Program.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dataset_id = 2;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sample_id = 5;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getSampleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setSampleId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Experiment experiment = 6;
 * @return {?proto.google.genomics.v1.ReadGroup.Experiment}
 */
proto.google.genomics.v1.ReadGroup.prototype.getExperiment = function() {
  return /** @type{?proto.google.genomics.v1.ReadGroup.Experiment} */ (
    jspb.Message.getWrapperField(this, proto.google.genomics.v1.ReadGroup.Experiment, 6));
};


/**
 * @param {?proto.google.genomics.v1.ReadGroup.Experiment|undefined} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
*/
proto.google.genomics.v1.ReadGroup.prototype.setExperiment = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.clearExperiment = function() {
  return this.setExperiment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.genomics.v1.ReadGroup.prototype.hasExperiment = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 predicted_insert_size = 7;
 * @return {number}
 */
proto.google.genomics.v1.ReadGroup.prototype.getPredictedInsertSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setPredictedInsertSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated Program programs = 10;
 * @return {!Array<!proto.google.genomics.v1.ReadGroup.Program>}
 */
proto.google.genomics.v1.ReadGroup.prototype.getProgramsList = function() {
  return /** @type{!Array<!proto.google.genomics.v1.ReadGroup.Program>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.genomics.v1.ReadGroup.Program, 10));
};


/**
 * @param {!Array<!proto.google.genomics.v1.ReadGroup.Program>} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
*/
proto.google.genomics.v1.ReadGroup.prototype.setProgramsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.genomics.v1.ReadGroup.Program=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.genomics.v1.ReadGroup.Program}
 */
proto.google.genomics.v1.ReadGroup.prototype.addPrograms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.genomics.v1.ReadGroup.Program, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.clearProgramsList = function() {
  return this.setProgramsList([]);
};


/**
 * optional string reference_set_id = 11;
 * @return {string}
 */
proto.google.genomics.v1.ReadGroup.prototype.getReferenceSetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.setReferenceSetId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * map<string, google.protobuf.ListValue> info = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.ListValue>}
 */
proto.google.genomics.v1.ReadGroup.prototype.getInfoMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.ListValue>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      proto.google.protobuf.ListValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.genomics.v1.ReadGroup} returns this
 */
proto.google.genomics.v1.ReadGroup.prototype.clearInfoMap = function() {
  this.getInfoMap().clear();
  return this;};


goog.object.extend(exports, proto.google.genomics.v1);