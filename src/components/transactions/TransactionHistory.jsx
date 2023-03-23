import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (
        <table className='transaction-history'>
          <thead className='transaction-thead'>
            <tr className='transaction-tr'>
              <th className='tbody-item'>Type</th>
              <th className='tbody-item'>Amount</th>
              <th className='tbody-item'>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({id, type, amount,currency}) => (
              <tr key={id} className='transaction-trb'>
                <td className='tbody-item'>{type}</td>
                <td className='tbody-item'>{amount}</td>
                <td className='tbody-item'>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.objectOf(PropTypes.number),
    currency:PropTypes.string,
  }

export default TransactionHistory;