//EMOJIS
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";
//CSS
import "../css/Tanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neural: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Tanks = ({ data }) => {
  return (
    <div className='tanks-container'>
      <h2>Estamos quase terminando...</h2>
      <p>
        Valorizamos demais sua opnião, ao final dessa pesquisa você recebe um
        cupom de 10% de desconto para sua próxima compra.
      </p>
      <p>
        Para finalizarmos com sucesso sua avaliação, clique no botão "Enviar"
        abaixo.
      </p>
      <h3>
        Confira o resumo da sua avaliação <br></br>
        {data.name}.
      </h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review  ]}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>&nbsp;
        {data.comment}
      </p>
    </div>
  );
};

export default Tanks;
