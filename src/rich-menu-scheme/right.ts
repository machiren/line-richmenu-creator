import { RichMenu as RichMenuScheme } from "@line/bot-sdk";

export const richMenuScheme: RichMenuScheme = {
  size: {
    width: 1200,
    height: 810,
  },
  selected: true,
  name: "Ichigo Line Richmenu",
  chatBarText: "お得なクーポンはこちら",
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 570,
        height: 120,
      },
      action: {
        type: "postback",
        data: "left",
      },
    },
    {
      bounds: {
        x: 590,
        y: 0,
        width: 580,
        height: 120,
      },
      action: {
        type: "postback",
        data: "right",
      },
    },
    {
      bounds: {
        x: 20,
        y: 125,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "",
      },
    },
    {
      bounds: {
        x: 405,
        y: 125,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "",
      },
    },
    {
      bounds: {
        x: 795,
        y: 125,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "",
      },
    },
    {
      bounds: {
        x: 20,
        y: 465,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "https://ichibiko.jp/?from=line-menu",
      },
    },
    {
      bounds: {
        x: 405,
        y: 465,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "https://ichibiko-ec.jp/collections/0003?from=line-menu",
      },
    },
    {
      bounds: {
        x: 795,
        y: 465,
        width: 380,
        height: 320,
      },
      action: {
        type: "uri",
        uri: "https://ichibiko-ec.jp/collections/0001?from=line-menu",
      },
    },
  ],
};
