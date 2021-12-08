async function initResizePopOutComponents(){
    var emote_container = [["😀","grinning face"],["😃","grinning face with big eyes"],["😄","grinning face with smiling eyes"],["😁","beaming face with smiling eyes"],["😆","grinning squinting face"],["😅","grinning face with sweat"],["🤣","rolling on the floor laughing"],["😂","face with tears of joy"],["🙂","slightly smiling face"],["🙃","upside-down face"],["😉","winking face"],["😊","smiling face with smiling eyes"],["😇","smiling face with halo"],["🥰","smiling face with hearts"],["😍","smiling face with heart-eyes"],["🤩","star-struck"],["😘","face blowing a kiss"],["😗","kissing face"],["☺","smiling face"],["😚","kissing face with closed eyes"],["😙","kissing face with smiling eyes"],["😋","face savoring food"],["😛","face with tongue"],["😜","winking face with tongue"],["🤪","zany face"],["😝","squinting face with tongue"],["🤑","money-mouth face"],["🤗","smiling face with open hands"],["🤭","face with hand over mouth"],["🤫","shushing face"],["🤔","thinking face"],["🤐","zipper-mouth face"],["🤨","face with raised eyebrow"],["😐","neutral face"],["😑","expressionless face"],["😶","face without mouth"],["😶‍🌫️","face in clouds"],["😏","smirking face"],["😒","unamused face"],["🙄","face with rolling eyes"],["😬","grimacing face"],["😮‍💨","face exhaling"],["🤥","lying face"],["😌","relieved face"],["😔","pensive face"],["😪","sleepy face"],["🤤","drooling face"],["😴","sleeping face"],["😷","face with medical mask"],["🤒","face with thermometer"],["🤕","face with head-bandage"],["🤢","nauseated face"],["🤮","face vomiting"],["🤧","sneezing face"],["🥵","hot face"],["🥶","cold face"],["🥴","woozy face"],["😵","face with crossed-out eyes"],["😵‍💫","face with spiral eyes"],["🤯","exploding head"],["🤠","cowboy hat face"],["🥳","partying face"],["😎","smiling face with sunglasses"],["🤓","nerd face"],["🧐","face with monocle"],["😕","confused face"],["😟","worried face"],["🙁","slightly frowning face"],["☹","frowning face"],["😮","face with open mouth"],["😯","hushed face"],["😲","astonished face"],["😳","flushed face"],["🥺","pleading face"],["😦","frowning face with open mouth"],["😧","anguished face"],["😨","fearful face"],["😰","anxious face with sweat"],["😥","sad but relieved face"],["😢","crying face"],["😭","loudly crying face"],["😱","face screaming in fear"],["😖","confounded face"],["😣","persevering face"],["😞","disappointed face"],["😓","downcast face with sweat"],["😩","weary face"],["😫","tired face"],["🥱","yawning face"],["😤","face with steam from nose"],["😡","pouting face"],["😠","angry face"],["🤬","face with symbols on mouth"],["😈","smiling face with horns"],["👿","angry face with horns"],["💀","skull"],["☠","skull and crossbones"],["💩","pile of poo"],["🤡","clown face"],["👹","ogre"],["👺","goblin"],["👻","ghost"],["👽","alien"],["👾","alien monster"],["🤖","robot"],["😺","grinning cat"],["😸","grinning cat with smiling eyes"],["😹","cat with tears of joy"],["😻","smiling cat with heart-eyes"],["😼","cat with wry smile"],["😽","kissing cat"],["🙀","weary cat"],["😿","crying cat"],["😾","pouting cat"],["🙈","see-no-evil monkey"],["🙉","hear-no-evil monkey"],["🙊","speak-no-evil monkey"],["💋","kiss mark"],["💌","love letter"],["💘","heart with arrow"],["💝","heart with ribbon"],["💖","sparkling heart"],["💗","growing heart"],["💓","beating heart"],["💞","revolving hearts"],["💕","two hearts"],["💟","heart decoration"],["❣","heart exclamation"],["💔","broken heart"],["❤️‍🔥","heart on fire"],["❤️‍🩹","mending heart"],["❤","red heart"],["🧡","orange heart"],["💛","yellow heart"],["💚","green heart"],["💙","blue heart"],["💜","purple heart"],["🤎","brown heart"],["🖤","black heart"],["🤍","white heart"],["💯","hundred points"],["💢","anger symbol"],["💥","collision"],["💫","dizzy"],["💦","sweat droplets"],["💨","dashing away"],["🕳","hole"],["💣","bomb"],["💬","speech balloon"],["👁️‍🗨️","eye in speech bubble"],["🗨","left speech bubble"],["🗯","right anger bubble"],["💭","thought balloon"],["💤","zzz"],["👋","waving hand"],["🤚","raised back of hand"],["🖐","hand with fingers splayed"],["✋","raised hand"],["🖖","vulcan salute"],["👌","OK hand"],["🤏","pinching hand"],["✌","victory hand"],["🤞","crossed fingers"],["🤟","love-you gesture"],["🤘","sign of the horns"],["🤙","call me hand"],["👈","backhand index pointing left"],["👉","backhand index pointing right"],["👆","backhand index pointing up"],["🖕","middle finger"],["👇","backhand index pointing down"],["☝","index pointing up"],["👍","thumbs up"],["👎","thumbs down"],["✊","raised fist"],["👊","oncoming fist"],["🤛","left-facing fist"],["🤜","right-facing fist"],["👏","clapping hands"],["🙌","raising hands"],["👐","open hands"],["🤲","palms up together"],["🤝","handshake"],["🙏","folded hands"],["✍","writing hand"],["💅","nail polish"],["🤳","selfie"],["💪","flexed biceps"],["🦾","mechanical arm"],["🦿","mechanical leg"],["🦵","leg"],["🦶","foot"],["👂","ear"],["🦻","ear with hearing aid"],["👃","nose"],["🧠","brain"],["🫀","anatomical heart"],["🦷","tooth"],["🦴","bone"],["👀","eyes"],["👁","eye"],["👅","tongue"],["👄","mouth"],["👶","baby"],["🧒","child"],["👦","boy"],["👧","girl"],["🧑","person"],["👱","person: blond hair"],["👨","man"],["🧔","person: beard"],["🧔‍♂️","man: beard"],["🧔‍♀️","woman: beard"],["👨‍🦰","man: red hair"],["👨‍🦱","man: curly hair"],["👨‍🦳","man: white hair"],["👨‍🦲","man: bald"],["👩","woman"],["👩‍🦰","woman: red hair"],["🧑‍🦰","person: red hair"],["👩‍🦱","woman: curly hair"],["🧑‍🦱","person: curly hair"],["👩‍🦳","woman: white hair"],["🧑‍🦳","person: white hair"],["👩‍🦲","woman: bald"],["🧑‍🦲","person: bald"],["👱‍♀️","woman: blond hair"],["👱‍♂️","man: blond hair"],["🧓","older person"],["👴","old man"],["👵","old woman"],["🙍","person frowning"],["🙍‍♂️","man frowning"],["🙍‍♀️","woman frowning"],["🙎","person pouting"],["🙎‍♂️","man pouting"],["🙎‍♀️","woman pouting"],["🙅","person gesturing NO"],["🙅‍♂️","man gesturing NO"],["🙅‍♀️","woman gesturing NO"],["🙆","person gesturing OK"],["🙆‍♂️","man gesturing OK"],["🙆‍♀️","woman gesturing OK"],["💁","person tipping hand"],["💁‍♂️","man tipping hand"],["💁‍♀️","woman tipping hand"],["🙋","person raising hand"],["🙋‍♂️","man raising hand"],["🙋‍♀️","woman raising hand"],["🧏","deaf person"],["🧏‍♂️","deaf man"],["🧏‍♀️","deaf woman"],["🙇","person bowing"],["🙇‍♂️","man bowing"],["🙇‍♀️","woman bowing"],["🤦","person facepalming"],["🤦‍♂️","man facepalming"],["🤦‍♀️","woman facepalming"],["🤷","person shrugging"],["🤷‍♂️","man shrugging"],["🤷‍♀️","woman shrugging"],["🧑‍⚕️","health worker"],["👨‍⚕️","man health worker"],["👩‍⚕️","woman health worker"],["🧑‍🎓","student"],["👨‍🎓","man student"],["👩‍🎓","woman student"],["🧑‍🏫","teacher"],["👨‍🏫","man teacher"],["👩‍🏫","woman teacher"],["🧑‍⚖️","judge"],["👨‍⚖️","man judge"],["👩‍⚖️","woman judge"],["🧑‍🌾","farmer"],["👨‍🌾","man farmer"],["👩‍🌾","woman farmer"],["🧑‍🍳","cook"],["👨‍🍳","man cook"],["👩‍🍳","woman cook"],["🧑‍🔧","mechanic"],["👨‍🔧","man mechanic"],["👩‍🔧","woman mechanic"],["🧑‍🏭","factory worker"],["👨‍🏭","man factory worker"],["👩‍🏭","woman factory worker"],["🧑‍💼","office worker"],["👨‍💼","man office worker"],["👩‍💼","woman office worker"],["🧑‍🔬","scientist"],["👨‍🔬","man scientist"],["👩‍🔬","woman scientist"],["🧑‍💻","technologist"],["👨‍💻","man technologist"],["👩‍💻","woman technologist"],["🧑‍🎤","singer"],["👨‍🎤","man singer"],["👩‍🎤","woman singer"],["🧑‍🎨","artist"],["👨‍🎨","man artist"],["👩‍🎨","woman artist"],["🧑‍✈️","pilot"],["👨‍✈️","man pilot"],["👩‍✈️","woman pilot"],["🧑‍🚀","astronaut"],["👨‍🚀","man astronaut"],["👩‍🚀","woman astronaut"],["🧑‍🚒","firefighter"],["👨‍🚒","man firefighter"],["👩‍🚒","woman firefighter"],["👮","police officer"],["👮‍♂️","man police officer"],["👮‍♀️","woman police officer"],["🕵","detective"],["🕵️‍♂️","man detective"],["🕵️‍♀️","woman detective"],["💂","guard"],["💂‍♂️","man guard"],["💂‍♀️","woman guard"],["🥷","ninja"],["👷","construction worker"],["👷‍♂️","man construction worker"],["👷‍♀️","woman construction worker"],["🤴","prince"],["👸","princess"],["👳","person wearing turban"],["👳‍♂️","man wearing turban"],["👳‍♀️","woman wearing turban"],["👲","person with skullcap"],["🧕","woman with headscarf"],["🤵","person in tuxedo"],["🤵‍♂️","man in tuxedo"],["🤵‍♀️","woman in tuxedo"],["👰","person with veil"],["👰‍♂️","man with veil"],["👰‍♀️","woman with veil"],["🤰","pregnant woman"],["🤱","breast-feeding"],["👩‍🍼","woman feeding baby"],["👨‍🍼","man feeding baby"],["🧑‍🍼","person feeding baby"],["👼","baby angel"],["🎅","Santa Claus"],["🤶","Mrs. Claus"],["🧑‍🎄","mx claus"],["🦸","superhero"],["🦸‍♂️","man superhero"],["🦸‍♀️","woman superhero"],["🦹","supervillain"],["🦹‍♂️","man supervillain"],["🦹‍♀️","woman supervillain"],["🧙","mage"],["🧙‍♂️","man mage"],["🧙‍♀️","woman mage"],["🧚","fairy"],["🧚‍♂️","man fairy"],["🧚‍♀️","woman fairy"],["🧛","vampire"],["🧛‍♂️","man vampire"],["🧛‍♀️","woman vampire"],["🧜","merperson"],["🧜‍♂️","merman"],["🧜‍♀️","mermaid"],["🧝","elf"],["🧝‍♂️","man elf"],["🧝‍♀️","woman elf"],["🧞","genie"],["🧞‍♂️","man genie"],["🧞‍♀️","woman genie"],["🧟","zombie"],["🧟‍♂️","man zombie"],["🧟‍♀️","woman zombie"],["💆","person getting massage"],["💆‍♂️","man getting massage"],["💆‍♀️","woman getting massage"],["💇","person getting haircut"],["💇‍♂️","man getting haircut"],["💇‍♀️","woman getting haircut"],["🚶","person walking"],["🚶‍♂️","man walking"],["🚶‍♀️","woman walking"],["🧍","person standing"],["🧍‍♂️","man standing"],["🧍‍♀️","woman standing"],["🧎","person kneeling"],["🧎‍♂️","man kneeling"],["🧎‍♀️","woman kneeling"],["🧑‍🦯","person with white cane"],["👨‍🦯","man with white cane"],["👩‍🦯","woman with white cane"],["🧑‍🦼","person in motorized wheelchair"],["👨‍🦼","man in motorized wheelchair"],["👩‍🦼","woman in motorized wheelchair"],["🧑‍🦽","person in manual wheelchair"],["👨‍🦽","man in manual wheelchair"],["👩‍🦽","woman in manual wheelchair"],["🏃","person running"],["🏃‍♂️","man running"],["🏃‍♀️","woman running"],["💃","woman dancing"],["🕺","man dancing"],["🕴","person in suit levitating"],["👯","people with bunny ears"],["👯‍♂️","men with bunny ears"],["👯‍♀️","women with bunny ears"],["🧖","person in steamy room"],["🧖‍♂️","man in steamy room"],["🧖‍♀️","woman in steamy room"],["🧗","person climbing"],["🧗‍♂️","man climbing"],["🧗‍♀️","woman climbing"],["🤺","person fencing"],["🏇","horse racing"],["⛷","skier"],["🏂","snowboarder"],["🏌","person golfing"],["🏌️‍♂️","man golfing"],["🏌️‍♀️","woman golfing"],["🏄","person surfing"],["🏄‍♂️","man surfing"],["🏄‍♀️","woman surfing"],["🚣","person rowing boat"],["🚣‍♂️","man rowing boat"],["🚣‍♀️","woman rowing boat"],["🏊","person swimming"],["🏊‍♂️","man swimming"],["🏊‍♀️","woman swimming"],["⛹","person bouncing ball"],["⛹️‍♂️","man bouncing ball"],["⛹️‍♀️","woman bouncing ball"],["🏋","person lifting weights"],["🏋️‍♂️","man lifting weights"],["🏋️‍♀️","woman lifting weights"],["🚴","person biking"],["🚴‍♂️","man biking"],["🚴‍♀️","woman biking"],["🚵","person mountain biking"],["🚵‍♂️","man mountain biking"],["🚵‍♀️","woman mountain biking"],["🤸","person cartwheeling"],["🤸‍♂️","man cartwheeling"],["🤸‍♀️","woman cartwheeling"],["🤼","people wrestling"],["🤼‍♂️","men wrestling"],["🤼‍♀️","women wrestling"],["🤽","person playing water polo"],["🤽‍♂️","man playing water polo"],["🤽‍♀️","woman playing water polo"],["🤾","person playing handball"],["🤾‍♂️","man playing handball"],["🤾‍♀️","woman playing handball"],["🤹","person juggling"],["🤹‍♂️","man juggling"],["🤹‍♀️","woman juggling"],["🧘","person in lotus position"],["🧘‍♂️","man in lotus position"],["🧘‍♀️","woman in lotus position"],["🛀","person taking bath"],["🛌","person in bed"],["🧑‍🤝‍🧑","people holding hands"],["👭","women holding hands"],["👫","woman and man holding hands"],["👬","men holding hands"],["💏","kiss"],["👩‍❤️‍💋‍👨","kiss: woman, man"],["👨‍❤️‍💋‍👨","kiss: man, man"],["👩‍❤️‍💋‍👩","kiss: woman, woman"],["💑","couple with heart"],["👩‍❤️‍👨","couple with heart: woman, man"],["👨‍❤️‍👨","couple with heart: man, man"],["👩‍❤️‍👩","couple with heart: woman, woman"],["👪","family"],["👨‍👩‍👦","family: man, woman, boy"],["👨‍👩‍👧","family: man, woman, girl"],["👨‍👩‍👧‍👦","family: man, woman, girl, boy"],["👨‍👩‍👦‍👦","family: man, woman, boy, boy"],["👨‍👩‍👧‍👧","family: man, woman, girl, girl"],["👨‍👨‍👦","family: man, man, boy"],["👨‍👨‍👧","family: man, man, girl"],["👨‍👨‍👧‍👦","family: man, man, girl, boy"],["👨‍👨‍👦‍👦","family: man, man, boy, boy"],["👨‍👨‍👧‍👧","family: man, man, girl, girl"],["👩‍👩‍👦","family: woman, woman, boy"],["👩‍👩‍👧","family: woman, woman, girl"],["👩‍👩‍👧‍👦","family: woman, woman, girl, boy"],["👩‍👩‍👦‍👦","family: woman, woman, boy, boy"],["👩‍👩‍👧‍👧","family: woman, woman, girl, girl"],["👨‍👦","family: man, boy"],["👨‍👦‍👦","family: man, boy, boy"],["👨‍👧","family: man, girl"],["👨‍👧‍👦","family: man, girl, boy"],["👨‍👧‍👧","family: man, girl, girl"],["👩‍👦","family: woman, boy"],["👩‍👦‍👦","family: woman, boy, boy"],["👩‍👧","family: woman, girl"],["👩‍👧‍👦","family: woman, girl, boy"],["👩‍👧‍👧","family: woman, girl, girl"],["🗣","speaking head"],["👤","bust in silhouette"],["👥","busts in silhouette"],["🫂","people hugging"],["👣","footprints"],["🦰","red hair"],["🦱","curly hair"],["🦳","white hair"],["🦲","bald"],["🐵","monkey face"],["🐒","monkey"],["🦍","gorilla"],["🦧","orangutan"],["🐶","dog face"],["🐕","dog"],["🦮","guide dog"],["🐕‍🦺","service dog"],["🐩","poodle"],["🐺","wolf"],["🦊","fox"],["🦝","raccoon"],["🐱","cat face"],["🐈","cat"],["🐈‍⬛","black cat"],["🦁","lion"],["🐯","tiger face"],["🐅","tiger"],["🐆","leopard"],["🐴","horse face"],["🐎","horse"],["🦄","unicorn"],["🦓","zebra"],["🦌","deer"],["🦬","bison"],["🐮","cow face"],["🐂","ox"],["🐃","water buffalo"],["🐄","cow"],["🐷","pig face"],["🐖","pig"],["🐗","boar"],["🐽","pig nose"],["🐏","ram"],["🐑","ewe"],["🐐","goat"],["🐪","camel"],["🐫","two-hump camel"],["🦙","llama"],["🦒","giraffe"],["🐘","elephant"],["🦣","mammoth"],["🦏","rhinoceros"],["🦛","hippopotamus"],["🐭","mouse face"],["🐁","mouse"],["🐀","rat"],["🐹","hamster"],["🐰","rabbit face"],["🐇","rabbit"],["🐿","chipmunk"],["🦫","beaver"],["🦔","hedgehog"],["🦇","bat"],["🐻","bear"],["🐻‍❄️","polar bear"],["🐨","koala"],["🐼","panda"],["🦥","sloth"],["🦦","otter"],["🦨","skunk"],["🦘","kangaroo"],["🦡","badger"],["🐾","paw prints"],["🦃","turkey"],["🐔","chicken"],["🐓","rooster"],["🐣","hatching chick"],["🐤","baby chick"],["🐥","front-facing baby chick"],["🐦","bird"],["🐧","penguin"],["🕊","dove"],["🦅","eagle"],["🦆","duck"],["🦢","swan"],["🦉","owl"],["🦤","dodo"],["🪶","feather"],["🦩","flamingo"],["🦚","peacock"],["🦜","parrot"],["🐸","frog"],["🐊","crocodile"],["🐢","turtle"],["🦎","lizard"],["🐍","snake"],["🐲","dragon face"],["🐉","dragon"],["🦕","sauropod"],["🦖","T-Rex"],["🐳","spouting whale"],["🐋","whale"],["🐬","dolphin"],["🦭","seal"],["🐟","fish"],["🐠","tropical fish"],["🐡","blowfish"],["🦈","shark"],["🐙","octopus"],["🐚","spiral shell"],["🐌","snail"],["🦋","butterfly"],["🐛","bug"],["🐜","ant"],["🐝","honeybee"],["🪲","beetle"],["🐞","lady beetle"],["🦗","cricket"],["🪳","cockroach"],["🕷","spider"],["🕸","spider web"],["🦂","scorpion"],["🦟","mosquito"],["🪰","fly"],["🪱","worm"],["🦠","microbe"],["💐","bouquet"],["🌸","cherry blossom"],["💮","white flower"],["🏵","rosette"],["🌹","rose"],["🥀","wilted flower"],["🌺","hibiscus"],["🌻","sunflower"],["🌼","blossom"],["🌷","tulip"],["🌱","seedling"],["🪴","potted plant"],["🌲","evergreen tree"],["🌳","deciduous tree"],["🌴","palm tree"],["🌵","cactus"],["🌾","sheaf of rice"],["🌿","herb"],["☘","shamrock"],["🍀","four leaf clover"],["🍁","maple leaf"],["🍂","fallen leaf"],["🍃","leaf fluttering in wind"],["🍇","grapes"],["🍈","melon"],["🍉","watermelon"],["🍊","tangerine"],["🍋","lemon"],["🍌","banana"],["🍍","pineapple"],["🥭","mango"],["🍎","red apple"],["🍏","green apple"],["🍐","pear"],["🍑","peach"],["🍒","cherries"],["🍓","strawberry"],["🫐","blueberries"],["🥝","kiwi fruit"],["🍅","tomato"],["🫒","olive"],["🥥","coconut"],["🥑","avocado"],["🍆","eggplant"],["🥔","potato"],["🥕","carrot"],["🌽","ear of corn"],["🌶","hot pepper"],["🫑","bell pepper"],["🥒","cucumber"],["🥬","leafy green"],["🥦","broccoli"],["🧄","garlic"],["🧅","onion"],["🍄","mushroom"],["🥜","peanuts"],["🌰","chestnut"],["🍞","bread"],["🥐","croissant"],["🥖","baguette bread"],["🫓","flatbread"],["🥨","pretzel"],["🥯","bagel"],["🥞","pancakes"],["🧇","waffle"],["🧀","cheese wedge"],["🍖","meat on bone"],["🍗","poultry leg"],["🥩","cut of meat"],["🥓","bacon"],["🍔","hamburger"],["🍟","french fries"],["🍕","pizza"],["🌭","hot dog"],["🥪","sandwich"],["🌮","taco"],["🌯","burrito"],["🫔","tamale"],["🥙","stuffed flatbread"],["🧆","falafel"],["🥚","egg"],["🍳","cooking"],["🥘","shallow pan of food"],["🍲","pot of food"],["🫕","fondue"],["🥣","bowl with spoon"],["🥗","green salad"],["🍿","popcorn"],["🧈","butter"],["🧂","salt"],["🥫","canned food"],["🍱","bento box"],["🍘","rice cracker"],["🍙","rice ball"],["🍚","cooked rice"],["🍛","curry rice"],["🍜","steaming bowl"],["🍝","spaghetti"],["🍠","roasted sweet potato"],["🍢","oden"],["🍣","sushi"],["🍤","fried shrimp"],["🍥","fish cake with swirl"],["🥮","moon cake"],["🍡","dango"],["🥟","dumpling"],["🥠","fortune cookie"],["🥡","takeout box"],["🦀","crab"],["🦞","lobster"],["🦐","shrimp"],["🦑","squid"],["🦪","oyster"],["🍦","soft ice cream"],["🍧","shaved ice"],["🍨","ice cream"],["🍩","doughnut"],["🍪","cookie"],["🎂","birthday cake"],["🍰","shortcake"],["🧁","cupcake"],["🥧","pie"],["🍫","chocolate bar"],["🍬","candy"],["🍭","lollipop"],["🍮","custard"],["🍯","honey pot"],["🍼","baby bottle"],["🥛","glass of milk"],["☕","hot beverage"],["🫖","teapot"],["🍵","teacup without handle"],["🍶","sake"],["🍾","bottle with popping cork"],["🍷","wine glass"],["🍸","cocktail glass"],["🍹","tropical drink"],["🍺","beer mug"],["🍻","clinking beer mugs"],["🥂","clinking glasses"],["🥃","tumbler glass"],["🥤","cup with straw"],["🧋","bubble tea"],["🧃","beverage box"],["🧉","mate"],["🧊","ice"],["🥢","chopsticks"],["🍽","fork and knife with plate"],["🍴","fork and knife"],["🥄","spoon"],["🔪","kitchen knife"],["🏺","amphora"],["🌍","globe showing Europe-Africa"],["🌎","globe showing Americas"],["🌏","globe showing Asia-Australia"],["🌐","globe with meridians"],["🗺","world map"],["🗾","map of Japan"],["🧭","compass"],["🏔","snow-capped mountain"],["⛰","mountain"],["🌋","volcano"],["🗻","mount fuji"],["🏕","camping"],["🏖","beach with umbrella"],["🏜","desert"],["🏝","desert island"],["🏞","national park"],["🏟","stadium"],["🏛","classical building"],["🏗","building construction"],["🧱","brick"],["🪨","rock"],["🪵","wood"],["🛖","hut"],["🏘","houses"],["🏚","derelict house"],["🏠","house"],["🏡","house with garden"],["🏢","office building"],["🏣","Japanese post office"],["🏤","post office"],["🏥","hospital"],["🏦","bank"],["🏨","hotel"],["🏩","love hotel"],["🏪","convenience store"],["🏫","school"],["🏬","department store"],["🏭","factory"],["🏯","Japanese castle"],["🏰","castle"],["💒","wedding"],["🗼","Tokyo tower"],["🗽","Statue of Liberty"],["⛪","church"],["🕌","mosque"],["🛕","hindu temple"],["🕍","synagogue"],["⛩","shinto shrine"],["🕋","kaaba"],["⛲","fountain"],["⛺","tent"],["🌁","foggy"],["🌃","night with stars"],["🏙","cityscape"],["🌄","sunrise over mountains"],["🌅","sunrise"],["🌆","cityscape at dusk"],["🌇","sunset"],["🌉","bridge at night"],["♨","hot springs"],["🎠","carousel horse"],["🎡","ferris wheel"],["🎢","roller coaster"],["💈","barber pole"],["🎪","circus tent"],["🚂","locomotive"],["🚃","railway car"],["🚄","high-speed train"],["🚅","bullet train"],["🚆","train"],["🚇","metro"],["🚈","light rail"],["🚉","station"],["🚊","tram"],["🚝","monorail"],["🚞","mountain railway"],["🚋","tram car"],["🚌","bus"],["🚍","oncoming bus"],["🚎","trolleybus"],["🚐","minibus"],["🚑","ambulance"],["🚒","fire engine"],["🚓","police car"],["🚔","oncoming police car"],["🚕","taxi"],["🚖","oncoming taxi"],["🚗","automobile"],["🚘","oncoming automobile"],["🚙","sport utility vehicle"],["🛻","pickup truck"],["🚚","delivery truck"],["🚛","articulated lorry"],["🚜","tractor"],["🏎","racing car"],["🏍","motorcycle"],["🛵","motor scooter"],["🦽","manual wheelchair"],["🦼","motorized wheelchair"],["🛺","auto rickshaw"],["🚲","bicycle"],["🛴","kick scooter"],["🛹","skateboard"],["🛼","roller skate"],["🚏","bus stop"],["🛣","motorway"],["🛤","railway track"],["🛢","oil drum"],["⛽","fuel pump"],["🚨","police car light"],["🚥","horizontal traffic light"],["🚦","vertical traffic light"],["🛑","stop sign"],["🚧","construction"],["⚓","anchor"],["⛵","sailboat"],["🛶","canoe"],["🚤","speedboat"],["🛳","passenger ship"],["⛴","ferry"],["🛥","motor boat"],["🚢","ship"],["✈","airplane"],["🛩","small airplane"],["🛫","airplane departure"],["🛬","airplane arrival"],["🪂","parachute"],["💺","seat"],["🚁","helicopter"],["🚟","suspension railway"],["🚠","mountain cableway"],["🚡","aerial tramway"],["🛰","satellite"],["🚀","rocket"],["🛸","flying saucer"],["🛎","bellhop bell"],["🧳","luggage"],["⌛","hourglass done"],["⏳","hourglass not done"],["⌚","watch"],["⏰","alarm clock"],["⏱","stopwatch"],["⏲","timer clock"],["🕰","mantelpiece clock"],["🕛","twelve o’clock"],["🕧","twelve-thirty"],["🕐","one o’clock"],["🕜","one-thirty"],["🕑","two o’clock"],["🕝","two-thirty"],["🕒","three o’clock"],["🕞","three-thirty"],["🕓","four o’clock"],["🕟","four-thirty"],["🕔","five o’clock"],["🕠","five-thirty"],["🕕","six o’clock"],["🕡","six-thirty"],["🕖","seven o’clock"],["🕢","seven-thirty"],["🕗","eight o’clock"],["🕣","eight-thirty"],["🕘","nine o’clock"],["🕤","nine-thirty"],["🕙","ten o’clock"],["🕥","ten-thirty"],["🕚","eleven o’clock"],["🕦","eleven-thirty"],["🌑","new moon"],["🌒","waxing crescent moon"],["🌓","first quarter moon"],["🌔","waxing gibbous moon"],["🌕","full moon"],["🌖","waning gibbous moon"],["🌗","last quarter moon"],["🌘","waning crescent moon"],["🌙","crescent moon"],["🌚","new moon face"],["🌛","first quarter moon face"],["🌜","last quarter moon face"],["🌡","thermometer"],["☀","sun"],["🌝","full moon face"],["🌞","sun with face"],["🪐","ringed planet"],["⭐","star"],["🌟","glowing star"],["🌠","shooting star"],["🌌","milky way"],["☁","cloud"],["⛅","sun behind cloud"],["⛈","cloud with lightning and rain"],["🌤","sun behind small cloud"],["🌥","sun behind large cloud"],["🌦","sun behind rain cloud"],["🌧","cloud with rain"],["🌨","cloud with snow"],["🌩","cloud with lightning"],["🌪","tornado"],["🌫","fog"],["🌬","wind face"],["🌀","cyclone"],["🌈","rainbow"],["🌂","closed umbrella"],["☂","umbrella"],["☔","umbrella with rain drops"],["⛱","umbrella on ground"],["⚡","high voltage"],["❄","snowflake"],["☃","snowman"],["⛄","snowman without snow"],["☄","comet"],["🔥","fire"],["💧","droplet"],["🌊","water wave"],["🎃","jack-o-lantern"],["🎄","Christmas tree"],["🎆","fireworks"],["🎇","sparkler"],["🧨","firecracker"],["✨","sparkles"],["🎈","balloon"],["🎉","party popper"],["🎊","confetti ball"],["🎋","tanabata tree"],["🎍","pine decoration"],["🎎","Japanese dolls"],["🎏","carp streamer"],["🎐","wind chime"],["🎑","moon viewing ceremony"],["🧧","red envelope"],["🎀","ribbon"],["🎁","wrapped gift"],["🎗","reminder ribbon"],["🎟","admission tickets"],["🎫","ticket"],["🎖","military medal"],["🏆","trophy"],["🏅","sports medal"],["🥇","1st place medal"],["🥈","2nd place medal"],["🥉","3rd place medal"],["⚽","soccer ball"],["⚾","baseball"],["🥎","softball"],["🏀","basketball"],["🏐","volleyball"],["🏈","american football"],["🏉","rugby football"],["🎾","tennis"],["🥏","flying disc"],["🎳","bowling"],["🏏","cricket game"],["🏑","field hockey"],["🏒","ice hockey"],["🥍","lacrosse"],["🏓","ping pong"],["🏸","badminton"],["🥊","boxing glove"],["🥋","martial arts uniform"],["🥅","goal net"],["⛳","flag in hole"],["⛸","ice skate"],["🎣","fishing pole"],["🤿","diving mask"],["🎽","running shirt"],["🎿","skis"],["🛷","sled"],["🥌","curling stone"],["🎯","bullseye"],["🪀","yo-yo"],["🪁","kite"],["🎱","pool 8 ball"],["🔮","crystal ball"],["🪄","magic wand"],["🧿","nazar amulet"],["🎮","video game"],["🕹","joystick"],["🎰","slot machine"],["🎲","game die"],["🧩","puzzle piece"],["🧸","teddy bear"],["🪅","piñata"],["🪆","nesting dolls"],["♠","spade suit"],["♥","heart suit"],["♦","diamond suit"],["♣","club suit"],["♟","chess pawn"],["🃏","joker"],["🀄","mahjong red dragon"],["🎴","flower playing cards"],["🎭","performing arts"],["🖼","framed picture"],["🎨","artist palette"],["🧵","thread"],["🪡","sewing needle"],["🧶","yarn"],["🪢","knot"],["👓","glasses"],["🕶","sunglasses"],["🥽","goggles"],["🥼","lab coat"],["🦺","safety vest"],["👔","necktie"],["👕","t-shirt"],["👖","jeans"],["🧣","scarf"],["🧤","gloves"],["🧥","coat"],["🧦","socks"],["👗","dress"],["👘","kimono"],["🥻","sari"],["🩱","one-piece swimsuit"],["🩲","briefs"],["🩳","shorts"],["👙","bikini"],["👚","woman’s clothes"],["👛","purse"],["👜","handbag"],["👝","clutch bag"],["🛍","shopping bags"],["🎒","backpack"],["🩴","thong sandal"],["👞","man’s shoe"],["👟","running shoe"],["🥾","hiking boot"],["🥿","flat shoe"],["👠","high-heeled shoe"],["👡","woman’s sandal"],["🩰","ballet shoes"],["👢","woman’s boot"],["👑","crown"],["👒","woman’s hat"],["🎩","top hat"],["🎓","graduation cap"],["🧢","billed cap"],["🪖","military helmet"],["⛑","rescue worker’s helmet"],["📿","prayer beads"],["💄","lipstick"],["💍","ring"],["💎","gem stone"],["🔇","muted speaker"],["🔈","speaker low volume"],["🔉","speaker medium volume"],["🔊","speaker high volume"],["📢","loudspeaker"],["📣","megaphone"],["📯","postal horn"],["🔔","bell"],["🔕","bell with slash"],["🎼","musical score"],["🎵","musical note"],["🎶","musical notes"],["🎙","studio microphone"],["🎚","level slider"],["🎛","control knobs"],["🎤","microphone"],["🎧","headphone"],["📻","radio"],["🎷","saxophone"],["🪗","accordion"],["🎸","guitar"],["🎹","musical keyboard"],["🎺","trumpet"],["🎻","violin"],["🪕","banjo"],["🥁","drum"],["🪘","long drum"],["📱","mobile phone"],["📲","mobile phone with arrow"],["☎","telephone"],["📞","telephone receiver"],["📟","pager"],["📠","fax machine"],["🔋","battery"],["🔌","electric plug"],["💻","laptop"],["🖥","desktop computer"],["🖨","printer"],["⌨","keyboard"],["🖱","computer mouse"],["🖲","trackball"],["💽","computer disk"],["💾","floppy disk"],["💿","optical disk"],["📀","dvd"],["🧮","abacus"],["🎥","movie camera"],["🎞","film frames"],["📽","film projector"],["🎬","clapper board"],["📺","television"],["📷","camera"],["📸","camera with flash"],["📹","video camera"],["📼","videocassette"],["🔍","magnifying glass tilted left"],["🔎","magnifying glass tilted right"],["🕯","candle"],["💡","light bulb"],["🔦","flashlight"],["🏮","red paper lantern"],["🪔","diya lamp"],["📔","notebook with decorative cover"],["📕","closed book"],["📖","open book"],["📗","green book"],["📘","blue book"],["📙","orange book"],["📚","books"],["📓","notebook"],["📒","ledger"],["📃","page with curl"],["📜","scroll"],["📄","page facing up"],["📰","newspaper"],["🗞","rolled-up newspaper"],["📑","bookmark tabs"],["🔖","bookmark"],["🏷","label"],["💰","money bag"],["🪙","coin"],["💴","yen banknote"],["💵","dollar banknote"],["💶","euro banknote"],["💷","pound banknote"],["💸","money with wings"],["💳","credit card"],["🧾","receipt"],["💹","chart increasing with yen"],["✉","envelope"],["📧","e-mail"],["📨","incoming envelope"],["📩","envelope with arrow"],["📤","outbox tray"],["📥","inbox tray"],["📦","package"],["📫","closed mailbox with raised flag"],["📪","closed mailbox with lowered flag"],["📬","open mailbox with raised flag"],["📭","open mailbox with lowered flag"],["📮","postbox"],["🗳","ballot box with ballot"],["✏","pencil"],["✒","black nib"],["🖋","fountain pen"],["🖊","pen"],["🖌","paintbrush"],["🖍","crayon"],["📝","memo"],["💼","briefcase"],["📁","file folder"],["📂","open file folder"],["🗂","card index dividers"],["📅","calendar"],["📆","tear-off calendar"],["🗒","spiral notepad"],["🗓","spiral calendar"],["📇","card index"],["📈","chart increasing"],["📉","chart decreasing"],["📊","bar chart"],["📋","clipboard"],["📌","pushpin"],["📍","round pushpin"],["📎","paperclip"],["🖇","linked paperclips"],["📏","straight ruler"],["📐","triangular ruler"],["✂","scissors"],["🗃","card file box"],["🗄","file cabinet"],["🗑","wastebasket"],["🔒","locked"],["🔓","unlocked"],["🔏","locked with pen"],["🔐","locked with key"],["🔑","key"],["🗝","old key"],["🔨","hammer"],["🪓","axe"],["⛏","pick"],["⚒","hammer and pick"],["🛠","hammer and wrench"],["🗡","dagger"],["⚔","crossed swords"],["🔫","water pistol"],["🪃","boomerang"],["🏹","bow and arrow"],["🛡","shield"],["🪚","carpentry saw"],["🔧","wrench"],["🪛","screwdriver"],["🔩","nut and bolt"],["⚙","gear"],["🗜","clamp"],["⚖","balance scale"],["🦯","white cane"],["🔗","link"],["⛓","chains"],["🪝","hook"],["🧰","toolbox"],["🧲","magnet"],["🪜","ladder"],["⚗","alembic"],["🧪","test tube"],["🧫","petri dish"],["🧬","dna"],["🔬","microscope"],["🔭","telescope"],["📡","satellite antenna"],["💉","syringe"],["🩸","drop of blood"],["💊","pill"],["🩹","adhesive bandage"],["🩺","stethoscope"],["🚪","door"],["🛗","elevator"],["🪞","mirror"],["🪟","window"],["🛏","bed"],["🛋","couch and lamp"],["🪑","chair"],["🚽","toilet"],["🪠","plunger"],["🚿","shower"],["🛁","bathtub"],["🪤","mouse trap"],["🪒","razor"],["🧴","lotion bottle"],["🧷","safety pin"],["🧹","broom"],["🧺","basket"],["🧻","roll of paper"],["🪣","bucket"],["🧼","soap"],["🪥","toothbrush"],["🧽","sponge"],["🧯","fire extinguisher"],["🛒","shopping cart"],["🚬","cigarette"],["⚰","coffin"],["🪦","headstone"],["⚱","funeral urn"],["🗿","moai"],["🪧","placard"],["🏧","ATM sign"],["🚮","litter in bin sign"],["🚰","potable water"],["♿","wheelchair symbol"],["🚹","men’s room"],["🚺","women’s room"],["🚻","restroom"],["🚼","baby symbol"],["🚾","water closet"],["🛂","passport control"],["🛃","customs"],["🛄","baggage claim"],["🛅","left luggage"],["⚠","warning"],["🚸","children crossing"],["⛔","no entry"],["🚫","prohibited"],["🚳","no bicycles"],["🚭","no smoking"],["🚯","no littering"],["🚱","non-potable water"],["🚷","no pedestrians"],["📵","no mobile phones"],["🔞","no one under eighteen"],["☢","radioactive"],["☣","biohazard"],["⬆","up arrow"],["↗","up-right arrow"],["➡","right arrow"],["↘","down-right arrow"],["⬇","down arrow"],["↙","down-left arrow"],["⬅","left arrow"],["↖","up-left arrow"],["↕","up-down arrow"],["↔","left-right arrow"],["↩","right arrow curving left"],["↪","left arrow curving right"],["⤴","right arrow curving up"],["⤵","right arrow curving down"],["🔃","clockwise vertical arrows"],["🔄","counterclockwise arrows button"],["🔙","BACK arrow"],["🔚","END arrow"],["🔛","ON! arrow"],["🔜","SOON arrow"],["🔝","TOP arrow"],["🛐","place of worship"],["⚛","atom symbol"],["🕉","om"],["✡","star of David"],["☸","wheel of dharma"],["☯","yin yang"],["✝","latin cross"],["☦","orthodox cross"],["☪","star and crescent"],["☮","peace symbol"],["🕎","menorah"],["🔯","dotted six-pointed star"],["♈","Aries"],["♉","Taurus"],["♊","Gemini"],["♋","Cancer"],["♌","Leo"],["♍","Virgo"],["♎","Libra"],["♏","Scorpio"],["♐","Sagittarius"],["♑","Capricorn"],["♒","Aquarius"],["♓","Pisces"],["⛎","Ophiuchus"],["🔀","shuffle tracks button"],["🔁","repeat button"],["🔂","repeat single button"],["▶","play button"],["⏩","fast-forward button"],["⏭","next track button"],["⏯","play or pause button"],["◀","reverse button"],["⏪","fast reverse button"],["⏮","last track button"],["🔼","upwards button"],["⏫","fast up button"],["🔽","downwards button"],["⏬","fast down button"],["⏸","pause button"],["⏹","stop button"],["⏺","record button"],["⏏","eject button"],["🎦","cinema"],["🔅","dim button"],["🔆","bright button"],["📶","antenna bars"],["📳","vibration mode"],["📴","mobile phone off"],["♀","female sign"],["♂","male sign"],["⚧","transgender symbol"],["✖","multiply"],["➕","plus"],["➖","minus"],["➗","divide"],["♾","infinity"],["‼","double exclamation mark"],["⁉","exclamation question mark"],["❓","red question mark"],["❔","white question mark"],["❕","white exclamation mark"],["❗","red exclamation mark"],["〰","wavy dash"],["💱","currency exchange"],["💲","heavy dollar sign"],["⚕","medical symbol"],["♻","recycling symbol"],["⚜","fleur-de-lis"],["🔱","trident emblem"],["📛","name badge"],["🔰","Japanese symbol for beginner"],["⭕","hollow red circle"],["✅","check mark button"],["☑","check box with check"],["✔","check mark"],["❌","cross mark"],["❎","cross mark button"],["➰","curly loop"],["➿","double curly loop"],["〽","part alternation mark"],["✳","eight-spoked asterisk"],["✴","eight-pointed star"],["❇","sparkle"],["©","copyright"],["®","registered"],["™","trade mark"],["#️⃣","keycap: #"],["*️⃣","keycap: *"],["0️⃣","keycap: 0"],["1️⃣","keycap: 1"],["2️⃣","keycap: 2"],["3️⃣","keycap: 3"],["4️⃣","keycap: 4"],["5️⃣","keycap: 5"],["6️⃣","keycap: 6"],["7️⃣","keycap: 7"],["8️⃣","keycap: 8"],["9️⃣","keycap: 9"],["🔟","keycap: 10"],["🔠","input latin uppercase"],["🔡","input latin lowercase"],["🔢","input numbers"],["🔣","input symbols"],["🔤","input latin letters"],["🅰","A button (blood type)"],["🆎","AB button (blood type)"],["🅱","B button (blood type)"],["🆑","CL button"],["🆒","COOL button"],["🆓","FREE button"],["ℹ","information"],["🆔","ID button"],["Ⓜ","circled M"],["🆕","NEW button"],["🆖","NG button"],["🅾","O button (blood type)"],["🆗","OK button"],["🅿","P button"],["🆘","SOS button"],["🆙","UP! button"],["🆚","VS button"],["🈁","Japanese “here” button"],["🈂","Japanese “service charge” button"],["🈷","Japanese “monthly amount” button"],["🈶","Japanese “not free of charge” button"],["🈯","Japanese “reserved” button"],["🉐","Japanese “bargain” button"],["🈹","Japanese “discount” button"],["🈚","Japanese “free of charge” button"],["🈲","Japanese “prohibited” button"],["🉑","Japanese “acceptable” button"],["🈸","Japanese “application” button"],["🈴","Japanese “passing grade” button"],["🈳","Japanese “vacancy” button"],["㊗","Japanese “congratulations” button"],["㊙","Japanese “secret” button"],["🈺","Japanese “open for business” button"],["🈵","Japanese “no vacancy” button"],["🔴","red circle"],["🟠","orange circle"],["🟡","yellow circle"],["🟢","green circle"],["🔵","blue circle"],["🟣","purple circle"],["🟤","brown circle"],["⚫","black circle"],["⚪","white circle"],["🟥","red square"],["🟧","orange square"],["🟨","yellow square"],["🟩","green square"],["🟦","blue square"],["🟪","purple square"],["🟫","brown square"],["⬛","black large square"],["⬜","white large square"],["◼","black medium square"],["◻","white medium square"],["◾","black medium-small square"],["◽","white medium-small square"],["▪","black small square"],["▫","white small square"],["🔶","large orange diamond"],["🔷","large blue diamond"],["🔸","small orange diamond"],["🔹","small blue diamond"],["🔺","red triangle pointed up"],["🔻","red triangle pointed down"],["💠","diamond with a dot"],["🔘","radio button"],["🔳","white square button"],["🔲","black square button"],["🏁","chequered flag"],["🚩","triangular flag"],["🎌","crossed flags"],["🏴","black flag"],["🏳","white flag"],["🏳️‍🌈","rainbow flag"],["🏳️‍⚧️","transgender flag"],["🏴‍☠️","pirate flag"],["🇦🇨","flag: Ascension Island"],["🇦🇩","flag: Andorra"],["🇦🇪","flag: United Arab Emirates"],["🇦🇫","flag: Afghanistan"],["🇦🇬","flag: Antigua & Barbuda"],["🇦🇮","flag: Anguilla"],["🇦🇱","flag: Albania"],["🇦🇲","flag: Armenia"],["🇦🇴","flag: Angola"],["🇦🇶","flag: Antarctica"],["🇦🇷","flag: Argentina"],["🇦🇸","flag: American Samoa"],["🇦🇹","flag: Austria"],["🇦🇺","flag: Australia"],["🇦🇼","flag: Aruba"],["🇦🇽","flag: Åland Islands"],["🇦🇿","flag: Azerbaijan"],["🇧🇦","flag: Bosnia & Herzegovina"],["🇧🇧","flag: Barbados"],["🇧🇩","flag: Bangladesh"],["🇧🇪","flag: Belgium"],["🇧🇫","flag: Burkina Faso"],["🇧🇬","flag: Bulgaria"],["🇧🇭","flag: Bahrain"],["🇧🇮","flag: Burundi"],["🇧🇯","flag: Benin"],["🇧🇱","flag: St. Barthélemy"],["🇧🇲","flag: Bermuda"],["🇧🇳","flag: Brunei"],["🇧🇴","flag: Bolivia"],["🇧🇶","flag: Caribbean Netherlands"],["🇧🇷","flag: Brazil"],["🇧🇸","flag: Bahamas"],["🇧🇹","flag: Bhutan"],["🇧🇻","flag: Bouvet Island"],["🇧🇼","flag: Botswana"],["🇧🇾","flag: Belarus"],["🇧🇿","flag: Belize"],["🇨🇦","flag: Canada"],["🇨🇨","flag: Cocos (Keeling) Islands"],["🇨🇩","flag: Congo - Kinshasa"],["🇨🇫","flag: Central African Republic"],["🇨🇬","flag: Congo - Brazzaville"],["🇨🇭","flag: Switzerland"],["🇨🇮","flag: Côte d’Ivoire"],["🇨🇰","flag: Cook Islands"],["🇨🇱","flag: Chile"],["🇨🇲","flag: Cameroon"],["🇨🇳","flag: China"],["🇨🇴","flag: Colombia"],["🇨🇵","flag: Clipperton Island"],["🇨🇷","flag: Costa Rica"],["🇨🇺","flag: Cuba"],["🇨🇻","flag: Cape Verde"],["🇨🇼","flag: Curaçao"],["🇨🇽","flag: Christmas Island"],["🇨🇾","flag: Cyprus"],["🇨🇿","flag: Czechia"],["🇩🇪","flag: Germany"],["🇩🇬","flag: Diego Garcia"],["🇩🇯","flag: Djibouti"],["🇩🇰","flag: Denmark"],["🇩🇲","flag: Dominica"],["🇩🇴","flag: Dominican Republic"],["🇩🇿","flag: Algeria"],["🇪🇦","flag: Ceuta & Melilla"],["🇪🇨","flag: Ecuador"],["🇪🇪","flag: Estonia"],["🇪🇬","flag: Egypt"],["🇪🇭","flag: Western Sahara"],["🇪🇷","flag: Eritrea"],["🇪🇸","flag: Spain"],["🇪🇹","flag: Ethiopia"],["🇪🇺","flag: European Union"],["🇫🇮","flag: Finland"],["🇫🇯","flag: Fiji"],["🇫🇰","flag: Falkland Islands"],["🇫🇲","flag: Micronesia"],["🇫🇴","flag: Faroe Islands"],["🇫🇷","flag: France"],["🇬🇦","flag: Gabon"],["🇬🇧","flag: United Kingdom"],["🇬🇩","flag: Grenada"],["🇬🇪","flag: Georgia"],["🇬🇫","flag: French Guiana"],["🇬🇬","flag: Guernsey"],["🇬🇭","flag: Ghana"],["🇬🇮","flag: Gibraltar"],["🇬🇱","flag: Greenland"],["🇬🇲","flag: Gambia"],["🇬🇳","flag: Guinea"],["🇬🇵","flag: Guadeloupe"],["🇬🇶","flag: Equatorial Guinea"],["🇬🇷","flag: Greece"],["🇬🇸","flag: South Georgia & South Sandwich Islands"],["🇬🇹","flag: Guatemala"],["🇬🇺","flag: Guam"],["🇬🇼","flag: Guinea-Bissau"],["🇬🇾","flag: Guyana"],["🇭🇰","flag: Hong Kong SAR China"],["🇭🇲","flag: Heard & McDonald Islands"],["🇭🇳","flag: Honduras"],["🇭🇷","flag: Croatia"],["🇭🇹","flag: Haiti"],["🇭🇺","flag: Hungary"],["🇮🇨","flag: Canary Islands"],["🇮🇩","flag: Indonesia"],["🇮🇪","flag: Ireland"],["🇮🇱","flag: Israel"],["🇮🇲","flag: Isle of Man"],["🇮🇳","flag: India"],["🇮🇴","flag: British Indian Ocean Territory"],["🇮🇶","flag: Iraq"],["🇮🇷","flag: Iran"],["🇮🇸","flag: Iceland"],["🇮🇹","flag: Italy"],["🇯🇪","flag: Jersey"],["🇯🇲","flag: Jamaica"],["🇯🇴","flag: Jordan"],["🇯🇵","flag: Japan"],["🇰🇪","flag: Kenya"],["🇰🇬","flag: Kyrgyzstan"],["🇰🇭","flag: Cambodia"],["🇰🇮","flag: Kiribati"],["🇰🇲","flag: Comoros"],["🇰🇳","flag: St. Kitts & Nevis"],["🇰🇵","flag: North Korea"],["🇰🇷","flag: South Korea"],["🇰🇼","flag: Kuwait"],["🇰🇾","flag: Cayman Islands"],["🇰🇿","flag: Kazakhstan"],["🇱🇦","flag: Laos"],["🇱🇧","flag: Lebanon"],["🇱🇨","flag: St. Lucia"],["🇱🇮","flag: Liechtenstein"],["🇱🇰","flag: Sri Lanka"],["🇱🇷","flag: Liberia"],["🇱🇸","flag: Lesotho"],["🇱🇹","flag: Lithuania"],["🇱🇺","flag: Luxembourg"],["🇱🇻","flag: Latvia"],["🇱🇾","flag: Libya"],["🇲🇦","flag: Morocco"],["🇲🇨","flag: Monaco"],["🇲🇩","flag: Moldova"],["🇲🇪","flag: Montenegro"],["🇲🇫","flag: St. Martin"],["🇲🇬","flag: Madagascar"],["🇲🇭","flag: Marshall Islands"],["🇲🇰","flag: North Macedonia"],["🇲🇱","flag: Mali"],["🇲🇲","flag: Myanmar (Burma)"],["🇲🇳","flag: Mongolia"],["🇲🇴","flag: Macao SAR China"],["🇲🇵","flag: Northern Mariana Islands"],["🇲🇶","flag: Martinique"],["🇲🇷","flag: Mauritania"],["🇲🇸","flag: Montserrat"],["🇲🇹","flag: Malta"],["🇲🇺","flag: Mauritius"],["🇲🇻","flag: Maldives"],["🇲🇼","flag: Malawi"],["🇲🇽","flag: Mexico"],["🇲🇾","flag: Malaysia"],["🇲🇿","flag: Mozambique"],["🇳🇦","flag: Namibia"],["🇳🇨","flag: New Caledonia"],["🇳🇪","flag: Niger"],["🇳🇫","flag: Norfolk Island"],["🇳🇬","flag: Nigeria"],["🇳🇮","flag: Nicaragua"],["🇳🇱","flag: Netherlands"],["🇳🇴","flag: Norway"],["🇳🇵","flag: Nepal"],["🇳🇷","flag: Nauru"],["🇳🇺","flag: Niue"],["🇳🇿","flag: New Zealand"],["🇴🇲","flag: Oman"],["🇵🇦","flag: Panama"],["🇵🇪","flag: Peru"],["🇵🇫","flag: French Polynesia"],["🇵🇬","flag: Papua New Guinea"],["🇵🇭","flag: Philippines"],["🇵🇰","flag: Pakistan"],["🇵🇱","flag: Poland"],["🇵🇲","flag: St. Pierre & Miquelon"],["🇵🇳","flag: Pitcairn Islands"],["🇵🇷","flag: Puerto Rico"],["🇵🇸","flag: Palestinian Territories"],["🇵🇹","flag: Portugal"],["🇵🇼","flag: Palau"],["🇵🇾","flag: Paraguay"],["🇶🇦","flag: Qatar"],["🇷🇪","flag: Réunion"],["🇷🇴","flag: Romania"],["🇷🇸","flag: Serbia"],["🇷🇺","flag: Russia"],["🇷🇼","flag: Rwanda"],["🇸🇦","flag: Saudi Arabia"],["🇸🇧","flag: Solomon Islands"],["🇸🇨","flag: Seychelles"],["🇸🇩","flag: Sudan"],["🇸🇪","flag: Sweden"],["🇸🇬","flag: Singapore"],["🇸🇭","flag: St. Helena"],["🇸🇮","flag: Slovenia"],["🇸🇯","flag: Svalbard & Jan Mayen"],["🇸🇰","flag: Slovakia"],["🇸🇱","flag: Sierra Leone"],["🇸🇲","flag: San Marino"],["🇸🇳","flag: Senegal"],["🇸🇴","flag: Somalia"],["🇸🇷","flag: Suriname"],["🇸🇸","flag: South Sudan"],["🇸🇹","flag: São Tomé & Príncipe"],["🇸🇻","flag: El Salvador"],["🇸🇽","flag: Sint Maarten"],["🇸🇾","flag: Syria"],["🇸🇿","flag: Eswatini"],["🇹🇦","flag: Tristan da Cunha"],["🇹🇨","flag: Turks & Caicos Islands"],["🇹🇩","flag: Chad"],["🇹🇫","flag: French Southern Territories"],["🇹🇬","flag: Togo"],["🇹🇭","flag: Thailand"],["🇹🇯","flag: Tajikistan"],["🇹🇰","flag: Tokelau"],["🇹🇱","flag: Timor-Leste"],["🇹🇲","flag: Turkmenistan"],["🇹🇳","flag: Tunisia"],["🇹🇴","flag: Tonga"],["🇹🇷","flag: Turkey"],["🇹🇹","flag: Trinidad & Tobago"],["🇹🇻","flag: Tuvalu"],["🇹🇼","flag: Taiwan"],["🇹🇿","flag: Tanzania"],["🇺🇦","flag: Ukraine"],["🇺🇬","flag: Uganda"],["🇺🇲","flag: U.S. Outlying Islands"],["🇺🇳","flag: United Nations"],["🇺🇸","flag: United States"],["🇺🇾","flag: Uruguay"],["🇺🇿","flag: Uzbekistan"],["🇻🇦","flag: Vatican City"],["🇻🇨","flag: St. Vincent & Grenadines"],["🇻🇪","flag: Venezuela"],["🇻🇬","flag: British Virgin Islands"],["🇻🇮","flag: U.S. Virgin Islands"],["🇻🇳","flag: Vietnam"],["🇻🇺","flag: Vanuatu"],["🇼🇫","flag: Wallis & Futuna"],["🇼🇸","flag: Samoa"],["🇽🇰","flag: Kosovo"],["🇾🇪","flag: Yemen"],["🇾🇹","flag: Mayotte"],["🇿🇦","flag: South Africa"],["🇿🇲","flag: Zambia"],["🇿🇼","flag: Zimbabwe"],["🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag: England"],["🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag: Scotland"],["🏴󠁧󠁢󠁷󠁬󠁳󠁿","flag: Wales"]];



    var last_emote_search = 'orangu OR hos OR hors OR OR golf OR first OR test OR heart OR brok OR goal';
    const delay = (ms) => new Promise(res => setTimeout(res, ms));


    var purple_trans = '#772fe2de';
    var purple_light_trans = '#7d39e199';
    var bright_green = '#43de6d';

    
    var mathob = {
        '+':(s,b)=> s+b,
        '-':(s,b)=> s-b,
        '*':(s,b)=> s*b,
        '/':(s,b)=> s/b,
    };

    var icons = {
        expand: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEwSURBVFiF7ZcxbsIwFIa/qkhNz8DK1gtE4hy9AWeAC5QFqedoVHVrl7CCGMPEDbqyMyCZAbdKXohfnDhi8S9Fsiy/939+suJngC1gHF9Gd2VK7u0ImJYCDsBJJCl6ABTARMwlwIsdTxFEa+C5h6GmJ+BHeGKAPZDbcW4pQysRHvsywM7SfTNMJco7z23unQT4Wxga4pY5TQChIZrMnQChIFzmFYAMmN9IIA+Nz8FsE7sAPnwSvXkAvCvm/3pUEp2BL+CBazl/PSCOwIz6jy0qKioqylsJsARSj5jUxvTurLpeRks8btG7X8dNDYmrmWgjralxtmR9zdtANDalocw1iBrAEOYuiArA3R8mhmF2LlWuhAHMSCwYAxsx9wmsOhougFcxV6uu9jxXW2eH1Of5BXcXq382IwkIAAAAAElFTkSuQmCC",
        shrink: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVFiF7de9ThtBGIXhhwgLEyGqSCahSpSegp7rQLmEdHAhKfgp00WRImjy05A2bUCioKWgChJQIBlRIJxiZ9F45Rl2ZIci8pEse2fn+87rtXfnDBxgH11Ppy6+41AwHwSQFEQPnQKDTqhJmR8Ez6/NgVEQC7jBdgHANvqhNmU+5DWnuiQD/MR8VLQcxvcKAPZCzXI0Nocfkfl8sygFMQmAR81zEOMCtDZPQbwdA+BNqXmt+M/yewyAujZ5h81GnxfxIjrewGesFhg3tYrj0OtVNH6B6xigh1M8zzS7LzCO567gpHH+RvXznNcAV/iIpUzD3QKAHdWlf5Y4/weXBf2mmmqqqf5jzYT3Dj5I57j6UfyrZd81vJd/FG/irh7oqTLcIPP60tJcmJvr1Q+eD6vhOV4aXo67quV4JRynvs0oxXOP8Q630djDcpzSkwWSUWpmuHEi2WvptN3KfFKhtBVEKr1OKpZnIXLReZIbk5EQbbZmfWwVABRtzb5lzGv1DCfoxzSr3eZ0fwZHOMO64Xv1X6qLT1j4C7C/pPHSQDGmAAAAAElFTkSuQmCC",
        resize: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000.000000 1000.000000" version="1.0"><g stroke="none" fill="#43de6d" transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">        <path d="M9235 9969 c-31 -17 -9164 -9151 -9181 -9181 -8 -15 -14 -49 -14 -76 0 -38 6 -57 29 -88 34 -46 535 -544 571 -568 28 -18 110 -22 143 -5 31 16 9165 9148 9183 9181 8 15 14 49 14 76 0 38 -6 57 -29 88 -34 46 -535 544 -571 568 -28 18 -114 21 -145 5z"/>        <path d="M5923 4093 c-1911 -1908 -3479 -3476 -3484 -3485 -5 -9 -9 -38 -9 -64 l0 -48 228 -228 228 -228 53 0 53 0 3478 3472 c1914 1909 3482 3478 3485 3485 3 8 5 35 5 61 l0 46 -228 228 -228 228 -53 0 -53 0 -3475 -3467z"/>        <path d="M7042 2957 l-2442 -2442 0 -45 0 -45 213 -213 212 -212 45 0 45 0 2443 2443 2442 2442 0 45 0 45 -213 213 -212 212 -45 0 -45 0 -2443 -2443z"/>        <path d="M8088 1922 l-1478 -1477 0 -45 c0 -44 1 -45 178 -222 177 -178 178 -178 222 -178 l45 0 1472 1473 1473 1472 0 55 0 56 -173 172 c-172 171 -174 172 -218 172 l-44 0 -1477 -1478z"/></g>        </svg>`,
        resize_hover: `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">        <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#43de6d" stroke="none">        <path d="M5318 4622 l-3798 -3797 0 -59 0 -60 312 -314 c172 -172 325 -320 340 -328 15 -8 49 -14 75 -14 l48 0 3797 3798 3798 3797 0 59 0 60 -312 314 c-172 172 -325 320 -340 328 -15 8 -49 14 -75 14 l-48 0 -3797 -3798z"/>        <path d="M6763 3147 l-2483 -2482 0 -50 0 -49 268 -268 268 -268 49 0 50 0 2482 2483 2483 2482 0 50 0 49 -268 268 -268 268 -49 0 -50 0 -2482 -2483z"/>        <path d="M8058 1902 l-1268 -1267 0 -50 0 -50 248 -247 247 -248 50 0 50 0 1267 1268 1268 1267 0 50 0 50 -248 247 -247 248 -50 0 -50 0 -1267 -1268z"/>        </g>        </svg>`,    
    };
    const attr = (o, k, v) => o ? o.setAttribute(k, v) : false;
    const a = (l, r) => r.forEach(i => attr(l, i[0], i[1]));
    function inlineStyler(elm,css){
        if(elm){
            Object.entries(JSON.parse(
            css.replace(/(?<=:)\s*(\b|\B)(?=.+?;)/g,'"')
                .replace(/(?<=:\s*.+?);/g,'",')
                .replace(/[a-zA-Z-]+(?=:)/g, k=> k.replace(/^\b/,'"').replace(/\b$/,'"'))
                .replace(/\s*,\s*}/g,'}')
            )).forEach(kv=> { elm.style.setProperty([kv[0]],kv[1],'important')});
        }
    }
    function topZIndexer(){
        let n = new Date().getTime() / 1000000;
        let r = (n - Math.floor(n)) * 100000;
        return (Math.ceil(n+r) * 10);
    }
    var headernavcolor = ()=> window.getComputedStyle(document.getElementsByClassName('top-nav')?.[0]?.firstChild).backgroundColor;

    function setCSS(doc,style_id){
        if(doc.getElementById(`${style_id}_style`)) doc.getElementById(`${style_id}_style`).outerHTML = '';
        let csselm = doc.createElement('style');
        a(csselm,[['class',`${style_id}_style`]]);
        doc.head.appendChild(csselm);
        csselm.innerHTML = `
        .pad2 {
            padding: 2px;
        }
        .pad4 {
            padding: 4px;
        }
        .pad6 {
            padding: 6px;
        }
        .pad8 {
            padding: 8px;
        }
        .twitch_resizer_textarea {
            border: 1px solid ${bright_green};
            border-radius: 0.4em;
            background: #1f1f23ed;
            color: #ffffff;
        }
        .twitch_resizer_textarea:focus {
            border: 1px solid 
        }
        .emote_item {
            background: transparent;
        }
        .emote_item:hover {
            background: #772ce8c4;
            border-radius: 0.2em;
        }
        .bottom-flowcheat-gradient {
            background: linear-gradient(to bottom, transparent, ${headernavcolor});
        };
        .mover-top-gradient {
            background: linear-gradient(to top right, ${headernavcolor}, ${headernavcolor}, #772ce885);
            background-size: 250% 250%;
            animation: move_gradient 15s ease infinite;
        }
        .mover-bottom-gradient {
            background: linear-gradient(to bottom right, ${headernavcolor}, ${headernavcolor}, #772ce885);
            background-size: 250% 250%;
            animation: move_gradient 15s ease infinite;
        }
        @keyframes move_gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }`;
    }
    setCSS(document,'twitch_pop_custom_css');







    /*
        ******************************************************************
                                DRAG MOVE RESIZE
        ******************************************************************
    */
    function dragElement() {
        let actor = this;
        var el = document.getElementById(actor.getAttribute('panel_move_id')); /*requires the trigger elm contains the ID of the elm to be moved as ['panel_move_id','TARGET_ID']*/
        var pos1 = 0,    pos2 = 0,    pos3 = 0,    pos4 = 0;
        if (document.getElementById(actor.id)) document.getElementById(actor.id).onmousedown = dragMouseDown;
        else actor.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            inlineStyler(el,`{z-index: ${topZIndexer()}}`);
        }
        function elementDrag(e) {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            inlineStyler(el,`{z-index: ${topZIndexer()}}; top: ${(el.offsetTop - pos2)}px; left: ${(el.offsetLeft - pos1)}px; opacity: 0.85; transition: opacity 100ms;}`);
            // if(/nav/i.test(el.getAttribute('id'))){
            //     updateSideNaveGridLayout();
            //     resetDefaultAnnoyingTwitchStylesToNull();
            // }
            // if(/chat/i.test(el.getAttribute('id'))){
            //     let chatrect = el.getElementsByClassName('scrollable-area')?.[0]?.getBoundingClientRect();
            //     let alted_chat_rects = getWidthOfChildNodesInChatBtnCont();
            //     let min_width = alted_chat_rects.parent_width > alted_chat_rects.parent_width ? alted_chat_rects.parent_width : chatrect.width;
            //     if(el.getBoundingClientRect().width < chatrect.width){
            //         inlineStyler(el,`{width: ${(min_width)}px;}`);
            //     }
            // }
            // if(/video/i.test(el.getAttribute('id'))) {
            //     var head_foot_px = ['video_footer_elm','video_main_content_holder'].map(i=> document.getElementById(i).getBoundingClientRect().height).reduce((a,b)=> a+b);
            //     var vidrect = document.getElementsByClassName('video-player__overlay')?.[0]?.getBoundingClientRect();
            //     inlineStyler(el,`{height: ${(vidrect.height +head_foot_px)}px;}`);
            //     resetDefaultAnnoyingTwitchStylesToNull();
            // }
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            el.style.opacity = "1";
            inlineStyler(el,`{z-index: ${topZIndexer()}}`);
            // resetDefaultAnnoyingTwitchStylesToNull();
        }
    }

    function adjustElementSize(){
        var cbod = document.getElementById(this.getAttribute('resize_container'));
        var foot_height = 0; //is_nav ? 19 : 0;
        var pos1 = 0,    pos2 = 0,    pos3 = 0,    pos4 = 0;

        var width = cbod.getBoundingClientRect().width;
        var height = cbod.getBoundingClientRect().height;

        if (document.getElementById(this.id)) document.getElementById(this.id).onmousedown = dragMouseDown;
        else this.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            inlineStyler(cbod,`{width: ${(width - (pos3 - e.clientX))}px; height: ${((height - (pos4 - e.clientY)) - (foot_height))}px; opacity: 0.8; transiation: opacity 100ms; z-index: ${topZIndexer()};}`);
            // if(/nav/i.test(cbod.getAttribute('id'))){
            //     updateSideNaveGridLayout();
            //     resetDefaultAnnoyingTwitchStylesToNull();
            // }
            // if(/chat/i.test(cbod.getAttribute('id'))){
            //     let chatrect = cbod.getElementsByClassName('scrollable-area')?.[0]?.getBoundingClientRect();
            //     if(cbod.getBoundingClientRect().width < chatrect.width){
            //         inlineStyler(cbod,`{width: ${(chatrect.width)}px;}`);
            //     }
            // }
            // if(/video/i.test(cbod.getAttribute('id'))) {
            //     var head_foot_px = ['video_footer_elm','video_main_content_holder'].map(i=> document.getElementById(i).getBoundingClientRect().height).reduce((a,b)=> a+b);
            //     var vidrect = document.getElementsByClassName('video-player__overlay')?.[0]?.getBoundingClientRect();
            //     inlineStyler(cbod,`{height: ${(vidrect.height +head_foot_px)}px;}`);
            //     resetDefaultAnnoyingTwitchStylesToNull();
            // }
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            cbod.style.opacity = '1';
        }
    }














    
    var chat_is_beside = document.getElementsByClassName('right-column--beside')?.[0];
    var chat_beside_class = chat_is_beside?.getAttribute('class');
    //
    var chat_is_hidden = document.getElementsByClassName('right-column--below')?.[0];
    // var chat_sidebar_hide_elm = document.getElementsByClassName('simplebar-track vertical')?.[0];
    window.onresize = ()=>{
        resetFolowBarPopBtns();
        if(chat_is_hidden) chat_is_hidden.setAttribute('class','Layout-sc-nxg1ff-0 kdzwbB right-column right-column--beside');
        resetDefaultAnnoyingTwitchStylesToNull();
    };





    function updateSideNaveGridLayout(){
        let grid_elm = document.getElementsByClassName('side-bar-contents')?.[0]?.firstChild?.firstChild;
        inlineStyler(grid_elm,`{display: grid; grid-template-columns:${Array.from(document.getElementsByClassName('side-nav-section')).map((n,i)=> i == 0 ? ` minmax(160px,300px)` : ` minmax(60px,240px)`).reduce((a,b)=> a+b)}; grid-gap: 0px;}`);
    }




    function hideAnnoyingButtons(){
        if(document.getElementsByClassName('channel-leaderboard')?.[0]) document.getElementsByClassName('channel-leaderboard')[0].style.display = 'none';
        if(document.getElementsByClassName('right-column__toggle-visibility')?.[0]) {
            document.getElementsByClassName('right-column__toggle-visibility')[0].style.display = 'none';
            document.getElementsByClassName('right-column__toggle-visibility')[0].getElementsByTagName('button')[0].style.display = 'none';
        }
    }



    function setChatPopOutBtns(){
        hideAnnoyingButtons();
        var main_chat_holder = document.getElementsByClassName('channel-root__right-column channel-root__right-column--expanded')?.[0];
        a(main_chat_holder,[['id','main_chat_holder'],['channel_name',/twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1]]]);

        var chat_label = document.getElementById('chat-room-header-label');
        a(chat_label,[['id','chat_header_move']]);
        chat_label.innerText = (/twitch\.tv\/(\w+)/.exec(window.location.href)?.[1] ? /twitch\.tv\/(\w+)/.exec(window.location.href)[1].toUpperCase() : '') + ' STREAM CHAT';
        inlineStyler(chat_label,`{transform: translate(2px,0px); font-size: 12px;}`);

        var main_chat_header = document.getElementsByClassName('stream-chat-header')?.[0];
        inlineStyler(main_chat_header,`{height: 32px; display: grid; grid-template-columns: 20px 1fr 20px; grid-gap: 10px; user-select: none;}`);
        a(main_chat_header,[['id','main_chat_header'],['class','move_header'],['panel_move_id','main_chat_holder']]);


        var init_btn = document.createElement('div');
        a(init_btn,[['id','init_chat_pop_btn'],['popout_container_id','main_chat_holder'],['movable_container_id','main_chat_holder'],['channel_name',/twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1]]]);
        init_btn.innerHTML = `<svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 eOJUoR"><g><path d="M12 4h2.586L9.293 9.293l1.414 1.414L16 5.414V8h2V2h-6v2z"></path><path d="M4 4h6v2H4v10h10v-6h2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"></path></g></svg>`;
        main_chat_header?.insertBefore(init_btn,main_chat_header.firstChild);
        inlineStyler(init_btn,`{cursor: pointer;}`);
        init_btn.onmouseenter = ()=> { inlineStyler(init_btn,`{background: #772ce885;}`); };
        init_btn.onmouseleave = ()=> { inlineStyler(init_btn,`{background: transparent;}`); };
        // init_btn.onclick = ()=> { popOutChat(); };
        init_btn.onclick = setpopoutiframe;

        
    }
    setChatPopOutBtns();


function setpopoutiframe(){
    const channel_name = this.getAttribute('channel_name');
    
    if(document.getElementById('main_chat_holder')) {
        if(document.getElementById('main_chat_holder').getAttribute('channel_name') == channel_name){ //maybe validate against URL as well
            document.getElementById('main_chat_holder').style.display = 'none';
        }
    }
    
    if(document.getElementById(channel_name)) document.getElementById(channel_name).outerHTML = '';
    let height = Math.floor(window.innerHeight * 0.6);
    let width = Math.floor(window.innerWidth * 0.3);
    let bg_color = headernavcolor();

    let iframe_cont = document.createElement('div');
    a(iframe_cont,[['id',`${channel_name}_extra_chat_cont`],['src',`https://www.twitch.tv/popout/${channel_name}/chat?popout=`]]);
    inlineStyler(iframe_cont,`{background: linear-gradient(to bottom, transparent, transparent, ${bg_color}); position: fixed; top:50px; left:50px; width: ${width}px; height: ${height}px; z-index: ${topZIndexer()}; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;}`);
    document.body.appendChild(iframe_cont);
    
    let iframe_header = document.createElement('div');
    a(iframe_header,[['id',`${channel_name}_extra_chat_head`],['panel_move_id',`${channel_name}_extra_chat_cont`],['class','mover-top-gradient']]);
    inlineStyler(iframe_header,`{height: 40px; transform: translate(0px,40px); width: calc(100% - 48px); border-top-left-radius: 0.4em; background: linear-gradient(to top left, transparent, transparent, #772ce885); cursor: move;}`);
    iframe_cont.appendChild(iframe_header);
    iframe_header.onmouseover = dragElement;

    let iframe = document.createElement('iframe');
    a(iframe,[['id',`${channel_name}_iframe`],['src',`https://www.twitch.tv/popout/${channel_name}/chat?popout=`]]);
    iframe_cont.appendChild(iframe);
    inlineStyler(iframe,`{left:300px; width: 100%; height: calc(100% - 59px); background: ${purple_trans}; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em;}`);
    // inlineStyler(iframe,`{left:300px; width: ${width}px; height: ${height-59}px; background: ${purple_trans};}`);

    let iframe_footer = document.createElement('div');
    a(iframe_footer,[['class','mover-bottom-gradient']]);
    iframe_cont.appendChild(iframe_footer);
    inlineStyler(iframe_footer,`{display: grid; grid-template-columns: 1fr 1fr 19px; height: 40px; border-bottom-left-radius: 0.4em; border-bottom-right-radius: 0.4em; background: linear-gradient(to bottom right, ${bg_color}, ${bg_color}, ${bg_color}, #772ce885);}`);
    
    let iframe_emote_btn = document.createElement('div');
    inlineStyler(iframe_emote_btn,`{display: grid; grid-template-columns: 40px 1fr;}`);
    iframe_footer.appendChild(iframe_emote_btn);
    addUnicodeEmoteBtn(iframe_emote_btn,channel_name);

    let iframe_footer_move = document.createElement('div');
    a(iframe_footer_move,[['id',`${channel_name}_extra_chat_footer_move`],['panel_move_id',`${channel_name}_extra_chat_cont`]]);
    inlineStyler(iframe_footer_move,`{cursor: move;}`);// width: calc(100% - 140px);
    iframe_footer.appendChild(iframe_footer_move);
    iframe_footer_move.onmouseover = dragElement;

    let iframe_footer_resize = document.createElement('div');
    a(iframe_footer_resize,[['id',`${channel_name}_extra_chat_footer_resize`],['resize_container',`${channel_name}_extra_chat_cont`]]);
    inlineStyler(iframe_footer_resize,`{cursor: nw-resize; transform: translate(0px, 20px);}`);
    iframe_footer.appendChild(iframe_footer_resize);
    iframe_footer_resize.onmouseover = adjustElementSize;
    iframe_footer_resize.innerHTML = icons.resize;


    async function updatepalceholder(channel_name){
        for(let i=0; i<50; i++){
            await delay(111);
            let channel_chat_iframe = document.getElementById(`${channel_name}_iframe`);
            if(channel_chat_iframe?.contentDocument && channel_chat_iframe?.contentDocument?.getElementsByTagName('textarea')?.[0]){
                let chat_textarea = Array.from(channel_chat_iframe?.contentDocument?.getElementsByTagName('textarea'))?.filter(i=> i.getAttribute('data-a-target') == 'chat-input')?.[0];
                a(chat_textarea,[['placeholder',`Send a message (${channel_name})`]]);

                let chat_header = channel_chat_iframe?.contentDocument?.getElementById('chat-room-header-label');
                chat_header.innerText = `${channel_name} STREAM CHAT`;
                // setCSS(channel_chat_iframe?.contentDocument,'twitch_pop_custom_css'); //this needs to be changed. issue with passing in arguments vs set state 
                break;
            }
        }
    }
    updatepalceholder(channel_name);

    // async function tryOnElmTilLoaded(parent,target){
    //     for(let i=0; i<50; i++){
    //         await delay(111);
    //         if(parent && target){

    //         }
    //     }
    // }
    // stream-chat-header


    async function addUnicodeEmoteBtn(parent_elm,channel_name){
        if(document.getElementById(`${channel_name}_unicode_emote_btn`)) document.getElementById(`${channel_name}_unicode_emote_btn`).outerHTML = '';
        var emote_btn = document.createElement('div');
        inlineStyler(emote_btn,`{font-size: 2em; cursor: pointer;}`);
        a(emote_btn,[['id',`${channel_name}_unicode_emote_btn`],['class','unicode_emote_main_elm emote_item']]);
        parent_elm.appendChild(emote_btn)
        emote_btn.innerText = '🍆';
        emote_btn.onclick = addUnicodeEmoteSearch;
    
        async function addUnicodeEmoteSearch(){
            if(document.getElementById(`${channel_name}_unicode_emotes_contaner`)) document.getElementById(`${channel_name}_unicode_emotes_contaner`).outerHTML = '';
            if(document.getElementById(`${channel_name}_unicode_emote_search_cont`)) document.getElementById(`${channel_name}_unicode_emote_search_cont`).outerHTML = '';
            let this_elm = document.getElementById(`${channel_name}_unicode_emote_btn`);// this;
            let cont = document.createElement('div');
            a(cont,[['id',`${channel_name}_unicode_emote_search_cont`]]);
            this_elm.parentElement.appendChild(cont);

            let textarea = document.createElement('textarea');
            a(textarea,[['id',`${channel_name}_unicode_emote_textarea_search`],['class','twitch_resizer_textarea unicode_emote_main_elm'],['placeholder','search unicode emotes']]);
            cont.appendChild(textarea);
            inlineStyler(textarea,`{z-index: ${topZIndexer()}; width: 100%; overflow-y: hidden;}`);
            if(last_emote_search){
                let res = lookupUnicodeEmotes(last_emote_search,emote_container);
                addResultsToBox(res.slice(0,84),textarea);
            }
            textarea.onkeyup = (e)=> {
                let cleaned_input = textarea.value.replace(/\n/g,'').trim();
                if(document.getElementById(`${channel_name}_unicode_emotes_contaner`)) document.getElementById(`${channel_name}_unicode_emotes_contaner`).outerHTML = '';
                if(cleaned_input.length >= 2 || (e.key == 'Enter' && cleaned_input.length > 0)){
                    let results = lookupUnicodeEmotes(cleaned_input,emote_container);
                    if(results.length) {last_emote_search = cleaned_input;};
                    addResultsToBox(results.slice(0,84),textarea);
                    textarea.value = cleaned_input;
                }
            };
            Array.from(document.getElementsByTagName('textarea')).filter(i=> i.getAttribute('placeholder') == 'Send a message')[0].onfocus = ()=> {
                if(document.getElementById(`${channel_name}_unicode_emotes_contaner`)) document.getElementById(`${channel_name}_unicode_emotes_contaner`).outerHTML = '';
            };
        }
        function addResultsToBox(results,actor){
            if(results.length){
                let num = Math.sqrt(results.length) > 7 ? 7 : Math.floor(Math.sqrt(results.length));
                let cols = Array(num).fill().map((_,i)=> ' auto').reduce((a,b)=> a+b);
                let actor_rect = actor.getBoundingClientRect();
                let cont = document.createElement('div');
                a(cont,[['id',`${channel_name}_unicode_emotes_contaner`],['class','pad8']]);
                inlineStyler(cont,`{font-size: 1.6em; position: fixed; left: ${actor_rect.right}px; top: ${actor_rect.top}px; z-index: ${topZIndexer()+3000}; display: grid; grid-template-columns: ${cols}; border: 1px solid #772ce8c4; border-radius: 0.4em; max-height: 400px; overflow: auto; background: #4c4c4c;}`);
                document.body.appendChild(cont);
                
                results.forEach(kv=> {
                    let emote = document.createElement('div');
                    a(emote,[['class','emote_item'],['title',kv[1]]])
                    inlineStyler(emote,`{ cursor: pointer;}`);
                    cont.appendChild(emote);
                    emote.innerText = kv[0];
                    emote.onclick = domplate;
                });
                let cont_font_px_size = parseFloat(window.getComputedStyle(cont).fontSize.replace(/px/,''));
                let cont_top_position = ((actor_rect.top - ((results.length/num)*cont_font_px_size)) - (actor_rect.height * 2));
                inlineStyler(cont,`{top: ${cont_top_position}px;}`);
            }
        }
        async function createCopiedFlashCard(parent){
            var delay = (ms) => new Promise(res => setTimeout(res, ms));
            var cont = document.createElement('div');
            inlineStyler(cont,`{font-size: 2em; color: #ffffff; position: fixed; left: ${parent.parentElement.getBoundingClientRect().left - 10}px; top: ${parent.getBoundingClientRect().top - 10 }px; z-index: ${topZIndexer()}; transition: all 622ms; background: #772ce8c; border: 1px solid #772ce8c4; border-radius: 0.4em;}`);
            cont.innerText = parent.innerText + ' copied!';
            a(cont,[['id','copied_notification'],['class','pad8']]);
            document.body.appendChild(cont);
            inlineStyler(cont,`{border: 8px solid #772ce8c4; border-radius: 1em; opacity: 0.8;}`);
            await delay(733);
            document.getElementById('copied_notification').outerHTML = '';
            document.getElementById(`${channel_name}_unicode_emote_search_cont`).outerHTML = '';
        }
        async function domplate() {
            var delay = (ms) => new Promise(res => setTimeout(res, ms));
            createCopiedFlashCard(this);
            var el = document.createElement('textarea');
            document.body.appendChild(el);
            el.value = this.innerText;
            el.select();
            document.execCommand('copy');
            el.outerHTML = '';
            document.getElementById(`${channel_name}_unicode_emote_textarea_search`).value = this.innerText;
            await delay(11);
            if(document.getElementById(`${channel_name}_unicode_emotes_contaner`)) document.getElementById(`${channel_name}_unicode_emotes_contaner`).outerHTML = '';
        }
    }


}


//     function popOutChat(){
//         if(document.getElementById('chat_footer_holder')) document.getElementById('chat_footer_holder').outerHTML = '';
//         if(document.getElementById('init_chat_pop_btn')) document.getElementById('init_chat_pop_btn').outerHTML = '';
//         if(document.getElementById('chat_foot_resizer')) document.getElementById('chat_foot_resizer').outerHTML = '';
//         var main_chat_holder = document.getElementById('main_chat_holder');
//         a(main_chat_holder,[['foot_resizer_id','chat_foot_resizer']]);
//         inlineStyler(main_chat_holder,`{position: fixed; z-index: ${topZIndexer()}; height: ${window.innerHeight - 100}px;}`);
//         inlineStyler(main_chat_holder.firstChild,`{border-top: 2px solid ${bright_green}; border-left: 2px solid ${bright_green}; border-right: 2px solid ${bright_green}; border-radius: 0.2em;}`);

//         var main_chat_header = document.getElementById('main_chat_header');
//         a(main_chat_header,[['class','mover-top-gradient']]);
//         inlineStyler(main_chat_header,`{grid-template-columns: 1fr 2px;}`);

//         let chat_label = document.getElementById('chat-room-header-label');
//         a(chat_label.parentElement,[['panel_move_id','main_chat_holder'],['id','chat_header_move']]);
//         inlineStyler(chat_label.parentElement,`{cursor: move; transform: translate(6px,0px);}`);
//         chat_label.parentElement.onmouseover = dragElement;

//         let footer_elm = document.createElement('div');
//         a(footer_elm,[['class','mover-bottom-gradient'],['id','chat_footer_holder']]);
//         main_chat_holder.appendChild(footer_elm);
//         inlineStyler(footer_elm,`{height: 19px; display: grid; grid-template-columns: 1fr 19px; border-bottom: 2px solid ${bright_green}; border-right: 2px solid ${bright_green}; border-left: 2px solid ${bright_green}; border-bottom-left-radius: 0.2em; border-bottom-right-radius: 0.2em;}`);

//         let footer_text = document.createElement('div');
//         footer_elm.appendChild(footer_text);
//         a(footer_text,[['panel_move_id','main_chat_holder'],['id','chat_footer_move']]);
//         inlineStyler(footer_text,`{width: calc(100% - 19px); cursor: move;}`);
//         footer_text.onmouseover = dragElement;

//         let foot_resizer = document.createElement('div');
//         a(foot_resizer,[['id','chat_foot_resizer'],['class','chat_foot_resizer foot_resizer'],['resize_container','main_chat_holder'],['style_info','display: grid; grid-template-columns: 1fr 20px; grid-gap: 10px;']]);
//         inlineStyler(foot_resizer,`{width: 19px; cursor: nw-resize; z-index: ${topZIndexer()};}`);
//         foot_resizer.innerHTML = icons.resize;
//         footer_elm.appendChild(foot_resizer)
//         foot_resizer.onmouseover = adjustElementSize;

//         popOutVideo();
//     }







//     function resetFolowBarPopBtns(){
//         if(!document.getElementsByClassName('nav_section_btn')[0]) setFollowBarPopOut();
//     }

//     function setFollowBarPopOut(){
//         if(!document.getElementsByClassName('nav_pop_btn')?.length){
//             let elm = document.getElementById('sideNav');
//             Array.from(elm.getElementsByClassName('side-nav-header-icon')).forEach(itm=> {itm.outerHTML = '';});
//             Array.from(elm.getElementsByClassName('side-nav-section')).forEach(sect=> {
//                 let head = sect.getElementsByClassName('side-nav-header')?.[0];
//                 inlineStyler(head,`{display: grid; grid-template-columns: 20px 1fr;}`);
//                 let head_text = head.getElementsByTagName('h5')?.[0];
//                 var head_text_snake_cased = head_text?.innerText?.toLowerCase()?.replace(/\s+/g,'_');
//                 a(head_text,[['class','nav_text']]);
//                 inlineStyler(head_text,`{transform: translate(0px,-10px); font-size: 12px;}`);
//                 a(sect,[['id',`main_${head_text?.innerText?.toLowerCase()?.replace(/\s+/g,'_')}_holder`]]);
//                 var init_btn = document.createElement('div');
//                 a(init_btn,[['id',`init_nav_${head_text_snake_cased}_pop_btn`],['popout_container_id',`sideNav`],['class','nav_pop_btn'],['movable_container_id',`sideNav`],['class','nav_section_btn']]);
//                 init_btn.innerHTML = `<svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 eOJUoR"><g><path d="M12 4h2.586L9.293 9.293l1.414 1.414L16 5.414V8h2V2h-6v2z"></path><path d="M4 4h6v2H4v10h10v-6h2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"></path></g></svg>`;
//                 head.insertBefore(init_btn,head.firstChild);
//                 inlineStyler(init_btn,`{cursor: pointer;}`);
//                 init_btn.onmouseenter = ()=> { inlineStyler(init_btn,`{background: #772ce885;}`); };
//                 init_btn.onmouseleave = ()=> { inlineStyler(init_btn,`{background: transparent;}`); };
//                 init_btn.onclick = ()=> { popOutFollowSection(init_btn); };
//             });
//         }
//     }
//     setFollowBarPopOut()

//     function popOutFollowSection(elm){
//         var sect = document.getElementById(elm.getAttribute('popout_container_id'));
//         inlineStyler(sect,`{position: fixed; z-index: ${topZIndexer()}; border: 2px solid ${bright_green}; border-radius: 0.2em;}`);
//         var resize_elm = sect?.firstChild;
//         a(resize_elm,[['id','nav_grid_resize_container'],['foot_resizer_id','nav_foot_resizer']])//resize_container
//         inlineStyler(resize_elm,`{width: 160px;}`);
//         var grid_elm = sect.getElementsByClassName('side-bar-contents')?.[0]?.firstChild?.firstChild;
//         a(grid_elm,[['id','nav_grid_container']]);
//         inlineStyler(grid_elm,`{display: grid; grid-template-columns:${Array.from(document.getElementsByClassName('side-nav-section')).map((n,i)=> i == 0 ? ` minmax(160px,300px)` : ` minmax(60px,240px)`).reduce((a,b)=> a+b)}; grid-gap: 0px;}`);
//         Array.from(document.getElementsByClassName('side-nav-header')).forEach((sn,i)=> {
//             a(sn,[['class','mover-top-gradient']]);
//             inlineStyler(sn,`{display: grid; grid-template-columns: 1fr;}`);
//             a(sn,[['panel_move_id',`sideNav`],['id',`nav_move_${i}`]]);
//             inlineStyler(sn,`{cursor: move;}`);
//             sn.onmouseover = dragElement;
//         });        
//         Array.from(document.getElementsByClassName('nav_text')).forEach(sn=> {
//             let head_text_snake_cased = sn.innerText.toLowerCase().replace(/\s+/g,'_');
//             inlineStyler(sn,`{transform: translate(0px,-12px); font-size: 10px;}`);
//         });
//         Array.from(document.getElementsByClassName('nav_pop_btn')).forEach(sn=> {
//             sn.outerHTML = '';
//         });
//         var nav_input_holder = document.getElementsByClassName('side-nav-search-input')?.[0];
//         inlineStyler(nav_input_holder,`{padding:0px;}`);

//         var footer_elm = document.createElement('div');
//         a(footer_elm,[['class','mover-bottom-gradient'],['id',`nav_footer_holder`]]);
//         nav_input_holder?.appendChild(footer_elm);
//         inlineStyler(footer_elm,`{height: 19px; display: grid; grid-template-columns: 1fr 19px;}`);

//         var footer_text = document.createElement('div');
//         footer_elm.appendChild(footer_text);
//         a(footer_text,[['panel_move_id',`sideNav`],['id',`nav_footer_move`]]);
//         inlineStyler(footer_text,`{width: calc(100% - 19px); cursor: move;}`);
//         footer_text.onmouseover = dragElement;

//         var foot_resizer = document.createElement('div');
//         a(foot_resizer,[['id',`nav_foot_resizer`],['class',`nav_foot_resizer foot_resizer`],['resize_container',`nav_grid_resize_container`],['style_info','display: grid; grid-template-columns: 1fr 20px; grid-gap: 10px;']]);
//         inlineStyler(foot_resizer,`{width: 19px; cursor: nw-resize; z-index: ${topZIndexer()};}`);
//         foot_resizer.innerHTML = icons.resize;
//         footer_elm.appendChild(foot_resizer)
//         foot_resizer.onmouseover = adjustElementSize;
//         popOutVideo();

//         if(document.getElementsByClassName('right-column__toggle-visibility')?.[0]) document.getElementsByClassName('right-column__toggle-visibility')[0].outerHTML = '';
//         if(document.getElementsByClassName('channel-leaderboard')?.[0]) document.getElementsByClassName('channel-leaderboard')[0].outerHTML = '';
//         if(document.getElementsByClassName('collapse-toggle')?.[0]) Array.from(document.getElementsByClassName('collapse-toggle')).forEach(toggle=> {toggle.outerHTML = ''; } );
//     }

//     function resetDefaultAnnoyingTwitchStylesToNull(){
//         Array.from(elm.getElementsByClassName('side-nav-header-icon')).forEach(itm=> {itm.outerHTML = '';});
//         ['channel-root__info channel-root__info--with-chat','channel-root__player-background'].forEach(tl=> {
//             a(document.getElementsByClassName(tl)?.[0],[['style','']]);
//         });
//     }

//     function popOutVideo(){ 
//         if(document.getElementById('video_mover_header')) document.getElementById('video_mover_header').outerHTML = '';
//         if(document.getElementById('video_footer_elm')) document.getElementById('video_footer_elm').outerHTML = '';

//         let topnav_rect = document.getElementsByClassName('top-nav')?.[0]?.getBoundingClientRect();
//         let top_start = topnav_rect ? topnav_rect.height+5 : 80;
//         let elm = document.getElementsByClassName('persistent-player')?.[0];
//         a(elm,[['id','video_main_content_holder'],['default_width',elm.getBoundingClientRect().width],['default_height',elm.getBoundingClientRect().height]]);
//         inlineStyler(elm,'{position: fixed; top: '+(top_start)+'px; left: '+'240'+'px; z-index:'+topZIndexer()+'; width: '+(window.innerWidth - 600)+'px; }');
        
//         inlineStyler(document.getElementsByClassName('video-player__overlay')?.[0],`{border-left: 2px solid ${bright_green}; border-right: 2px solid ${bright_green};}`);

//         let mover = document.createElement('div');
//         inlineStyler(mover,`{display: grid; grid-template-columns: 1fr 19px; grid-gap: 0px; height: 28px; width: 100%; cursor: move; text-align: center; user-select: none; border-right: 2px solid ${bright_green}; border-left: 2px solid ${bright_green}; border-top: 2px solid ${bright_green}; border-top-left-radius: 0.2em; border-top-right-radius: 0.2em;}`);
//         a(mover,[['id','video_mover_header'],['class','mover-top-gradient'],['panel_resize_container','video_main_content_holder'],['panel_move_id','video_main_content_holder']]);
//         elm.insertBefore(mover,elm.firstChild);


//         let headtext = document.createElement('div');
//         a(headtext,[['id','video_mover_header_text'],['class','mover-top-gradient'],['panel_resize_container','video_main_content_holder'],['panel_move_id','video_main_content_holder']]);
//         mover.appendChild(headtext);
//         headtext.innerText = ('Watching '+ (/twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1] ? /twitch\.tv\/(\w+)/i.exec(window.location.href)?.[1] : 'Video') );
//         headtext.onmouseover = dragElement;
        
//         var head_resizer = document.createElement('div');
//         a(head_resizer,[['id',`video_head_resizer`],['class',`video_head_resizer foot_resizer`],['resize_container',`video_main_content_holder`]]);
//         inlineStyler(head_resizer,`{width: 19px; cursor: e-resize; z-index: ${topZIndexer()}; transform: translate(0px,0px) rotate(-90deg);}`);
//         head_resizer.innerHTML = icons.resize;
//         mover.appendChild(head_resizer)
//         head_resizer.onmouseover = adjustElementSize;


//         var video_footer_elm = document.createElement('div');
//         a(video_footer_elm,[['class','mover-bottom-gradient'],['id','video_footer_elm']]);
//         inlineStyler(video_footer_elm,`{display: grid; grid-template-columns: 1fr 19px; grid-gap: 0px; border-bottom: 2px solid ${bright_green}; border-right: 2px solid ${bright_green}; border-left: 2px solid ${bright_green}; border-bottom-left-radius: 0.2em; border-bottom-right-radius: 0.2em; z-index: ${topZIndexer()};}`);
//         elm.appendChild(video_footer_elm);
        
//         var footertext = document.createElement('div');
//         video_footer_elm.appendChild(footertext);
//         a(footertext,[['panel_move_id','video_main_content_holder']]);
//         inlineStyler(footertext,`{width: calc(100% - 19px); cursor: move;}`);
//         footertext.onmouseover = dragElement;

//         var foot_resizer = document.createElement('div');
//         a(foot_resizer,[['id',`video_footer_resizer`],['class',`video_foot_resizer foot_resizer`],['resize_container',`video_main_content_holder`],['style_info','display: grid; grid-template-columns: 1fr 19px; grid-gap: 10px; transform: translate(0px,4px);']]);
//         inlineStyler(foot_resizer,`{width: 19px; cursor: nw-resize; z-index: ${topZIndexer()}; transform: translate(0px,4px);}`);
//         foot_resizer.innerHTML = icons.resize;
//         video_footer_elm.appendChild(foot_resizer)
//         foot_resizer.onmouseover = adjustElementSize;


//         resetDefaultAnnoyingTwitchStylesToNull();
//     }





//     async function killAdd(){
//         var delay = (ms) => new Promise(res => setTimeout(res, ms));
//         await delay(999);
//         if(document.getElementById('amazon-video-ads-iframe')) {
//             document.getElementById('amazon-video-ads-iframe').outerHTML = '';
//             // if(!Array.from(document.getElementsByTagName('button')).filter(i=> /gift a sub/i.test(i.innerText))?.length){
//             //     let adnotifi = document.createElement('div');
//             //     inlineStyler(adnotifi,`{position: fixed; top: 100px; left: 300px; z-index: ${topZIndexer()+6000}; background: #e91916c4; color: #000000; transition: all 1888ms; padding: 8px;}`);
//             //     document.body.appendChild(adnotifi);
//             //     adnotifi.innerText = `Twitch Resizer killed a dirty ad.\nYou're welcome.`;
//             //     inlineStyler(adnotifi,`{ font-size: 3em;}`);
//             //     await delay(2788);
//             //     adnotifi.outerHTML = '';
//             // }
//         }
//     }
    
    







//     function encodeUnicode(str) { /* https://attacomsian.com/blog/javascript-base64-encode-decode */
//         return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
//             function toSolidBytes(match, p1) {
//                 return String.fromCharCode('0x' + p1);
//         }));
//     }

//     function decodeUnicode(str) {
//         return decodeURIComponent(atob(str).split('').map(function (c) {
//             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//         }).join(''));
//     }

//     var chat_window_class = 'chat-scrollable-area__message-container';
//     var chat_chat_msg_class = 'chat-line__message';
//     var chat_emote_class = 'chat-image chat-line__message--emote';
//     var chat_badge_class = 'chat-badge';
//     var chat_username_class = 'chat-author__display-name';
//     var chat_text_class = 'text-fragment';
//     var chat_mention_class = 'mention-fragment';
//     var chat_link_class = 'link-fragment';
//     var chat_highlighted = 'chat-line__message-body--highlighted';
//     var chat_cheer_amount = 'chat-line__message--cheer-amount';
//     var chat_line_class = 'chat-line__no-background';

//     function fixLinkInChat(elm){
//         var regexPrep = (s) => s.replace(/\/|\$|\(|\)|\^|\[|\]|\{|\}/g, t=> '\\'+t);
//         let text_frags = Array.from(elm.getElementsByClassName('text-fragment'))
//         let full_link = /http(s|):\/\/\S+/.exec(elm.getElementsByClassName('text-fragment')?.[0].parentElement.innerText)?.[0];
//         let orginal_link_frag = elm.getElementsByClassName('link-fragment')?.[0];
//         /*TODO - make this handle multiple links*/
//         if(orginal_link_frag && orginal_link_frag?.innerText != full_link){
//             let hanging_link_frags = text_frags.filter(x=> full_link.match(regexPrep(x.innerText)))
//             orginal_link_frag.setAttribute('href',full_link);
//             orginal_link_frag.innerText = full_link;
//             hanging_link_frags.forEach(frag=> {frag.outerHTML = '';});
//         }
//         return elm;
//     }

//     function getLastChatObj(el) {
//         let user_color = el ? window.getComputedStyle(el.getElementsByClassName(chat_username_class)?.[0]).color : null;
//         // let bg_color = el ? window.getComputedStyle(el).color : null;
//         let color_arr = /(?<=rgb\()\d+.+?(?=\))/.exec(user_color)?.[0]?.split(/,\s*/)?.map(d=> parseFloat(d));
//         let full_raw_text = el?.getElementsByClassName(chat_text_class)?.[0]?.parentElement?.innerText;
//         const chatObj = el ? {
//             chattext: full_raw_text,
//             user_color: user_color,
//             color_arr: color_arr,
//             bg_color_arr: /(?<=rgb\()\d+.+?(?=\))/.exec(window.getComputedStyle(el).color)?.[0]?.split(/,\s*/)?.map(d=> parseFloat(d)),
//         } : null;
//         return chatObj;
//     }

//     function checkChatterColor(arr){
//         return ((arr[0] < 60 && arr[1] < 65) && !(arr[1] > 180 || arr[0] > 199) ) ? '#ffffff' : arr[1] > 180 || arr[0] > 199 ? '#000000' : false;
//     }
//     function chatterIsAssholeFontColor(arr,mode_state_arr){
//         let lightmode = [239, 239, 241];
//         let darkmode = [14, 14, 16];
//         let is_darkmode = mode_state_arr.reduce((a,b)=> a+b) == [239, 239, 241].reduce((a,b)=> a+b);
//         let is_lightmode = mode_state_arr.reduce((a,b)=> a+b) == [14, 14, 16].reduce((a,b)=> a+b);
//         if(is_lightmode) return arr.every((n,i)=> ( 
//             lightmode[i] <= (n+10) && lightmode[i] >= (n-10) 
//             )
//         );
//         if(is_darkmode) return arr.every((n,i)=> ( darkmode[i] <= (n+10) && darkmode[i] >= (n-10) ));
//     }
//     function runChatFunctionsOnNewMessage() {
//         // var is_dark_theme = document.getElementsByClassName('dark-theme')?.[0];
//         // var text_border = is_dark_theme ? '#ffffff' : '#000000';
//         var chat_chat_msg_elm =   Array.from(Array.from(document.getElementsByClassName(chat_window_class))?.[0]?.parentElement?.getElementsByClassName(chat_chat_msg_class)).at(-1);
//         if (chat_chat_msg_elm && chat_chat_msg_elm.getAttribute('msg_is_read') == null) {
//             let last_chat_obj = getLastChatObj(chat_chat_msg_elm);
//             chat_chat_msg_elm.setAttribute('msg_is_read', 'read');
//             chat_chat_msg_elm.setAttribute('og_msg', encodeUnicode(last_chat_obj.chattext));
//             // let new_color = checkChatterColor(last_chat_obj.color_arr); //last_chat_obj.shade_num < 60 ? '#ffffff' : '#000000';
//             // if( (last_chat_obj.shade_num < 60) || (last_chat_obj.shade_num > 180) ){
//             let chatter_is_asshole = chatterIsAssholeFontColor(last_chat_obj.color_arr,last_chat_obj.bg_color_arr);
//             if(chatter_is_asshole){
//                 console.log('changing color')
//                 inlineStyler(chat_chat_msg_elm.getElementsByClassName(chat_username_class)?.[0],`{font-weight: 100; color: #399131;}`);
//             }
//             fixLinkInChat(chat_chat_msg_elm);
//             addDeletedChatsBack();
//         }
//     }
    
//     function addDeletedChatsBack(){
//         Array.from(document.getElementsByClassName('chat-line__message')).filter(elm=> {
//             let modded = elm.getElementsByClassName('chat-line__message--deleted-notice')?.[0];
//             if(modded){
//                 modded.setAttribute('class','chat-line__message--deleted-detailed');
//                 modded.innerText = elm.getAttribute('og_msg') ? decodeUnicode(elm.getAttribute('og_msg')) : '';
//             }
//         })
//     }

//     function initChatObserver() {
//         let chat_window_elm = document.getElementsByClassName(chat_window_class)?.[0];
//         let twitch_domObserver = new MutationObserver(() => {
//           runChatFunctionsOnNewMessage();
//         });
//         if (chat_window_elm) {
//           twitch_domObserver.observe(chat_window_elm, {
//             childList: true,
//             subtree: true
//           });
//         }
//     }
    
//     initChatObserver();
//     killAdd();
    function resetContent(){
        setChatPopOutBtns();
        // popOutVideo();
        // initChatObserver();
        // addUnicodeEmoteBtn();
        // killAdd();
        // setFollowBarPopOut();
    }

    const twitch_resize_page_change_monitor_object = {
        id: 'twitch_resize_page_change_monitor_object',
        fn: resetContent,
        page_context: {
            href: window.location.href
        }
    };
    function monitorURLChanges(){
        const url = window.location.href;
        if(twitch_resize_page_change_monitor_object?.page_context?.href != url) {
            twitch_resize_page_change_monitor_object.fn();
            twitch_resize_page_change_monitor_object['page_context']['href'] = url;
        }
    }
    document.body.onmousemove = monitorURLChanges;


/*
    *********************************************************
                        SEARCH FUNCTIONS
    *********************************************************
*/


    var parseStringAsXset = (s) => s
    .split(/\s+\band\b\s+|(?<!\s+and\b)\s+\(|\)\s+(?!\band\b)/i)
        .map(el=> 
            el.split(/\s+\bor\b\s+/i).map(ii=> 
                ii.replace(/\s*\)\s*/g,'')
                .replace(/\s*\(\s*/g,'')
                .replace(/\s+/g,'.{0,3}')
                .replace(/"/g,'\\b')
                .replace(/\*\*\*/g,'.{0,60}')
                .replace(/\*/g,'.{0,1}'))
                    .reduce((a,b)=> a+'|'+b)).filter(el=> el).map(r=> r.replace(/\+/g,'\\+'));

    function permutateNear(input,joiner){
    var nearx = /(?<=\||^)\S+?(?=\||$)/g;
    var base = input.replace(nearx, '').replace(/[\|]+/g, '|');
    var near_or = input.match(nearx) ? input.match(nearx).map(str=> {
        var arr = str.split(/~/);
        if(arr.length > 5){
        return str.replace(/[~]+/g,'.+?');
        }else{
        var cont = [];
        var containArr = [];
        function comboLoop(arr, cont){
            if (arr.length == 0) {
            var row = cont.join(joiner);
            containArr.push(row)
            }
            for (var i = 0; i < arr.length; i++) {
            var x = arr.splice(i, 1);
            cont.push(x);
            comboLoop(arr, cont);
            cont.pop();
            arr.splice(i, 0, x);
            }
        }
        comboLoop(arr, cont);
        return containArr.reduce((a,b)=> a+'|'+b);
        }
    }).flat().reduce((a,b)=> a+'|'+b) : '';
    return base + near_or;
    }

    function buildSearchSet(str,flags){
        if(str){
            var set = parseStringAsXset(str);
            var xset = set.map(r=> permutateNear(r,'.{0,19}')).map(r=> tryRegExp(r.replace(/^\||\|$/g,''),flags));
            return xset;
        }else{return null}
    }

    function tryRegExp(s,f){
        try{return new RegExp(s,f)}
        catch(err){return err}
    }
    function hasNestedParenth(s){
        const reg = (o, n) => o ? o[n] : '';
        let check_p = reg(/\(.+\(/.exec(s),0);
        let opens = check_p.match(/\(/g);
        let closes =check_p.match(/\)/g);
        return !opens?.length ? false : closes?.length != ( opens?.length - 1);
    }

    function lookupUnicodeEmotes(str,table){
        try { 
            let xarr = buildSearchSet(str,'i');
            return table.filter(kv=> xarr.some(x=> x.test(kv[1])))
        }
        catch(err){
            return [];
        }
    }

//     function getWidthOfChildNodesInChatBtnCont(){
//         let chat_btns_cont = document.getElementsByClassName('chat-input__buttons-container')?.[0];
//         return {parent_width: chat_btns_cont.getBoundingClientRect().width,children_width: Array.from(chat_btns_cont.children).filter(i=> !/unicode_emote_main_elm/.test(i.getAttribute('class'))).map(i=> i.getBoundingClientRect().width).reduce((a,b)=> a+b)}
//     }
//     async function resizeChatToFitEmoteSearchInsertion(){
//         let twitch_btn_default_space = getWidthOfChildNodesInChatBtnCont();
//         let unicode_emote_btn = document.getElementById('unicode_emote_btn');
//         let unicode_emote_textarea_search = document.getElementById('unicode_emote_textarea_search');
//         let ext_added_width = [unicode_emote_textarea_search,unicode_emote_btn].filter(i=> i).map(i=> i.getBoundingClientRect().width).reduce((a,b)=> a+b);
//         let total_width = ext_added_width + twitch_btn_default_space.children_width;

//         if(total_width > twitch_btn_default_space.parent_width){
//             let main_chat_holder = document.getElementById('main_chat_holder');
//             inlineStyler(main_chat_holder,`{width: ${total_width}px;}`);
//             // (main_chat_holder.getBoundingClientRect().left + (main_chat_holder.getBoundingClientRect().right - window.innerWidth))
//             if(main_chat_holder.getBoundingClientRect().right > window.innerWidth){
//                 let new_left_pos =  (window.innerWidth - main_chat_holder.getBoundingClientRect().width);
//                 inlineStyler(main_chat_holder,`{left: ${new_left_pos}px;}`);
//             }
//         }
//         return [total_width, twitch_btn_default_space.parent_width];
//     }
    
    // async function addUnicodeEmoteBtn(){
    //     if(document.getElementById('unicode_emote_btn')) document.getElementById('unicode_emote_btn').outerHTML = '';
    //     var chatopt = document.getElementsByClassName('chat-input__buttons-container')?.[0];
    //     var emote_btn = document.createElement('div');
    //     inlineStyler(emote_btn,`{font-size: 2em; cursor: pointer;}`);
    //     a(emote_btn,[['id','unicode_emote_btn'],['class','unicode_emote_main_elm emote_item']]);
    //     chatopt.insertBefore(emote_btn,chatopt.firstChild.nextSibling);
    //     emote_btn.innerText = '🍆';
    //     emote_btn.onclick = addUnicodeEmoteSearch;
    
    //     async function addUnicodeEmoteSearch(){
    //         if(document.getElementById('unicode_emotes_contaner')) document.getElementById('unicode_emotes_contaner').outerHTML = '';
    //         if(document.getElementById('unicode_emote_search_cont')) document.getElementById('unicode_emote_search_cont').outerHTML = '';
    //         let this_elm = document.getElementById('unicode_emote_btn');// this;
    //         let cont = document.createElement('div');
    //         a(cont,[['id','unicode_emote_search_cont']]);
    //         this_elm.parentElement.insertBefore(cont,this_elm.parentElement.firstChild.nextSibling);

    //         let textarea = document.createElement('textarea');
    //         a(textarea,[['id','unicode_emote_textarea_search'],['class','twitch_resizer_textarea unicode_emote_main_elm'],['placeholder','search unicode emotes']]);
    //         cont.appendChild(textarea);
    //         inlineStyler(textarea,`{z-index: ${topZIndexer()}; width: 100px; overflow-y: hidden;}`);
    //         if(last_emote_search){
    //             let res = lookupUnicodeEmotes(last_emote_search,emote_container);
    //             addResultsToBox(res.slice(0,84),textarea);
    //         }
    //         textarea.onkeyup = (e)=> {
    //             let cleaned_input = textarea.value.replace(/\n/g,'').trim();
    //             if(document.getElementById('unicode_emotes_contaner')) document.getElementById('unicode_emotes_contaner').outerHTML = '';
    //             if(cleaned_input.length >= 2 || (e.key == 'Enter' && cleaned_input.length > 0)){
    //                 let results = lookupUnicodeEmotes(cleaned_input,emote_container);
    //                 if(results.length) {last_emote_search = cleaned_input;};
    //                 addResultsToBox(results.slice(0,84),textarea);
    //                 textarea.value = cleaned_input;
    //             }
    //         };
    //         if(document.getElementById('chat_footer_holder')){
    //             resizeChatToFitEmoteSearchInsertion();
    //         }else{
    //             popOutChat();
    //             await delay(60);
    //             resizeChatToFitEmoteSearchInsertion();                
    //         }
    //         Array.from(document.getElementsByTagName('textarea')).filter(i=> i.getAttribute('placeholder') == 'Send a message')[0].onfocus = ()=> {
    //             if(document.getElementById('unicode_emotes_contaner')) document.getElementById('unicode_emotes_contaner').outerHTML = '';
    //         };
    //     }
    //     function autoGenerateGridColumns(arr){
    //         let num = Math.sqrt(arr.length) > 7 ? 7 : Math.floor(Math.sqrt(arr.length));
    //         return Array(num).fill().map((_,i)=> ' auto').reduce((a,b)=> a+b);
    //     }
    //     function addResultsToBox(results,actor){
    //         if(results.length){
    //             let num = Math.sqrt(results.length) > 7 ? 7 : Math.floor(Math.sqrt(results.length));
    //             let cols = Array(num).fill().map((_,i)=> ' auto').reduce((a,b)=> a+b);
    //             let actor_rect = actor.getBoundingClientRect();
    //             let cont = document.createElement('div');
    //             a(cont,[['id','unicode_emotes_contaner'],['class','pad8']]);
    //             inlineStyler(cont,`{font-size: 1.6em; position: fixed; left: ${actor_rect.right}px; top: ${actor_rect.top}px; z-index: ${topZIndexer()+3000}; display: grid; grid-template-columns: ${cols}; border: 1px solid #772ce8c4; border-radius: 0.4em; max-height: 400px; overflow: auto; background: #4c4c4c;}`);
    //             document.body.appendChild(cont);
                
    //             results.forEach(kv=> {
    //                 let emote = document.createElement('div');
    //                 a(emote,[['class','emote_item'],['title',kv[1]]])
    //                 inlineStyler(emote,`{ cursor: pointer;}`);
    //                 cont.appendChild(emote);
    //                 emote.innerText = kv[0];
    //                 emote.onclick = domplate;
    //             });
    //             let cont_font_px_size = parseFloat(window.getComputedStyle(cont).fontSize.replace(/px/,''));
    //             let cont_top_position = ((actor_rect.top - ((results.length/num)*cont_font_px_size)) - (actor_rect.height * 2));
    //             inlineStyler(cont,`{top: ${cont_top_position}px;}`);
    //         }
    //     }
    //     async function createCopiedFlashCard(parent){
    //         var delay = (ms) => new Promise(res => setTimeout(res, ms));
    //         var cont = document.createElement('div');
    //         inlineStyler(cont,`{font-size: 2em; color: #ffffff; position: fixed; left: ${parent.parentElement.getBoundingClientRect().left - 10}px; top: ${parent.getBoundingClientRect().top - 10 }px; z-index: ${topZIndexer()}; transition: all 622ms; background: #772ce8c; border: 1px solid #772ce8c4; border-radius: 0.4em;}`);
    //         cont.innerText = parent.innerText + ' copied!';
    //         a(cont,[['id','copied_notification'],['class','pad8']]);
    //         document.body.appendChild(cont);
    //         inlineStyler(cont,`{border: 8px solid #772ce8c4; border-radius: 1em; opacity: 0.8;}`);
    //         await delay(733);
    //         document.getElementById('copied_notification').outerHTML = '';
    //         document.getElementById('unicode_emote_search_cont').outerHTML = '';
    //     }
    //     async function domplate() {
    //         var delay = (ms) => new Promise(res => setTimeout(res, ms));
    //         createCopiedFlashCard(this);
    //         var el = document.createElement('textarea');
    //         document.body.appendChild(el);
    //         el.value = this.innerText;
    //         el.select();
    //         document.execCommand('copy');
    //         el.outerHTML = '';
    //         document.getElementById('unicode_emote_textarea_search').value = this.innerText;
    //         await delay(11);
    //         if(document.getElementById('unicode_emotes_contaner')) document.getElementById('unicode_emotes_contaner').outerHTML = '';
    //     }
    // }
//     addUnicodeEmoteBtn();

}

window.onload =()=>{
    initResizePopOutComponents();
}
