import Modal from 'react-modal';

import './style.css';

const Video = ({ isOpen, onClose }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal de Vídeo"
      className="video-modal"
    >
      <button onClick={onClose}>X</button>
      <video controls autoPlay>
        <source src="/Apresentation.mp4" type="video/mp4" />
      </video>
    </Modal>
  );
};

export default Video;