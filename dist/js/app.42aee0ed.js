(function(e){function t(t){for(var n,s,i=t[0],l=t[1],v=t[2],p=0,d=[];p<i.length;p++)s=i[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,v||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var v=0;v<i.length;v++)t(i[v]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1ff1":function(e,t,a){e.exports=a.p+"img/forbidden_words.22ece203.png"},"3f0e":function(e,t,a){},"3f2a":function(e,t,a){e.exports=a.p+"img/google.083a33a2.jpg"},"418b":function(e,t,a){e.exports=a.p+"img/pavel_and_padak.73b5d218.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["default"].use(o["a"],{iconfont:"md"});var r={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"},s=a("ce5b"),i=a.n(s),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"jak-psat-sql"}},[a("v-navigation-drawer",{attrs:{fixed:"",app:"",dark:"",id:"app-drawer"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("navigation")],1),a("v-toolbar",{attrs:{flat:"",app:"",prominent:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v(e._s(this.$router.currentRoute.meta.title))]),a("v-spacer"),a("span",{staticClass:"overline"},[e._v("\n        © 2019 by Ondřej Hošák and Pavel Chocholouš, source code is available on "),a("a",{attrs:{target:"_blank",href:"https://github.com/ondrej-hosak/JakPsatSQL"}},[e._v("github")])])],1),a("v-content",{staticStyle:{backgrond:"#eee"}},[a("router-view")],1)],1)},v=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",[a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-avatar",{attrs:{color:"white"}},[a("v-img",{attrs:{src:"https://vuetifyjs.com/apple-touch-icon-180x180.png",height:"34"}})],1),a("v-list-tile-title",{staticClass:"title"},[e._v("\n        Jak psát SQL\n      ")])],1),a("v-divider",{staticStyle:{"padding-bottom":"15px"}}),e._l(e.$router.options.routes,function(t,n){return a("v-list-tile",{key:n,staticClass:"v-list-item",attrs:{to:{name:t.name},avatar:""}},[a("v-list-tile-action",[a("v-icon",[e._v(e._s(t.meta.icon))])],1),a("v-list-tile-title",{domProps:{textContent:e._s(t.meta.title)}})],1)})],2)},p=[],d={name:"Navigation",data:function(){return{logo:"../assets/logo.svg"}},mounted:function(){}},u=d,k=(a("a4e1"),a("2877")),m=a("6544"),b=a.n(m),j=a("ce7e"),h=a("132d"),y=a("adda"),f=a("8860"),z=a("ba95"),_=a("40fe"),g=a("c954"),x=a("5d23"),S=Object(k["a"])(u,c,p,!1,null,null,null),V=S.exports;b()(S,{VDivider:j["a"],VIcon:h["a"],VImg:y["a"],VList:f["a"],VListTile:z["a"],VListTileAction:_["a"],VListTileAvatar:g["a"],VListTileTitle:x["a"]});var L={components:{Navigation:V},data:function(){return{drawer:null}},props:{source:String}},w=L,T=(a("5c0b"),a("7496")),C=a("549c"),D=a("f774"),E=a("9910"),P=a("71d9"),A=a("706c"),O=a("2a7f"),M=Object(k["a"])(w,l,v,!1,null,null,null),Q=M.exports;b()(M,{VApp:T["a"],VContent:C["a"],VNavigationDrawer:D["a"],VSpacer:E["a"],VToolbar:P["a"],VToolbarSideIcon:A["a"],VToolbarTitle:O["a"]});var B=a("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Bylo nebylo")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Da")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"3"}},[e._v("Foto")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[e._v("\n                  Jak to začalo? Ve zkratce jsme kdysi s druhým týpkem přezdívaným Padák (blog) viděli prezentaci závěrečných projektů digitální akademie a bylo nám líto, \n                  že SQL spíš připomínalo Marušku z Dvanácti měsíčků než nepostradatelný nástroj, přešlapovalo ušmudlané v koutě, a na práci s daty holky používaly radši python a excel. \n                  To jsme tak nechtěli nechat a protože nejsme žádní hateři, chopili jsme se příštího kurzu sami. Chtěli jsme to do holek nalít jednoduše, vtipně, efektivně. \n                  I proto jsme naskočili na  Snowflake, databázi v cloudu, která se nemusí instalovat a tím se ušetří minimálně jedna lekce. \n                  Vyházeli, nebo spíš vynechali jsme všechna témata, která nejsou pro začínajícího analytika důležitá, oholili teorii na dřeň a posunuli ji na konec. \n                  Prostě jsme chtěli, aby holky měly první select za sebou v první čtvrt hodině a další následovaly tak rychle, aby než se rozkoukají, \n                  byl konec kurzu a z party zelenáčů datařky.\n                ")])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Dále\n              ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[e._v("\n                  Po dvou nebo třech bězích Digitální akademie se už nedalo ubránit volání holek po “strukturovaných materiálech, jako má Martin”. \n                  To je ten vysokej chlap, co učí Python (kodim.cz). Tady jsou, držím palce a doufám, že to bude i přes můj uspávací kostrbatý spisovný jazyk místy vtipné a jinde užitečné.\n                ")])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=1}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("img",{attrs:{src:a("418b")}})])],1),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Zpět\n              ")])],1)],1)],1)],1)],1)],1)},N=[],J={name:"Home",data:function(){return{e1:0}}},Z=J,$=a("8336"),F=a("b0af"),R=a("99d9"),K=a("a523"),H=a("0e8f"),U=a("a722"),q=a("7e85"),W=a("e516"),X=a("9c54"),G=a("56a4"),Y=Object(k["a"])(Z,I,N,!1,null,null,null),ee=Y.exports;b()(Y,{VBtn:$["a"],VCard:F["a"],VCardText:R["a"],VContainer:K["a"],VDivider:j["a"],VFlex:H["a"],VLayout:U["a"],VStepper:q["a"],VStepperContent:W["a"],VStepperHeader:X["a"],VStepperItems:X["b"],VStepperStep:G["a"]});var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",[n("i",{staticClass:"headline"},[e._v("\n            Teorii doporučuju přeskočit a jít rovnou na věc (odkaz na první cvičení)! A pravidlo, které platí všude, když něčemu nerozumíš, \n            zkus to vygooglit, určitě to už někdo vysvětlil líp než já. Anebo použij komentáře a zeptej se.\n        ")]),n("br"),n("br"),n("br"),n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Proč se učíme SQL?")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Americká tetka, IBM a SQL")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>3,step:"3"}},[e._v("Co to jsou data?")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"4"}},[e._v("Ok, data chápu, ale co je to ta databáze?")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                        Datový analytik bez SQL je nesmysl. Datová analytička jakbysmet. Kdo viděl nějaký inzerát na analytika bez požadavku na SQL je buď z Marsu nebo trpí halucinacemi anebo dyslexií. \n                        SQL je dotazovací jazyk, díky němuž můžeme pracovat s daty v databázích apod.\n                    ")]),n("a",{attrs:{href:"https://cs5.pikabu.ru/post_img/big/2015/02/16/7/1424082068_179818413.jpg",target:"_blank"}},[n("img",{attrs:{src:a("3f2a"),width:"800"}})])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("\n                  Dále\n                ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                        Když se v elektronickém pravěku objevily první databáze, bylo to v USA. Ještě předtím - v elektronických třetihorách měla každá aplikace data uložená jaksi po svém. \n                        Což byl nesmysl a tak logicky vznikly databáze. A s nimi i dotazovací jazyk SQL. Prvními uživateli byli kromě vědců i úředníci a vojáci, respektive vojenští úředníci. \n                        Takže většinou paní v nejlepších letech před důchodem. I to je možná jeden z důvodů, proč je SQL (standardizovaný strukturovaný dotazovací jazyk) vytvořen tak,\n                        aby byl čitelný i lidským okem a člověk pracující 40 let v kartotéce, si za ním uměl něco představit. \n                        Minimálně jednoduché dotazy dávají jakýs takýs smysl i po doslovném překladu do češtiny. Zní to sice asi jako středoškolský profesor informatiky na tripu,\n                        ale porozumět se tomu dá.\n                    ")]),n("a",{attrs:{href:"http://www.wang3300.org/images/timesharing.jpg",target:"_blank"}},[n("img",{attrs:{src:a("899c"),width:"800"}})])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v("\n                  Dále\n                ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=1}}},[e._v("\n                  Zpět\n                ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                        Představ si tabulku, libovolnou. Má řádky a sloupečky? Paráda. Jsou v prvním řádku názvy těch sloupečků? Super. Právě si představuješ asi nejjednodušší formu dat. \n                        Data jsou teď všude - od instagramu, přes chytrá města až po místy o trochu méně chytrou státní správu. A i úplně pitomé fotky v mobilu jsou vlastně uložené v databázi,\n                        nebo hned několika databázích zároveň. Skoro celý internet je taky uložený v databázi, protože jednou z výhod databází je, že se v nich s daty pracuje mnohem snáz,\n                        než kdekoliv jinde, jako například na disku, v excelu, google sheetu, xml a tak vůbec..\n                    ")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=4}}},[e._v("\n                  Dále\n                ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=2}}},[e._v("\n                  Zpět\n                ")])],1),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                        Komunisti tomu říkali SŘBD a doteď se tahle zkratka vyskytuje v různých sylabech, viz obrázek ze skript Masarykovy Univerzity. \n                        Jak sis představovala tu tabulku, tak ta někde musí být uložená. K tomu se líp než excel nebo textový soubor hodí databáze.  \n                        "),n("a",{attrs:{href:"http://www.ped.muni.cz/wtech/03_studium/cvt4/databaze.pdf",target:"_blank"}},[n("img",{attrs:{src:a("f8c1"),width:"350"}})]),e._v("\n                        Databáze je systém, který nám uživatelům umožňuje s daty pracovat. Aby toho nebylo málo, vyskytuje se databáze na nějakém serveru, ale o tom později. \n                        Teď si představ, že tu tabulku nemáš jen jednu, ale je jich asi 3271.\n                        Každou si pojmenuješ a to by mohlo stačit, jasně. Ale až začnou tabulky zase přibývat, dřív nebo později je budeš chtít naházet/roztřídit do nějakých adresářů, složek, folderů.\n                        Těm se v databázích říká schémata a plní stejnou funkci jako adresáře na disku,\n                        umožňují nám objekty (nemusíme v databázi mít jen tabulky) uspořádat a hromadně omezit kdo má právo co vidět, měnit apod.\n                        I tabulky, které nenaházíme do schémat ve schématu skončí, říká se mu defaultní nebo výchozí a v různých databázích se různě jmenují.\n                    ")]),n("a",{attrs:{href:"https://images.readwrite.com/wp-content/uploads/2018/06/architecture-business-cabinet-325229.jpg",target:"_blank"}},[n("img",{attrs:{src:a("a27e"),width:"800"}})])])],1),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=3}}},[e._v("\n                  Zpět\n                ")])],1)],1)],1)],1)],1)],1)},ae=[],ne={name:"Theory",data:function(){return{e1:0}}},oe=ne,re=Object(k["a"])(oe,te,ae,!1,null,null,null),se=re.exports;b()(re,{VBtn:$["a"],VCard:F["a"],VCardText:R["a"],VContainer:K["a"],VDivider:j["a"],VFlex:H["a"],VLayout:U["a"],VStepper:q["a"],VStepperContent:W["a"],VStepperHeader:X["a"],VStepperItems:X["b"],VStepperStep:G["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Databáze")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Příkazy (statementy)")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>3,step:"3"}},[e._v("Dotazy")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>4,step:"4"}},[e._v("Objekty")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>5,step:"5"}},[e._v("Enginy")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>6,step:"6"}},[e._v("Funkce, rozdíly")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>7,step:"7"}},[e._v("Rezervovaná slova a další odlišnosti")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"8"}},[e._v("Tabulky a normalizace")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    O každého by se měl někdo postarat, když má rýmu, nepouštět k němu neohlášené návštěvy, uvařit čaj a tak. O databáze se stará server. \n                    I když rýmu zrovna nemají. Mezi tebou a databázemi stojí server jako garde dáma a tlumočník v jedné osobě. Když ho požádáš o data z tabulky, zjistí nejdřív,\n                    jak se databáze cítí a když v ní taková data jsou a máš k nim ta správná oprávnění, pošle do ní dotaz a vrátí ti odpověď.\n                    Detail, v jakém se dají v databázích oprávnění nastavovat, je neuvěřitelný, samozřejmě na všechny objekty, čtení/zápis, ale i na sloupečky nebo řádky v tabulkách.\n                    Serverů existuje mnoho, ale o tom později.\n                  ")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Dále\n              ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Příkaz je SQL kód, kterým server nutíš k nějaké činnosti. Jsou jich dva druhy a ty se ještě dál dělí. \n                    Mají krásná jména - DML a DDL. Je to snadné, Data Definition Language vytváří, mění a maže tabulky a ostatní objekty v databázi, zatímco Data Manipulation Language Vybírá,\n                    upravuje a maže data v tabulkách.\n                  ")]),n("h3",[e._v("Příkazy DDL:")]),n("ul",[n("li",[e._v("CREATE")]),n("li",[e._v("ALTER")]),n("li",[e._v("DROP")])]),n("h3",[e._v("Příkazy DML:")]),n("ul",[n("li",[e._v("SELECT")]),n("li",[e._v("INSERT")]),n("li",[e._v("UPDATE")]),n("li",[e._v("DELETE")])]),n("p",[e._v("A teď hádanka, který příkaz co dělá (tohle nebude v testu)? Tady je SQL ještě opravdu srozumitelné na první pohled.")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=1}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("b",[e._v("SELECT")]),e._v(" je dotaz, dotaz je query. Tohle bude tvůj nejvíc nejlepší kamarád v praktické části, “selektovat” budeš až se ti bude kouřit od klávesnice. \n                  Důvod? Analytici se daty většinou přehrabují tam a zpátky jako design influencerky v antiq shopech. \n                  Vytváření tabulek a jejich plnění daty mají na svědomí většinou aplikace (vývojáři) anebo tajemný data warehouse (BI vývojáři). \n                  Tvorba tabulek a plnění daty si zažiješ v hodinách jen okrajově, v projektech už o kousek víc.\n\n                  "),n("h3",[e._v("Data lifecycle in BI")]),e._v("\n                  user, appka, dwh, analyza, report, dashboard\n                ")])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=4}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Analytici, programátoři, možná všichni lidi jsou líní. A tak, když už horko těžko vypotí nějaký dotaz, nechtějí ho psát podruhé.\n                    Uloží si ho do databáze pod nějakým jménem a voila, view (aka uložený pohled) je na světě.\n                    A podobně jako views můžou být v databázi uložené indexy, funkce, procedury, sekvence, synonyma, materializované pohledy a spousta dalšího pekla.\n                    Spíš? Jsi tu ještě? Haló! Teď možná nastala ta chvíle, kdy se mnou budeš souhlasit, že přeskočení teorie a hození do divoké řeky SELECTů, nebyl úplně nejhorší nápad.\n                    Klid, už jsme za půlkou ;)\n                  ")]),n("a",{attrs:{href:"http://nippon-motors.com/wp-content/uploads/2012/04/Warehouse.jpg",target:"_blank"}},[n("img",{attrs:{src:a("67f7"),width:"800"}})])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=5}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=3}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"5"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Engine aka databázový server je vlastně jenom šikovná aplikace, která databáze zpřístupňuje. A existuje hodně variant těchto serverů. \n                    Některé jsou zadarmo (PostgreSQL, SQLite, MariaDB...), jiné za peníze (Oracle, MS SQL, MySQL, Enterprise DB...). Aby to nebylo tak snadné,\n                    nabízí Oracle free verzi Oracle DB XE, Microsoft SQL Express, MariaDB je klon MySQL a EnterpriseDB je placená verze PostgreSQL.\n                    Kromě rozdělení na placené a free jde ještě databázové servery dělit podle mnoha dalších kritérií. Každá se může hodit na něco lépe a na něco už ne tak dobře.\n                    Všechny zmíněné databázové servery je potřeba někam instalovat, respektive mít pro ně server, kde poběží. Snowflake je reprezentantem tzv. cloudových databází,\n                    které se nikam neinstalují, jen někomu dáš číslo své kreditky a platíš za místo, výkon a podobně. Microsoft a Oracle také nabízí svoje enginy v cloudu,\n                    Heroku je zase postgres v cloudu, AWS má svůj Redshit, Aurora, DynamoDB atd. \n                  ")]),n("img",{attrs:{src:a("d27b"),width:"800"}})])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=6}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=4}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"6"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    SQL je standardizovaný strukturovaný dotazovací jazyk, standardizaci si ale samozřejmě každý výrobce/vývojářská komunita vysvětluje jinak.\n                    Také každý ke standardu přilepuje svoje super featury. V SQL jako v každém jazyce existují různé funkce, například takové, které pracují s datumem,\n                    funkce ale nejsou součástí standardu, takže získat z datumu rok, měsíc a den pravděpodobně dopadne trochu jiným dotazem v každém enginu.\n                    Doporučuju se s tím smířit. Přechod mezi dvěma enginy je pro člověka jednoduchý - je to jako přechod z americké angličtiny na australskou (SQL nářečím se anglicky říká flavor),\n                    těžší to mají aplikace, které využívají nějaký konkrétní engine u nich to je spíš jako dostat do Oktávky motor z Chevroletu. Ještě jednou pro uklidnění,\n                    když se naučíš SQL ve Snowflake, přejít na MSSQL, Oracle, Postges nebo MySQL bude brnkačka.\n                  ")]),n("img",{attrs:{src:a("d27b"),width:"800"}})])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=7}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=5}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"7"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("a",{attrs:{href:"https://my.visme.co/projects/01043rz6-sql-reserved#s1",target:"_blank"}},[n("img",{attrs:{src:a("1ff1"),width:"800"}})]),n("p",[e._v("\n                    Aby ti engine rozuměl, má některá slova tzv. rezervovaná, tj. nejde je použít pro názvy sloupečků, tabulek apod. Příkladem takových rezervovaných slov je třeba table,\n                    column, view, date, int apod. V nich se různé flavory (implementace) taky liší. Ale klid, nic zásadního. Některé enginy rozlišují v názvech objektů velká a malá písmena,\n                    některé jsou velmi omezené v délce těchto názvů (nejmenší, co pamatuju je 32 znaků na název, Postgres má tuším 64.\n                  ")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=8}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=6}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"8"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Nápad propojování  tabulek pochází z relační algebry (viz úplně první obrázek), podle ní jsou i databáze pojmenované, celým jménem se jim říká relační databáze.\n                    Normalizace je proces vnášení vztahů mezi tabulky, tzv relací. Jde o to nemít v databázi žádná data víckrát. \n                  ")]),n("i",[e._v("Příklad: V tabulce aut je sloupeček barva, v něm ale není barva, ale číslo řádku z tabulky barev.")])])],1),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=7}}},[e._v("\n                Zpět\n              ")])],1)],1)],1)],1)],1)],1)},le=[],ve={name:"Database",data:function(){return{e1:0}}},ce=ve,pe=Object(k["a"])(ce,ie,le,!1,null,null,null),de=pe.exports;b()(pe,{VBtn:$["a"],VCard:F["a"],VCardText:R["a"],VContainer:K["a"],VDivider:j["a"],VFlex:H["a"],VLayout:U["a"],VStepper:q["a"],VStepperContent:W["a"],VStepperHeader:X["a"],VStepperItems:X["b"],VStepperStep:G["a"]});var ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",[n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Tabulky")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Metadata")]),n("v-divider"),n("v-stepper-step",{attrs:{step:"3"}},[e._v("Procedury")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("img",{attrs:{src:a("b054")}}),n("br"),n("br"),n("p",[e._v("\n                    Vztahy mezi tabulkami jsou několika druhů. Auto může mít jen jednoho výrobce, ale ten vyrobí spoustu aut (1:N). VIN má každé auto jen jedno a naopak (1:1).\n                    Majitelů může auto vystřídat i deset a stejně tak jeden chlápek může mít třeba dvacet aut (M:N). Normalizovaná databáze je šikovná pro většinu aplikací,\n                    snadno se z ní dostane menší množství dat a stejně snadno se data v ní změní/přidají. Čitelnost lidským okem je sice mizerná, ale pro aplikace je normalizace naopak supervýhodná.\n                    Jediné, kde může normalizovaná databáze pokulhávat je analytika. Tam se hodí její sestra ze zrcadla - denormalizovaná tabulka.\n                    Ta má na na každém řádku ve sloupečku barva uloženou barvu v majitele, jméno, příjmení, číslo technického průkazu, obec kraj a zemi jeh vydání,\n                    prostě všechno na jedné hromadě, v lidsky čitelné podobě.\n                  ")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Dále\n              ")])],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Magické slovo, jednoduše data o datech, jednoduchým příkladem je tabulka obsahující názvy a parametry všech tabulek v databázi.\n                    Někde se jim říká information schema, jinde system catalog, názvů je hodně, princip je stejný, data o datech.\n                  ")])])],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v("\n                Dále\n              ")]),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=1}}},[e._v("\n                Zpět\n              ")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{flat:""}},[n("v-card-text",[n("p",[e._v("\n                    Většina databází disponuje možností vytvářet uložené procedury. To je kus kódu, který po spuštění udělá nějakou komplexnější operaci,\n                    může dostat i parametry. Tyto procedury mohou být psány buď v SQL, nebo procedurálním jazyce databáze třeba PL/SQL, nebo i v javě, pythonu, R atd.\n                  ")])])],1),n("v-btn",{attrs:{color:"secondary"},on:{click:function(t){e.e1=2}}},[e._v("\n                Zpět\n              ")])],1)],1)],1)],1)],1)],1)},ke=[],me=a("6944"),be=a.n(me),je={components:{Viewer:be.a},name:"Relations",data:function(){return{e1:0}},mounted:function(){},methods:{show:function(){}}},he=je,ye=Object(k["a"])(he,ue,ke,!1,null,null,null),fe=ye.exports;b()(ye,{VBtn:$["a"],VCard:F["a"],VCardText:R["a"],VContainer:K["a"],VDivider:j["a"],VFlex:H["a"],VLayout:U["a"],VStepper:q["a"],VStepperContent:W["a"],VStepperHeader:X["a"],VStepperItems:X["b"],VStepperStep:G["a"]});var ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",[a("v-flex",[a("v-alert",{attrs:{type:"success"}},[a("strong",[e._v("SNOWFLAKE")]),e._v(" - "),a("a",{attrs:{href:"https://hu05637.eu-west-1.snowflakecomputing.com"}},[e._v("https://hu05637.eu-west-1.snowflakecomputing.com")])]),a("v-card",[a("v-tabs",[a("v-tab",[e._v("Lekce 1")]),a("v-tab",[e._v("Lekce 2")]),a("v-tab",[e._v("Lekce 3")]),a("v-tab",[e._v("Lekce 4")]),a("v-tab",[e._v("Lekce 5")]),a("v-tab",[e._v("Lekce 6")]),a("v-tab",[e._v("Lekce 7")]),a("v-tab",[e._v("Lekce 8")]),a("v-tab",[e._v("Opacko")]),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[a("ul",[a("li",[e._v("B - Praxe První pokus, zatím bez tabulek\n                        "),a("ul",[a("li",[e._v("\n                              Příkaz SELECT, kterým z databáze něco vydoluješ\n                              Necháš si nejdřív vrátit jedničku, to je to nejjednodušší, co SQL umí:\n                              "),a("b",[e._v("SELECT 1;")])]),a("li",[e._v("\n                              Pak si necháš vrátit řetězec (text, string)\n                              "),a("b",[e._v("SELECT ‘cokoliv te napadne @&$*/684321’;")])]),a("li",[e._v("\n                              Vrácený sloupeček si můžeš nějak pojmenovat a taky jich můžeš mít víc za sebou\n                              "),a("b",[e._v("SELECT ‘cokoliv te napadne @&$*/684321’ AS jednorozec, 333 AS stribrna_strikacka;")])]),a("li",[e._v("\n                              Můžeš počítat s čísly a spojovat stringy\n                              "),a("b",[e._v("SELECT ‘cokoliv ‘ || ‘te napadne @&$*/684321’ AS jednorozec, 3*111 AS stribrna_strikacka;")])]),a("li",[e._v("\n                            Taky můžeš použít nějakou funkci, to je teprv legrace\n                            "),a("b",[e._v("SELECT CURRENT_DATE() AS dnes, trim(‘ cokoliv ‘) AS bezmezer;")])])])])]),a("p",[e._v("\n                  A ted pár poznámek: ...\n                  První pokus s tabulkou\n                  "),a("ul",[a("li",[e._v("ss")]),a("li",[e._v("ss")])]),e._v("\n                  Jednou budeš muset i rozlišovat malá a velká písmena, nebo pracovat v databázi, kde se kreativni vývojáři nebáli mezer a speciálních znaků\n                  ")]),a("ul",[a("li",[e._v("jednoduchej select\n                        "),a("ul",[a("li",[e._v("první pokus")]),a("li",[e._v("vsechno")]),a("li",[e._v("omezeni sloupecku")]),a("li",[e._v("filtrovani radek")])])]),a("li",[e._v("jednoduchej select\n                        "),a("ul",[a("li",[e._v("prejmenovani sloupecku")]),a("li",[e._v("spojeni sloupecku")]),a("li",[e._v("nasobeni, deleni")])])]),a("li",[e._v("jednoduchej select\n                        "),a("ul",[a("li",[e._v("where se string funkci")]),a("li",[e._v("where s math funkci")]),a("li",[e._v("where s date funkci")]),a("li",[e._v("where and or and or ((())")]),a("li",[e._v("like, ilike")]),a("li",[e._v("between")])])]),a("li",[e._v("jednoduchej select\n                        "),a("ul",[a("li",[e._v("prejmenovane spojene sloupecky")]),a("li",[e._v("where x in ()")]),a("li",[e._v("where year(x) in ()")])])]),a("li",[e._v("vytvoreni tabulky ze selectu\n                        "),a("ul",[a("li",[e._v("create table as select")]),a("li",[e._v("create table as select s pretypovanim")]),a("li",[e._v("create table as select s prejmenovanim")]),a("li",[e._v("create table as select s vyhazenim sloupecku a radek")])])])])])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 2")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 3")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 4")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 5")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 6")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 7")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Lekce 8")])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:"",color:"basil"}},[a("v-card-text",[e._v("Opacko")])],1)],1)],1)],1)],1)],1)],1)},_e=[],ge={name:"Practice"},xe=ge,Se=a("0798"),Ve=a("71a3"),Le=a("c671"),we=a("fe57"),Te=Object(k["a"])(xe,ze,_e,!1,null,null,null),Ce=Te.exports;b()(Te,{VAlert:Se["a"],VCard:F["a"],VCardText:R["a"],VContainer:K["a"],VFlex:H["a"],VLayout:U["a"],VTab:Ve["a"],VTabItem:Le["a"],VTabs:we["a"]});var De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",[a("v-flex",[a("h1",[e._v("Bude pripraveno Monikou Vlckovou :)")])])],1)],1)},Ee=[],Pe={name:"Tahak"},Ae=Pe,Oe=Object(k["a"])(Ae,De,Ee,!1,null,null,null),Me=Oe.exports;b()(Oe,{VContainer:K["a"],VFlex:H["a"],VLayout:U["a"]}),n["default"].use(B["a"]);var Qe=new B["a"]({routes:[{path:"/",meta:{title:"Bylo nebylo",icon:"home"},name:"Home",component:ee},{path:"teorie",meta:{title:"Teorie",icon:"language"},name:"Theory",component:se},{path:"servery",meta:{title:"Databázový server a databáze",icon:"computer"},name:"Database",component:de},{path:"relace",meta:{title:"Fungující vztahy - relace",icon:"sync"},name:"Relations",component:fe},{path:"tahak",meta:{title:"Tahák",icon:"help"},name:"Tahak",component:Me},{path:"practice",meta:{title:"Výuka",icon:"school"},name:"Practice",component:Ce}]}),Be=Qe;n["default"].config.productionTip=!1,n["default"].use(i.a,{theme:r}),new n["default"]({router:Be,render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("6879"),o=a.n(n);o.a},"67f7":function(e,t,a){e.exports=a.p+"img/engines.12225a5a.png"},6879:function(e,t,a){},"899c":function(e,t,a){e.exports=a.p+"img/wang.164b2ec5.jpg"},a27e:function(e,t,a){e.exports=a.p+"img/database.373300a4.png"},a4e1:function(e,t,a){"use strict";var n=a("3f0e"),o=a.n(n);o.a},b054:function(e,t,a){e.exports=a.p+"img/relations.21ffed08.png"},d27b:function(e,t,a){e.exports=a.p+"img/database_functions.8cec71b0.png"},f8c1:function(e,t,a){e.exports=a.p+"img/srbd.89a90910.png"}});
//# sourceMappingURL=app.42aee0ed.js.map