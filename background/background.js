chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_SIZE") {
    const rules = {
      Nike: 0,
      Adidas: 0.5,
      "New Balance": -0.5
    };

    const adjustment = rules[msg.brand] ?? 0;
    sendResponse({ suggestedSize: msg.size + adjustment });
  }
});

