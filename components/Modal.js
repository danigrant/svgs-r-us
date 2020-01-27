export default () => (
  <div className="modal-wrapper">
    <div className="close"><img src="/icons/close.svg" /></div>
    <h1>yo i am a modal</h1>
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
      }
      .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px;
        cursor: pointer;
      }
    `}</style>
  </div>
)
