import * as types from '../constants/ActionTypes';
const initialState = {
  result_from_1: 0,
  result_from_21: 0,
  result_from_22: 0,
  result_from_31: 0,
  result_from_32: 0,
  result_from_33: 0,
  result_from_34: 0,
  all_result: 0
}
export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_RES_QUEST_1:
      {
        console.log("FROM REDUCER", action.inputValue);
        return {
          ...state,
          result_from_1: action.inputValue
        };
      }
    case types.SET_RES_QUEST_21:
    console.log("FROM REDUCER", action.inputValue);
      {
        return {
          ...state,
          result_from_21: action.inputValue
        };
      }
      case types.SET_RES_QUEST_22:
        {
          console.log("FROM REDUCER", action.inputValue);
          return {
            ...state,
            result_from_22: action.inputValue
          };
        }
      case types.SET_RES_QUEST_31:
      console.log("FROM REDUCER", action.inputValue);
        {
          return {
            ...state,
            result_from_31: action.inputValue
          };
        }
        case types.SET_RES_QUEST_32:
          {
            console.log("FROM REDUCER", action.inputValue);
            return {
              ...state,
              result_from_32: action.inputValue
            };
          }
        case types.SET_RES_QUEST_33:
        console.log("FROM REDUCER", action.inputValue);
          {
            return {
              ...state,
              result_from_33: action.inputValue
            };
          }
		  
		case types.SET_RES_QUEST_34:
        console.log("FROM REDUCER", action.inputValue);
          {
            return {
              ...state,
              result_from_34: action.inputValue
            };
          }
		  
    case types.SET_FINAL_RES:
      const { result_from_1, result_from_21, result_from_22, result_from_31, result_from_32, result_from_33, result_from_34 } = state;
      const summary = result_from_1 + result_from_21 + result_from_22 + result_from_31 + result_from_32 + result_from_33 + result_from_34;
      let finalRes = '';
	  let image = '';
	  switch (summary) {
		  case 0:
		    finalRes = "You are : Hamster on wheel. You are at the bottom of the ladder, but it is not " 
			+ "bothering you at all. You have your job and a little money. You are happy and satisfied.";
			image = 'hamster.jpg';
			break;
		  case 1:
		    finalRes = "You are : Sweety Kitty. You are kindness itself, giving joy to everybody." +
			" People love you even if your work is not so effective.";
			image = 'kitty.jpg';
			break;
          case 2:
		    finalRes = "You are : Hardworking Bee. You belong to those 20% of people who does"
			+ " 80% of the work. Unfortunately, bosses rarely appreciate you.";
			image = 'bee.jpg';
			break;
          case 3:
		    finalRes = "You are : Wise Owl. True professional with huge intellect. People can"
			+ " always rely on your advice.";
			image = 'owl.jpg';
			break;
          case 4:
		    finalRes = "You are : Lonely Wolf. A personality with a strong will and brilliant mind."
			+ " Moving up the career ladder is not for you, because the more you move the less freedom you have.";
			image = 'wolf.jpg';
			break;
          case 5:
		    finalRes = "You are : Fast Cheetah. Your life is a race: the more goals you achieved," +
			" the more goals life set for you.";
			image = 'cheetah.jpg';
			break;
          case 6:
		    finalRes = "You are : Lion King. A great leader and wise mentor to your team." +
			" But remember: no king will rule forever";
			image = 'lion.jpg';
			break;
          case 7:
		    finalRes = "You are : Merciless Shark. Everybody is afraid of you and respects you." +
			" But in every ocean, there is always a bigger fish.";
			image = 'shark.jpeg';
			break;			
	  }
   
      {
        return {
          ...state,
		  image: image,
          all_result: finalRes
        };
      }
    default:
      return state;
  }
}
