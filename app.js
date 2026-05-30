
//========= DOM Store =========
//-------- fees --------
const fees = {
  playgroup:      { admission: 4000, monthly: 700 },
  nursery:        { admission: 4000, monthly: 700 },
  kg1:            { admission: 4000, monthly: 700 },
  kg2:            { admission: 4000, monthly: 700 },

  class1:         { admission: 5000, monthly: 800 },
  class2:         { admission: 5000, monthly: 800 },
  class3:         { admission: 5000, monthly: 800 },
  class4:         { admission: 5000, monthly: 800 },
  class5:         { admission: 5000, monthly: 800 },

  class6:         { admission: 6000, monthly: 900 },
  class7:         { admission: 6000, monthly: 900 },
  class8:         { admission: 6000, monthly: 900 },
  class9:         { admission: 6000, monthly: 900 },
  class10:        { admission: 6000, monthly: 900 },

  class11Arts:    { admission: 7000, monthly: 1000 },
  class11Science: { admission: 7000, monthly: 1000 },
  class12Arts:    { admission: 7000, monthly: 1000 },
  class12Science: { admission: 7000, monthly: 1000 }
};
//-------- books --------
const books = {

  playgroup: {
    textbooks: [],
    notebooks: []
  },

  nursery: {
    textbooks: [
      "Nursery Rhymes",
      "Nursery ABC",
      "Nursery Numbers"
    ],
    notebooks: []
  },

  kg1: {
    textbooks: [
      "KG 1 Textbook 1",
      "KG 1 Textbook 2",
      "KG 1 Textbook 3",
      "KG 1 Textbook 4",
      "KG 1 Textbook 5"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  kg2: {
    textbooks: [
      "KG 2 Textbook 1",
      "KG 2 Textbook 2",
      "KG 2 Textbook 3",
      "KG 2 Textbook 4",
      "KG 2 Textbook 5"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class1: {
    textbooks: [
      "Class 1 Hindi",
      "Class 1 Manipuri",
      "Class 1 Mathematics",
      "Class 1 Science",
      "Class 1 EVS",
      "Class 1 GK",
      "Class 1 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class2: {
    textbooks: [
      "Class 2 Hindi",
      "Class 2 Manipuri",
      "Class 2 Mathematics",
      "Class 2 Science",
      "Class 2 EVS",
      "Class 2 GK",
      "Class 2 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class3: {
    textbooks: [
      "Class 3 Hindi",
      "Class 3 Manipuri",
      "Class 3 Mathematics",
      "Class 3 Science",
      "Class 3 EVS",
      "Class 3 GK",
      "Class 3 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class4: {
    textbooks: [
      "Class 4 Hindi",
      "Class 4 Manipuri",
      "Class 4 Mathematics",
      "Class 4 Science",
      "Class 4 EVS",
      "Class 4 GK",
      "Class 4 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class5: {
    textbooks: [
      "Class 5 Hindi",
      "Class 5 Manipuri",
      "Class 5 Mathematics",
      "Class 5 Science",
      "Class 5 EVS",
      "Class 5 GK",
      "Class 5 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class6: {
    textbooks: [
      "Class 6 Hindi",
      "Class 6 Manipuri",
      "Class 6 Mathematics",
      "Class 6 History",
      "Class 6 Geography",
      "Class 6 Economics",
      "Class 6 Biology",
      "Class 6 Physics",
      "Class 6 Chemistry",
      "Class 6 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class7: {
    textbooks: [
      "Class 7 Hindi",
      "Class 7 Manipuri",
      "Class 7 Mathematics",
      "Class 7 History",
      "Class 7 Geography",
      "Class 7 Economics",
      "Class 7 Biology",
      "Class 7 Physics",
      "Class 7 Chemistry",
      "Class 7 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class8: {
    textbooks: [
      "Class 8 Hindi",
      "Class 8 Manipuri",
      "Class 8 Mathematics",
      "Class 8 History",
      "Class 8 Geography",
      "Class 8 Economics",
      "Class 8 Biology",
      "Class 8 Physics",
      "Class 8 Chemistry",
      "Class 8 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class9: {
    textbooks: [
      "Class 9 MIL",
      "Class 9 Mathematics",
      "Class 9 History",
      "Class 9 Geography",
      "Class 9 Economics",
      "Class 9 Biology",
      "Class 9 Physics",
      "Class 9 Chemistry",
      "Class 9 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class10: {
    textbooks: [
      "Class 10 MIL",
      "Class 10 Mathematics",
      "Class 10 History",
      "Class 10 Geography",
      "Class 10 Economics",
      "Class 10 Biology",
      "Class 10 Physics",
      "Class 10 Chemistry",
      "Class 10 English"
    ],
    notebooks: [
      "Notebooks"
    ]
  },

  class11Arts: {
    textbooks: [   "Class 11 Economics",
      "Class 11 Geography",
      "Class 11 Political science",
      "Class 11 Sociology",
      "Class 11 English"   ],
    notebooks: [ "Notebooks"  ]
  },

  class11Science: {
    textbooks: [  "Class 11 Physics",
      "Class 11 Chemistry",
      "Class 11 Biology",
      "Class 11 Mathematics",
      "Class 11 English"   ],
    notebooks: [ "Notebooks"    ]
  },

  class12Arts: {
    textbooks: [   "Class 12 Economics",
      "Class 12 Geography",
      "Class 12 Political science",
      "Class 12 Sociology",
      "Class 12 English"  ],
    notebooks: [  "Notebooks"  ]
  },

  class12Science: {
    textbooks: [
      "Class 12 Physics",
      "Class 12 Chemistry",
      "Class 12 Biology",
      "Class 12 Mathematics",
      "Class 12 English"   ],
    notebooks: [  "Notebooks"  ]
  }
};
//-------- uniform --------
const uniform = [
  { classes: {playgroup: true},
 male: {
  required: [],
  chooseOne: [[], []]
},
female: {
  required: [],
  chooseOne: [[], []]
}
},
 {  classes: {
  nursery: true,
  kg1: true,
  kg2: true
},

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

  { classes: {
  class1: true,
  class2: true,
  class3: true,
  class4: true,
  class5: true
},

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

  {  classes: {
  class6: true,
  class7: true,
  class8: true,
  class9: true,
  class10: true
},
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

  {   classes: {
  class11Arts: true,
  class11Science: true,
  class12Arts: true,
  class12Science: true
},

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
//========= Data Producers =========
const className = "class10"
const gender = "female"
const feeData = fees[className];
admissionFee.textContent = `₹${feeData.admission}`;
monthlyFee.textContent = `₹${feeData.monthly}`;

const uniformData =
uniform.find(item =>
  item.classes[className]
)[gender];
const uniformSections = [
  ["Same as Image", uniformData.required],
  ["Accepted Styles", uniformData.chooseOne[0]],
  ["Any One Colour", uniformData.chooseOne[1]]
];

const bookSections = [
  ["Textbooks", books[className].textbooks],
  ["Notebooks", books[className].notebooks]
];

schoolTiming.textContent =
[ "class6",
  "class7",
  "class8",
  "class9",
  "class10",
  "class11Arts",
  "class11Science",
  "class12Arts",
  "class12Science" ].includes(className) ? "09:00 AM – 03:10 PM" : "09:00 AM – 02:00 PM";
//========= Active Triggers =========
renderImages(uniformSections, "uniformGrid");
renderImages(bookSections, "bookGrid");
//========= Html Inject Function  =========
function renderImages(sections, id) {
document.getElementById(id).innerHTML = sections.map(([title, items]) => `
    <h4>${title}</h4>
    <div class="imageGrid">
      ${items.map(item => `
        <img
          src="Images/${item}.webp"
          alt="${item}"
          class="gridImage"
          onclick="previewImg.src=this.src; previewTitle.textContent = this.alt; previewBox.hidden=false"
        >
      `).join("")}
    </div>
  `).join("");
}
//========= Utility Function  =========
