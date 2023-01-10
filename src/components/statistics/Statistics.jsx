import { StatisticTitle } from './Statistics.styled';
import Notification from './notification/Notification';
import StatisticList from './statisticList/StatisticList';
import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { total } = props;
  return (
    <>
      <StatisticTitle>Statistics</StatisticTitle>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticList props={props} />
      )}
    </>
  );
}

Statistics.propTypes = {
  props: PropTypes.object,
};
