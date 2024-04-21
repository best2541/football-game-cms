export default {
  control: {
    backgroundColor: "transparent",
    fontSize: 16,
    fontWeight: "normal"
  },

  highlighter: {
    overflow: "hidden"
  },

  input: {
    margin: 0
  },

  "&singleLine": {
    control: {
      display: "inline-block",
      width: "100%"
    },

    highlighter: {
      padding: 1,
      border: "0px inset transparent"
    },

    input: {
      padding: 1,

      border: "0px inset"
    }
  },

  "&multiLine": {
    control: {
      border: "0px solid silver"
    },

    highlighter: {
      padding: 9
    },

    input: {
      padding: 9,
      outline: 0,
      border: 0
    }
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "0px solid rgba(0,0,0,0.15)",
      fontSize: 14
    },

    item: {
      padding: "5px 15px",
      borderBottom: "0px solid rgba(0,0,0,0.15)",

      "&focused": {
        backgroundColor: "#cee4e5"
      }
    }
  }
}
