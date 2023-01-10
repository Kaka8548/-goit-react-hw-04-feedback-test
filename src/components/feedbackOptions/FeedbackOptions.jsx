import { BtnsWrapper, Btn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <BtnsWrapper>
      {Object.keys(options).map(option => {
        const btnId = nanoid();

        return (
          <Btn key={btnId} type="button" onClick={() => handleClick(option)}>
            {option}
          </Btn>
        );
      })}
    </BtnsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
