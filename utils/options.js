// aka hair style
const topTypeOptions = [
  {
    "name": "Auburn",
    "file": "/Avataaar/Color/Hair/Auburn.svg"
  },
  {
    "name": "Black",
    "file": "/Avataaar/Color/Hair/Black.svg"
  },
  {
    "name": "BlondeGolden",
    "file": "/Avataaar/Color/Hair/Blonde Golden.svg"
  },
  {
    "name": "Blonde",
    "file": "/Avataaar/Color/Hair/Blonde.svg"
  },
  {
    "name": "BrownDark",
    "file": "/Avataaar/Color/Hair/Brown Dark.svg"
  },
  {
    "name": "Brown",
    "file": "/Avataaar/Color/Hair/Brown.svg"
  },
  {
    "name": "PastelPink",
    "file": "/Avataaar/Color/Hair/Pastel Pink.svg"
  },
  {
    "name": "Platinum",
    "file": "/Avataaar/Color/Hair/Platinum.svg"
  },
  {
    "name": "Red",
    "file": "/Avataaar/Color/Hair/Red.svg"
  },
  {
    "name": "SilverGray",
    "file": "/Avataaar/Color/Hair/Silver Gray.svg"
  }
]

const clotheTypeOptions = [
  {
    "name": "BlazerShirt",
    "file": "/Avataaar/Clothing/Blazer + Shirt.svg"
  },
  {
    "name": "BlazerSweater",
    "file": "/Avataaar/Clothing/Blazer + Sweater.svg"
  },
  {
    "name": "CollarSweater",
    "file": "/Avataaar/Clothing/Collar + Sweater.svg"
  },
  {
    "name": "GraphicShirt",
    "file": "/Avataaar/Clothing/Graphic Shirt.svg"
  },
  {
    "name": "Hoodie",
    "file": "/Avataaar/Clothing/Hoodie.svg"
  },
  {
    "name": "Overall",
    "file": "/Avataaar/Clothing/Overall.svg"
  },
  {
    "name": "ShirtCrewNeck",
    "file": "/Avataaar/Clothing/Shirt Crew Neck.svg"
  },
  {
    "name": "ShirtScoopNeck",
    "file": "/Avataaar/Clothing/Shirt Scoop Neck.svg"
  },
  {
    "name": "ShirtVNeck",
    "file": "/Avataaar/Clothing/Shirt V Neck.svg"
  }
]

const clotheColorOptions = [
  {
    "name": "Black",
    "file": "/Avataaar/Color/Palette/Black.svg"
  },
  {
    "name": "Blue01",
    "file": "/Avataaar/Color/Palette/Blue 01.svg"
  },
  {
    "name": "Blue02",
    "file": "/Avataaar/Color/Palette/Blue 02.svg"
  },
  {
    "name": "Blue03",
    "file": "/Avataaar/Color/Palette/Blue 03.svg"
  },
  {
    "name": "Gray01",
    "file": "/Avataaar/Color/Palette/Gray 01.svg"
  },
  {
    "name": "Gray02",
    "file": "/Avataaar/Color/Palette/Gray 02.svg"
  },
  {
    "name": "Heather",
    "file": "/Avataaar/Color/Palette/Heather.svg"
  },
  {
    "name": "PastelBlue",
    "file": "/Avataaar/Color/Palette/Pastel Blue.svg"
  },
  {
    "name": "PastelGreen",
    "file": "/Avataaar/Color/Palette/Pastel Green.svg"
  },
  {
    "name": "PastelOrange",
    "file": "/Avataaar/Color/Palette/Pastel Orange.svg"
  },
  {
    "name": "PastelRed",
    "file": "/Avataaar/Color/Palette/Pastel Red.svg"
  },
  {
    "name": "PastelYellow",
    "file": "/Avataaar/Color/Palette/Pastel Yellow.svg"
  },
  {
    "name": "Pink",
    "file": "/Avataaar/Color/Palette/Pink.svg"
  },
  {
    "name": "Red",
    "file": "/Avataaar/Color/Palette/Red.svg"
  },
  {
    "name": "White",
    "file": "/Avataaar/Color/Palette/White.svg"
  }
]

const eyebrowTypeOptions = [
  {
    "name": "AngryNatural",
    "file": "/Avataaar/Eyebrow/Natural/Angry Natural.svg"
  },
  {
    "name": "DefaultNatural",
    "file": "/Avataaar/Eyebrow/Natural/Default Natural.svg"
  },
  {
    "name": "FlatNatural",
    "file": "/Avataaar/Eyebrow/Natural/Flat Natural.svg"
  },
  {
    "name": "FrownNatural",
    "file": "/Avataaar/Eyebrow/Natural/Frown Natural.svg"
  },
  {
    "name": "RaisedExcitedNatural",
    "file": "/Avataaar/Eyebrow/Natural/Raised Excited Natural.svg"
  },
  {
    "name": "SadConcernedNatural",
    "file": "/Avataaar/Eyebrow/Natural/Sad Concerned Natural.svg"
  },
  {
    "name": "UnibrowNatural",
    "file": "/Avataaar/Eyebrow/Natural/Unibrow Natural.svg"
  },
  {
    "name": "UpDownNatural",
    "file": "/Avataaar/Eyebrow/Natural/Up Down Natural.svg"
  },
  {
    "name": "Angry",
    "file": "/Avataaar/Eyebrow/Outline/Angry.svg"
  },
  {
    "name": "Default",
    "file": "/Avataaar/Eyebrow/Outline/Default.svg"
  },
  {
    "name": "RaisedExcited",
    "file": "/Avataaar/Eyebrow/Outline/Raised Excited.svg"
  },
  {
    "name": "SadConcerned",
    "file": "/Avataaar/Eyebrow/Outline/Sad Concerned.svg"
  },
  {
    "name": "UpDown",
    "file": "/Avataaar/Eyebrow/Outline/Up Down.svg"
  }
]

const eyeTypeOptions = [
  {
    "name": "Closed",
    "file": "/Avataaar/Eyes/Closed.svg"
  },
  {
    "name": "Cry",
    "file": "/Avataaar/Eyes/Cry.svg"
  },
  {
    "name": "Default",
    "file": "/Avataaar/Eyes/Default.svg"
  },
  {
    "name": "Eye Roll",
    "file": "/Avataaar/Eyes/Eye Roll.svg"
  },
  {
    "name": "Happy",
    "file": "/Avataaar/Eyes/Happy.svg"
  },
  {
    "name": "Hearts",
    "file": "/Avataaar/Eyes/Hearts.svg"
  },
  {
    "name": "Side",
    "file": "/Avataaar/Eyes/Side.svg"
  },
  {
    "name": "Squint",
    "file": "/Avataaar/Eyes/Squint.svg"
  },
  {
    "name": "Surprised",
    "file": "/Avataaar/Eyes/Surprised.svg"
  },
  {
    "name": "WinkWacky",
    "file": "/Avataaar/Eyes/Wink Wacky.svg"
  },
  {
    "name": "Wink",
    "file": "/Avataaar/Eyes/Wink.svg"
  },
  {
    "name": "Dizzy",
    "file": "/Avataaar/Eyes/X Dizzy.svg"
  }
]

const FacialHair = [
  {
    "name": "Blank",
    "file": "/Avataaar/Facial Hair/-Blank.svg"
  },
  {
    "name": "BeardLight",
    "file": "/Avataaar/Facial Hair/Beard Light.svg"
  },
  {
    "name": "BeardMagestic",
    "file": "/Avataaar/Facial Hair/Beard Magestic.svg"
  },
  {
    "name": "BeardMedium",
    "file": "/Avataaar/Facial Hair/Beard Medium.svg"
  },
  {
    "name": "MoustacheFancy",
    "file": "/Avataaar/Facial Hair/Moustache Fancy.svg"
  },
  {
    "name": "MoustacheMagnum",
    "file": "/Avataaar/Facial Hair/Moustache Magnum.svg"
  }
]
