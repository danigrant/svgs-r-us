import Avatar from 'avataaars'
import axios from 'axios';

class Modal extends React.Component {
  state = { email: '' }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = this.state
    let { data } = await axios.get(`https://api.fast.co/api/invite?identifier=${encodeURIComponent(email)}&key=qlGznwRgNBrWjpArDVm9xYO3D4eLPX72`)
    this.setState({ email: '' });
  }

  render() {
    const { handleToggleOverlay, topType, hairColor, accessoriesType, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor } = this.props

    return (
      <div className="modal-wrapper">
        <div className="close" onClick={handleToggleOverlay}><img src="/icons/close.svg" /></div>
        <Avatar
          avatarStyle='Circle'
          topType={topType}
          hairColor={hairColor}
          accessoriesType={accessoriesType}
          facialHairType={facialHairType}
          clotheType={clotheType}
          clotheColor={clotheColor}
          eyeType={eyeType}
          eyebrowType={eyebrowType}
          mouthType={mouthType}
          skinColor={skinColor}
        />
        <h1>Save Your Avatar</h1>
        <p>Your avatar looks spectacular, it's time to save it so that you can use it across the internet.</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.email} type="email" placeholder="you da best at gmail dot com" />
          <button type="submit">→</button>
        </form>
        <style jsx>{`
          .modal-wrapper {
            background-color: #fff;
            max-width: 400pt;
            width: 95%;
            height: 300pt;
            border-radius: 10px;
            box-shadow: 0px 0px 40px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            margin-top: auto;
            margin-bottom: auto;
            top: 0;
            bottom: 0;
            z-index: 2;
            box-sizing: border-box;
            padding: 30px;
          }
          .close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 5px;
            cursor: pointer;
          }
          input {
            width: 300px;
            outline: none;
            box-sizing: border-box;
            padding: 5px;
            font-size: inherit;
            color: inherit;
            border: none;
            border-bottom: 2px solid black;
          }
        `}</style>
      </div>
    )
  }
}

export default Modal
