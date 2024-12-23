(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(354),s=n.n(r),i=n(314),a=n.n(i)()(s());a.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody {\n    min-height: 100vh;\n}\n\n\n.container {\n    margin-top: 2%;\n    margin-left: 10%;\n    width: 80%;\n    min-height: 90vh;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 10fr 1fr 10fr;\n    grid-template-columns: 2fr 1fr;\n    column-gap: 10px;\n    align-items: center;\n    justify-items: center;\n}\n\n.container > h3 {\n    grid-column: 1 / 2;\n}\n\n.board {\n    height: 90%;\n    width: 90%;\n    background-color: black;\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    gap: 2px;\n}\n\n#instructions {\n    border: 1px solid black;\n}\n\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.cell {\n    background-color: blue;\n    border: none;\n}\n\n.cell:hover {\n    border: 1px solid yellow;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit {\n    background-color: red;\n}\n\ndialog {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n#ship-to-add {\n    border: 1px solid black;\n}\n\n.highlight {\n    border: 2px solid yellow;\n}\n\n.active-ship {\n    background-color: yellow;\n}\n\n.sunk-ship {\n    background-color: orange;\n}\n\n.inactive-board {\n    opacity: 0.2;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;AACrB;;;AAGA;IACI,cAAc;IACd,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,gDAAgD;IAChD,QAAQ;AACZ;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nbody {\n    min-height: 100vh;\n}\n\n\n.container {\n    margin-top: 2%;\n    margin-left: 10%;\n    width: 80%;\n    min-height: 90vh;\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 10fr 1fr 10fr;\n    grid-template-columns: 2fr 1fr;\n    column-gap: 10px;\n    align-items: center;\n    justify-items: center;\n}\n\n.container > h3 {\n    grid-column: 1 / 2;\n}\n\n.board {\n    height: 90%;\n    width: 90%;\n    background-color: black;\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n    gap: 2px;\n}\n\n#instructions {\n    border: 1px solid black;\n}\n\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.cell {\n    background-color: blue;\n    border: none;\n}\n\n.cell:hover {\n    border: 1px solid yellow;\n}\n\n.miss {\n    background-color: white;\n}\n\n.hit {\n    background-color: red;\n}\n\ndialog {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n#ship-to-add {\n    border: 1px solid black;\n}\n\n.highlight {\n    border: 2px solid yellow;\n}\n\n.active-ship {\n    background-color: yellow;\n}\n\n.sunk-ship {\n    background-color: orange;\n}\n\n.inactive-board {\n    opacity: 0.2;\n}"],sourceRoot:""}]);const o=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);r&&a[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),t.push(h))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(s," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],o=0;o<e.length;o++){var l=e[o],c=r.base?l[0]+r.base:l[0],h=i[c]||0,d="".concat(c," ").concat(h);i[c]=h+1;var u=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var A=s(p,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:A,references:1})}a.push(d)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var o=n(i[a]);t[o].references--}for(var l=r(e,s),c=0;c<i.length;c++){var h=n(i[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,s&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),s=n.n(r),i=n(825),a=n.n(i),o=n(659),l=n.n(o),c=n(56),h=n.n(c),d=n(540),u=n.n(d),p=n(113),A=n.n(p),m=n(365),f={};f.styleTagTransform=A(),f.setAttributes=h(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),s()(m.A,f),m.A&&m.A.locals&&m.A.locals;class g{constructor(e){this.player=e,this.boardElement=document.querySelector(`.board[data-player="${this.player.number}"]`),this.update()}getCells(){return[...this.boardElement.querySelectorAll(".cell")]}renderMisses(){this.player.misses().forEach((([e,t])=>{const n=this.boardElement.querySelector(`.cell[data-row="${e}"][data-column="${t}"]`);n.classList.add("miss"),n.classList.remove("active-ship")}))}renderHits(){this.player.hits().forEach((([e,t])=>{const n=this.boardElement.querySelector(`.cell[data-row="${e}"][data-column="${t}"]`);n.classList.add("hit"),n.classList.remove("active-ship")}))}renderMoves(){this.renderMisses(),this.renderHits()}renderShips(){this.player.gameboard.ships.forEach((({coordinates:e,ship:t})=>{e.forEach((([e,n])=>{const r=this.boardElement.querySelector(`.cell[data-row="${e}"][data-column="${n}"]`);t.isSunk()?(r.classList.remove("active-ship"),r.classList.add("sunk-ship")):r.classList.add("active-ship")}))}))}update(){this.boardElement.innerHTML="";for(let e=1;e<=10;e++)for(let t=1;t<=10;t++){const n=document.createElement("button");n.classList.add("cell"),n.dataset.row=e,n.dataset.column=t,this.boardElement.appendChild(n)}this.player.isComputer||this.renderShips(),this.renderMoves()}}class b{constructor(e){this.length=e,this.timesHit=0}hit(){this.timesHit++}isSunk(){return this.timesHit>=this.length}}class y{constructor(){this.ships=[],this.misses=[],this.hits=[]}placeShip(e,t,n,r){const s=y.shipCoordinates(e,t,n,r);return null!==s&&!s.some((([e,t])=>this.shipPresent(e,t)))&&(this.ships.push({coordinates:s,ship:new b(n)}),!0)}possibleShipEndpoints(e,t,n){return[[e+n-1,t],[e-n+1,t],[e,t+n-1],[e,t-n+1]].filter((([e,t])=>y.inBounds(e,t)&&!this.shipPresent(e,t)))}moveAlreadyPlayed(e,t){function n(e,t,n){return e.some((([e,r])=>e===t&&r===n))}return n(this.hits,e,t)||n(this.misses,e,t)}availableMoves(){const e=[];for(let t=1;t<=10;t++)for(let n=1;n<=10;n++)e.push([t,n]);return e.filter((([e,t])=>!this.moveAlreadyPlayed(e,t)))}shipPresent(e,t){return this.ships.some((n=>n.coordinates.some((([n,r])=>n===e&&r===t))))}getShipIndex(e,t){for(let n=0;n<this.ships.length;n++)if(this.ships[n].coordinates.some((([n,r])=>n===e&&r===t)))return n;return null}receiveAttack(e,t){if(this.moveAlreadyPlayed(e,t))return!1;if(this.shipPresent(e,t)){const n=this.getShipIndex(e,t);this.ships[n].ship.hit(),this.hits.push([e,t])}else this.misses.push([e,t]);return!0}allSunk(){return this.ships.every((e=>e.ship.isSunk()))}static inBounds(e,t){return e>=1&&e<=10&&t>=1&&t<=10}static shipCoordinates(e,t,n,r){const s=[];switch(r){case"up":for(let r=0;r<n;r++)s.push([e-r,t]);break;case"right":for(let r=0;r<n;r++)s.push([e,t+r]);break;case"down":for(let r=0;r<n;r++)s.push([e+r,t]);break;case"left":for(let r=0;r<n;r++)s.push([e,t-r])}return s.some((([e,t])=>!y.inBounds(e,t)))?null:s}}class v{constructor(e,t=!1){this.number=e,this.gameboard=new y,this.isComputer=t}misses=()=>this.gameboard.misses;hits=()=>this.gameboard.hits;receiveAttack(e,t){this.gameboard.receiveAttack(e,t)}}class C{constructor(e=!0){this.instructions=document.getElementById("instructions"),e&&this.playAgainstComputer()}playAgainstComputer(){this.players=[new v(1,!1),new v(2,!0)],this.boardViews=[new g(this.players[0],!1),new g(this.players[1],!0)],this.placeShipsComputer(),this.currentPlayer=0;const e=C.availableShipLengths();this.boardViews[this.otherPlayer()].boardElement.classList.add("inactive-board"),this.placeShipsPlayer(e)}static availableShipLengths(){return[2,3,3,4,5]}placeShipsComputer(){const e=C.availableShipLengths();for(;e.length>0;){const t=e.pop(),n=["up","left","down","right"][Math.floor(4*Math.random())],r=1+Math.floor(10*Math.random()),s=1+Math.floor(10*Math.random());this.players[1].gameboard.placeShip(r,s,t,n)||e.push(t)}}placeShipsPlayer(e){if(0===e.length)return this.boardViews[this.otherPlayer()].boardElement.classList.remove("inactive-board"),this.boardViews[this.currentPlayer].update(),void this.playerTurn();this.instructions.innerText=`Place a ship of length ${e[e.length-1]}\n`,this.instructions.innerText+="Click the cell where you want to place one end of the ship.",this.boardViews[this.currentPlayer].getCells().forEach((t=>{t.addEventListener("click",(()=>{this.placeNextShipHandler(t,e)}))}))}placeNextShipHandler(e,t){this.instructions.innerText="Click one of the highlighted cells to place ship's other end.";const n=t.pop();this.boardViews[this.currentPlayer].update();const[r,s]=[Number(e.dataset.row),Number(e.dataset.column)];this.players[this.currentPlayer].gameboard.possibleShipEndpoints(r,s,n).forEach((([e,i])=>{const a=this.boardViews[this.currentPlayer].boardElement.querySelector(`.cell[data-row="${e}"][data-column="${i}"]`);a.classList.add("highlight"),a.addEventListener("click",(()=>{let a;a=e>r?"down":e<r?"up":i>s?"right":"left",this.players[this.currentPlayer].gameboard.placeShip(r,s,n,a)||t.push(n),this.boardViews[this.currentPlayer].update(),this.placeShipsPlayer(t)}))}))}otherPlayer(){return(this.currentPlayer+1)%2}freeCells(){return this.boardViews[this.otherPlayer()].getCells().filter((e=>{const[t,n]=[Number(e.dataset.row),Number(e.dataset.column)];return!this.players[this.otherPlayer()].gameboard.moveAlreadyPlayed(t,n)}))}switchPlayers(){this.boardViews.forEach((e=>e.update())),this.currentPlayer=this.otherPlayer()}playerTurn(){this.instructions.innerText="Click an enemy position to attack.",this.gameOver()?this.finishGame():this.freeCells().forEach((e=>{e.addEventListener("click",(()=>{const t=Number(e.dataset.row),n=Number(e.dataset.column);this.players[this.otherPlayer()].receiveAttack(t,n),this.switchPlayers(),this.computerTurn()}))}))}computerTurn(){if(this.gameOver())return void this.finishGame();this.instructions.innerText="The enemy is attacking...";const e=this.freeCells(),t=e[Math.floor(Math.random()*e.length)],[n,r]=[Number(t.dataset.row),Number(t.dataset.column)];this.players[this.otherPlayer()].receiveAttack(n,r),setTimeout((()=>{this.switchPlayers(),this.playerTurn()}),Math.floor(800+200*Math.random()))}gameOver(){return this.players[0].gameboard.allSunk()||this.players[1].gameboard.allSunk()}finishGame(){this.players[1].gameboard.allSunk()?this.instructions.innerText="Victory! We've sunk all enemy ships!":this.instructions.innerText="Our fleet is sunk..."}}new C})();
//# sourceMappingURL=main.js.map