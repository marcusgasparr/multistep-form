import { FiSend } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import "../css/Send.css";

const Send = ({data}) => {
  return (
    <div className='send-container'>
      <div className='step-waiting'>
        <h2>Enviado!</h2>
        <p>Agradecemos por responder nossa pesquisa.</p>
        <p><span>{data.name}</span>, até breve!!</p>
        <MdWavingHand/> 
      </div>
    </div>
  );
};

export default Send;
