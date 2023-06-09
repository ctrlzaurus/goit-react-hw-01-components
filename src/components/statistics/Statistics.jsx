import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
        <section className='statistics'>
          <h2 className="title">{title}</h2>

          <ul className='stat-list'>
            {stats.map(({id, label, percentage}) => (
                <li key={id} className='item'>
                  <span className='label'>{label}</span>
                  <span className='percentage'>{percentage}%</span>
                </li>
              )
            )}
          </ul>
        </section>
    );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.objectOf(PropTypes.number),
}

export default Statistics;