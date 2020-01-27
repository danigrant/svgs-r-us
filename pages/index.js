import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SVGEditor from '../components/SVGEditor'

/*

let faceColor = '#B7C7FF'
let eyeColor = '#453B85'
let mouthColor = '#E730BE'
let hairColor = '#7AD29D'

const draw = SVG().addTo('body').size(500, 600)

const face = draw.ellipse(200, 200).move(100, 50).fill(faceColor)

const leftEyeOuter = draw.ellipse(70, 100).move(125, 90).fill('#fff')
const rightEyeOuter = draw.ellipse(70, 100).move(200, 90).fill('#fff')

const leftEyeColor = draw.ellipse(50, 70).move(135, 105).fill(eyeColor)
const rightEyeColor = draw.ellipse(50, 70).move(210, 105).fill(eyeColor)

const leftEyePupil = draw.ellipse(20, 20).move(155, 115).fill('#fff')
const rightEyePupil = draw.ellipse(20, 20).move(230, 115).fill('#fff')

const mouth = draw.ellipse(20, 20).move(190, 200).fill(mouthColor)

const hair = draw.path('M72.4491 13.4756L72.4167 13.4458L85.7031 13.5857L85.4528 13.3558L100.889 17.5035L100.473 16.84L105.87 18.589L128.333 30.9318L122.832 13.1648L112.127 15.5737L106.46 5.30286L96.0727 9.80508L90.9219 1.57106L79.0412 7.46454L71.6651 0.687134L64.9517 6.58672L58.4112 0.577042L48.599 9.1998L37.722 3.10396L30.4331 13.4868L18.3337 10.3257L15.2079 19.2228L6.45419 16.9357L0.281891 34.5042L25.3173 21.8639L24.5184 21.6552L33.5817 17.0792L51.2648 13.2526L72.4491 13.4756Z').move(135, 44).fill(hairColor)

//face.fill('#808')

*/

class Index extends React.Component {
  state = { faceColor: '#B7C7FF', hairColor: '#E730BE', eyeColor: '#453B85' }

  faceColorOptions = [
    "#851de0",
    "#aa26da",
    "#c355f5",
    "#f1fa3c"
  ]

  eyeColorOptions = [
    "#defcf9",
    "#cadefc",
    "#c3bef0",
    "#cca8e9"
  ]

  hairColorOptions = [
    "#ffcc00",
    "#ff6666",
    "#cc0066",
    "#66cccc"
  ]

  static async getInitialProps() {

    return { posts: "data" }
  }

  handleColorChange = (part, color) => {
    // this.setState({ [part]: color })
    console.log("here");
  }

  render() {
    const { faceColor, hairColor, eyeColor } = this.state

    return (
      <div className="page-wrapper">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/react-tabs/style/react-tabs.css" />
        </Head>
        <div className="app-container">
          <div className="column">
            <h1>Build Yo Self</h1>
            <div className="tabs-menu">
              <Tabs>
                <TabList>
                  <Tab>Face Color</Tab>
                  <Tab>Eye Color</Tab>
                  <Tab>Hair Color</Tab>
                </TabList>
                <TabPanel>
                  <p>lots of face colors</p>
                  <div className="options-wrapper">
                    {this.faceColorOptions.map((option) => (
                      <div className="option" style={{ background: option }} onClick={this.handleColorChange}>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>lots of eye colors</p>
                </TabPanel>
                <TabPanel>
                  <p>lots of hair colors</p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="column">
            <SVGEditor faceColor={faceColor} eyeColor={eyeColor} hairColor={hairColor} />
          </div>
        </div>
        <style jsx>{`
          .app-container {
            background-color: #fff;
            width: 500pt;
            height: 400pt;
            border-radius: 10px;
            box-shadow: 0px 0px 40px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: row;
          }
          .column {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            padding: 20pt;
            color: white;
          }
          .column:first-child {
            background: #0B132B;
            border-radius: 10px 0px 0px 10px;
          }
          .column:last-child {
            background: #1C2541;
            border-radius: 0px 10px 10px 0px;
          }
          .column h1 {
            margin-bottom: 0.2em;
          }
        `}</style>
        <style jsx global>{`
          body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            background-color: #fff176;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            font-family: 'Nunito', sans-serif;
          }
          .react-tabs__tab-list {
            border-bottom: none;
          }
          .react-tabs__tab--selected {
            background: inherit;
            border: none;
            color: #FFF;
            border-radius: 0;
            border-bottom: 2px solid #FFC107;
          }
          .react-tabs__tab {
            padding-right: 10px;
            padding-left: 10px;
            color: #bdbdbd;
          }
          .react-tabs__tab:first-child {
            padding-left: 0;
          }
          .options-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .option {
            width: 25px;
            height: 25px;
            border-radius: 25px;
            margin: 10px;
            margin-right: 20px;
            margin-left: 0px;
            background: green;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
