import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WYSIWYG from '../components/WYSIWYG'
import { hairColorOptions, clotheTypeOptions, clotheColorOptions, eyebrowTypeOptions, eyeTypeOptions, facialHairTypeOptions, mouthTypeOptions, skinColorOptions, accessoriesTypeOptions, topTypeOptions } from '../utils/options'
import Overlay from '../components/Overlay'

class Index extends React.Component {
  state = {
    topType: 'LongHairFrida',
    hairColor: 'Black',
    accessoriesType: 'Blank',
    facialHairType: 'Blank',
    clotheType: 'Overall',
    clotheColor: 'Gray01',
    eyeType: 'WinkWacky',
    eyebrowType: 'RaisedExcited',
    mouthType: 'Tongue',
    skinColor: 'Tanned'
  }

  static async getInitialProps() {

    return { posts: "data" }
  }

  handleChange = (part, color) => {
    console.log(part, color);
    this.setState({ [part]: color })
  }

  render() {
    const { topType, accessoriesType, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor, hairColor } = this.state

    return (
      <div className="page-wrapper">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/react-tabs/style/react-tabs.css" />
        </Head>
        <Overlay />
        <div className="app-container">
          <div className="column">
            <h1>Build Yo Self</h1>
            <div className="tabs-menu">
              <Tabs>
                <TabList>
                  <Tab>🎨 Skin</Tab>
                  <Tab>👁 Eyes</Tab>
                  <Tab>✏️ Eyebrow</Tab>
                  <Tab>👄 Mouth</Tab>
                  <Tab>✂️ Hair</Tab>
                  <Tab>💈 Hair Color</Tab>
                  <Tab>👔 Clothes</Tab>
                  <Tab>👗 Clothes Color</Tab>
                  <Tab>👓 Accessories</Tab>
                  <Tab>🦁 Facial Hair</Tab>
                </TabList>
                <TabPanel>
                  <div className="options-wrapper">
                    {/* Skin */}
                    {skinColorOptions.map((option) => (
                      <div className="option" key={option.name} onClick={() => this.handleChange('skinColor', option.name)}>
                        <img style={{ width: 80 }} src={option.file} />
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Eyes */}
                  {eyeTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('eyeType', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Eyebrows */}
                  {eyebrowTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('eyebrowType', option.name)}>
                      <img style={{ width: 80, background: "#d08b5b", padding: 5 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Mouth */}
                  {mouthTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('mouthType', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* topType aka Hair */}
                  {topTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('topType', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Hair Color */}
                  {hairColorOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('hairColor', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Clothes */}
                  {clotheTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('clotheType', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Clothes Color */}
                  {clotheColorOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('clotheColor', option.name)}>
                      <img style={{ width: 80 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Accessories */}
                  {accessoriesTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('accessoriesType', option.name)}>
                      <img style={{ width: 80, height: 40 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">
                  {/* Facial Hair */}
                  {facialHairTypeOptions.map((option) => (
                    <div className="option" key={option.name} onClick={() => this.handleChange('facialHairType', option.name)}>
                      <img style={{ width: 65 }} src={option.file} />
                    </div>
                  ))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="column">
            <WYSIWYG topType={topType} accessoriesType={accessoriesType} facialHairType={facialHairType} clotheType={clotheType} clotheColor={clotheColor} eyeType={eyeType} eyebrowType={eyebrowType} mouthType={mouthType} skinColor={skinColor} hairColor={hairColor} />
            <div className="login-and-save-button">🌈 Login And Save 🦄</div>
          </div>
        </div>
        <style jsx>{`
          .app-container {
            background-color: #fff;
            max-width: 800pt;
            width: 95%;
            height: 500pt;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .column h1 {
            margin-bottom: 0.2em;
          }
          .options-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            height: inherit;
            overflow: scroll;
          }
          .option {
            width: 80px;
            height: 80px;
            border-radius: 25px;
            margin: 10px;
            margin-right: 20px;
            margin-left: 0px;
            cursor: pointer;
          }
          .login-and-save-button {
            box-sizing: border-box;
            padding: 10px;
            font-weight: bold;
            background-color: #3f51b5;
            color: white;
            text-align: center;
            width: 300px;
            margin: 0 auto;
            margin-top: 50px;
            border-radius: 5px;
            cursor: pointer;
          }
          .login-and-save-button:hover {
            border-bottom: 2px solid #283894;
            filter: brightness(98%);
          }
          .login-and-save-button:active {
            border-bottom: 2px solid #121c52;
            filter: brightness(96%);
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
          .tabs-menu {
            height: 550px;
          }
          .react-tabs {
            height: inherit;
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
          .react-tabs__tab-panel--selected {
            height: 400px;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
