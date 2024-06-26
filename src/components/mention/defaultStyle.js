﻿export default {
  control: {
    backgroundColor: "#fff",
    fontWeight: "normal",
    borderRadius: 4
  },
  highlighter: {
    overflow: "hidden",
    minHeight :130
  },

  input: {
    margin: 0
  },

  "&singleLine": {
    control: {
      display: "inline-block",

      width: 130
    },

    highlighter: {
      padding: 1,
      border: "2px inset transparent"
    },

    input: {
      padding: 1,

      border: "2px inset"
    }
  },

  "&multiLine": {
    control: {
      border: "1px solid #d9d9d9"
    },

    highlighter: {
      padding: 9
    },

    input: {
      padding: 9,
      minHeight: 120,
      outline: 0,
      border: 0
    }
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)"
    },

    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",

      "&focused": {
        backgroundColor: "#cee4e5"
      }
    }
  }
}
