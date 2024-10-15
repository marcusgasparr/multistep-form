// Emojis
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";
//CSS
import "../css/ReviewForm.css";

const ReviewForm = ({ data, updateField }) => {
  return (
    <div>
      <div className='review-form'>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input
              type='radio'
              value='unsatisfied'
              name='review'
              required
              checked={data.review === "unsatisfied"}
              onChange={(e) => updateField("review", e.target.value)}
            />
            <BsFillEmojiFrownFill />
            <p>Insatisfeito</p>
          </label>
          <label className='radio-container'>
            <input
              type='radio'
              value='neural'
              name='review'
              required
              checked={data.review === "neural"}
              onChange={(e) => updateField("review", e.target.value)}
            />
            <BsFillEmojiNeutralFill />
            <p>Poderia ser Melhor</p>
          </label>
          <label className='radio-container'>
            <input
              type='radio'
              value='satisfied'
              name='review'
              required
              checked={data.review === "satisfied"}
              onChange={(e) => updateField("review", e.target.value)}
            />
            <BsFillEmojiSmileFill />
            <p>Satisfeito</p>
          </label>
          <label className='radio-container'>
            <input
              type='radio'
              value='very_satisfied'
              name='review'
              required
              checked={data.review === "very_satisfied"}
              onChange={(e) => updateField("review", e.target.value)}
            />
            <BsFillEmojiHeartEyesFill />
            <p>Muito Satisfeito</p>
          </label>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='comment'>Comentário</label>
        <textarea
          name='comment'
          id='comment'
          placeholder='Conte para gente como foi sua experiência com o produto...'
          required
          value={data.comment || ""}
          onChange={(e) => updateField("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
