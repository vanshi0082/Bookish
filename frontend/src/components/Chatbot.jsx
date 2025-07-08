import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    if (document.getElementById("dialogflow-script")) return;

    const script = document.createElement("script");
    script.id = "dialogflow-script";
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.defer = true;
    document.body.appendChild(script);

    const dfMessenger = document.createElement("df-messenger");
    dfMessenger.setAttribute("intent", "WELCOME");
    dfMessenger.setAttribute("chat-title", "Bookish");
    dfMessenger.setAttribute("agent-id", "058008ab-de38-4df6-a117-ed7d81f8a8e2");
    dfMessenger.setAttribute("language-code", "en");
    document.body.appendChild(dfMessenger);
  }, []);

  return null;
};

export default Chatbot;
