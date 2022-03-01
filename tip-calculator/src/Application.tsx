import { useReducer } from "react";

type BillData = {
  numberOfPeople: number;
  totalBill: number;
};
type BillState = {
  numberOfPeople: number;
  totalBill: number;
  eachToPay: number;
};

const calculateEachToPay = ({
  numberOfPeople,
  totalBill,
}: BillData): number => {
  return Math.ceil((totalBill * 0.01) / numberOfPeople);
};

const addEachToPayToBillData = (data: BillData): BillState => {
  return { ...data, eachToPay: calculateEachToPay(data) };
};

const initialState: BillState = {
  numberOfPeople: 3,
  totalBill: 100,
  eachToPay: 4,
};

const reducer = (state: any, action: any) => {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addEachToPayToBillData({
      ...state,
      numberOfPeople: action.payload,
    });
  }

  if (action.type === "UPDATE_TOTAL_BILL") {
    return addEachToPayToBillData({
      ...state,
      totalBill: action.payload,
    });
  }

  return state;
};

const Calculation = ({ toPay }: { toPay: any }) => {
  return (
    <section>
      <h1>Each to tip</h1>
      <p>{toPay}</p>
    </section>
  );
};

const Calculator = ({ dispatch, state }: { state: any; dispatch: any }) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        id="number-of-people"
        type="number"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_NUMBER_OF_PEOPLE",
            payload: event.target.value,
          })
        }
      />
      <label htmlFor="total-bill">Total Bill</label>
      <input
        id="total-bill"
        type="number"
        value={state.totalBill}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_TOTAL_BILL",
            payload: event.target.value,
          })
        }
      />
    </form>
  );
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <header>
        <h1>Tip Calculator</h1>
      </header>
      <Calculation toPay={state.eachToPay} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  );
};

export default Application;
