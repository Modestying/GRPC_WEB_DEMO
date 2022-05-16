# GRPC-WEB demo

proto 
need plugin `protoc-gen-grpc-web`

proto-gen-grpc-web address:`https://github.com/protocolbuffers/protobuf/releases`,add file to `$PATH` in `~/,profile`


make command

`> protoc -I=./ *.proto --js_out=import_style=commonjs:./ --plugin=protoc-gen-grpc=./protoc-gen-grpc-web  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./`

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## errors:
1. `proto is not defined` in hello_pb.js

solve: Add `/*eslint-disable*/` line 1(hello_pb.js)

2. Module cannot find google-protobuf

soleve: `yarn add google-protobuf`