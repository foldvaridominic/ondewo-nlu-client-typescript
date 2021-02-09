/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./aiservices_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.AiServicesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.AiServicesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExtractEntitiesRequest,
 *   !proto.ondewo.nlu.ExtractEntitiesResponse>}
 */
const methodDescriptor_AiServices_ExtractEntities = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/ExtractEntities',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ExtractEntitiesRequest,
  proto.ondewo.nlu.ExtractEntitiesResponse,
  /**
   * @param {!proto.ondewo.nlu.ExtractEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ExtractEntitiesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.ExtractEntitiesRequest,
 *   !proto.ondewo.nlu.ExtractEntitiesResponse>}
 */
const methodInfo_AiServices_ExtractEntities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.ExtractEntitiesResponse,
  /**
   * @param {!proto.ondewo.nlu.ExtractEntitiesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ExtractEntitiesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ExtractEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.ExtractEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ExtractEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.extractEntities =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/ExtractEntities',
      request,
      metadata || {},
      methodDescriptor_AiServices_ExtractEntities,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ExtractEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ExtractEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.extractEntities =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/ExtractEntities',
      request,
      metadata || {},
      methodDescriptor_AiServices_ExtractEntities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GenerateUserSaysRequest,
 *   !proto.ondewo.nlu.GenerateUserSaysResponse>}
 */
const methodDescriptor_AiServices_GenerateUserSays = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/GenerateUserSays',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GenerateUserSaysRequest,
  proto.ondewo.nlu.GenerateUserSaysResponse,
  /**
   * @param {!proto.ondewo.nlu.GenerateUserSaysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GenerateUserSaysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GenerateUserSaysRequest,
 *   !proto.ondewo.nlu.GenerateUserSaysResponse>}
 */
const methodInfo_AiServices_GenerateUserSays = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GenerateUserSaysResponse,
  /**
   * @param {!proto.ondewo.nlu.GenerateUserSaysRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GenerateUserSaysResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GenerateUserSaysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GenerateUserSaysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GenerateUserSaysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.generateUserSays =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GenerateUserSays',
      request,
      metadata || {},
      methodDescriptor_AiServices_GenerateUserSays,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GenerateUserSaysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GenerateUserSaysResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.generateUserSays =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GenerateUserSays',
      request,
      metadata || {},
      methodDescriptor_AiServices_GenerateUserSays);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GenerateResponsesRequest,
 *   !proto.ondewo.nlu.GenerateResponsesResponse>}
 */
const methodDescriptor_AiServices_GenerateResponses = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/GenerateResponses',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GenerateResponsesRequest,
  proto.ondewo.nlu.GenerateResponsesResponse,
  /**
   * @param {!proto.ondewo.nlu.GenerateResponsesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GenerateResponsesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GenerateResponsesRequest,
 *   !proto.ondewo.nlu.GenerateResponsesResponse>}
 */
const methodInfo_AiServices_GenerateResponses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GenerateResponsesResponse,
  /**
   * @param {!proto.ondewo.nlu.GenerateResponsesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GenerateResponsesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GenerateResponsesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GenerateResponsesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GenerateResponsesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.generateResponses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GenerateResponses',
      request,
      metadata || {},
      methodDescriptor_AiServices_GenerateResponses,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GenerateResponsesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GenerateResponsesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.generateResponses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GenerateResponses',
      request,
      metadata || {},
      methodDescriptor_AiServices_GenerateResponses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAlternativeSentencesRequest,
 *   !proto.ondewo.nlu.GetAlternativeSentencesResponse>}
 */
const methodDescriptor_AiServices_GetAlternativeSentences = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/GetAlternativeSentences',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetAlternativeSentencesRequest,
  proto.ondewo.nlu.GetAlternativeSentencesResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAlternativeSentencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAlternativeSentencesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetAlternativeSentencesRequest,
 *   !proto.ondewo.nlu.GetAlternativeSentencesResponse>}
 */
const methodInfo_AiServices_GetAlternativeSentences = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GetAlternativeSentencesResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAlternativeSentencesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAlternativeSentencesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetAlternativeSentencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GetAlternativeSentencesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetAlternativeSentencesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.getAlternativeSentences =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetAlternativeSentences',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetAlternativeSentences,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetAlternativeSentencesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetAlternativeSentencesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.getAlternativeSentences =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetAlternativeSentences',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetAlternativeSentences);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse>}
 */
const methodDescriptor_AiServices_GetAlternativeTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest,
  proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse>}
 */
const methodInfo_AiServices_GetAlternativeTrainingPhrases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.getAlternativeTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetAlternativeTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetAlternativeTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetAlternativeTrainingPhrasesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.getAlternativeTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetAlternativeTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetAlternativeTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetSynonymsRequest,
 *   !proto.ondewo.nlu.GetSynonymsResponse>}
 */
const methodDescriptor_AiServices_GetSynonyms = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.AiServices/GetSynonyms',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetSynonymsRequest,
  proto.ondewo.nlu.GetSynonymsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetSynonymsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetSynonymsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ondewo.nlu.GetSynonymsRequest,
 *   !proto.ondewo.nlu.GetSynonymsResponse>}
 */
const methodInfo_AiServices_GetSynonyms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ondewo.nlu.GetSynonymsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetSynonymsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetSynonymsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetSynonymsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ondewo.nlu.GetSynonymsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetSynonymsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AiServicesClient.prototype.getSynonyms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetSynonyms',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetSynonyms,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetSynonymsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetSynonymsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AiServicesPromiseClient.prototype.getSynonyms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.AiServices/GetSynonyms',
      request,
      metadata || {},
      methodDescriptor_AiServices_GetSynonyms);
};


module.exports = proto.ondewo.nlu;

