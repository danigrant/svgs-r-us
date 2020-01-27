import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SVGEditor from '../components/SVGEditor'

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
    this.setState({ [part]: color })
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
                      <div className="option" style={{ background: option }} key={option} onClick={() => this.handleColorChange('faceColor', option)}>
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
