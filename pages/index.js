import Head from 'next/head'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WYSIWYG from '../components/WYSIWYG'

class Index extends React.Component {
  state = {
    topType: 'LongHairFrida',
    accessoriesType: 'Kurt',
    facialHairType: 'Blank',
    clotheType: 'Overall',
    clotheColor: 'Red',
    eyeType: 'Default',
    eyebrowType: 'RaisedExcited',
    mouthType: 'Tongue',
    skinColor: 'Tanned'
  }

  static async getInitialProps() {

    return { posts: "data" }
  }

  handleChange = (part, color) => {
    this.setState({ [part]: color })
  }

  render() {
    const { avatarStyle, topType, accessoriesType, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor } = this.state

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
                  <Tab>🎨 Skin</Tab>
                  <Tab>👁 Eyes</Tab>
                  <Tab>✏️ Eyebrow</Tab>
                  <Tab>👄 Mouth</Tab>
                  <Tab>✂️ Hair</Tab>
                  <Tab>💈 Hair Color</Tab>
                  <Tab>👔 Clothes</Tab>
                  <Tab>👓 Accessories</Tab>
                  <Tab>🦁 Facial Hair</Tab>
                </TabList>
                <TabPanel>
                  <div className="options-wrapper">
                    {clotheTypeOptions.map((option) => (
                      <div className="option" key={option.name} onClick={() => this.handleChange('clotheType', option.name)}>
                        <img style={{ width: 80 }} src={option.file} />
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="options-wrapper">

                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div className="column">
            <WYSIWYG avatarStyle={avatarStyle} topType={topType} accessoriesType={accessoriesType} facialHairType={facialHairType} clotheType={clotheType} clotheColor={clotheColor} eyeType={eyeType} eyebrowType={eyebrowType} mouthType={mouthType} skinColor={skinColor} />
          </div>
        </div>
        <style jsx>{`
          .app-container {
            background-color: #fff;
            width: 800pt;
            max-width: 95%;
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
          }
          .option {
            width: 80px;
            height: 80px;
            border-radius: 25px;
            margin: 10px;
            margin-right: 20px;
            margin-left: 0px;
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
        `}</style>
      </div>
    )
  }
}

export default Index
