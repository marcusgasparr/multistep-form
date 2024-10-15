import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoMdExit } from "react-icons/io";
import { FiSend } from "react-icons/fi";
// Components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Tanks from "./components/Tanks";
import Steps from "./components/Steps";
//Hooks
import { useForm } from "./hooks/useForm";
// CSS
import "./css/App.css";
import Send from "./components/Send";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateField = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateField={updateField} />,
    <ReviewForm data={data} updateField={updateField} />,
    <Tanks data={data} />,
    <Send data={data} />,
  ];

  const {
    currentStep,
    currentComponents,
    changeStep,
    isFirstStep,
    isLastStep,
    isSendStep,
  } = useForm(formComponents);

  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com sua compra, utlize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className='form-container'>
        <p>
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className='inputs-container'>{currentComponents}</div>
            <div className='actions'>
              {isSendStep ? (
                <button
                  type='submit'
                  onClick={() =>
                    window.open("https://github.com/marcusgasparr", "_blank")
                  }
                >
                  <span>Sair</span>
                  <IoMdExit />
                </button>
              ) : (
                <>
                  {!isFirstStep && (
                    <button
                      type='button'
                      onClick={() => changeStep(currentStep - 1)}
                    >
                      <GrFormPrevious />
                      <span>Voltar</span>
                    </button>
                  )}
                  {!isLastStep ? (
                    <button type='submit'>
                      <span>Avançar</span>
                      <GrFormNext />
                    </button>
                  ) : (
                    <button type='submit'>
                      <span>Enviar</span>
                      <FiSend />
                    </button>
                  )}
                </>
              )}
            </div>
          </form>
        </p>
      </div>
      <div className='footer'>
        <p>Este sistema foi desenvolvido por: Marcus Gaspar</p>
      </div>
    </div>
  );
}

export default App;
