<template>
  <div class="hello">
    <div @click="getEmoji">点我</div>
    <div id="out3"  style="width:100px;height:100px"></div>



  </div>
</template>

<script>
var EmojiConvertor = require('emoji-js');

var emoji = new EmojiConvertor();
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    getEmoji(){

        emoji.replace_mode = 'img';
        // emoji.img_set = 'apple';
      emoji.img_sets.apple.path = 'https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/6.0.1/img/apple/64/';
      // let imgs = ':musical_keyboard:,:trumpet:,:violin:,:musical_score:,:running_shirt_with_sash:,:tennis:,:ski:,:basketball:,:checkered_flag:,:snowboarder:,:woman-running:,:man-running:,:woman-surfing:,:man-surfing:,:sports_medal:,:trophy:,:horse_racing:,:football:,:rugby_football:,:woman-swimming:,:man-swimming:,:woman-lifting-weights:,:man-lifting-weights:,:woman-golfing:,:man-golfing:,:racing_motorcycle:,:racing_car:,:cricket_bat_and_ball:,:volleyball:,:field_hockey_stick_and_ball:,:ice_hockey_stick_and_puck:,:table_tennis_paddle_and_ball:,:snow_capped_mountain:,:camping:,:beach_with_umbrella:,:building_construction:,:house_buildings:,:cityscape:,:derelict_house_building:,:classical_building:,:desert:,:desert_island:,:national_park:,:stadium:,:house:,:house_with_garden:,:office:,:post_office:,:european_post_office:,:hospital:,:bank:,:atm:,:hotel:,:love_hotel:,:convenience_store:,:school:,:department_store:,:factory:,:izakaya_lantern:,:japanese_castle:,:european_castle:,:rainbow-flag:,:waving_white_flag:,:flag-england:,:flag-scotland:,:flag-wales:,:waving_black_flag:,:rosette:,:label:,:badminton_racquet_and_shuttlecock:,:bow_and_arrow:,:amphora:,:skin-tone-2:,:skin-tone-3:,:skin-tone-4:,:skin-tone-5:,:skin-tone-6:,:rat:,:mouse2:,:ox:,:water_buffalo:,:cow2:,:tiger2:,:leopard:,:rabbit2:,:cat2:,:dragon:,:crocodile:,:whale2:,:snail:,:snake:,:racehorse:,:ram:,:goat:,:sheep:,:monkey:,:rooster:,:chicken:,:dog2:,:pig2:,:boar:,:elephant:,:octopus:,:shell:,:bug:,:ant:,:bee:,:beetle:,:fish:,:tropical_fish:,:blowfish:,:turtle:,:hatching_chick:,:baby_chick:,:hatched_chick:,:bird:,:penguin:,:koala:,:poodle:,:dromedary_camel:,:camel:,:dolphin:,:mouse:,:cow:,:tiger:,:rabbit:,:cat:,:dragon_face:,:whale:,:horse:,:monkey_face:,:dog:,:pig:,:frog:,:hamster:,:wolf:,:bear:,:panda_face:,:pig_nose:,:feet:,:chipmunk:,:eyes:,:eye-in-speech-bubble:,:eye:,:ear:,:nose:,:lips:,:tongue:,:point_up_2:,:point_down:,:point_left:,:point_right:,:facepunch:,:wave:,:ok_hand:,:+1:,:-1:,:clap:,:open_hands:,:crown:,:womans_hat:,:eyeglasses:,:necktie:,:shirt:,:jeans:,:dress:,:kimono:,:bikini:,:womans_clothes:,:purse:,:handbag:,:pouch:,:mans_shoe:,:athletic_shoe:,:high_heel:,:sandal:,:boot:,:footprints:,:bust_in_silhouette:,:busts_in_silhouette:,:boy:,:girl:,:male-farmer:,:male-cook:,:male-student:,:male-singer:,:male-artist:,:male-teacher:,:male-factory-worker:,:man-boy-boy:,:man-boy:,:man-girl-boy:,:man-girl-girl:,:man-girl:,:man-man-boy:,:man-man-boy-boy:,:man-man-girl:,:man-man-girl-boy:,:man-man-girl-girl:,:man-woman-boy:,:man-woman-boy-boy:,:man-woman-girl:,:man-woman-girl-boy:,:man-woman-girl-girl:,:male-technologist:,:male-office-worker:,:male-mechanic:,:male-scientist:,:male-astronaut:,:male-firefighter:,:male-doctor:,:male-judge:,:male-pilot:,:man-heart-man:,:man-kiss-man:,:man:,:female-farmer:,:female-cook:,:female-student:,:female-singer:,:female-artist:,:female-teacher:,:female-factory-worker:,:woman-boy-boy:,:woman-boy:,:woman-girl-boy:,:woman-girl-girl:,:woman-girl:,:woman-woman-boy:,:woman-woman-boy-boy:,:woman-woman-girl:,:woman-woman-girl-boy:,:woman-woman-girl-girl:,:female-technologist:,:female-office-worker:,:female-mechanic:,:female-scientist:,:female-astronaut:,:female-firefighter:,:female-doctor:,:female-judge:,:female-pilot:,:woman-heart-man:,:woman-heart-woman:,:woman-kiss-man:,:woman-kiss-woman:,:woman:,:couple:,:two_men_holding_hands:,:two_women_holding_hands:,:female-police-officer:,:male-police-officer:,:woman-with-bunny-ears-partying:,:man-with-bunny-ears-partying:,:bride_with_veil:,:blond-haired-woman:,:blond-haired-man:,:man_with_gua_pi_mao:,:woman-wearing-turban:,:man-wearing-turban:,:older_man:,:older_woman:,:baby:,:female-construction-worker:,:male-construction-worker:,:princess:,:japanese_ogre:,:japanese_goblin:,:ghost:,:angel:,:alien:,:space_invader:,:imp:,:skull:,:woman-tipping-hand:,:man-tipping-hand:,:female-guard:,:male-guard:,:dancer:,:lipstick:,:nail_care:,:woman-getting-massage:,:man-getting-massage:,:woman-getting-haircut:,:man-getting-haircut:,:barber:,:syringe:,:pill:,:kiss:,:love_letter:,:ring:,:gem:,:bouquet:,:wedding:,:heartbeat:,:broken_heart:,:two_hearts:,:sparkling_heart:,:heartpulse:,:cupid:,:blue_heart:,:green_heart:,:yellow_heart:,:purple_heart:,:gift_heart:,:revolving_hearts:,:heart_decoration:,:diamond_shape_with_a_dot_inside:,:bulb:,:anger:,:bomb:,:zzz:,:boom:,:sweat_drops:,:droplet:,:dash:,:hankey:,:muscle:,:dizzy:,:speech_balloon:,:thought_balloon:,:white_flower:,:100:,:moneybag:,:currency_exchange:,:heavy_dollar_sign:,:credit_card:,:yen:,:dollar:,:euro:,:pound:,:money_with_wings:,:chart:,:seat:,:computer:,:briefcase:,:minidisc:,:floppy_disk:,:cd:,:dvd:,:file_folder:,:open_file_folder:,:page_with_curl:,:page_facing_up:,:date:,:calendar:,:card_index:,:chart_with_upwards_trend:,:chart_with_downwards_trend:,:bar_chart:,:clipboard:,:pushpin:,:round_pushpin:,:paperclip:,:straight_ruler:,:triangular_ruler:,:bookmark_tabs:,:ledger:,:notebook:,:notebook_with_decorative_cover:,:closed_book:,:book:,:green_book:,:bl'
      let list = []
      let list2 = []
      for (let key in emoji.data){

        list.push(emoji.data[key][3])
      }
      let arr  = list.slice(1000,1529)
      list2 = arr.map(v=>`:${v[0]}:`)
      var out = emoji.replace_colons(list2.join(','));
      // console.log(list2.join(','))
      document.getElementById('out3').innerHTML = out;


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
