    var button = document.getElementById("color-btn");
    var imgrow = document.getElementById("row-img");
    const spantext = document.getElementById("hex-color");
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    function changecolor() {
      changeHex();
    }

    function changeHex() {
      let hex = "#";

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
      }

      imgrow.style.backgroundColor = hex;
      //   spantext.innerHTML = hex;
      //   spantext.style.color = hex;
      button.innerHTML = hex;
      button.style.backgroundColor = hex;
    }