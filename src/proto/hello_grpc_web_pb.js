/**
 * @fileoverview gRPC-Web generated client stub for hello
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hello = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.HelloServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.HelloServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

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
 *   !proto.hello.HelloRequest,
 *   !proto.hello.HelloResponse>}
 */
const methodDescriptor_HelloService_SayHello = new grpc.web.MethodDescriptor(
  '/hello.HelloService/SayHello',
  grpc.web.MethodType.UNARY,
  proto.hello.HelloRequest,
  proto.hello.HelloResponse,
  /**
   * @param {!proto.hello.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.hello.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hello.HelloServiceClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hello.HelloService/SayHello',
      request,
      metadata || {},
      methodDescriptor_HelloService_SayHello,
      callback);
};


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hello.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.hello.HelloServicePromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hello.HelloService/SayHello',
      request,
      metadata || {},
      methodDescriptor_HelloService_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hello.HelloRequest,
 *   !proto.hello.HelloResponse>}
 */
const methodDescriptor_HelloService_LotsOfReplies = new grpc.web.MethodDescriptor(
  '/hello.HelloService/LotsOfReplies',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.hello.HelloRequest,
  proto.hello.HelloResponse,
  /**
   * @param {!proto.hello.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.hello.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.hello.HelloServiceClient.prototype.lotsOfReplies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hello.HelloService/LotsOfReplies',
      request,
      metadata || {},
      methodDescriptor_HelloService_LotsOfReplies);
};


/**
 * @param {!proto.hello.HelloRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.hello.HelloServicePromiseClient.prototype.lotsOfReplies =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/hello.HelloService/LotsOfReplies',
      request,
      metadata || {},
      methodDescriptor_HelloService_LotsOfReplies);
};


module.exports = proto.hello;

