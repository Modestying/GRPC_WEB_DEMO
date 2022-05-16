<template>
  <div class="button-size-demo">

    <a-button type="primary" @click="hello">demo测试</a-button>
    <br>
 </div>
</template>

<script>
import {HelloRequest} from '../proto/hello_pb'
import {HelloServiceClient} from '../proto/hello_grpc_web_pb'

export default {
  name: 'HelloWorld',
  data(){

  },
  methods: {
    hello:function() {
      console.log('enter testResponse')
      this.client = new HelloServiceClient(
        'http://192.168.10.152:8509',
        null,
        null
      )
      //var metadata={"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTEwMjc1NDIsImlzcyI6IjQyc2dqOEs0ZGJLNEh5REgwUm8xVXNxVzk0YUhoZnJHIiwibmFtZSI6IjEifQ.2JlDTS-BITgb1TL1azkvE755O6_-URTDj_Hs2g6hQkQ"}
      const request = new HelloRequest()
      request.setGreeting('hi')
      this.client.sayHello(request, (err, response) => {
        if (err) {
          console.log(
            `Unexpected error for login: code = ${err.code}` +
            `, message = "${err.message}"`)

        } else {
          console.log(response.getReply())
        }
      })
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button-size-demo > button {
  margin-right: 8px;
}
.button-size-demo > button {
  margin-right: 8px;
}
</style>
