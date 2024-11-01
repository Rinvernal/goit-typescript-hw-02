import s from "./TransactionHistory.module.css"
const TransactionHistory = ({items}) => {
  return (
    <table className={s.table}>
      <thead className={s.names}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
       </tr>
      </thead>

      <tbody className={s.body}>
        {items.map((item, i) => (
          <tr key={item.id} className={i % 2 === 0 ? s.even : s.odd}>
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
          </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory