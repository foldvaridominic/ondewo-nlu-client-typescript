import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_server_statistics_pb from '../../ondewo/nlu/server_statistics_pb';


export class ServerStatisticsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getProjectCount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_common_pb.StatResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

  getUserProjectCount(
    request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_common_pb.StatResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

  getUserCount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ondewo_nlu_common_pb.StatResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

}

export class ServerStatisticsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getProjectCount(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_common_pb.StatResponse>;

  getUserProjectCount(
    request: ondewo_nlu_server_statistics_pb.GetUserProjectCountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_common_pb.StatResponse>;

  getUserCount(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_common_pb.StatResponse>;

}

