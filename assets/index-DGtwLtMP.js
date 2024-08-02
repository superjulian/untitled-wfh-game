var e=Object.defineProperty,t=(t,s,i)=>((t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i)(t,"symbol"!=typeof s?s+"":s,i);import{p as s,P as i}from"./phaser-DqFVsdsa.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class a extends s.Scene{constructor(){super("Boot")}preload(){this.load.image("welcome-background","assets/backgrounds/welcome-screen-background.png")}create(){this.add.image(350,250,"welcome-background"),this.scene.start("Preloader")}}class o extends s.Scene{constructor(){super("Game"),t(this,"camera"),t(this,"background"),t(this,"msg_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(65280),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.msg_text=this.add.text(512,384,"Make something fun!\nand share it with us:\nsupport@phaser.io",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.msg_text.setOrigin(.5)}}function n(e,t=25){if(!e)return;const s=e.text,i=s.replace(/[^ ]/g," ");e.text="";let a="";return new Promise((o=>{const n=e.scene.time.addEvent({delay:t,loop:!0,callback(){if(e.text===s)return n.destroy(),o();a+=s[a.length];const t=i.substring(a.length);e.text=a+t}})}))}var h=(e=>(e.aloe="aloe",e.diffen="diffen",e.poth="poth",e))(h||{});const r=(e,t)=>{const s=d[t].healthNum;e[t][s].visible=!0,[1,2,3,4].map((i=>{i!==s&&(e[t][i].visible=!1)}))},d={diffen:{name:"Dieffenbachia",healthNum:1,health:"Poor",water:0,sunlight:0,waterGoal:-80,sunGoal:50},aloe:{name:"Aloe",healthNum:1,health:"Poor",water:0,sunlight:0,waterGoal:50,sunGoal:-80},poth:{name:"Pothos",healthNum:1,health:"Poor",water:0,sunlight:0,waterGoal:-60,sunGoal:-60}};let l="diffen";const c=e=>{l=e},p=()=>{for(const e in d){const t=Math.abs(d[e].water-d[e].waterGoal),s=Math.abs(d[e].sunlight-d[e].sunGoal);t<10&&s<10?(d[e].health="Amazing",d[e].healthNum=4):t<20&&s<20?(d[e].health="Great",d[e].healthNum=3):t<30&&s<30?(d[e].health="Good",d[e].healthNum=2):(d[e].health="Poor",d[e].healthNum=1)}};let g=!0;const u=e=>g=e;let m=0;const f=()=>m++;let b=0;const y=()=>b++;let k=0;const v=()=>k++;let w=0;const x=()=>w++;let S=0;const C=()=>{console.log("meetVisits",S),S++,console.log("meetVisits",S)};let H=0,O=!1,P=!1,I=!1,z=0;const V=e=>{e[0].setVisible(!1),e[1].setVisible(!0),e.push(e.shift()),z++,console.log(z)};let B="You got a lot done today!";class D extends s.Scene{constructor(){super("GameOver"),t(this,"camera"),t(this,"background")}create(){this.sound.add("emailNoti").play({seek:.2}),console.log(O),d.aloe.healthNum>2&&d.diffen.healthNum>2&&d.poth.healthNum>2&&(B="You are a plant wizard! \n\nAfter work, enjoy your oxygen \n\nrich home."),O&&(B="It was an ok day, \n\nMaybe tomorrow you can clean your \n\nroom before the meeting starts."),P||(B="You weren't able to squish \n\nall the bugs today... \n\nyou'll get to it tomorrow!"),H>10&&(B="You were so slammed with meetings\n\nthat you didn't get much done... \n\nOh well, you'll have more\n\nfocus time tomorrow!"),k>5&&(B="Your cat knocked coffee on your \n\nkeyboard. Your computer broke and \n\nyou have to sign off early."),I&&(B="You drank too much coffee\n\nYou aren't feeling well and have to\n\nsign off early"),this.background=this.add.image(350,250,"GameOver"),this.background.setScale(.7),this.add.text(250,170,"Time to log off",{fontSize:20,color:"#7fafb0",align:"center"}),this.add.text(250,210,B,{fontSize:14,color:"#7fafb0"});const e=this.add.zone(185,370,70,20);e.setInteractive({useHandCursor:!0}),e.on("pointerup",(()=>{location.reload()}));const t=this.add.zone(540,125,25,20);t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{location.reload()}));const s=this.add.image(495,365,"creditsButton");s.setInteractive({useHandCursor:!0}),s.on("pointerup",(()=>{this.scene.stop("Desktop"),this.scene.stop("GoogleMeet"),this.scene.stop("PlantLady"),this.scene.stop("Office"),this.scene.launch("Credits"),this.scene.stop("GameOver")}))}}class M extends s.Scene{constructor(){super("Welcome")}create(){this.add.image(0,0,"start-screen").setOrigin(0),this.add.image(280,90,"room-3d").setOrigin(0),this.add.image(43,46,"title").setOrigin(0);const e=this.add.image(74,252,"start").setOrigin(0),t=this.add.image(74,310,"credits").setOrigin(0);this.add.image(600,65,"unionBug").setScale(.05);const s=this.add.image(50,262,"arrow");s.setVisible(!1);const i=this.add.image(50,320,"arrow");i.setVisible(!1),e.setInteractive({useHandCursor:!0}),e.on("pointerup",(()=>{this.scene.launch("Office"),this.scene.stop("Welcome")})),t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{this.scene.launch("Credits"),this.scene.stop("Welcome")})),e.on("pointerover",(()=>{s.setVisible(!0)})),e.on("pointerout",(()=>{s.setVisible(!1)})),t.on("pointerover",(()=>{i.setVisible(!0),console.log("hover")})),t.on("pointerout",(()=>{i.setVisible(!1),console.log("moved")}))}}class G extends s.Scene{constructor(){super("Credits"),t(this,"credits")}create(){this.add.rectangle(0,0,700,500,0).setOrigin(0),this.credits=this.add.text(195,200,"Credits        \n         \n Game By:        \n Hope Fourie,        \n Julian Meltzer,        \n Frances Dai        \n         \n With Additional Graphics By:        \n Crystal Wang,        \n Meagan Hughes        \n         \n Thinktank Contributors:        \n Shay Culpepper,        \n Eric Katz        \n         \n This project is union made.        \n Thank you for playing!         \n ",{color:"#F8D85F",fontSize:"14px",align:"center",fontFamily:"dogicapixel"}),this.add.image(0,0,"credits-bg").setOrigin(0);const e=this.add.sprite(274,277,"fire",0).setOrigin(0);this.anims.create({key:"flames",frames:this.anims.generateFrameNumbers("fire",{start:0,end:1}),frameRate:2,repeat:-1}),e.anims.play("flames")}update(){this.credits.y-=.2}}class _ extends s.Scene{constructor(){super("Office"),t(this,"background"),t(this,"plantMap"),t(this,"timestable"),t(this,"peeBar"),t(this,"backBar")}create(){this.add.image(356,108,"sky").scale=.5,this.background=this.add.image(350,250,"office"),this.sound.add("emailNoti"),this.add.image(356,470,"rug"),this.add.image(230,182,"books"),this.add.image(354,356,"desk"),this.add.image(422,354,"chair");const e=this.add.image(350,250,"laptop"),t=this.add.image(424,189,"pots");this.add.image(626,128,"pictures"),this.add.image(120,388,"trash");const s=this.add.image(280,260,"mug"),i=this.add.text(540,6,"Pee Meter",{color:"#000000",fontSize:"14px"}).setOrigin(0);this.backBar=this.add.rectangle(540,20,150,20,0).setOrigin(0),this.peeBar=this.add.rectangle(543,23,0,14,16771584).setOrigin(0),this.peeBar.setVisible(!1),this.backBar.setVisible(!1),i.setVisible(!1),this.add.image(80,150,"clock");const a=this.add.image(97,78,"9am"),o=this.add.image(107,78,"12pm");o.setVisible(!1);const n=this.add.image(104,93,"2pm");n.setVisible(!1);const d=this.add.image(103,78,"5pm");d.setVisible(!1),this.timestable=[a,o,o,n,d];const l=this.sound.add("meow");this.add.image(35,330,"catTree");const c=this.add.image(30,298,"cat"),g=this.add.image(31,260,"heart");g.setVisible(!1),c.setInteractive(),c.on("pointerover",(()=>{g.setVisible(!0)})),c.on("pointerout",(()=>{g.setVisible(!1)})),c.on("pointerup",(()=>{l.play({mute:!1,volume:.25}),v()}));const m=this.add.image(422,168,"aloe1"),f=this.add.image(372,158,"diffen1");f.flipX=!0;const b=this.add.image(468,166,"poth1"),y=this.add.image(422,166,"aloe2"),k=this.add.image(384,152,"diffen2"),w=this.add.image(476,160,"poth2"),x=this.add.image(424,162,"aloe3"),S=this.add.image(386,146,"diffen3"),C=this.add.image(484,175,"poth3"),H=this.add.image(423,159,"aloe4"),O=this.add.image(386,148,"diffen4"),P=this.add.image(486,183,"poth4");this.plantMap={aloe:{1:m,2:y,3:x,4:H},diffen:{1:f,2:k,3:S,4:O},poth:{1:b,2:w,3:C,4:P}},r(this.plantMap,h.diffen),r(this.plantMap,h.poth),r(this.plantMap,h.aloe),t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{this.scene.pause("Office"),this.scene.launch("PlantGame")})),s.setInteractive({useHandCursor:!0}),s.on("pointerup",(()=>{this.peeBar.setVisible(!0),this.backBar.setVisible(!0),i.setVisible(!0),this.peeBar.width+=14})),e.setInteractive({useHandCursor:!0}),e.on("pointerup",(()=>{this.scene.launch("Desktop"),p(),u(!0),r(this.plantMap,h.diffen),r(this.plantMap,h.poth),r(this.plantMap,h.aloe),this.scene.pause("Office")}))}update(){this.peeBar.width>this.backBar.width&&(this.peeBar.width=0,I=!0,this.scene.pause("Office"),this.scene.launch("Desktop"),this.scene.pause("Desktop"),this.scene.launch("GameOver")),5===k&&(v(),this.scene.pause("Office"),this.scene.launch("Desktop"),this.scene.pause("Desktop"),this.scene.launch("GameOver")),2===m&&(f(),V(this.timestable)),1===w&&(x(),V(this.timestable)),1===b&&(y(),V(this.timestable)),1===S&&(console.log("in if"),C(),V(this.timestable)),4===z&&this.time.addEvent({delay:1200,callback:()=>{this.scene.launch("Desktop"),this.scene.launch("GameOver"),this.scene.pause("Office")}})}}class A extends s.Scene{constructor(){super("Desktop")}create(){const e=this.sound.add("meetSound");this.add.image(350,250,"bg-laptop"),this.add.image(351,244,"desktop");const t=this.add.image(570,170,"gcal"),s=this.add.image(570,120,"vscode"),i=this.add.image(575,220,"meet"),a=this.add.image(570,265,"leaf");a.setScale(1.5).setAngle(45),s.setInteractive({useHandCursor:!0}),s.on("pointerup",(()=>{this.scene.launch("Laptop"),this.scene.pause("Desktop")})),i.setInteractive({useHandCursor:!0}),i.on("pointerdown",(()=>{e.play({seek:.5})})),i.on("pointerup",(()=>{this.scene.launch("GoogleMeet")})),t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{this.scene.launch("Calendar"),this.scene.pause("Desktop")})),a.setInteractive({useHandCursor:!0}),a.on("pointerup",(()=>{this.scene.launch("PlantLady")}));const o=this.add.rectangle(625,45,15,15,0).setOrigin(0);this.add.text(628,45,"x").setOrigin(0),o.setInteractive({useHandCursor:!0}),o.on("pointerup",(()=>{this.scene.stop("Desktop"),this.scene.stop("Laptop"),this.scene.resume("Office")}))}}class E extends s.Scene{constructor(){super("PlantGame"),t(this,"background"),t(this,"plantMap")}create(){g&&(p(),u(!1)),this.background=this.add.image(350,250,"plantGame");const e=this.add.image(212,356,"bigDiffen1"),t=this.add.image(448,330,"bigPoth1"),s=this.add.image(338,320,"bigAloe1"),i=this.add.image(192,326,"bigDiffen2"),a=this.add.image(460,290,"bigPoth2"),o=this.add.image(338,286,"bigAloe2"),n=this.add.image(458,290,"bigPoth3"),d=this.add.image(196,280,"bigDiffen3"),l=this.add.image(358,266,"bigAloe3"),m=this.add.image(488,270,"bigPoth4"),b=this.add.image(224,256,"bigDiffen4"),y=this.add.image(318,270,"bigAloe4");this.plantMap={aloe:{1:s,2:o,3:l,4:y},diffen:{1:e,2:i,3:d,4:b},poth:{1:t,2:a,3:n,4:m}},r(this.plantMap,h.diffen),r(this.plantMap,h.poth),r(this.plantMap,h.aloe),t.setInteractive({useHandCursor:!0}),t.on("pointerup",(()=>{c(h.poth),this.scene.launch("PlantHealth")})),a.setInteractive({useHandCursor:!0}),a.on("pointerup",(()=>{c(h.poth),this.scene.launch("PlantHealth")})),n.setInteractive({useHandCursor:!0}),n.on("pointerup",(()=>{c(h.poth),this.scene.launch("PlantHealth")})),m.setInteractive({useHandCursor:!0}),m.on("pointerup",(()=>{c(h.poth),this.scene.launch("PlantHealth")})),s.setInteractive({useHandCursor:!0}),s.on("pointerup",(()=>{c(h.aloe),this.scene.launch("PlantHealth")})),o.setInteractive({useHandCursor:!0}),o.on("pointerup",(()=>{c(h.aloe),this.scene.launch("PlantHealth")})),l.setInteractive({useHandCursor:!0}),l.on("pointerup",(()=>{c(h.aloe),this.scene.launch("PlantHealth")})),y.setInteractive({useHandCursor:!0}),y.on("pointerup",(()=>{c(h.aloe),this.scene.launch("PlantHealth")})),e.setInteractive({useHandCursor:!0}),e.on("pointerup",(()=>{c(h.diffen),this.scene.launch("PlantHealth")})),i.setInteractive({useHandCursor:!0}),i.on("pointerup",(()=>{c(h.diffen),this.scene.launch("PlantHealth")})),d.setInteractive({useHandCursor:!0}),d.on("pointerup",(()=>{c(h.diffen),this.scene.launch("PlantHealth")})),b.setInteractive({useHandCursor:!0}),b.on("pointerup",(()=>{c(h.diffen),this.scene.launch("PlantHealth")}));const k=this.add.rectangle(610,70,15,15,0).setOrigin(0);this.add.text(613,70,"x").setOrigin(0),k.setInteractive({useHandCursor:!0}),k.on("pointerup",(()=>{f(),this.scene.stop("PlantHealth"),this.scene.stop("PlantGame"),this.scene.resume("Office")}))}}class N extends s.Scene{constructor(){super("GoogleMeet"),t(this,"isPicStraight"),t(this,"isClothesAway"),t(this,"isBooksShelved"),t(this,"alert"),t(this,"success"),t(this,"tooSlow"),t(this,"text"),t(this,"timedEvent"),t(this,"hasWon")}create(){this.hasWon=!1,this.add.image(350,250,"googleMeet"),this.add.image(355,290,"bed"),this.add.image(495,280,"shelf"),this.add.image(210,264,"closet");const e=this.add.image(347,233,"crooked"),t=this.add.image(230,325,"floorBook"),s=this.add.image(350,230,"pictures-bed");s.setVisible(!1);const i=this.add.image(490,282,"shelfBooks");i.setVisible(!1);const a=this.add.image(390,298,"clothes");this.text=this.add.text(180,160,"",{fontSize:12}),this.timedEvent=this.time.delayedCall(24e3,this.onEvent,[],this),this.alert=this.add.image(355,230,"alert"),this.alert.setVisible(!1),this.success=this.add.image(351,243,"success"),this.success.setVisible(!1),this.tooSlow=this.add.image(350,230,"tooSlow"),this.tooSlow.setVisible(!1),this.isPicStraight=!1,this.isClothesAway=!1,this.isBooksShelved=!1,e.setInteractive(),e.on("pointerup",(()=>{e.setVisible(!1),s.setVisible(!0),this.isPicStraight=!0})),a.setInteractive({draggable:!0}),a.on("drag",(function(e,t,s){a.x=t,a.y=s})),a.on("pointerup",(()=>{this.input.x<232&&this.input.x>187&&this.input.y<328&&this.input.y>199&&(a.setVisible(!1),this.isClothesAway=!0)})),t.setInteractive({draggable:!0}),t.on("drag",(function(e,s,i){t.x=s,t.y=i})),t.on("pointerup",(()=>{this.input.x<535&&this.input.x>453&&this.input.y<353&&this.input.y>211&&(t.setVisible(!1),i.setVisible(!0),this.isBooksShelved=!0)}));const o=this.add.zone(152,141,7,7).setOrigin(0);o.setInteractive({useHandCursor:!0}),o.on("pointerup",(()=>{C(),this.scene.stop("GoogleMeet")}));const n=this.add.rectangle(625,45,15,15,0).setOrigin(0);this.add.text(628,45,"x").setOrigin(0),n.setInteractive({useHandCursor:!0}),n.on("pointerup",(()=>{C(),this.scene.stop("Desktop"),this.scene.stop("GoogleMeet"),this.scene.resume("Office")}))}update(){if(!this.hasWon){let e=(100*(1-this.timedEvent.getProgress())).toFixed(0);this.text.setText(`Clean your room before someone joins the meeting! \nTime remaining: ${e}`)}this.isBooksShelved&&this.isClothesAway&&this.isPicStraight&&(this.hasWon=!0,this.alert.setVisible(!0),this.success.setVisible(!0))}onEvent(){this.hasWon||(O=!0,this.alert.setVisible(!0),this.tooSlow.setVisible(!0))}}class F extends s.Scene{constructor(){super("PlantHealth")}create(){d[l].health,this.add.image(350,80,"textbox2"),this.add.text(220,40,`${d[l].name}`,{fontSize:14,color:"#000000",align:"center"}).setOrigin(0),this.add.text(485,40,`Health: ${d[l].health}`,{fontSize:14,color:"#000000",align:"center"}).setOrigin(1,0),this.add.text(220,65,"Water",{fontSize:14,color:"#000000",align:"center"}).setOrigin(0),this.add.text(220,90,"Sunlight",{fontSize:14,color:"#000000",align:"center"}).setOrigin(0);const e=this.add.container(395,73),t=this.add.rectangle(0,0,180,3,0),s=this.add.rectangle(d[l].water,0,6,15,620905);e.add([t,s]),s.setInteractive({draggable:!0}),s.on("drag",(function(e,t,i){s.x=Phaser.Math.Clamp(t,-90,90),d[l].water=s.x})),e.setSize(400,32);const i=this.add.container(395,97),a=this.add.rectangle(0,0,180,3,0),o=this.add.rectangle(d[l].sunlight,0,6,15,620905);i.add([a,o]),o.setInteractive({draggable:!0}),o.on("drag",(function(e,t,s){o.x=Phaser.Math.Clamp(t,-90,90),d[l].sunlight=o.x})),i.setSize(400,32)}}class W extends s.Scene{constructor(){super("PlantLady")}create(){this.add.image(300,280,"plantlady"),this.add.image(270,243,"plant-text");const e=this.add.image(300,320,"poth-text"),t=this.add.image(310,320,"diffen-text");t.visible=!1;const s=this.add.image(295,320,"aloe-text");s.visible=!1;const i=this.add.image(190,320,"left-arrow"),a=this.add.image(430,320,"right-arrow");this.add.image(310,320,"block");let o=[e,t,s];i.setInteractive({useHandCursor:!0}),i.on("pointerup",(()=>{o[0].visible=!1,o[1].visible=!0,o.push(o.shift())})),a.setInteractive({useHandCursor:!0}),a.on("pointerup",(()=>{o[0].visible=!1,o[2].visible=!0,o.unshift(o.pop())}));const n=this.add.zone(112,206,7,7).setOrigin(0);n.setInteractive({useHandCursor:!0}),n.on("pointerup",(()=>{this.scene.stop("PlantLady")}));const h=this.add.rectangle(625,45,15,15,0).setOrigin(0);this.add.text(628,45,"x").setOrigin(0),h.setInteractive({useHandCursor:!0}),h.on("pointerup",(()=>{this.scene.stop("Desktop"),this.scene.stop("PlantLady"),this.scene.resume("Office")}))}}class L extends i.Scene{constructor(){super("Laptop"),t(this,"fist"),t(this,"charge"),t(this,"space"),t(this,"playerImageKey"),t(this,"punching"),t(this,"bugs"),t(this,"squash_power"),t(this,"word_slam"),t(this,"word"),this.charge=0,this.punching=!0,this.bugs=0,this.squash_power=1,this.word=0}init(e){this.playerImageKey=e.playerImageKey}create(){var e,t;this.add.rectangle(350,250,533,370,0),n(this.add.text(105,80,"System Malfunction!! Hit 'Space' to squash some       \ninvasive species.",{color:"#0BDA51",fontSize:"14px"})),n(this.add.text(105,150,"The Spotted Lanternfly (SLF) is an invasive planthopper,      \nfirst discovered in New York City in July 2020. While it can infest trees,      \nit is not considered a widespread threat to our city’s forests.      \nHowever, it is a significant threat to a wide range of agricultural      \ncrops including walnut, grapes, hops, apples, blueberries, and stone fruits.      \n\nSLF adults are very colorful when their wings are displayed during hopping.      \nThey have red hind wings with black spots, have a black head, and a yellow      \nabdomen with black bands. Their grayish forewings have black spots with a      \ndistinctive black brick-like pattern on the tips.      \n\nWhile these insects can jump and fly short distances, they spread mainly      \nthrough human activity. SLF can lay their eggs on any number of surfaces,      \nsuch as vehicles, stone, rusty metal, outdoor furniture, and firewood.      \nAdult SLF can hitch rides in vehicles, on any outdoor item, or cling to      \nclothing or hats, and be easily transported into and throughout New York.",{color:"#0BDA51",fontSize:"10px"})),this.fist=this.physics.add.image(0,-170,"big-fist"),this.fist.setVelocity(400,0),this.fist.setBounce(1,0);const s=this.add.zone(-30,0,100,1e3);this.physics.world.enable(s,1);const a=this.add.zone(680,0,10,1e3);this.physics.world.enable(a,1);const o=this.add.zone(0,500,1e4,100);this.physics.world.enable(o,1);const h=this.add.zone(0,-440,1e4,100);this.physics.world.enable(h,1),this.physics.add.collider(this.fist,s),this.physics.add.collider(this.fist,a),this.physics.add.collider(this.fist,o,(()=>{var e;null==(e=this.fist)||e.setVelocity(0,-600),this.punching=!1})),this.physics.add.overlap(this.fist,h);const r={left:this.add.zone(30,0,100,1e3),right:this.add.zone(620,0,10,1e3),bottom:this.add.zone(0,480,1e4,100),top:this.add.zone(0,25,1e4,100)};for(const i in r)this.physics.world.enable(r[i],1);const d=this.physics.add.group();for(let i=0;i<5;i++)for(let e=0;e<7;e++)Math.random()>.6&&(d.create((130+90*e)%620,150+65*i,"fly"),this.bugs+=1);d.setVelocity(100,100),d.scaleXY(1.5,1.5);for(const i of d.getChildren()){const e=i.body;this.physics.add.existing(i),e.setBounce(1.1,1.1),e.setMaxVelocity(200+300*Math.random());for(const t in r)this.physics.add.collider(r[t],i);e.setAcceleration(20*Math.random(),200*Math.random()),this.physics.add.collider(this.fist,i,(()=>{var e;this.punching&&(i.destroy(),this.bugs+=-1,this.squash_power+=-1,this.squash_power<1&&(null==(e=this.fist)||e.setVelocity(0,-600),this.punching=!1))}))}this.space=null==(t=null==(e=this.input)?void 0:e.keyboard)?void 0:t.addKey(i.Input.Keyboard.KeyCodes.SPACE);const l=this.add.rectangle(625,45,15,15,0).setOrigin(0);this.add.text(628,45,"x").setOrigin(0),l.setInteractive({useHandCursor:!0}),l.on("pointerup",(()=>{y(),this.scene.stop("Desktop"),this.scene.stop("Laptop"),this.scene.resume("Office")}))}update(){var e,t,s,i,a,o,n,h,r,d;this.space.isDown?(this.punching=!1,this.squash_power=1+Math.floor(this.charge/60),this.charge<301?(this.charge+=1,null==(e=this.fist)||e.setVelocity(0,0),null==(t=this.fist)||t.setScale(1,1-this.charge/600)):null==(s=this.fist)||s.setVelocity(0,0)):0!=this.charge?(null==(i=this.fist)||i.setVelocity(0,this.charge**2),this.charge=0,this.punching=!0,null==(a=this.fist)||a.setScale(1,1)):(null==(o=this.fist)?void 0:o.body.touching.up)&&!this.punching&&(null==(n=this.fist)||n.setVelocity(400,0),null==(h=this.fist)||h.setScale(1,1),null==(r=this.fist)||r.setPosition(this.fist.x,-150)),this.bugs<1&&(null==(d=this.fist)||d.destroy(),P=!0,y(),this.scene.stop("Laptop"),this.scene.stop("Desktop"),this.scene.resume("Office"))}}class T extends s.Scene{constructor(){super("Preloader"),t(this,"music")}preload(){this.load.setPath("assets"),this.load.audio("music","sounds/music.mp3"),this.load.audio("emailNoti","sounds/emailNoti.mp3"),this.load.audio("meetSound","sounds/meetSound.mp3"),this.load.audio("meow","sounds/meow.mp3"),this.load.audio("cal-fail","sounds/cal-fail.mp3"),this.load.audio("cal-pass","sounds/cal-pass.mp3"),this.load.image("GameOver","backgrounds/GameOver.png"),this.load.image("creditsButton","creditsButton.png"),this.load.image("start-screen","backgrounds/welcome-screen-background.png"),this.load.image("unionBug","union-bug.png"),this.load.image("arrow","sprites/arrow.png"),this.load.image("credits","sprites/credits-text.png"),this.load.image("room-3d","sprites/room-3d.png"),this.load.image("start","sprites/start-text.png"),this.load.image("title","sprites/title-text.png"),this.load.image("credits-bg","backgrounds/credits-background.png"),this.load.spritesheet("fire","fire-frames.png",{frameWidth:153,frameHeight:79}),this.load.image("sky","backgrounds/sky.png"),this.load.image("office","backgrounds/office.png"),this.load.image("chair","chair.png"),this.load.image("laptop","laptop.png"),this.load.image("rug","rug.png"),this.load.image("mug","mug.png"),this.load.image("desk","desk.png"),this.load.image("books","books.png"),this.load.image("pots","pots.png"),this.load.image("trash","trash.png"),this.load.image("pictures","pictures.png"),this.load.image("diffen1","diffen1.png"),this.load.image("diffen2","diffen2.png"),this.load.image("diffen3","diffen3.png"),this.load.image("diffen4","diffen4.png"),this.load.image("aloe1","aloe1.png"),this.load.image("aloe2","aloe2.png"),this.load.image("aloe3","aloe3.png"),this.load.image("aloe4","aloe4.png"),this.load.image("poth1","poth1.png"),this.load.image("poth2","poth2.png"),this.load.image("poth3","poth3.png"),this.load.image("poth4","poth4.png"),this.load.image("clock","clock.png"),this.load.image("sun","sun.png"),this.load.image("2pm","2pm.png"),this.load.image("9am","9am.png"),this.load.image("12pm","12pm.png"),this.load.image("5pm","5pm.png"),this.load.image("cat","cat.png"),this.load.image("catTree","cat-tree.png"),this.load.image("heart","heart.png"),this.load.image("bg-laptop","backgrounds/laptop.png"),this.load.image("plantlady","backgrounds/plantlady.png"),this.load.image("desktop","backgrounds/desktop.png"),this.load.image("alert","backgrounds/alert.png"),this.load.image("googleMeet","backgrounds/googleMeet.png"),this.load.image("big-fist","sprites/big-fist.png"),this.load.image("small-fist","sprites/small-fist.png"),this.load.image("fly","sprites/fly.png"),this.load.image("slack-box","sprites/slack-box.png"),this.load.image("textbox","sprites/textbox.png"),this.load.image("vscode","vscode.png"),this.load.image("gcal","gcal.png"),this.load.image("aloe-text","aloe-text.png"),this.load.image("diffen-text","diffen-text.png"),this.load.image("poth-text","poth-text.png"),this.load.image("plant-text","plant-text.png"),this.load.image("block","block.png"),this.load.image("left-arrow","left-arrow.png"),this.load.image("right-arrow","right-arrow.png"),this.load.image("bed","bed.png"),this.load.image("closet","closet.png"),this.load.image("clothes","clothes.png"),this.load.image("crooked","crooked.png"),this.load.image("floorBook","floorBook.png"),this.load.image("pictures-bed","pictures-bed.png"),this.load.image("shelf","shelf.png"),this.load.image("shelfBooks","shelfBooks.png"),this.load.image("success","success.png"),this.load.image("tooSlow","tooSlow.png"),this.load.image("meet","meet.png"),this.load.image("leaf","leaf.png"),this.load.image("bg-laptop","backgrounds/laptop.png"),this.load.image("cal-overlay","backgrounds/cal-overlay.png"),this.load.spritesheet("very-important-meeting","sprites/very-important-meeting.png",{frameWidth:72,frameHeight:36}),this.load.spritesheet("biquarterly-review","sprites/biquarterly-review.png",{frameWidth:72,frameHeight:36}),this.load.spritesheet("bicostal-review","sprites/bicostal-review.png",{frameWidth:72,frameHeight:36}),this.load.spritesheet("bicentennial-review","sprites/bicentennial-review.png",{frameWidth:72,frameHeight:36}),this.load.spritesheet("quick-sync","sprites/quick-sync.png",{frameWidth:72,frameHeight:80}),this.load.spritesheet("ticker","sprites/ticker-sheet.png",{frameWidth:74,frameHeight:9}),this.load.image("textbox2","textbox.png"),this.load.image("bigDiffen1","plants/diffen1.png"),this.load.image("bigDiffen2","plants/diffen2.png"),this.load.image("bigDiffen3","plants/diffen3.png"),this.load.image("bigDiffen4","plants/diffen4.png"),this.load.image("bigAloe1","plants/aloe1.png"),this.load.image("bigAloe2","plants/aloe2.png"),this.load.image("bigAloe3","plants/aloe3.png"),this.load.image("bigAloe4","plants/aloe4.png"),this.load.image("bigPoth1","plants/poth1.png"),this.load.image("bigPoth2","plants/poth2.png"),this.load.image("bigPoth3","plants/poth3.png"),this.load.image("bigPoth4","plants/poth4.png"),this.load.image("plantGame","backgrounds/plantGame.png")}create(){var e;this.add.image(350,250,"welcome-background"),this.music=this.sound.add("music"),null==(e=this.music)||e.play({mute:!1,volume:.35,loop:!0}),this.scene.start("Welcome",{music:this.music})}}const q=[[1,0,50],[1,4e3,50],[1,8e3,50],[2,1e4,50],[1,12e3,50],[2,13e3,50],[1,14e3,50],[1,15e3,50],[1,16e3,50],[2,17e3,50],[3,19e3,70],[3,2e4,70],[2,21e3,70],[3,21500,70],[3,22e3,70],[2,22500,70],[3,23e3,70],[3,24500,70],[1,26e3,70],[3,27e3,70],[3,28e3,70],[1,29e3,70],[2,3e4,70],[3,31e3,70],[1,32e3,70],[4,38e3,90],[1,39e3,90],[4,4e4,90],[1,41e3,90],[2,41500,90],[4,43e3,90],[1,44e3,90],[2,44500,90],[3,45e3,90],[4,46e3,90],[5,48e3,110],[5,48500,110],[5,49e3,110],[4,5e4,110],[3,52e3,110],[2,54e3,110],[1,56e3,110],[6,6e4,130],[6,61e3,130],[6,62e3,130],[0,63e3,130],[0,63e3,130]];class Y extends i.Scene{constructor(){super("Calendar"),t(this,"cols"),t(this,"boxes"),this.cols=[],this.boxes=[]}create(){if(H=0,this.add.image(350,250,"cal-overlay"),!this.input||!this.input.keyboard)return void console.error("Error: No keyboard found");const e=[150.5,222.5,294,364,434,504,576],t=["very-important-meeting","biquarterly-review","bicostal-review","bicentennial-review","quick-sync"];let s=0;const a=(e,i)=>{const a=this.physics.add.sprite(e.x_pos,400,t[s],2);s=(s+1)%t.length,a.setVelocityY(-1*i),this.physics.add.collider(e.miss_zone,a,function(e,t){return()=>{var s;t.active&&(t.setVelocityY(0),t.setFrame(0),t.setActive(!1),e.miss_zone.setSize(e.miss_zone.width,e.miss_zone.height+t.height),e.hit_zone.setPosition(e.hit_zone.x,e.hit_zone.y+t.height),null==(s=t.body)||s.destroy(),e.miss_sound.play(),H++)}}(e,a)),e.meetings.push(a)},o=(e,t=20)=>{a(this.cols[e],t)};let n=i.Input.Keyboard.KeyCodes;for(const[i,d]of[[n.ESC,"ESC"],[n.A,"A"],[n.S,"S"],[n.D,"D"],[n.F,"F"],[n.SPACE,"SPACE"],[n.SHIFT,"SHIFT"]]){const t=this.cols.length,s=this.add.text(e[t],380,d.toString(),{fontSize:12,color:"rgb(0,0,0)"});s.setOrigin(.5,.5);const a=this.input.keyboard.addKey(i),o=this.physics.add.staticBody(0,0,700,158),n=this.physics.add.sprite(e[t],156,"ticker",0);n.setOrigin(.5,0),n.setDepth(1),s.setDepth(2),this.cols.push({key:a,icon:s,x_pos:e[t],miss_zone:o,hit_zone:n,meetings:[],miss_sound:this.sound.add("cal-fail"),hit_sound:this.sound.add("cal-pass")}),this.boxes.push(s)}for(const[i,d,l]of q)this.time.addEvent({delay:d,callback:()=>{o(i,l)}});const h=this.add.zone(85,77,7,7).setOrigin(0);h.setInteractive({useHandCursor:!0}),h.on("pointerup",(()=>{x(),this.scene.resume("Desktop"),this.scene.stop("Calendar")}));const r=this.add.rectangle(625,45,15,15,0).setOrigin(0);this.add.text(628,45,"x").setOrigin(0),r.setInteractive({useHandCursor:!0}),r.on("pointerup",(()=>{x(),this.scene.stop("Desktop"),this.scene.stop("Calendar"),this.scene.resume("Office")}))}update(){var e;const t=this.cols.filter((e=>e.key.isDown)).length;this.cols.forEach((e=>e.hit_zone.setVisible(!1))),null==(e=this.cols.reduce(((e,t)=>{const s=e=>{var t;return((null==(t=e.meetings.filter((e=>e.active))[0])?void 0:t.y)||1/0)-e.hit_zone.y};return s(t)<s(e)?t:e})).hit_zone)||e.setVisible(!0),this.cols.forEach((e=>{this.keyUpdate(e,t)}))}keyUpdate(e,t){e.hit_zone;const s=e.key,i=e.icon,a=t=>{t.setFrame(1),t.setVelocityY(0),t.disableBody(!0,!1),this.time.addEvent({delay:200,callback:()=>{t.destroy()}}),e.hit_sound.play({seek:.5})};s.isDown&&1===t?(i.setColor("rgb(34, 139, 34)"),e.meetings.forEach((t=>{this.physics.overlap(e.hit_zone,t)&&a(t)})),e.hit_zone.setFrame(1)):s.isDown?(i.setColor("rgb(255, 195, 0)"),e.hit_zone.setFrame(0)):(i.setColor("rgb(0 ,0,0)"),e.hit_zone.setFrame(0))}}const K={type:Phaser.AUTO,width:700,height:500,parent:"game-container",backgroundColor:"#285E63",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{debug:!1}},scene:[a,T,M,G,_,E,F,A,W,N,o,D,L,Y]};new s.Game(K);