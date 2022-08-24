import { IAction, Iitem } from "../@types/IAction";
import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action: IAction) => {
  if (action.type == ADD_TO_CART) {

    const items = [action.data, ...data];

    const removeRpt = items.filter(
      (item, index) => items.indexOf(item) == index
    );

    return [...removeRpt];
  } else if (action.type == REMOVE_TO_CART) {
    const remove = data.filter((item: Iitem) => action.data.id != item.id);

    return [...remove];
  } else if (action.type == INCREMENT) {
    const incrementItem = data.map((item: Iitem) =>
      item.id == action.data.id ? { ...item, count: item.count + 1 } : item
    );

    return [...incrementItem];
  } else if (action.type == DECREMENT) {
    const decrementItem = data.map((item: Iitem) =>
      item.id == action.data.id
        ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
        : item
    );

    return [...decrementItem];
  } else {
    return data;
  }
};
