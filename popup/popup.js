document.getElementById("find").addEventListener("click", () => {
  const brand = document.getElementById("brand").value;
  const size = Number(document.getElementById("size").value);

  chrome.runtime.sendMessage(
    { type: "GET_SIZE", brand, size },
    response => {
      document.getElementById("result").textContent =
        `Suggested size: ${response.suggestedSize}`;
    }
  );
});

