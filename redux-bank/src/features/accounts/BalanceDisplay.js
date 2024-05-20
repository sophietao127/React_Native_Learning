import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// receive the state object from the store
// map the state from the store to a prop
function mapStateToProps(state) {
  // return the name of prop: balance
  return {
    balance: state.account.balance,
  };
}

// use connect() API
// connect(mapStateToProps) returns a new function A.
// The BalanceDisplay component will be the argument of the function A.
export default connect(mapStateToProps)(BalanceDisplay);
