import style from './Count.module.css'
import {useDispatch} from "react-redux";
import {addProduct, minusProduct} from "../../store/order/orderSlice.js";

export const Count = ({count, id}) => {
    const dispatch = useDispatch()

    const addCount = () => {
        dispatch(addProduct({id}))
    }

    const minusCount = () => {
        dispatch(minusProduct({id}))
    }

    return (
        <div className={style.count}>
            <button className={style.minus}
                    onClick={minusCount}
                // disabled={count === 1}
            >-
            </button>

            <p className={style.amount}>{count}</p>

            <button className={style.plus}
                    onClick={addCount}
            >+
            </button>
        </div>
    )
}
