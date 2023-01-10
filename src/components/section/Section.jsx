import { BtnsTitle } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <BtnsTitle>{title}</BtnsTitle>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
