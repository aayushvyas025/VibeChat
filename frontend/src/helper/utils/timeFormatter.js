import addPadding from "./addPadding";


function timeFormatter(inputTime) {
 const chatSendTime = new Date(inputTime);
 const hours = addPadding(chatSendTime.getHours());
 const minutes = addPadding(chatSendTime.getMinutes());
 return `${hours} : ${minutes}`

}

export default timeFormatter; 