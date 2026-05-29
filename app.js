const uniform = [
 {  classes: [    "nursery",
      "kg1",
      "kg2" ],

    male: {
 required: [  "Clip on tie",
        "Long pant vs",
        "Short pant vs",
        "Short sleeve shirt vs",
        "Knee high socks s",
        "Ankle length socks s"  ],
      chooseOne: [
        [ "Derby shoes",
          "Velcro shoes"      ],
        [    "T shirt green s",
          "T shirt yellow s",
          "T shirt blue s",
          "T shirt red s"]     ]  },

    female: {
   required: [     "Clip on tie",
        "Suspender skirt vs",
        "Pleated skirt vs",
        "Knee high socks s",
        "Ankle length socks s"   ],
 chooseOne: [
  [   "Mary janes shoes",
          "Ballerina flats shoes"  ],
   [     "T shirt green s",
          "T shirt yellow s",
          "T shirt blue s",
          "T shirt red s"       ]      ]    }  },

  { classes: [  "class1",
      "class2",
      "class3",
      "class4",
      "class5"    ],

    male: {
      required: [  "Loop tie",
        "Long pant s",
        "Long sleeve shirt s",
        "Short sleeve shirt s",
        "Knee high socks s",
        "Ankle length socks s",
        "Track suit s"    ],
      chooseOne: [
        [ "Derby shoes",
          "Velcro shoes",
          "Loafer shoes"],
   [       "T shirt green s",
          "T shirt yellow s",
          "T shirt blue s",
          "T shirt red s"     ]    ] },

    female: {
 required: [
        "Loop tie",
        "Suspender skirt s",
        "Pleated skirt s",
        "Knee high socks s",
        "Ankle length socks s",
        "Track suit s"],
chooseOne: [
   [    "Mary janes shoes",
          "Ballerina flats shoes"   ],
        [     "T shirt green s",
          "T shirt yellow s",
          "T shirt blue s",
          "T shirt red s"      ]    ]    } },

  {  classes: [    "class6",
    "class7",
      "class8",
      "class9",
      "class10"   ],

    male: {
  required: [     "Loop tie",
        "Long pant l",
        "Long sleeve shirt l",
        "Short sleeve shirt l",
        "Knee high socks l",
        "Ankle length socks l",
        "Track suit l"  ],
chooseOne: [
     [    "Derby shoes",
          "Velcro shoes",
          "Loafer shoes"       ],
        [   "T shirt green l",
          "T shirt yellow l",
          "T shirt blue l",
          "T shirt red l"     ]      ]    },

    female: {
  required: [    "Loop tie",
    "Suspender skirt l",
        "Pleated skirt l",
        "Knee high socks l",
        "Ankle length socks l",
        "Track suit l"    ],
      chooseOne: [
     [    "Mary janes shoes",
          "Ballerina flats shoes"   ],
        [    "T shirt green l",
          "T shirt yellow l",
          "T shirt blue l",
          "T shirt red l"      ]   ]  }  },

  {   classes: [   "class11Arts",
      "class11Science",
      "class12Arts",
      "class12Science" ],

    male: {
  required: [   "Loop tie",
        "Long pant vl",
        "Short sleeve shirt vl",
        "Knee high socks l",
        "Ankle length socks l",
        "Track suit l"     ],
 chooseOne: [
        [    "Derby shoes",
          "Velcro shoes",
          "Loafer shoes"   ],

        [   "T shirt green l",
          "T shirt yellow l",
          "T shirt blue l",
          "T shirt red l"      ]     ] },

    female: {
required: [   "Loop tie",
        "Suspender skirt vl",
        "Pleated skirt vl",
        "Knee high socks l",
        "Ankle length socks l",
        "Track suit l"  ],
      chooseOne: [
        [  "Mary janes shoes",
          "Ballerina flats shoes"  ],
        [ "T shirt green l",
          "T shirt yellow l",
          "T shirt blue l",
          "T shirt red l" ]  ] } }
];
//========= DOM Fields =========
const uniformGrid = document.getElementById("uniformGrid");
const bookGrid = document.getElementById("bookGrid");
const items =
getUniform("class8", "male");
renderImages(items, uniformGrid);
//========= Html Inject Function  =========
function renderImages(items, containerId) {
  containerId.innerHTML = items.map(item => `
    <img
      src="Images/${item}.webp"
      alt="${item}"
      class="gridImage"
      onclick="previewImg.src=this.src; previewBox.hidden=false"
    >
  `).join("");
}
//========= Utility Function  =========
function getUniform(className, gender) {
  const group = uniform.find(item =>
    item.classes.includes(className)
  );
  if (!group) {
return null;
  }
  return [
    ...group[gender].required,
    ...group[gender].chooseOne.flat()
  ];
}
