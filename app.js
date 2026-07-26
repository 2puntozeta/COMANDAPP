const cfg=window.KDS_CONFIG||{},cloud=!!(cfg.SUPABASE_URL&&cfg.SUPABASE_ANON_KEY),sb=cloud?supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null,bc="BroadcastChannel"in window?new BroadcastChannel("dpz-kds-v31"):null;
const MENU_CONFIG_ID="__menu_config__";
const MENU_SCHEMA_VERSION="v5.4";
const DEFAULT_MENU=[{"id":"v54-1","name":"Coperto","dept":"bar","cat":"Coperti","price":2.5,"active":true,"sort":1},{"id":"v54-2","name":"Acqua naturale 75 cl vetro","dept":"bar","cat":"Coperti","price":2.5,"active":true,"sort":2},{"id":"v54-3","name":"Acqua frizzante 75 cl","dept":"bar","cat":"Coperti","price":2.5,"active":true,"sort":3},{"id":"v54-4","name":"Baby (menù baby)","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":4},{"id":"v54-5","name":"Baby (menù ridotto)","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":5},{"id":"v54-6","name":"Giropizza + antipasto di mare","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":6},{"id":"v54-7","name":"Festivo menù","dept":"cucina","cat":"Menù e Banchetti","price":40,"active":true,"sort":7},{"id":"v54-8","name":"Giropizza calabrese","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":8},{"id":"v54-9","name":"Giropizza rosticceria","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":9},{"id":"v54-10","name":"Menù (2 portate)","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":10},{"id":"v54-11","name":"Menù degustazione","dept":"cucina","cat":"Menù e Banchetti","price":35,"active":true,"sort":11},{"id":"v54-12","name":"Supplemento","dept":"cucina","cat":"Menù e Banchetti","price":0,"active":true,"sort":12},{"id":"v54-13","name":"Menù degustazione CARNE","dept":"cucina","cat":"Menù e Banchetti","price":35,"active":true,"sort":13},{"id":"v54-14","name":"Supplemento CARNE","dept":"cucina","cat":"Menù e Banchetti","price":15,"active":true,"sort":14},{"id":"v54-15","name":"Acqua Naturale","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":15},{"id":"v54-16","name":"Acqua Frizzante","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":16},{"id":"v54-17","name":"Coca 1Lt","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":17},{"id":"v54-18","name":"1Lt Birra","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":18},{"id":"v54-19","name":"1/2 Lt Bianco","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":19},{"id":"v54-20","name":"1/2 Lt Rosato","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":20},{"id":"v54-21","name":"1/2 Lt Rosso","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":21},{"id":"v54-22","name":"1 Lt Bianco","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":22},{"id":"v54-23","name":"1 Lt Rosato","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":23},{"id":"v54-24","name":"1 Lt Rosso","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":24},{"id":"v54-25","name":"1/4 vino bianco","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":25},{"id":"v54-26","name":"1/4 vino rosato","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":26},{"id":"v54-27","name":"1/4 vino rosso","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":27},{"id":"v54-28","name":"Coca Zero","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":28},{"id":"v54-29","name":"Fanta","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":29},{"id":"v54-30","name":"Sprite","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":30},{"id":"v54-31","name":"Tuborg","dept":"bar","cat":"Menu Bevande","price":0,"active":true,"sort":31},{"id":"v54-32","name":"Alici Fritte","dept":"cucina","cat":"Antipasti","price":13,"active":true,"sort":32},{"id":"v54-33","name":"Antipasto Calabrese","dept":"cucina","cat":"Antipasti","price":13,"active":true,"sort":33},{"id":"v54-34","name":"Antipasto di Mare","dept":"cucina","cat":"Antipasti","price":17,"active":true,"sort":34},{"id":"v54-35","name":"Bresaola Rucola e Grana","dept":"cucina","cat":"Antipasti","price":12,"active":true,"sort":35},{"id":"v54-36","name":"Bufala e Crudo","dept":"cucina","cat":"Antipasti","price":12,"active":true,"sort":36},{"id":"v54-37","name":"Carpaccio Affumicato","dept":"cucina","cat":"Antipasti","price":12,"active":true,"sort":37},{"id":"v54-38","name":"Cotto e Mozzarella","dept":"cucina","cat":"Antipasti","price":6,"active":true,"sort":38},{"id":"v54-39","name":"Crudo e Mozzarella","dept":"cucina","cat":"Antipasti","price":8,"active":true,"sort":39},{"id":"v54-40","name":"Formaggi","dept":"cucina","cat":"Antipasti","price":8,"active":true,"sort":40},{"id":"v54-41","name":"Insalata di Mare","dept":"cucina","cat":"Antipasti","price":14,"active":true,"sort":41},{"id":"v54-42","name":"Kataifi (Gamberoni in Pasta Kataifi)","dept":"cucina","cat":"Antipasti","price":13,"active":true,"sort":42},{"id":"v54-43","name":"Marinate (Alici Marinate)","dept":"cucina","cat":"Antipasti","price":11,"active":true,"sort":43},{"id":"v54-44","name":"Pepata di Cozze","dept":"cucina","cat":"Antipasti","price":11,"active":true,"sort":44},{"id":"v54-45","name":"Polpo alla Griglia e Cialde di Patate","dept":"cucina","cat":"Antipasti","price":16,"active":true,"sort":45},{"id":"v54-46","name":"Salumi e Formaggi","dept":"cucina","cat":"Antipasti","price":13,"active":true,"sort":46},{"id":"v54-47","name":"Zuppetta di Mare","dept":"cucina","cat":"Antipasti","price":13,"active":true,"sort":47},{"id":"v54-48","name":"Ostriche","dept":"cucina","cat":"Antipasti","price":5,"active":true,"sort":48},{"id":"v54-49","name":"Crudité","dept":"cucina","cat":"Antipasti","price":15,"active":true,"sort":49},{"id":"v54-50","name":"Crocchè di Patate","dept":"cucina","cat":"Rosticceria","price":4,"active":true,"sort":50},{"id":"v54-51","name":"Mix Rosticceria","dept":"cucina","cat":"Rosticceria","price":5,"active":true,"sort":51},{"id":"v54-52","name":"Patatine","dept":"cucina","cat":"Rosticceria","price":2.5,"active":true,"sort":52},{"id":"v54-53","name":"Patatine Wurstel","dept":"cucina","cat":"Rosticceria","price":4,"active":true,"sort":53},{"id":"v54-54","name":"Polpette di Carne","dept":"cucina","cat":"Rosticceria","price":4,"active":true,"sort":54},{"id":"v54-55","name":"Babylon","dept":"pizzeria","cat":"Pizze","price":10,"active":true,"sort":55},{"id":"v54-56","name":"Bebo","dept":"pizzeria","cat":"Pizze","price":12,"active":true,"sort":56},{"id":"v54-57","name":"Bianca","dept":"pizzeria","cat":"Pizze","price":6,"active":true,"sort":57},{"id":"v54-58","name":"Bomberata","dept":"pizzeria","cat":"Pizze","price":11,"active":true,"sort":58},{"id":"v54-59","name":"Bufala","dept":"pizzeria","cat":"Pizze","price":10,"active":true,"sort":59},{"id":"v54-60","name":"Calabrese","dept":"pizzeria","cat":"Pizze","price":7.5,"active":true,"sort":60},{"id":"v54-61","name":"Calzone +","dept":"pizzeria","cat":"Pizze","price":7,"active":true,"sort":61},{"id":"v54-62","name":"Calzone Bianco","dept":"pizzeria","cat":"Pizze","price":7.5,"active":true,"sort":62},{"id":"v54-63","name":"Calzone Classico","dept":"pizzeria","cat":"Pizze","price":7.5,"active":true,"sort":63},{"id":"v54-64","name":"Calzone Zeta","dept":"pizzeria","cat":"Pizze","price":9,"active":true,"sort":64},{"id":"v54-65","name":"Capricciosa","dept":"pizzeria","cat":"Pizze","price":10,"active":true,"sort":65},{"id":"v54-66","name":"Contadina","dept":"pizzeria","cat":"Pizze","price":8,"active":true,"sort":66},{"id":"v54-67","name":"Diavola","dept":"pizzeria","cat":"Pizze","price":6.5,"active":true,"sort":67},{"id":"v54-68","name":"Diciassette","dept":"pizzeria","cat":"Pizze","price":10,"active":true,"sort":68},{"id":"v54-69","name":"Due","dept":"pizzeria","cat":"Pizze","price":14,"active":true,"sort":69},{"id":"v54-70","name":"Focaccia","dept":"pizzeria","cat":"Pizze","price":4,"active":true,"sort":70},{"id":"v54-71","name":"Frutti di Mare","dept":"pizzeria","cat":"Pizze","price":15,"active":true,"sort":71},{"id":"v54-72","name":"Malibù","dept":"pizzeria","cat":"Pizze","price":12,"active":true,"sort":72},{"id":"v54-73","name":"Margherita","dept":"pizzeria","cat":"Pizze","price":6,"active":true,"sort":73},{"id":"v54-74","name":"Marinara","dept":"pizzeria","cat":"Pizze","price":5,"active":true,"sort":74},{"id":"v54-75","name":"Napoli","dept":"pizzeria","cat":"Pizze","price":6.5,"active":true,"sort":75},{"id":"v54-76","name":"Polipetta","dept":"pizzeria","cat":"Pizze","price":16,"active":true,"sort":76},{"id":"v54-77","name":"Pugliese","dept":"pizzeria","cat":"Pizze","price":7.5,"active":true,"sort":77},{"id":"v54-78","name":"Punto","dept":"pizzeria","cat":"Pizze","price":12,"active":true,"sort":78},{"id":"v54-79","name":"Quattroformaggi","dept":"pizzeria","cat":"Pizze","price":8,"active":true,"sort":79},{"id":"v54-80","name":"Quattrostagioni","dept":"pizzeria","cat":"Pizze","price":10,"active":true,"sort":80},{"id":"v54-81","name":"Regina","dept":"pizzeria","cat":"Pizze","price":8.5,"active":true,"sort":81},{"id":"v54-82","name":"Rita + Patatine","dept":"pizzeria","cat":"Pizze","price":8,"active":true,"sort":82},{"id":"v54-83","name":"Rita + Wurstel + Patatine","dept":"pizzeria","cat":"Pizze","price":8.5,"active":true,"sort":83},{"id":"v54-84","name":"Rossa","dept":"pizzeria","cat":"Pizze","price":5,"active":true,"sort":84},{"id":"v54-85","name":"Taylor","dept":"pizzeria","cat":"Pizze","price":12,"active":true,"sort":85},{"id":"v54-86","name":"Viennese","dept":"pizzeria","cat":"Pizze","price":7.5,"active":true,"sort":86},{"id":"v54-87","name":"Zero","dept":"pizzeria","cat":"Pizze","price":14,"active":true,"sort":87},{"id":"v54-88","name":"Rosata","dept":"pizzeria","cat":"Pizze","price":6,"active":true,"sort":88},{"id":"v54-89","name":"Rita quattroformaggi","dept":"pizzeria","cat":"Pizze","price":8,"active":true,"sort":89},{"id":"v54-90","name":"Bianca + patatine","dept":"pizzeria","cat":"Pizze","price":8,"active":true,"sort":90},{"id":"v54-91","name":"Bianca + Patatine e würstel","dept":"pizzeria","cat":"Pizze","price":8.5,"active":true,"sort":91},{"id":"v54-92","name":"Pistacchio (Ravioli alla Cernia)","dept":"cucina","cat":"Primi Piatti","price":17,"active":true,"sort":92},{"id":"v54-93","name":"Porcini (Paccheri)","dept":"cucina","cat":"Primi Piatti","price":11,"active":true,"sort":93},{"id":"v54-94","name":"Porcini (Tagliolini)","dept":"cucina","cat":"Primi Piatti","price":11,"active":true,"sort":94},{"id":"v54-95","name":"Ragù di Polpo (Fusilloni)","dept":"cucina","cat":"Primi Piatti","price":16,"active":true,"sort":95},{"id":"v54-96","name":"Ravioli ai Frutti di Mare","dept":"cucina","cat":"Primi Piatti","price":17,"active":true,"sort":96},{"id":"v54-97","name":"Ravioli in Bianco","dept":"cucina","cat":"Primi Piatti","price":8,"active":true,"sort":97},{"id":"v54-98","name":"Ricciola (Paccheri Pomodori)","dept":"cucina","cat":"Primi Piatti","price":17,"active":true,"sort":98},{"id":"v54-99","name":"Risotto ai Frutti di Mare","dept":"cucina","cat":"Primi Piatti","price":16,"active":true,"sort":99},{"id":"v54-100","name":"Salvia e Zafferano (Ravioli)","dept":"cucina","cat":"Primi Piatti","price":17,"active":true,"sort":100},{"id":"v54-101","name":"Sorrentina (Gnocchi)","dept":"cucina","cat":"Primi Piatti","price":9,"active":true,"sort":101},{"id":"v54-102","name":"Vongole (Tagliolini alle Vongole)","dept":"cucina","cat":"Primi Piatti","price":17,"active":true,"sort":102},{"id":"v54-103","name":"Astice","dept":"cucina","cat":"Primi Piatti","price":25,"active":true,"sort":103},{"id":"v54-104","name":"Calamari","dept":"cucina","cat":"Secondi Piatti","price":17,"active":true,"sort":104},{"id":"v54-105","name":"Completa (Frittura completa)","dept":"cucina","cat":"Secondi Piatti","price":21,"active":true,"sort":105},{"id":"v54-106","name":"Cotoletta","dept":"cucina","cat":"Secondi Piatti","price":6,"active":true,"sort":106},{"id":"v54-107","name":"Cotoletta e Patatine","dept":"cucina","cat":"Secondi Piatti","price":8,"active":true,"sort":107},{"id":"v54-108","name":"Entrecote con patate","dept":"cucina","cat":"Secondi Piatti","price":25,"active":true,"sort":108},{"id":"v54-109","name":"Filetto di Pesce","dept":"cucina","cat":"Secondi Piatti","price":15,"active":true,"sort":109},{"id":"v54-110","name":"Gamberoni alla Griglia","dept":"cucina","cat":"Secondi Piatti","price":13,"active":true,"sort":110},{"id":"v54-111","name":"Grigliata di Pesce","dept":"cucina","cat":"Secondi Piatti","price":17,"active":true,"sort":111},{"id":"v54-112","name":"Involtino di Mare","dept":"cucina","cat":"Secondi Piatti","price":17,"active":true,"sort":112},{"id":"v54-113","name":"Manzo Filetto","dept":"cucina","cat":"Secondi Piatti","price":17,"active":true,"sort":113},{"id":"v54-114","name":"Paranza","dept":"cucina","cat":"Secondi Piatti","price":13,"active":true,"sort":114},{"id":"v54-115","name":"Seppia alla Griglia","dept":"cucina","cat":"Secondi Piatti","price":13,"active":true,"sort":115},{"id":"v54-116","name":"Spada alla Griglia","dept":"cucina","cat":"Secondi Piatti","price":15,"active":true,"sort":116},{"id":"v54-117","name":"Tagliata di Tonno","dept":"cucina","cat":"Secondi Piatti","price":16,"active":true,"sort":117},{"id":"v54-118","name":"Tonno + Spada","dept":"cucina","cat":"Secondi Piatti","price":20,"active":true,"sort":118},{"id":"v54-119","name":"Vitello (Tagliata Rucola e Grana)","dept":"cucina","cat":"Secondi Piatti","price":15,"active":true,"sort":119},{"id":"v54-120","name":"Acqua Nat 1/2","dept":"bar","cat":"Beverage","price":1,"active":true,"sort":120},{"id":"v54-121","name":"Acqua Friz 1/2","dept":"bar","cat":"Beverage","price":1,"active":true,"sort":121},{"id":"v54-122","name":"Coca Vetro 33 cl","dept":"bar","cat":"Beverage","price":2.5,"active":true,"sort":122},{"id":"v54-123","name":"Coca Zero Vetro 33 cl","dept":"bar","cat":"Beverage","price":2.5,"active":true,"sort":123},{"id":"v54-124","name":"Fanta Vetro 33 cl","dept":"bar","cat":"Beverage","price":2.5,"active":true,"sort":124},{"id":"v54-125","name":"Sprite Vetro 33 cl","dept":"bar","cat":"Beverage","price":2.5,"active":true,"sort":125},{"id":"v54-126","name":"Peroni Nastro Azzurro","dept":"bar","cat":"Birre","price":3,"active":true,"sort":126},{"id":"v54-127","name":"Beck's","dept":"bar","cat":"Birre","price":3,"active":true,"sort":127},{"id":"v54-128","name":"Ceres Strong Ale 7.7","dept":"bar","cat":"Birre","price":4,"active":true,"sort":128},{"id":"v54-129","name":"Leffe Rouge","dept":"bar","cat":"Birre","price":4,"active":true,"sort":129},{"id":"v54-130","name":"De Alchemia Schizophrenic","dept":"bar","cat":"Birre","price":5,"active":true,"sort":130},{"id":"v54-131","name":"Birra alla Spina Falkenturm","dept":"bar","cat":"Birre","price":5,"active":true,"sort":131},{"id":"v54-132","name":"Nastro Azzurro Zero","dept":"bar","cat":"Birre","price":3,"active":true,"sort":132},{"id":"v54-133","name":"Peroni Senza Glutine","dept":"bar","cat":"Birre","price":4,"active":true,"sort":133},{"id":"v54-134","name":"Birra Piccola 20 cl","dept":"bar","cat":"Birre","price":3,"active":true,"sort":134},{"id":"v54-135","name":"Birra Media 40 cl","dept":"bar","cat":"Birre","price":5,"active":true,"sort":135},{"id":"v54-136","name":"HB Weisse 50 cl","dept":"bar","cat":"Birre","price":5,"active":true,"sort":136},{"id":"v54-137","name":"Birra Analcolica 33 cl","dept":"bar","cat":"Birre","price":3,"active":true,"sort":137},{"id":"v54-138","name":"Birra Celiaca 33 cl","dept":"bar","cat":"Birre","price":4,"active":true,"sort":138},{"id":"v54-139","name":"Panache media","dept":"bar","cat":"Birre","price":6,"active":true,"sort":139},{"id":"v54-140","name":"Panache piccola","dept":"bar","cat":"Birre","price":6,"active":true,"sort":140},{"id":"v54-141","name":"1 Calice Bianco","dept":"bar","cat":"Vini","price":3,"active":true,"sort":141},{"id":"v54-142","name":"1 Calice Rosato","dept":"bar","cat":"Vini","price":3,"active":true,"sort":142},{"id":"v54-143","name":"1 Calice Rosso","dept":"bar","cat":"Vini","price":3,"active":true,"sort":143},{"id":"v54-144","name":"1/2 Lt Vino bianco","dept":"bar","cat":"Vini","price":5,"active":true,"sort":144},{"id":"v54-145","name":"1/2 Lt vino rosato","dept":"bar","cat":"Vini","price":5,"active":true,"sort":145},{"id":"v54-146","name":"1/2 Lt vino rosso","dept":"bar","cat":"Vini","price":5,"active":true,"sort":146},{"id":"v54-147","name":"1 Lt Vino bianco","dept":"bar","cat":"Vini","price":10,"active":true,"sort":147},{"id":"v54-148","name":"1 lt vino rosato","dept":"bar","cat":"Vini","price":10,"active":true,"sort":148},{"id":"v54-149","name":"1 lt vino rosso","dept":"bar","cat":"Vini","price":10,"active":true,"sort":149},{"id":"v54-150","name":"1/4 vino bianco","dept":"bar","cat":"Vini","price":3,"active":true,"sort":150},{"id":"v54-151","name":"1/4 vino rosato","dept":"bar","cat":"Vini","price":3,"active":true,"sort":151},{"id":"v54-152","name":"1/4 vino rosso","dept":"bar","cat":"Vini","price":3,"active":true,"sort":152},{"id":"v54-153","name":"Ceraudo Grayasusy","dept":"bar","cat":"Vini","price":33,"active":true,"sort":153},{"id":"v54-154","name":"Ceraudo Petelia","dept":"bar","cat":"Vini","price":33,"active":true,"sort":154},{"id":"v54-155","name":"Colli di Ginestra","dept":"bar","cat":"Vini","price":17,"active":true,"sort":155},{"id":"v54-156","name":"Iuzzolini Bianco","dept":"bar","cat":"Vini","price":12,"active":true,"sort":156},{"id":"v54-157","name":"Iuzzolini Rosato","dept":"bar","cat":"Vini","price":12,"active":true,"sort":157},{"id":"v54-158","name":"Iuzzolini Rosso","dept":"bar","cat":"Vini","price":12,"active":true,"sort":158},{"id":"v54-159","name":"Lumare","dept":"bar","cat":"Vini","price":17,"active":true,"sort":159},{"id":"v54-160","name":"Luna Piena","dept":"bar","cat":"Vini","price":25,"active":true,"sort":160},{"id":"v54-161","name":"Madama Giovanna","dept":"bar","cat":"Vini","price":25,"active":true,"sort":161},{"id":"v54-162","name":"Madre Goccia","dept":"bar","cat":"Vini","price":17,"active":true,"sort":162},{"id":"v54-163","name":"Pecorello Ippolito","dept":"bar","cat":"Vini","price":22,"active":true,"sort":163},{"id":"v54-164","name":"Principe Spinelli","dept":"bar","cat":"Vini","price":17,"active":true,"sort":164},{"id":"v54-165","name":"Theorema","dept":"bar","cat":"Vini","price":18,"active":true,"sort":165},{"id":"v54-166","name":"Al Forno (Patate al Forno)","dept":"cucina","cat":"Contorni","price":6,"active":true,"sort":166},{"id":"v54-167","name":"Cialde di Patate alla Griglia","dept":"cucina","cat":"Contorni","price":6,"active":true,"sort":167},{"id":"v54-168","name":"Insalata Mista","dept":"cucina","cat":"Contorni","price":4,"active":true,"sort":168},{"id":"v54-169","name":"Insalata Verde","dept":"cucina","cat":"Contorni","price":3,"active":true,"sort":169},{"id":"v54-170","name":"Patatine Fritte","dept":"cucina","cat":"Contorni","price":2.5,"active":true,"sort":170},{"id":"v54-171","name":"Verdure Grigliate","dept":"cucina","cat":"Contorni","price":6,"active":true,"sort":171},{"id":"v54-172","name":"Caramello Salato Cheesecake","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":172},{"id":"v54-173","name":"Cioccolato Cheesecake","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":173},{"id":"v54-174","name":"Crepès alla Nutella","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":174},{"id":"v54-175","name":"Dessert del Giorno","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":175},{"id":"v54-176","name":"Fragola Cheesecake","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":176},{"id":"v54-177","name":"Fragolata","dept":"bar","cat":"Dessert","price":4,"active":true,"sort":177},{"id":"v54-178","name":"Fragolata con PANNA","dept":"bar","cat":"Dessert","price":0,"active":true,"sort":178},{"id":"v54-179","name":"Frutti di Bosco Cheesecake","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":179},{"id":"v54-180","name":"Nutella pizza","dept":"pizzeria","cat":"Dessert","price":6,"active":true,"sort":180},{"id":"v54-181","name":"Pistacchio Cheesecake","dept":"bar","cat":"Dessert","price":50,"active":true,"sort":181},{"id":"v54-182","name":"Sorbetto al Limone","dept":"bar","cat":"Dessert","price":3,"active":true,"sort":182},{"id":"v54-183","name":"Tartufo","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":183},{"id":"v54-184","name":"Tiramisù","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":184},{"id":"v54-185","name":"Sgroppino","dept":"bar","cat":"Dessert","price":5,"active":true,"sort":185},{"id":"v54-186","name":"Americano","dept":"bar","cat":"Drink","price":5,"active":true,"sort":186},{"id":"v54-187","name":"Aperol Spritz","dept":"bar","cat":"Drink","price":5,"active":true,"sort":187},{"id":"v54-188","name":"Bombay","dept":"bar","cat":"Drink","price":6,"active":true,"sort":188},{"id":"v54-189","name":"Campari e Prosecco","dept":"bar","cat":"Drink","price":4,"active":true,"sort":189},{"id":"v54-190","name":"Campari Gin","dept":"bar","cat":"Drink","price":4,"active":true,"sort":190},{"id":"v54-191","name":"Campari Soda","dept":"bar","cat":"Drink","price":3,"active":true,"sort":191},{"id":"v54-192","name":"Campari Spritz","dept":"bar","cat":"Drink","price":5,"active":true,"sort":192},{"id":"v54-193","name":"Crodino","dept":"bar","cat":"Drink","price":3,"active":true,"sort":193},{"id":"v54-194","name":"Crodino e Martini","dept":"bar","cat":"Drink","price":4,"active":true,"sort":194},{"id":"v54-195","name":"Gin Lemon","dept":"bar","cat":"Drink","price":5,"active":true,"sort":195},{"id":"v54-196","name":"Gin Mare","dept":"bar","cat":"Drink","price":8,"active":true,"sort":196},{"id":"v54-197","name":"Gin Tonic","dept":"bar","cat":"Drink","price":5,"active":true,"sort":197},{"id":"v54-198","name":"Negroni","dept":"bar","cat":"Drink","price":5,"active":true,"sort":198},{"id":"v54-199","name":"Negroni Sbagliato","dept":"bar","cat":"Drink","price":5,"active":true,"sort":199},{"id":"v54-200","name":"Rum & Coca","dept":"bar","cat":"Drink","price":5,"active":true,"sort":200},{"id":"v54-201","name":"Sky","dept":"bar","cat":"Drink","price":6,"active":true,"sort":201},{"id":"v54-202","name":"Vodka Lemon","dept":"bar","cat":"Drink","price":5,"active":true,"sort":202},{"id":"v54-203","name":"Vodka Redbull","dept":"bar","cat":"Drink","price":5,"active":true,"sort":203},{"id":"v54-204","name":"Vodka Tonic","dept":"bar","cat":"Drink","price":5,"active":true,"sort":204},{"id":"v54-205","name":"Anguria","dept":"bar","cat":"Frutta","price":4,"active":true,"sort":205},{"id":"v54-206","name":"Melone","dept":"bar","cat":"Frutta","price":5,"active":true,"sort":206},{"id":"v54-207","name":"Fragole","dept":"bar","cat":"Frutta","price":4,"active":true,"sort":207},{"id":"v54-208","name":"Privè Lounge","dept":"bar","cat":"Prosecchi","price":15,"active":true,"sort":208},{"id":"v54-209","name":"Val d'Oca Blu Millesimato","dept":"bar","cat":"Prosecchi","price":17,"active":true,"sort":209},{"id":"v54-210","name":"Prosecco","dept":"bar","cat":"Prosecchi","price":3,"active":true,"sort":210},{"id":"v54-211","name":"Caffè","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":1.2,"active":true,"sort":211},{"id":"v54-212","name":"Decaffeinato","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":1.5,"active":true,"sort":212},{"id":"v54-213","name":"Capo","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":213},{"id":"v54-214","name":"Baiyles","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":4,"active":true,"sort":214},{"id":"v54-215","name":"Black Label","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":6,"active":true,"sort":215},{"id":"v54-216","name":"Carletto","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":216},{"id":"v54-217","name":"Diplomatico","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":6,"active":true,"sort":217},{"id":"v54-218","name":"Don Papa","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":6,"active":true,"sort":218},{"id":"v54-219","name":"Grappa Barricata","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":219},{"id":"v54-220","name":"Havana 7","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":5,"active":true,"sort":220},{"id":"v54-221","name":"Jack Daniel's","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":4,"active":true,"sort":221},{"id":"v54-222","name":"Jägermeister","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":222},{"id":"v54-223","name":"J&B","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":4,"active":true,"sort":223},{"id":"v54-224","name":"Jefferson","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":4,"active":true,"sort":224},{"id":"v54-225","name":"Kaciuto","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":225},{"id":"v54-226","name":"Limoncello","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":226},{"id":"v54-227","name":"Matuzalem","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":7,"active":true,"sort":227},{"id":"v54-228","name":"Montenegro","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":228},{"id":"v54-229","name":"Silano","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":229},{"id":"v54-230","name":"Unicum","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":3,"active":true,"sort":230},{"id":"v54-231","name":"Zacapa 23","dept":"bar","cat":"Caffè Amari Rum e Whisky","price":7,"active":true,"sort":231}];
const DEFAULT_CATEGORY_ORDER=["Coperti","Menù e Banchetti","Menu Bevande","Antipasti","Rosticceria","Pizze","Primi Piatti","Secondi Piatti","Beverage","Birre","Vini","Contorni","Dessert","Drink","Frutta","Prosecchi","Caffè Amari Rum e Whisky"];
let MENU=[],categoryOrder=[],DB_MODIFIERS=[];
const OFFICIAL_PRICE_MAP={"Acqua Calabria 0,75 L":2.5,"Coca-Cola":2.5,"Coca-Cola Zero":2.5,"Fanta":2.5,"Sprite":2.5,"Vino sfuso 1/2 L bianco":5,"Vino sfuso 1/2 L rosato":5,"Vino sfuso 1 L bianco":10,"Vino sfuso 1 L rosato":10,"Peroni Nastro Azzurro":3,"Beck's":3,"Ceres Strong Ale 7.7":4,"Leffe Rouge":4,"De Alchemia Schizophrenic":5,"Birra alla Spina Falkenturm":5,"Nastro Azzurro Zero":3,"Peroni Senza Glutine":4,"Kaciuto":3,"Vecchio Amaro del Capo":3,"Montenegro":3,"Jägermeister":3,"Amaro Silano":3,"Jefferson Amaro Importante":4,"Caffè":1.2,"Sorbetto al Limone":3,"Dessert del giorno":5,"Antipasto di Mare":17,"Antipasto Calabrese":13,"Insalata di Mare":14,"Polpo alla Griglia":16,"Pepata di Cozze":11,"Alici Fritte":13,"Zuppetta di Mare":13,"Ostriche e Fasolari":5,"Patatine":2.5,"Patatine Wurstel":4,"Crocchè di Patate":4,"Polpette di Carne":4,"Mix Rosticceria":5,"Pasta al Sugo":6,"Pasta in Bianco":6,"Pacchero con Ricciola Scottata e Pomodorini Rossi":17,"Tagliolini alle Vongole":17,"Ravioli di Cernia con Bisque di Crostacei":17,"Fusilloni al Ragù di Polpo":16,"Tagliolini al Limone con Gambero Rosso":17,"Frittura di Paranza":13,"Frittura di Calamari":17,"Frittura Completa Mista":21,"Tagliata di Tonno":16,"Grigliata di Pesce":17,"Pesce Spada alla Griglia":15,"Insalata":4,"Margherita":6,"Diavola":6.5,"Pugliese":7.5,"Bufala":10,"Polipetta 2.0":16,"Taylor":12,"Bebo":12,"Malibù":12,"Diciassette":10,"Contadina":8,"Quattroformaggi":8,"Focaccia":4,"Babylon":10,"Marinara":5,"Napoli":6.5,"Calabrese":7.5,"Capricciosa":10,"Viennese":7.5,"Regina":8.5,"Quattro Stagioni":10,"Calzone Classico":7.5,"Calzone Zeta":9};
let menuPricesMigrated=false;
function normalizeMenuConfig(config){
  const source=config?.items?.length?config.items:DEFAULT_MENU;
  MENU=source.map((x,i)=>({id:String(x.id||`m${i+1}`),name:String(x.name||"Prodotto"),dept:["bar","cucina","pizzeria"].includes(x.dept)?x.dept:"cucina",cat:String(x.cat||"Altro"),price:Math.max(0,Number(x.price??0)),active:x.active!==false,sort:Number(x.sort||i+1)}));
  const cats=[...new Set(MENU.map(x=>x.cat))];
  categoryOrder=[...(config?.categoryOrder||DEFAULT_CATEGORY_ORDER).filter(c=>cats.includes(c)),...cats.filter(c=>!(config?.categoryOrder||DEFAULT_CATEGORY_ORDER).includes(c))];
}
function menuConfigPayload(){return{type:"menu_config",items:MENU,categoryOrder,updatedAt:new Date().toISOString()}}
function loadLocalMenu(){
  try{
    if(localStorage.getItem("dpz_kds_menu_schema")!==MENU_SCHEMA_VERSION){
      normalizeMenuConfig({items:DEFAULT_MENU,categoryOrder:DEFAULT_CATEGORY_ORDER});
      localStorage.setItem("dpz_kds_menu",JSON.stringify(menuConfigPayload()));
      localStorage.setItem("dpz_kds_menu_schema",MENU_SCHEMA_VERSION);
    }else normalizeMenuConfig(JSON.parse(localStorage.getItem("dpz_kds_menu")||"null"));
  }catch{normalizeMenuConfig({items:DEFAULT_MENU,categoryOrder:DEFAULT_CATEGORY_ORDER})}
}
async function saveMenuConfig(){
  const payload=menuConfigPayload();
  localStorage.setItem("dpz_kds_menu",JSON.stringify(payload));
  bc?.postMessage({type:"menu",payload});
  if(cloud){
    const rows=MENU.map(p=>({id:(String(p.id).match(/^[0-9a-f-]{36}$/i)?p.id:undefined),name:p.name,category:p.cat,department:p.dept,price:Number(p.price||0),sort_order:Number(p.sort||0),active:p.active!==false,updated_at:new Date().toISOString()}));
    for(const row of rows){if(!row.id)delete row.id}
    const {error}=await sb.from("menu_items").upsert(rows,{onConflict:"name,category"});
    if(error)return toast("Errore salvataggio menù: "+error.message);
    for(let i=0;i<categoryOrder.length;i++)await sb.from("menu_categories").upsert({name:categoryOrder[i],sort_order:i+1,active:true,updated_at:new Date().toISOString()},{onConflict:"name"});
  }
  menu();renderMenuManager();toast("Menù salvato su Supabase")
}
loadLocalMenu();
let tableCount=Math.max(1,Number(localStorage.getItem("dpz_kds_table_count")||((cfg.TABLES&&cfg.TABLES.length)||30))),TABLES=[];const refreshTables=()=>{TABLES=Array.from({length:tableCount},(_,i)=>String(i+1))};refreshTables();const QUICK_ADD=["Patatine","Wurstel","Cipolla","'Nduja","Burrata","Prosciutto crudo","Mozzarella","Funghi","Olive","Tonno"],QUICK_REMOVE=["Mozzarella","Pomodoro","Cipolla","Olive","Funghi","Basilico","Prezzemolo","Formaggio"];

const ADD_ON_PRICES={
  "Acciughe":1,"Basilico":0,"Ben stesa":0,"Bufala":3.5,"Bufala a freddo":3.5,"Bufala infornata":3.5,"Bufala al centro":3.5,
  "Bocconcini di bufala":3.5,"Bresaola":3.5,"Capperi":1,"Carciofi":1,"Cicoria":3.5,"Cipolla":0.5,"Cipolla caramellata":1.5,
  "Cotto":0.5,"Crema pistacchio":2,"Crudo":2.5,"Diviso 2":0,"Doppia mozzarella":1,"Emmental":1,"Filetto di tonno":2.5,
  "Gorgonzola":1,"Grana":1.5,"Granella pistacchio":1,"Insalata di mare":8.5,"Melanzane fritte":1,"Melanzane grigliate":1,
  "Mollica AOP":2,"Mortadella":3,"Mozzarella":1.5,"Nduja":1,"'Nduja":1,"Olive schiacciate":1.5,"Olive nere":0.5,
  "Origano":0,"Patate bollite":2,"Pancetta":1.5,"Patatine":2,"Peperone fresco":0,"Peperoni":0,"Piccante":0,"Piccantino":0,
  "Pomodorini":1,"Pomodorini gialli":2,"Pomodori secchi":2,"Polipo":8.5,"Porchetta":3.5,"Porcini":2,"Provolone del Monaco":2,
  "Rossi semidried":2,"Rucola":1,"Salame":0.5,"Salsa yogurt":1,"Salsiccia":2.5,"Senza lattosio":2.5,"Soppressata":2,
  "Speck":2,"Tagliata":0,"Tonno":1,"Wurstel":0.5,"Würstel":0.5,"Zucca":1.5,"Zucchine fritte":1,"Zucchine grigliate":1,
  "Burrata":3.5,"Prosciutto crudo":2.5,"Funghi":1,"Olive":0.5
};
const addOnPrice=name=>Number(ADD_ON_PRICES[name]||0);
const addOnTotal=item=>(item.adds||[]).reduce((sum,name)=>sum+addOnPrice(name),0);
const lineUnitTotal=item=>Number(item.price||0)+addOnTotal(item);

let orders=[],cart=[],activeCat=categoryOrder[0]||"Tutti",selectedTable=null,selectedCourse=0,courseCount=3,editingLine=null,selectedAdds=[],selectedRemoves=[],pendingTable=null,editingCoversOnly=false,managerCat="Tutti",menuPage=0,modifierMode="add";
const $=s=>document.querySelector(s),uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random(),esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])),courseLabel=n=>n===0?"ADESSO":`ORDINE ${n}`,money=n=>new Intl.NumberFormat("it-IT",{style:"currency",currency:"EUR"}).format(Number(n||0));

function plainText(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g," ").trim()}
function isFishTastingMenu(item){return plainText(item?.name)==="menu degustazione"&&plainText(item?.cat)==="menu e banchetti"}
function isCompositeSeaAntipasto(item){return plainText(item?.name)==="antipasto di mare"&&plainText(item?.cat)==="antipasti"}
function isStandardKitchenMenu(item){return isFishTastingMenu(item)}
function componentName(i){
  const q=Number(i?.qty||1),k=i?.componentKind;
  if(k==="antipasto")return q===1?"Antipasto":"Antipasti";
  if(k==="zuppetta")return q===1?"Zuppetta di Mare":"Zuppette di Mare";
  if(k==="cozze")return q===1?"Pepata di Cozze":"Pepate di Cozze";
  if(k==="primoA")return q===1?"Primo A":"Primi A";
  if(k==="primoB")return q===1?"Primo B":"Primi B";
  if(k==="frittura")return q===1?"Frittura mista":"Fritture miste";
  return i?.name||"Prodotto"
}
function standardMenuParts(item,qty,baseCourse,adds=[],removes=[],note=""){
  const bundleId=uid(),sourceMenu=item.name;
  return [
    {kind:"antipasto",course:baseCourse,price:Number(item.price||0)},
    {kind:"zuppetta",course:baseCourse,price:0},
    {kind:"cozze",course:baseCourse,price:0},
    {kind:"primoA",course:baseCourse+1,price:0},
    {kind:"primoB",course:baseCourse+1,price:0},
    {kind:"frittura",course:baseCourse+2,price:0}
  ].map((x,index)=>({...item,id:`${item.id}-menu-${x.kind}-${bundleId}`,lineId:uid(),name:componentName({componentKind:x.kind,qty}),dept:"cucina",qty,course:x.course,price:x.price,adds:[...adds],removes:[...removes],note,menuBundleId:bundleId,bundleType:"fishMenu",menuSource:sourceMenu,menuPart:x.kind,componentKind:x.kind,menuPriceCarrier:index===0}));
}
function seaAntipastoParts(item,qty,baseCourse){
  const bundleId=uid();
  return [
    {kind:"antipasto",price:Number(item.price||0)},
    {kind:"zuppetta",price:0},
    {kind:"cozze",price:0}
  ].map((x,index)=>({...item,id:`${item.id}-antipasto-${x.kind}-${bundleId}`,lineId:uid(),name:componentName({componentKind:x.kind,qty}),dept:"cucina",qty,course:baseCourse,price:x.price,adds:[],removes:[],note:"",menuBundleId:bundleId,bundleType:"seaAntipasto",componentKind:x.kind,menuPriceCarrier:index===0}));
}
function coverPrice(){return Number(MENU.find(x=>plainText(x.name)==="coperto")?.price||2.5)}
function makeCoverItem(covers){return{id:"auto-cover",lineId:"auto-cover",name:"Coperto",dept:"bar",cat:"Coperti",qty:Math.max(1,Number(covers||1)),course:0,price:coverPrice(),active:true,sort:0,status:"sent",adds:[],removes:[],note:"",isCover:true,addedAt:new Date().toISOString()}}
function ensureCoverItem(order,covers){
  order.items=order.items||[];
  let line=order.items.find(i=>i.isCover||plainText(i.name)==="coperto");
  if(!line){line=makeCoverItem(covers);order.items.unshift(line)}
  Object.assign(line,{name:"Coperto",dept:"bar",cat:"Coperti",qty:Math.max(1,Number(covers||1)),course:0,price:coverPrice(),status:"sent",isCover:true,adds:[],removes:[]});
  return line
}
function addPartsOrIncrement(parts,bundleType,baseCourse,sourceName){
  const existing=cart.find(i=>i.bundleType===bundleType&&i.course===baseCourse&&(i.menuSource||i.sourceName||"")===sourceName);
  if(existing){cart.filter(i=>i.menuBundleId===existing.menuBundleId).forEach(i=>i.qty+=1)}else cart.push(...parts);
}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1800)}
const SOUND_KEY="dpz_kds_sound_v2",DISPLAY_KEY="dpz_kds_display_v1";
let soundPrefs=(()=>{try{return{enabled:false,dept:"cucina",soundType:"industrial",ackOnTap:false,...JSON.parse(localStorage.getItem(SOUND_KEY)||"{}")}}catch{return{enabled:false,dept:"cucina",soundType:"industrial",ackOnTap:false}}})();
let displayPrefs=(()=>{try{return{scale:1,textScale:1,buttonScale:1,boardColumns:"auto",...JSON.parse(localStorage.getItem(DISPLAY_KEY)||"{}")}}catch{return{scale:1,textScale:1,buttonScale:1,boardColumns:"auto"}}})();
let audioCtx=null,soundSnapshot=null,soundPlaying=false,pendingVisualAlert=false,customAudioUrl=null,alertRepeatTimer=null,currentCustomAudio=null;
function ensureAudio(){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;if(!audioCtx)audioCtx=new AC();if(audioCtx.state==="suspended")audioCtx.resume();return audioCtx}
function tone(ctx,at,freq,dur,vol=.9,type="sine",endFreq=null){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,at);if(endFreq)o.frequency.exponentialRampToValueAtTime(endFreq,at+dur);g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(Math.max(.001,vol),at+.015);g.gain.exponentialRampToValueAtTime(.0001,at+dur);o.connect(g).connect(ctx.destination);o.start(at);o.stop(at+dur+.03)}
function openSoundDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open("dpz-kds-audio",1);req.onupgradeneeded=()=>req.result.createObjectStore("sounds");req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function saveCustomSound(file){const db=await openSoundDb();await new Promise((resolve,reject)=>{const tx=db.transaction("sounds","readwrite");tx.objectStore("sounds").put(file,"custom");tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});localStorage.setItem("dpz_custom_sound_name",file.name);await loadCustomSound()}
async function loadCustomSound(){try{const db=await openSoundDb();const blob=await new Promise((resolve,reject)=>{const req=db.transaction("sounds").objectStore("sounds").get("custom");req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>reject(req.error)});if(customAudioUrl)URL.revokeObjectURL(customAudioUrl);customAudioUrl=blob?URL.createObjectURL(blob):null;return !!blob}catch{return false}}
function showNewOrderBadge(){pendingVisualAlert=true;const b=$("#newOrderBadge");if(b)b.hidden=false}
function stopAlert({clearBadge=true}={}){if(alertRepeatTimer){clearInterval(alertRepeatTimer);alertRepeatTimer=null}if(currentCustomAudio){try{currentCustomAudio.pause();currentCustomAudio.currentTime=0}catch{}currentCustomAudio=null}soundPlaying=false;if(clearBadge)clearNewOrderBadge();const btn=$("#soundButton");btn?.classList.remove("alerting")}
function clearNewOrderBadge(){pendingVisualAlert=false;const b=$("#newOrderBadge");if(b)b.hidden=true}
async function playAlertCycle(typeOverride=null,{preview=false}={}){if(soundPlaying&&!preview)return;soundPlaying=true;const type=typeOverride||soundPrefs.soundType||"industrial";
 if(type==="custom"){
  if(!customAudioUrl)await loadCustomSound();
  if(customAudioUrl){if(currentCustomAudio){try{currentCustomAudio.pause()}catch{}}const a=new Audio(customAudioUrl);currentCustomAudio=a;a.volume=1;try{await a.play()}catch{toast("Tocca SALVA E ATTIVA per autorizzare l’audio")}a.onended=()=>{soundPlaying=false;currentCustomAudio=null};setTimeout(()=>{if(currentCustomAudio===a){soundPlaying=false;currentCustomAudio=null}},12000)}else{soundPlaying=false;toast("Carica prima un audio personalizzato")}
 }else{
  const ctx=ensureAudio();if(!ctx){soundPlaying=false;return toast("Audio non supportato su questo dispositivo")}
  const t=ctx.currentTime+.04;
  if(type==="bell"){
   // Campanello metallico: due colpi alti, lunghi e squillanti.
   for(let r=0;r<2;r++){const b=t+r*.92;tone(ctx,b,1320,.72,.95,"sine");tone(ctx,b+.015,1980,.58,.55,"sine");tone(ctx,b+.03,2640,.42,.3,"sine")}
   setTimeout(()=>{soundPlaying=false},2400);
  }else if(type==="alarm"){
   // Sirena alternata: tono che sale e scende, nettamente diverso dagli altri.
   for(let r=0;r<3;r++){const b=t+r*.62;tone(ctx,b,650,.28,.95,"sawtooth",1350);tone(ctx,b+.3,1350,.28,.95,"sawtooth",650)}
   setTimeout(()=>{soundPlaying=false},2300);
  }else{
   // Buzzer industriale: tre colpi bassi e secchi.
   for(let r=0;r<3;r++){const b=t+r*.56;tone(ctx,b,235,.32,.98,"square");tone(ctx,b+.04,310,.24,.55,"square")}
   setTimeout(()=>{soundPlaying=false},2100);
  }
 }
 const btn=$("#soundButton");btn?.classList.add("alerting");setTimeout(()=>btn?.classList.remove("alerting"),2200)
}
async function playStrongAlert(){stopAlert({clearBadge:false});showNewOrderBadge();await playAlertCycle();if(soundPrefs.ackOnTap){alertRepeatTimer=setInterval(()=>{if(pendingVisualAlert&&!soundPlaying)playAlertCycle()},4200)}}
function audibleLineIds(){const depts=soundPrefs.dept==="all"?["cucina","pizzeria","bar"]:[soundPrefs.dept];const ids=[];for(const o of orders.filter(x=>x.paymentStatus==="open")){for(const d of depts){for(const i of deptItems(o,d))ids.push(`${o.id}:${i.lineId}:${d}`)}}return new Set(ids)}
function checkSoundAlerts({initial=false}={}){const next=audibleLineIds();if(soundSnapshot===null||initial){soundSnapshot=next;return}const hasNew=[...next].some(id=>!soundSnapshot.has(id));soundSnapshot=next;if(hasNew&&soundPrefs.enabled)playStrongAlert()}
function applyDisplayScale(){
  const scale=Math.min(1.3,Math.max(.8,Number(displayPrefs.scale)||1));
  const textScale=Math.min(1.3,Math.max(.9,Number(displayPrefs.textScale)||1));
  const buttonScale=Math.min(1.18,Math.max(.9,Number(displayPrefs.buttonScale)||1));
  const cols=["1","2","3"].includes(String(displayPrefs.boardColumns))?String(displayPrefs.boardColumns):"auto";
  document.documentElement.style.setProperty("--ui-scale",String(scale));
  document.documentElement.style.setProperty("--text-scale",String(textScale));
  document.documentElement.style.setProperty("--button-scale",String(buttonScale));
  document.documentElement.dataset.boardColumns=cols;
  document.body.style.zoom=String(scale);
}
function refreshSoundButton(){const b=$("#soundButton");if(!b)return;b.textContent=soundPrefs.enabled?`🔔 SUONI: ${soundPrefs.dept==="all"?"TUTTI":soundPrefs.dept.toUpperCase()}`:"🔕 ATTIVA SUONI";b.classList.toggle("enabled",soundPrefs.enabled)}
function normalize(o){
  o.paymentStatus=o.paymentStatus||"open";
  o.covers=Math.max(0,Number(o.covers||0));
  o.items=(o.items||[]).map(i=>{const row={...i,lineId:i.lineId||uid(),course:Number.isInteger(i.course)?i.course:(i.stage==="later"?1:i.stage==="follow"?2:0),status:i.status||"queued",adds:i.adds||[],removes:i.removes||[],note:i.note||""};if(row.componentKind)row.name=componentName(row);return row});
  o.history=o.history||[];
  const pendingCourses=o.items.filter(i=>i.status!=="sent").map(i=>i.course);
  if(!Number.isInteger(o.activeCourse)||!pendingCourses.includes(o.activeCourse))o.activeCourse=pendingCourses.length?Math.min(...pendingCourses):null;
  return o
}
function save(){localStorage.setItem("dpz_kds_orders",JSON.stringify(orders));bc?.postMessage({type:"orders",orders})}function load(){orders=JSON.parse(localStorage.getItem("dpz_kds_orders")||"[]").map(normalize)}
bc?.addEventListener("message",e=>{if(e.data?.type==="orders"){orders=e.data.orders.map(normalize);renderAll();checkSoundAlerts()}if(e.data?.type==="menu"){normalizeMenuConfig(e.data.payload);menu();renderMenuManager()}});
let canonicalMigrationPromise=null;
async function ensureCanonicalMenu(){
  if(!cloud)return;
  if(canonicalMigrationPromise)return canonicalMigrationPromise;
  canonicalMigrationPromise=(async()=>{
    const marker=`__schema_${MENU_SCHEMA_VERSION}__`;
    const {data:found,error:markerError}=await sb.from("menu_categories").select("name").eq("name",marker).maybeSingle();
    if(markerError)throw markerError;
    if(found)return;
    await sb.from("menu_items").update({active:false,updated_at:new Date().toISOString()}).neq("name",marker);
    await sb.from("menu_categories").update({active:false,updated_at:new Date().toISOString()}).neq("name",marker);
    const rows=DEFAULT_MENU.map(p=>({name:p.name,category:p.cat,department:p.dept,price:Number(p.price||0),sort_order:Number(p.sort||0),active:true,updated_at:new Date().toISOString()}));
    const itemRes=await sb.from("menu_items").upsert(rows,{onConflict:"name,category"});
    if(itemRes.error)throw itemRes.error;
    const categoryRows=DEFAULT_CATEGORY_ORDER.map((name,index)=>({name,sort_order:index+1,active:true,updated_at:new Date().toISOString()}));
    categoryRows.push({name:marker,sort_order:9999,active:false,updated_at:new Date().toISOString()});
    const catRes=await sb.from("menu_categories").upsert(categoryRows,{onConflict:"name"});
    if(catRes.error)throw catRes.error;
  })().catch(err=>{console.error("Migrazione menù",err);toast("Menù locale caricato: migrazione Supabase non riuscita")});
  return canonicalMigrationPromise
}
async function cloudLoad(){
  await ensureCanonicalMenu();
  const [ordRes,itemRes,catRes,modRes]=await Promise.all([
    sb.from("kds_orders").select("*").order("created_at"),
    sb.from("menu_items").select("*").eq("active",true).order("sort_order"),
    sb.from("menu_categories").select("*").eq("active",true).order("sort_order"),
    sb.from("menu_modifiers").select("*").eq("active",true).order("sort_order")
  ]);
  if(ordRes.error)return toast("Errore ordini: "+ordRes.error.message);
  if(itemRes.error){normalizeMenuConfig({items:DEFAULT_MENU,categoryOrder:DEFAULT_CATEGORY_ORDER});toast("Menù locale caricato")}
  else{
    MENU=(itemRes.data||[]).map(x=>({id:x.id,name:x.name,cat:x.category,dept:x.department,price:Number(x.price||0),active:x.active!==false,sort:Number(x.sort_order||0)}));
    categoryOrder=(catRes.data||[]).map(x=>x.name).filter(x=>DEFAULT_CATEGORY_ORDER.includes(x));
    if(!MENU.length)normalizeMenuConfig({items:DEFAULT_MENU,categoryOrder:DEFAULT_CATEGORY_ORDER});
    else categoryOrder=[...DEFAULT_CATEGORY_ORDER.filter(c=>MENU.some(x=>x.cat===c)),...categoryOrder.filter(c=>!DEFAULT_CATEGORY_ORDER.includes(c))];
  }
  DB_MODIFIERS=(modRes.data||[]).map(x=>({name:x.name,kind:x.kind,dept:x.department,price:Number(x.price||0),sort:Number(x.sort_order||0)}));
  Object.keys(ADD_ON_PRICES).forEach(k=>delete ADD_ON_PRICES[k]);
  DB_MODIFIERS.filter(x=>x.kind==="add").forEach(x=>ADD_ON_PRICES[x.name]=x.price);
  localStorage.setItem("dpz_kds_menu",JSON.stringify(menuConfigPayload()));
  localStorage.setItem("dpz_kds_menu_schema",MENU_SCHEMA_VERSION);
  orders=(ordRes.data||[]).map(r=>normalize(r.payload));
  activeCat=categoryOrder.includes(activeCat)?activeCat:(categoryOrder[0]||"Tutti");
  menu();renderAll();renderMenuManager();checkSoundAlerts()
}
async function persist(o){normalize(o);if(!cloud){save();return}const{error}=await sb.from("kds_orders").upsert({id:o.id,payload:o,updated_at:new Date().toISOString()});if(error)toast("Errore salvataggio")}
function showView(id){document.body.classList.toggle("order-view",id==="ordine");document.querySelectorAll("#tabs button").forEach(x=>x.classList.toggle("active",x.dataset.view===id));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===id))}
function openTable(table){const t=String(table),o=openOrder(t);if(!o){pendingTable=t;editingCoversOnly=false;$("#tableSetupTitle").textContent=`Apri tavolo ${t}`;$("#tableCovers").value=4;$("#confirmTableSetup").textContent="CONFERMA E APRI TAVOLO";$("#tableSetupModal").classList.add("open");return}openOrderScreen(t)}
function openOrderScreen(table){selectedTable=String(table);cart=[];const o=openOrder(selectedTable),max=o?Math.max(0,...o.items.map(i=>i.course)):0;courseCount=Math.max(3,max+1);selectedCourse=0;$("#tableLabel").textContent=selectedTable;$("#tableLabelMirror").textContent=selectedTable;$("#coversLabel").textContent=o?.covers||0;$("#coversLabelMirror").textContent=o?.covers||0;renderCourseRail();renderCart();showView("ordine")}
function editCovers(){if(!selectedTable)return;const o=openOrder(selectedTable);if(!o)return;pendingTable=selectedTable;editingCoversOnly=true;$("#tableSetupTitle").textContent=`Modifica coperti tavolo ${selectedTable}`;$("#tableCovers").value=o.covers||1;$("#confirmTableSetup").textContent="SALVA COPERTI";$("#tableSetupModal").classList.add("open")}
async function confirmTableSetup(){
  const covers=Math.max(1,Math.min(99,Number($("#tableCovers").value||4)));
  if(!pendingTable)return;
  let o=openOrder(pendingTable),now=new Date().toISOString();
  if(o){o.covers=covers;ensureCoverItem(o,covers);o.history.push({action:"covers_changed",covers,at:now});await persist(o)}
  else{o=normalize({id:uid(),table:pendingTable,covers,createdAt:now,paymentStatus:"open",items:[makeCoverItem(covers)],activeCourse:null,history:[{action:"table_opened",covers,at:now}]});orders.push(o);await persist(o)}
  $("#coversLabel").textContent=covers;if($("#coversLabelMirror"))$("#coversLabelMirror").textContent=covers;
  const t=pendingTable;$("#tableSetupModal").classList.remove("open");pendingTable=null;renderAll();if(!editingCoversOnly)openOrderScreen(t);editingCoversOnly=false
}
const openOrder=t=>orders.find(o=>o.table===String(t)&&o.paymentStatus==="open");
function renderTables(){const open=orders.filter(o=>o.paymentStatus==="open"),occupied=new Set(open.map(o=>String(o.table))),activeCovers=open.reduce((s,o)=>s+(o.covers||0),0),today=new Date().toISOString().slice(0,10),todayCovers=orders.filter(o=>(o.createdAt||"").slice(0,10)===today).reduce((s,o)=>s+(o.covers||0),0);$("#tablesSummary").textContent=`${occupied.size} occupati · ${TABLES.length-occupied.size} liberi · ${activeCovers} coperti attivi · ${todayCovers} coperti oggi`;$("#tablesGrid").innerHTML=TABLES.map(t=>{const o=openOrder(t),items=o?o.items.filter(i=>!i.isCover).reduce((s,i)=>s+i.qty,0):0,complete=o&&o.items.length&&o.items.every(i=>i.status==="sent");return`<button class="table-card ${o?complete?"complete":"occupied":"free"}" data-table="${esc(t)}"><b>${esc(t)}</b><span>${o?`${o.covers||0} COPERTI · ${items} articoli`:"LIBERO"}</span>${o?`<small>${complete?"PRONTO PER IL CONTO":"COMANDA APERTA"}</small>`:""}</button>`}).join("");document.querySelectorAll("[data-table]").forEach(b=>b.onclick=()=>openTable(b.dataset.table))}
function categoryKey(c){return c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-")}
function catInitials(c){return c.split(/\s+/).map(x=>x[0]||"").join("").slice(0,2).toUpperCase()}
function menu(){
  const cats=categoryOrder.filter(c=>MENU.some(x=>x.active&&x.cat===c));
  if(activeCat!=="Tutti"&&!cats.includes(activeCat))activeCat=cats[0]||"Tutti";
  $("#categories").innerHTML=cats.map(c=>`<button class="pos-category cat-${categoryKey(c)} ${c===activeCat?"active":""}" data-cat="${esc(c)}"><span class="cat-icon">${esc(catInitials(c))}</span><span>${esc(c)}</span></button>`).join("");
  document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{activeCat=b.dataset.cat;menuPage=0;menu()});
  const q=$("#search").value.trim().toLowerCase(),list=MENU.filter(p=>p.active&&(activeCat==="Tutti"||p.cat===activeCat)&&p.name.toLowerCase().includes(q)).sort((a,b)=>(categoryOrder.indexOf(a.cat)-categoryOrder.indexOf(b.cat))||(a.sort-b.sort)||a.name.localeCompare(b.name));
  const pageSize=18,pages=Math.max(1,Math.ceil(list.length/pageSize));menuPage=Math.min(menuPage,pages-1);const shown=list.slice(menuPage*pageSize,(menuPage+1)*pageSize);
  $("#menu").innerHTML=shown.length?shown.map(p=>`<button class="product cat-${categoryKey(p.cat)}" data-prod="${esc(p.id)}"><span>${esc(p.name)}</span><b>${p.price?money(p.price):"0,00 €"}</b></button>`).join(""):`<div class="empty">Nessun prodotto</div>`;
  $("#productPager").innerHTML=pages>1?Array.from({length:pages},(_,i)=>`<button class="pager-dot ${i===menuPage?"active":""}" data-page="${i}" aria-label="Pagina ${i+1}"></button>`).join(""):"";
  document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>{menuPage=+b.dataset.page;menu()});
  document.querySelectorAll("[data-prod]").forEach(b=>b.onclick=()=>openProduct(b.dataset.prod))
}
function renderCourseRail(){const counts=Array.from({length:courseCount},(_,c)=>cart.filter(i=>i.course===c).reduce((s,i)=>s+i.qty,0));$("#courseRail").innerHTML=counts.map((n,c)=>`<button class="course-button ${selectedCourse===c?"active":""}" data-course="${c}"><b>${courseLabel(c)}</b><span>${n?n+" prodotti":"seleziona"}</span></button>`).join("");document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{selectedCourse=+b.dataset.course;renderCourseRail();renderCart()})}
function openProduct(id){
  const p=MENU.find(x=>String(x.id)===String(id));if(!p)return;
  if(p.dept==="pizzeria"){editingLine={...p,lineId:uid(),qty:1,course:selectedCourse,adds:[],removes:[],note:"",_new:true};openItemModal();return}
  if(isFishTastingMenu(p)){
    const baseCourse=Math.max(1,selectedCourse);courseCount=Math.max(courseCount,baseCourse+3);
    addPartsOrIncrement(standardMenuParts(p,1,baseCourse),"fishMenu",baseCourse,p.name);selectedCourse=baseCourse;
  }else if(isCompositeSeaAntipasto(p)){
    const baseCourse=Math.max(1,selectedCourse);courseCount=Math.max(courseCount,baseCourse+1);
    const parts=seaAntipastoParts(p,1,baseCourse);parts.forEach(x=>x.sourceName=p.name);addPartsOrIncrement(parts,"seaAntipasto",baseCourse,p.name);selectedCourse=baseCourse;
  }else{
    const existing=cart.find(i=>!i.menuBundleId&&String(i.id)===String(p.id)&&i.course===selectedCourse&&!(i.adds||[]).length&&!(i.removes||[]).length&&!i.note);
    if(existing)existing.qty+=1;else cart.push({...p,lineId:uid(),qty:1,course:selectedCourse,adds:[],removes:[],note:""});
  }
  renderCourseRail();renderCart()
}
function editProduct(id){editingLine=cart.find(i=>i.lineId===id);if(editingLine?.menuBundleId){toast("Per modificare il menù standard, eliminalo e inseriscilo di nuovo");return}if(editingLine){editingLine._new=false;openItemModal()}}
function openItemModal(){selectedAdds=[...(editingLine.adds||[])];selectedRemoves=[...(editingLine.removes||[])];modifierMode="add";$("#modalTitle").textContent=editingLine.name;$("#modalPrice").textContent=editingLine.price?money(editingLine.price):"€ 0,00";$("#modalQty").value=editingLine.qty;$("#modalCourse").innerHTML=Array.from({length:courseCount},(_,c)=>`<option value="${c}" ${c===editingLine.course?"selected":""}>${courseLabel(c)}</option>`).join("");$("#modalAdds").value="";$("#modalRemoves").value="";$("#modalNote").value=editingLine.note||"";$("#modifierSearch").value="";renderModifierChips();$("#saveItem").textContent=editingLine._new?`Aggiungere ${editingLine.qty} ${editingLine.name}`:"Salvare modifiche";$("#itemModal").classList.add("open")}
function closeModal(id){$(id).classList.remove("open")}
const toggle=(a,v)=>a.includes(v)?a.filter(x=>x!==v):[...a,v];
function renderModifierChips(){
  const q=(($("#modifierSearch")?.value)||"").trim().toLowerCase();
  const dept=editingLine?.dept||"cucina";
  const allowed=x=>x.dept==="all"||x.dept===dept;
  const adds=DB_MODIFIERS.filter(x=>allowed(x)&&((dept==="pizzeria"&&x.kind==="add")||(dept==="cucina"&&x.kind==="option"))&&x.name.toLowerCase().includes(q));
  const removals=DB_MODIFIERS.filter(x=>allowed(x)&&x.kind==="remove"&&x.name.toLowerCase().includes(q));
  $("#modeAdd").textContent=dept==="pizzeria"?"AGGIUNTE":"OPZIONI";
  $("#modeAdd").style.display=dept==="bar"?"none":"";
  if(dept==="bar"&&modifierMode==="add")modifierMode="remove";
  $("#addChips").innerHTML=adds.map(x=>`<button class="${selectedAdds.includes(x.name)?"active":""}" data-qadd="${esc(x.name)}"><span>${esc(x.name[0].toUpperCase())}</span><b>${esc(x.name)}<small>${x.price>0?`+ ${money(x.price)}`:""}</small></b></button>`).join("");
  $("#removeChips").innerHTML=removals.map(x=>`<button class="${selectedRemoves.includes(x.name)?"active":""}" data-qremove="${esc(x.name)}"><span>−</span><b>${esc(x.name)}</b></button>`).join("");
  $("#addChips").classList.toggle("hidden",modifierMode!=="add");
  $("#removeChips").classList.toggle("hidden",modifierMode!=="remove");
  $("#modeAdd").classList.toggle("active",modifierMode==="add");
  $("#modeRemove").classList.toggle("active",modifierMode==="remove");
  $("#modifierHeading").textContent=modifierMode==="remove"?"DA TOGLIERE":dept==="pizzeria"?"AGGIUNTE PIZZE":"OPZIONI CUCINA E ROSTICCERIA";
  $("#modifierSearch").placeholder=modifierMode==="remove"?"Cerca ingrediente da togliere…":dept==="pizzeria"?"Cerca aggiunta…":"Cerca opzione…";
  document.querySelectorAll("[data-qadd]").forEach(b=>b.onclick=()=>{selectedAdds=toggle(selectedAdds,b.dataset.qadd);renderModifierChips()});
  document.querySelectorAll("[data-qremove]").forEach(b=>b.onclick=()=>{selectedRemoves=toggle(selectedRemoves,b.dataset.qremove);renderModifierChips()});
}
function saveModal(){
  const a=$("#modalAdds").value.split(",").map(x=>x.trim()).filter(Boolean),r=$("#modalRemoves").value.split(",").map(x=>x.trim()).filter(Boolean);
  const wasNew=editingLine._new===true;
  editingLine.qty=Math.max(1,+$("#modalQty").value||1);
  editingLine.course=+$("#modalCourse").value;
  editingLine.adds=[...new Set([...selectedAdds,...a])];
  editingLine.removes=[...new Set([...selectedRemoves,...r])];
  editingLine.note=$("#modalNote").value.trim();
  if(wasNew&&isStandardKitchenMenu(editingLine)){
    const baseCourse=Math.max(1,editingLine.course);
    courseCount=Math.max(courseCount,baseCourse+3);
    cart.push(...standardMenuParts(editingLine,editingLine.qty,baseCourse,editingLine.adds,editingLine.removes,editingLine.note));
    selectedCourse=baseCourse;
  }else{
    delete editingLine._new;
    if(!cart.some(x=>x.lineId===editingLine.lineId))cart.push(editingLine);
    selectedCourse=editingLine.course;
  }
  closeModal("#itemModal");renderCourseRail();renderCart();
}
function menuBadge(i){return i.menuSource?` <span class="menu-badge">(Menù)</span>`:""}
function itemDetails(i){return`${(i.adds||[]).map(v=>`<div class="mod plus">+ ${esc(v)}${addOnPrice(v)>0?` <small>(${money(addOnPrice(v))})</small>`:""}</div>`).join("")}${(i.removes||[]).map(v=>`<div class="mod minus">− ${esc(v)}</div>`).join("")}${i.note?`<div class="mod note">📝 ${esc(i.note)}</div>`:""}`}
function itemNameHtml(i){return`${esc(componentName(i))}${menuBadge(i)}`}
function renderCart(){
  const rows=cart.filter(i=>i.course===selectedCourse),o=selectedTable?openOrder(selectedTable):null,showCover=selectedCourse===0&&o?.covers;
  $("#cartEmpty").style.display=(rows.length||showCover)?"none":"block";
  const coverHtml=showCover?`<div class="line bar auto-cover"><div><strong>Coperto</strong><small class="line-price">${money(coverPrice())} cad.</small></div><div class="cover-qty">${o.covers}</div></div>`:"";
  $("#cartList").innerHTML=coverHtml+rows.map(i=>`<div class="line ${i.dept}" data-edit="${i.lineId}"><div><strong>${itemNameHtml(i)}</strong>${i.price?`<small class="line-price">${money(i.price)} cad.</small>`:""}${itemDetails(i)}</div><div class="qty"><button data-dec="${i.lineId}">−</button><b>${i.qty}</b><button data-inc="${i.lineId}">+</button></div><button class="remove" data-del="${i.lineId}">×</button></div>`).join("");
  const existingTotal=o?o.items.reduce((s,i)=>s+lineUnitTotal(i)*Number(i.qty||0),0):0,total=existingTotal+cart.reduce((s,i)=>s+lineUnitTotal(i)*Number(i.qty||0),0);
  if($("#cartTotal"))$("#cartTotal").textContent=money(total);if($("#mobileCartCount"))$("#mobileCartCount").textContent=cart.reduce((s,i)=>s+Number(i.qty||0),0);
  document.querySelectorAll("[data-edit]").forEach(x=>x.onclick=e=>{if(!e.target.closest("button"))editProduct(x.dataset.edit)});
  ["inc","dec","del"].forEach(a=>document.querySelectorAll(`[data-${a}]`).forEach(b=>b.onclick=()=>{const i=cart.find(x=>x.lineId===b.dataset[a]);if(!i)return;const linked=i.menuBundleId?cart.filter(x=>x.menuBundleId===i.menuBundleId):[i];if(a==="inc")linked.forEach(x=>x.qty++);if(a==="dec")linked.forEach(x=>x.qty--);if(a==="del"||linked.some(x=>x.qty<=0))cart=cart.filter(x=>!linked.includes(x));linked.forEach(x=>{if(x.componentKind)x.name=componentName(x)});renderCourseRail();renderCart()}))
}
async function send(){
  if(!selectedTable||!cart.length)return toast("Seleziona tavolo e prodotti");
  let o=openOrder(selectedTable);
  const now=new Date().toISOString(),batchId=uid(),newItems=cart.map(i=>({...i,status:"queued",batchId,addedAt:now}));
  if(o){
    o.items.push(...newItems);
    const firstNew=Math.min(...newItems.map(i=>i.course));
    if(o.activeCourse===null||firstNew<o.activeCourse)o.activeCourse=firstNew;
    o.history.push({action:"added_items",count:newItems.length,at:now})
  }else{
    o=normalize({id:uid(),table:selectedTable,covers:4,createdAt:now,paymentStatus:"open",items:[makeCoverItem(4),...newItems],activeCourse:Math.min(...newItems.map(i=>i.course)),history:[]});
    orders.push(o)
  }
  await persist(o);cart=[];document.body.classList.remove("mobile-order-open");renderAll();checkSoundAlerts();toast("Comanda inviata")
}
function currentCourse(o){
  const pending=o.items.filter(i=>i.status!=="sent");
  if(!pending.length){o.activeCourse=null;return null}
  const courses=[...new Set(pending.map(i=>i.course))].sort((a,b)=>a-b);
  if(!Number.isInteger(o.activeCourse)||!courses.includes(o.activeCourse))o.activeCourse=courses[0];
  return o.activeCourse
}
function deptItems(o,d){
  const c=currentCourse(o);
  return c===null?[]:o.items.filter(i=>!i.isCover&&i.dept===d&&i.course===c&&i.status!=="sent")
}
function advanceCourseIfComplete(o,completedCourse,at){
  if(completedCourse===null||completedCourse===undefined)return;
  const stillOpen=o.items.some(i=>i.course===completedCourse&&i.status!=="sent");
  if(stillOpen)return;
  const next=[...new Set(o.items.filter(i=>i.status!=="sent").map(i=>i.course))].sort((a,b)=>a-b)[0];
  o.activeCourse=Number.isInteger(next)?next:null;
  o.history.push({action:"course_advanced",fromCourse:completedCourse,toCourse:o.activeCourse,at});
}
const mins=t=>Math.max(0,Math.floor((Date.now()-new Date(t))/60000));
const elapsedSeconds=t=>Math.max(0,Math.floor((Date.now()-new Date(t).getTime())/1000));
const elapsedLabel=t=>{const total=elapsedSeconds(t),m=Math.floor(total/60),s=total%60;return `${m}:${String(s).padStart(2,"0")}`};
function courseStartedAt(o,course,items=[]){
  const advances=(o.history||[]).filter(h=>h.action==="course_advanced"&&Number(h.toCourse)===Number(course)&&h.at).sort((a,b)=>new Date(a.at)-new Date(b.at));
  if(advances.length)return advances[advances.length-1].at;
  const itemTimes=(items.length?items:o.items.filter(i=>Number(i.course)===Number(course))).map(i=>i.addedAt).filter(Boolean).sort((a,b)=>new Date(a)-new Date(b));
  return itemTimes[0]||o.createdAt||new Date().toISOString();
}
function refreshBoardTimers(){
  document.querySelectorAll(".ticket[data-timer-start]").forEach(card=>{
    const start=card.dataset.timerStart;
    const timer=card.querySelector("[data-ticket-timer]");
    if(timer)timer.textContent=elapsedLabel(start);
    card.classList.toggle("overdue-yellow",elapsedSeconds(start)>=480);
  });
}
const clock=t=>t?new Date(t).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"}):"—";
const duration=(a,b)=>{if(!a||!b)return "—";const m=Math.max(0,Math.round((new Date(b)-new Date(a))/60000));return m<60?`${m} min`:`${Math.floor(m/60)} h ${m%60} min`};
function sentEvents(o){return (o.history||[]).filter(h=>h.action==="sent").sort((a,b)=>new Date(a.at)-new Date(b.at))}
function courseTimeline(o){const events=sentEvents(o),courses=[...new Set(o.items.map(i=>i.course))].sort((a,b)=>a-b);return courses.map(c=>{const ev=events.filter(h=>Number(h.course)===c);const at=ev.length?ev[ev.length-1].at:null;const depts=[...new Set(ev.map(h=>h.dept))];return{course:c,at,depts}})}

function renderBoards(){for(const d of["cucina","pizzeria","bar"]){const rows=orders.filter(o=>o.paymentStatus==="open").map(o=>({o,it:deptItems(o,d)})).filter(x=>x.it.length);$("#count-"+d).textContent=rows.length+" tavoli";$("#board-"+d).innerHTML=rows.length?rows.map(({o,it})=>{const c=it[0].course,timerStart=courseStartedAt(o,c,it),overdue=elapsedSeconds(timerStart)>=480;return`<article class="ticket ${overdue?"overdue-yellow":""}" data-timer-start="${esc(timerStart)}"><h3>TAVOLO ${esc(o.table)} <small class="covers-inline">${o.covers||0} COPERTI</small></h3><div class="course-badge">${courseLabel(c)}</div><div class="meta"><span>${d.toUpperCase()}</span><span class="course-timer" data-ticket-timer>${elapsedLabel(timerStart)}</span></div><div class="items">${it.map(i=>`<div class="kds-item"><b>${i.menuSource?i.qty:i.qty+"×"}</b> ${itemNameHtml(i)}${itemDetails(i)}</div>`).join("")}</div><div class="actions single-action"><button class="sentbtn" data-a="sent" data-o="${o.id}" data-d="${d}">MANDATO</button></div></article>`}).join(""):`<div class="empty">Nessuna comanda</div>`}document.querySelectorAll("[data-a=sent]").forEach(b=>b.onclick=()=>act(b.dataset.o,b.dataset.d,"sent"));refreshBoardTimers()}
async function act(id,d,a){
  const o=orders.find(x=>x.id===id);
  if(!o)return;
  const it=deptItems(o,d),course=it[0]?.course;
  if(!it.length)return;
  const at=new Date().toISOString();
  it.forEach(i=>i.status=a==="sent"?"sent":a==="ready"?"ready":"started");
  o.history.push({dept:d,course,action:a,at});
  if(a==="sent")advanceCourseIfComplete(o,course,at);
  await persist(o);renderAll();checkSoundAlerts()
}
function orderGroups(o){const max=Math.max(0,...o.items.map(i=>i.course));return Array.from({length:max+1},(_,c)=>({c,items:o.items.filter(i=>i.course===c)})).filter(g=>g.items.length)}
function fullOrderHtml(o){const body=orderGroups(o).map(g=>`<section class="full-group"><h3>${courseLabel(g.c)}</h3>${g.items.map(i=>`<div class="full-line"><div><b>${i.qty}× ${itemNameHtml(i)}</b>${itemDetails(i)}</div><small>${lineUnitTotal(i)?money(lineUnitTotal(i)*Number(i.qty)):""}<br>${i.dept.toUpperCase()} · ${i.status==="sent"?"Mandato":i.status==="ready"?"Pronto":i.status==="started"?"In preparazione":"In attesa"}</small></div>`).join("")}</section>`).join("");const total=o.items.reduce((s,i)=>s+lineUnitTotal(i)*Number(i.qty||0),0);return body+`<div class="order-grand-total"><span>TOTALE</span><b>${money(total)}</b></div>`}
function openFull(table){const o=openOrder(table);if(!o)return toast("Tavolo senza conto aperto");$("#fullTitle").textContent=`TAVOLO ${table} — ${o.covers||0} COPERTI — ORDINE COMPLETO`;$("#fullBody").innerHTML=fullOrderHtml(o);$("#fullModal").classList.add("open")}
function renderAccounts(){const open=orders.filter(o=>o.paymentStatus==="open");$("#count-conti").textContent=open.length+" tavoli";$("#board-conti").innerHTML=open.length?open.map(o=>`<article class="account"><div class="account-head"><div><h3>TAVOLO ${esc(o.table)}</h3><small>${o.covers||0} coperti · Aperto ${new Date(o.createdAt).toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}</small></div><span class="status ${o.items.every(i=>i.status==="sent")?"done":"open"}">${o.items.every(i=>i.status==="sent")?"COMPLETO":"IN LAVORAZIONE"}</span></div>${fullOrderHtml(o)}<div class="account-actions"><button data-addtable="${esc(o.table)}" class="secondary">AGGIUNGI PRODOTTI</button><button data-paid="${o.id}" class="primary">SEGNA PAGATO</button></div></article>`).join(""):`<div class="empty">Nessun conto aperto</div>`;document.querySelectorAll("[data-addtable]").forEach(b=>b.onclick=()=>openTable(b.dataset.addtable));document.querySelectorAll("[data-paid]").forEach(b=>b.onclick=()=>markPaid(b.dataset.paid))}
async function markPaid(id){const o=orders.find(x=>x.id===id);if(!confirm(`Segnare come pagato il tavolo ${o.table}?`))return;o.paymentStatus="paid";o.paidAt=new Date().toISOString();o.history.push({action:"paid",at:o.paidAt});await persist(o);renderAll();toast("Tavolo chiuso")}
function renderHistory(){const el=$("#board-storico");if(!el)return;const filter=$("#historyDate")?.value||"";let paid=orders.filter(o=>o.paymentStatus==="paid").sort((a,b)=>new Date(b.paidAt||b.updatedAt||0)-new Date(a.paidAt||a.updatedAt||0));if(filter)paid=paid.filter(o=>(o.paidAt||"").slice(0,10)===filter);$("#count-storico").textContent=paid.length+" tavoli";const completed=paid.filter(o=>o.createdAt&&o.paidAt),avg=completed.length?Math.round(completed.reduce((s,o)=>s+(new Date(o.paidAt)-new Date(o.createdAt))/60000,0)/completed.length):0,totalCovers=paid.reduce((s,o)=>s+(o.covers||0),0);$("#historySummary").innerHTML=`<div><b>${paid.length}</b><span>Tavoli pagati</span></div><div><b>${totalCovers}</b><span>Coperti</span></div><div><b>${avg||0} min</b><span>Tempo medio tavolo</span></div>`;el.innerHTML=paid.length?paid.map(o=>{const timeline=courseTimeline(o),lastSent=sentEvents(o).at(-1)?.at;return`<article class="account history-card"><div class="account-head"><div><h3>TAVOLO ${esc(o.table)}</h3><small>${o.covers||0} coperti · ${new Date(o.paidAt).toLocaleDateString("it-IT")}</small></div><span class="status paid">PAGATO</span></div><div class="time-grid"><div><span>Ordine aperto</span><b>${clock(o.createdAt)}</b></div><div><span>Ultima mandata</span><b>${clock(lastSent)}</b><small>${duration(o.createdAt,lastSent)} dall’apertura</small></div><div><span>Pagamento</span><b>${clock(o.paidAt)}</b><small>${duration(o.createdAt,o.paidAt)} totale</small></div></div><div class="timeline">${timeline.map(t=>`<div class="timeline-row"><b>${courseLabel(t.course)}</b><span>${t.at?clock(t.at):"Non marcato"}</span><small>${t.at?duration(o.createdAt,t.at):"—"}${t.depts.length?` · ${t.depts.map(d=>d.toUpperCase()).join(" + ")}`:""}</small></div>`).join("")||`<div class="empty small">Nessuna mandata registrata</div>`}</div><details><summary>VEDI ORDINE COMPLETO</summary>${fullOrderHtml(o)}</details><div class="history-actions"><button class="secondary" data-reopen="${o.id}">RIAPRI TAVOLO</button><button class="danger" data-delete-paid="${o.id}">ELIMINA DEFINITIVAMENTE</button></div></article>`}).join(""):`<div class="empty">Nessun ordine pagato${filter?" in questa data":""}</div>`;document.querySelectorAll("[data-reopen]").forEach(b=>b.onclick=()=>reopenPaid(b.dataset.reopen));document.querySelectorAll("[data-delete-paid]").forEach(b=>b.onclick=()=>deletePaid(b.dataset.deletePaid))}
async function reopenPaid(id){const o=orders.find(x=>x.id===id);if(!o)return;const occupied=orders.find(x=>x.id!==id&&x.paymentStatus==="open"&&String(x.table)===String(o.table));if(occupied)return toast(`Il tavolo ${o.table} è già occupato`);if(!confirm(`Riaprire il tavolo ${o.table}? Tornerà tra i tavoli e i conti aperti.`))return;const now=new Date().toISOString(),previousPaidAt=o.paidAt;o.paymentStatus="open";o.paidAt=null;o.history.push({action:"payment_reopened",at:now,previousPaidAt});await persist(o);renderAll();toast(`Tavolo ${o.table} riaperto`)}
async function deletePaid(id){const o=orders.find(x=>x.id===id);if(!o||o.paymentStatus!=="paid")return;const when=o.paidAt?new Date(o.paidAt).toLocaleString("it-IT"):"";if(!confirm(`ELIMINARE DEFINITIVAMENTE il tavolo ${o.table}${when?` pagato il ${when}`:""}?\n\nQuesta operazione non può essere annullata.`))return;if(cloud){const{error}=await sb.from("kds_orders").delete().eq("id",id);if(error)return toast("Errore durante l’eliminazione")}orders=orders.filter(x=>x.id!==id);if(!cloud)save();else bc?.postMessage({type:"orders",orders});renderAll();toast("Ordine eliminato definitivamente")}

function renderMenuManager(){const root=$("#managerProducts");if(!root)return;const cats=["Tutti",...categoryOrder];$("#managerCategories").innerHTML=categoryOrder.map((c,i)=>`<div class="manager-cat-row"><button class="${managerCat===c?"active":""}" data-manager-cat="${esc(c)}">${esc(c)}</button><span><button data-cat-up="${i}" ${i===0?"disabled":""}>↑</button><button data-cat-down="${i}" ${i===categoryOrder.length-1?"disabled":""}>↓</button></span></div>`).join("");$("#categoryNames").innerHTML=categoryOrder.map(c=>`<option value="${esc(c)}"></option>`).join("");const q=$("#managerSearch")?.value?.toLowerCase()||"",list=MENU.filter(p=>(managerCat==="Tutti"||p.cat===managerCat)&&p.name.toLowerCase().includes(q)).sort((a,b)=>(categoryOrder.indexOf(a.cat)-categoryOrder.indexOf(b.cat))||(a.sort-b.sort));root.innerHTML=list.map(p=>`<div class="manager-product ${p.active?"":"inactive"}"><div><b>${esc(p.name)}</b><small>${esc(p.cat)} · ${p.dept.toUpperCase()} · ${p.price?money(p.price):"senza prezzo"}</small></div><div><button class="secondary compact" data-edit-menu="${esc(p.id)}">MODIFICA</button><button class="danger compact" data-delete-menu="${esc(p.id)}">ELIMINA</button></div></div>`).join("")||`<div class="empty small">Nessun prodotto</div>`;document.querySelectorAll("[data-manager-cat]").forEach(b=>b.onclick=()=>{managerCat=b.dataset.managerCat;renderMenuManager()});document.querySelectorAll("[data-cat-up]").forEach(b=>b.onclick=()=>moveCategory(+b.dataset.catUp,-1));document.querySelectorAll("[data-cat-down]").forEach(b=>b.onclick=()=>moveCategory(+b.dataset.catDown,1));document.querySelectorAll("[data-edit-menu]").forEach(b=>b.onclick=()=>editMenuProduct(b.dataset.editMenu));document.querySelectorAll("[data-delete-menu]").forEach(b=>b.onclick=()=>deleteMenuProduct(b.dataset.deleteMenu))}
async function moveCategory(index,delta){const j=index+delta;if(j<0||j>=categoryOrder.length)return;[categoryOrder[index],categoryOrder[j]]=[categoryOrder[j],categoryOrder[index]];await saveMenuConfig()}
function resetMenuEditor(){ $("#editMenuId").value="";$("#editMenuName").value="";$("#editMenuPrice").value="0";$("#editMenuDept").value="bar";$("#editMenuCat").value=managerCat!=="Tutti"?managerCat:(categoryOrder[0]||"");$("#editMenuActive").checked=true;$("#productEditorTitle").textContent="Nuovo prodotto"}
function editMenuProduct(id){const p=MENU.find(x=>String(x.id)===String(id));if(!p)return;$("#editMenuId").value=p.id;$("#editMenuName").value=p.name;$("#editMenuPrice").value=p.price||0;$("#editMenuDept").value=p.dept;$("#editMenuCat").value=p.cat;$("#editMenuActive").checked=p.active!==false;$("#productEditorTitle").textContent="Modifica prodotto";$("#editMenuName").focus()}
async function saveMenuProduct(){
  const name=$("#editMenuName").value.trim(),cat=$("#editMenuCat").value.trim();
  if(!name||!cat)return toast("Inserisci nome e categoria");
  let p=MENU.find(x=>String(x.id)===String($("#editMenuId").value));
  const record={name,category:cat,department:$("#editMenuDept").value,price:Math.max(0,Number($("#editMenuPrice").value||0)),active:$("#editMenuActive").checked,sort_order:p?.sort||MENU.length+1,updated_at:new Date().toISOString()};
  if(cloud){
    let query=sb.from("menu_items");
    const res=p?await query.update(record).eq("id",p.id).select().single():await query.insert(record).select().single();
    if(res.error)return toast("Errore: "+res.error.message);
    p={id:res.data.id,name:res.data.name,cat:res.data.category,dept:res.data.department,price:Number(res.data.price),active:res.data.active,sort:Number(res.data.sort_order)};
    MENU=MENU.filter(x=>String(x.id)!==String(p.id));MENU.push(p);
    await sb.from("menu_categories").upsert({name:cat,sort_order:categoryOrder.includes(cat)?categoryOrder.indexOf(cat)+1:categoryOrder.length+1,active:true},{onConflict:"name"});
  }else{
    if(!p){p={id:uid(),sort:MENU.length+1};MENU.push(p)}
    Object.assign(p,{name,cat,dept:record.department,price:record.price,active:record.active});
  }
  if(!categoryOrder.includes(cat))categoryOrder.push(cat);managerCat=cat;menu();renderMenuManager();resetMenuEditor();toast("Prodotto salvato")
}
async function deleteMenuProduct(id){const p=MENU.find(x=>String(x.id)===String(id));if(!p||!confirm(`Eliminare ${p.name} dal menù?`))return;if(cloud){const{error}=await sb.from("menu_items").delete().eq("id",id);if(error)return toast("Errore: "+error.message)}MENU=MENU.filter(x=>x!==p);categoryOrder=categoryOrder.filter(c=>MENU.some(x=>x.cat===c));menu();renderMenuManager();toast("Prodotto eliminato")}

function renderAll(){renderTables();renderBoards();renderAccounts();renderHistory();if(selectedTable){$("#tableLabel").textContent=selectedTable;$("#coversLabel").textContent=openOrder(selectedTable)?.covers||0;if($("#coversLabelMirror"))$("#coversLabelMirror").textContent=openOrder(selectedTable)?.covers||0;renderCourseRail();renderCart()}}
document.querySelectorAll("#tabs button").forEach(b=>b.onclick=()=>showView(b.dataset.view));$("#openSettings").onclick=()=>{$("#tableCountInput").value=tableCount;$("#settingsModal").classList.add("open")};$("#saveSettings").onclick=()=>{const n=Math.max(1,Math.min(300,Number($("#tableCountInput").value||0)));tableCount=n;localStorage.setItem("dpz_kds_table_count",String(n));refreshTables();$("#settingsModal").classList.remove("open");renderTables();toast(`Griglia aggiornata: ${n} tavoli`)};$("#closeSettings").onclick=()=>closeModal("#settingsModal");$("#openMenuManager").onclick=()=>{managerCat="Tutti";resetMenuEditor();renderMenuManager();$("#menuManagerModal").classList.add("open")};$("#closeMenuManager").onclick=()=>closeModal("#menuManagerModal");$("#resetMenuEditor").onclick=resetMenuEditor;$("#saveMenuProduct").onclick=saveMenuProduct;$("#managerSearch").oninput=renderMenuManager;$("#closeTableSetup").onclick=()=>closeModal("#tableSetupModal");$("#confirmTableSetup").onclick=confirmTableSetup;$("#editCovers").onclick=editCovers;$("#coversMinus").onclick=()=>{$("#tableCovers").value=Math.max(1,Number($("#tableCovers").value||4)-1)};$("#coversPlus").onclick=()=>{$("#tableCovers").value=Math.min(99,Number($("#tableCovers").value||4)+1)};$("#search").oninput=()=>{menuPage=0;menu()};$("#clearSearch").onclick=()=>{$("#search").value="";menuPage=0;menu()};$("#focusSearch").onclick=()=>{activeCat="Tutti";menuPage=0;menu();$("#search").focus()};$("#addCourse").onclick=()=>{courseCount++;selectedCourse=courseCount-1;renderCourseRail();renderCart()};$("#sendOrder").onclick=send;$("#backTables").onclick=()=>showView("tavoli");$("#showFullOrder").onclick=()=>selectedTable?openFull(selectedTable):toast("Seleziona un tavolo");$("#closeModal").onclick=()=>closeModal("#itemModal");$("#closeFull").onclick=()=>closeModal("#fullModal");$("#saveItem").onclick=saveModal;$("#modalQtyMinus").onclick=()=>{const v=Math.max(1,Number($("#modalQty").value||1)-1);$("#modalQty").value=v;if(editingLine?._new)$("#saveItem").textContent=`Aggiungere ${v} ${editingLine.name}`};$("#modalQtyPlus").onclick=()=>{const v=Math.max(1,Number($("#modalQty").value||1)+1);$("#modalQty").value=v;if(editingLine?._new)$("#saveItem").textContent=`Aggiungere ${v} ${editingLine.name}`};$("#modeAdd").onclick=()=>{modifierMode="add";renderModifierChips()};$("#modeRemove").onclick=()=>{modifierMode="remove";renderModifierChips()};$("#modifierSearch").oninput=renderModifierChips;if($("#goAccounts")) $("#goAccounts").onclick=()=>showView("conti");
$("#mobileCartToggle").onclick=()=>document.body.classList.add("mobile-order-open");
$("#mobileCartClose").onclick=()=>document.body.classList.remove("mobile-order-open");
document.querySelectorAll(".modal").forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.remove("open")});$("#historyDate").onchange=renderHistory;$("#clearHistoryDate").onclick=()=>{$("#historyDate").value="";renderHistory()};
$("#soundButton").onclick=()=>{$("#soundDept").value=soundPrefs.dept;$("#soundType").value=soundPrefs.soundType||"industrial";$("#soundEnabled").checked=soundPrefs.enabled;$("#ackOnTap").checked=!!soundPrefs.ackOnTap;$("#customSoundName").textContent=localStorage.getItem("dpz_custom_sound_name")||"Nessun audio personalizzato caricato";$("#soundModal").classList.add("open")};
$("#displayButton").onclick=()=>{
  $("#uiScale").value=String(displayPrefs.scale||1);
  $("#textScale").value=String(displayPrefs.textScale||1);
  $("#buttonScale").value=String(displayPrefs.buttonScale||1);
  $("#boardColumns").value=String(displayPrefs.boardColumns||"auto");
  $("#displayModal").classList.add("open");
};
$("#closeDisplay").onclick=()=>closeModal("#displayModal");
$("#saveDisplay").onclick=()=>{
  displayPrefs={scale:Number($("#uiScale").value),textScale:Number($("#textScale").value),buttonScale:Number($("#buttonScale").value),boardColumns:$("#boardColumns").value};
  localStorage.setItem(DISPLAY_KEY,JSON.stringify(displayPrefs));
  applyDisplayScale();closeModal("#displayModal");toast("Impostazioni display salvate");
};
$("#resetDisplay").onclick=()=>{
  const phone=window.matchMedia("(max-width: 760px)").matches;
  displayPrefs={scale:1,textScale:phone?1.15:1,buttonScale:phone?1.18:1,boardColumns:phone?"1":"auto"};
  localStorage.setItem(DISPLAY_KEY,JSON.stringify(displayPrefs));
  applyDisplayScale();closeModal("#displayModal");toast("Display automatico ripristinato");
};
$("#closeSound").onclick=()=>closeModal("#soundModal");
$("#customSoundFile").onchange=async e=>{const file=e.target.files?.[0];if(!file)return;await saveCustomSound(file);$("#customSoundName").textContent=file.name;$("#soundType").value="custom";toast("Audio personalizzato salvato")};
$("#testSound").onclick=()=>{stopAlert();playAlertCycle($("#soundType").value,{preview:true})};
$("#saveSound").onclick=()=>{soundPrefs={enabled:$("#soundEnabled").checked,dept:$("#soundDept").value,soundType:$("#soundType").value,ackOnTap:$("#ackOnTap").checked};localStorage.setItem(SOUND_KEY,JSON.stringify(soundPrefs));ensureAudio();soundSnapshot=audibleLineIds();refreshSoundButton();closeModal("#soundModal");stopAlert();if(soundPrefs.enabled){playAlertCycle(soundPrefs.soundType,{preview:true});toast(soundPrefs.ackOnTap?"Suoni attivi: si ripetono finché tocchi lo schermo":"Avvisi sonori attivati") }else toast("Avvisi sonori disattivati")};
document.addEventListener("pointerdown",()=>{if(soundPrefs.ackOnTap&&pendingVisualAlert)stopAlert()},{capture:true});
refreshSoundButton();
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});if(cloud){$("#conn").textContent="ONLINE";$("#conn").className="pill online";cloudLoad();sb.channel("kds-live-v50")
.on("postgres_changes",{event:"*",schema:"public",table:"kds_orders"},cloudLoad)
.on("postgres_changes",{event:"*",schema:"public",table:"menu_items"},cloudLoad)
.on("postgres_changes",{event:"*",schema:"public",table:"menu_categories"},cloudLoad)
.on("postgres_changes",{event:"*",schema:"public",table:"menu_modifiers"},cloudLoad)
.subscribe()}else{load();renderAll();checkSoundAlerts({initial:true})}menu();renderCourseRail();renderCart();setInterval(refreshBoardTimers,1000);setInterval(renderAll,30000);

applyDisplayScale();loadCustomSound();
