 export default ({ faceColor, eyeColor, hairColor }) => (
   <div>
      <p>face is {faceColor}</p>
      <p>eye is {eyeColor}</p>
      <p>hair is {hairColor}</p>
   </div>
 )

/*

const draw = SVG().addTo('body').size(500, 600)

const face = draw.ellipse(200, 200).move(100, 50).fill(faceColor)

const leftEyeOuter = draw.ellipse(70, 100).move(125, 90).fill('#fff')
const rightEyeOuter = draw.ellipse(70, 100).move(200, 90).fill('#fff')

const leftEyeColor = draw.ellipse(50, 70).move(135, 105).fill(eyeColor)
const rightEyeColor = draw.ellipse(50, 70).move(210, 105).fill(eyeColor)

const leftEyePupil = draw.ellipse(20, 20).move(155, 115).fill('#fff')
const rightEyePupil = draw.ellipse(20, 20).move(230, 115).fill('#fff')

const mouth = draw.ellipse(20, 20).move(190, 200).fill('#E730BE')

const hair = draw.path('M72.4491 13.4756L72.4167 13.4458L85.7031 13.5857L85.4528 13.3558L100.889 17.5035L100.473 16.84L105.87 18.589L128.333 30.9318L122.832 13.1648L112.127 15.5737L106.46 5.30286L96.0727 9.80508L90.9219 1.57106L79.0412 7.46454L71.6651 0.687134L64.9517 6.58672L58.4112 0.577042L48.599 9.1998L37.722 3.10396L30.4331 13.4868L18.3337 10.3257L15.2079 19.2228L6.45419 16.9357L0.281891 34.5042L25.3173 21.8639L24.5184 21.6552L33.5817 17.0792L51.2648 13.2526L72.4491 13.4756Z').move(135, 44).fill(hairColor)

*/
