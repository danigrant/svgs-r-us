import Modal from './Modal'

export default ({ handleToggleOverlay }) => (
  <div className="overlay-wrapper">
    <Modal handleToggleOverlay={handleToggleOverlay} />
    <style jsx>{`
      .overlay-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgb(0,0,0,0.9);
        top: 0;
        left: 0;
        z-index: 1;
      }
    `}</style>
  </div>
)
