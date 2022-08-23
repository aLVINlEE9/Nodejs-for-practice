let ws = null;
let MY_USER_ID = "";
let MY_NAME = "";

export const connect = () => {
  let ws = new WebSocket('ws://localhost:8080/ws');
  ws.onmessage = function (e) {
    
  }
}


const sendMyName = (sendingUserName) => {
  MY_NAME = sendingUserName;
  let data = {"code": "connect_name", "name": sendingUserName, "user_id": MY_USER_ID};
  ws.send(JSON.stringify(data));
};

export const myWS = () => {
  return (ws);
}

export const msgMyUserId = (nickNmae) => {
  ws.onmessage = (e) => {
    let msg = JSON.parse(e.data);
    if (msg.code === "my_user_id") {
      MY_USER_ID = msg.msg;
      sendMyName(nickNmae);
      alert("안녕하세요 " + nickNmae + " 님");
    }
  }
}

export const msgChatMessage = (allMessageData) => {
  ws.onmessage = (e) => {
    let msg = JSON.parse(e.data);
    if (msg.code === "chat_message") {
      allMessageData.push([msg.sender_name, msg.msg]);
      return (allMessageData);
    }
  }
}

export const msgAllUsers = (allUserData) => {
  ws.onmessage = (e) => {
    let msg = JSON.parse(e.data);
    if (msg.code === "all_users") {
      let ALL_WS = JSON.parse(msg.msg);
      ALL_WS.forEach((element, index) => {
        allUserData.push(element.user_name);
        return (allUserData);
      });
    }
  }
}

export const sendMessage = (message) => {
  let data = {"code": "send_message", "name":MY_NAME, "user_id":MY_USER_ID, "msg": message};
  ws.send(JSON.stringify(data));
}