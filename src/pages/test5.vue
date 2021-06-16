<template>
  <div class="hello">
<!--    <kityMinder :importJson="importJson" @minder="minderHandle" />-->
    67890



  </div>
</template>

<script>

export default {
  name: '333',
  props: {
    msg: String
  },
  mounted() {
    console.log('333')
  },
  data(){
    return{
      importJson: {
        'data': {
          'id': 2,
          'text': 'Design project',
          'image': require('../assets/logo.png'),
          'imageSize': { 'width': 200, 'height': 200 }
        },
        'children': [
          {
            'data': { 'text': 'Designsy', 'priority': 1, 'id': 3 },
            'children': [
              {
                'data': { 'text': 'Designsy', 'id': 4 },
                'children': [
                  { 'data': { 'text': 'Designsy', 'id': 5 } },
                  { 'data': { 'text': 'Designsy', 'id': 5 } },
                  { 'data': { 'text': 'Designsy', 'id': 5 } },
                ]
              },
              { 'data': { 'text': 'Designsy', 'id': 5 } },
              { 'data': { 'text': 'Designsy', 'id': 62 } },
              { 'data': { 'text': 'Designsy', 'id': 73 } },
              { 'data': { 'text': 'Designsy', 'id': 84 } }
            ]
          },
          { 'data': { 'text': 'Designsy', 'priority': 2, 'id': 9 } },
          { 'data': { 'text': 'Designsy', 'priority': 3, 'id': 102 } },
          { 'data': { 'text': 'Designsy', 'priority': 4, 'id': 113 } },
          { 'data': { 'text': 'Designsy', 'priority': 5, 'id': 124 } }
        ]
      }
    }
  },
  methods:{
    minderHandle(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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

span.emoji {
  display: -moz-inline-box;
  -moz-box-orient: vertical;
  display: inline-block;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  width: 1em;
  height: 1em;
  background-size: 1em;
  background-repeat: no-repeat;
  text-indent: -9999px;
  background-position: 50%, 50%;
  background-size: contain;
}

span.emoji-sizer {
  line-height: 0.81em;
  font-size: 1em;
  margin: -2px 0;
}

span.emoji-outer {
  display: -moz-inline-box;
  display: inline-block;
  *display: inline;
  height: 1em;
  width: 1em;
}

span.emoji-inner {
  display: -moz-inline-box;
  display: inline-block;
  text-indent: -9999px;
  width: 100%;
  height: 100%;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 1;
}

img.emoji {
  width: 1em;
  height: 1em;
}

</style>
