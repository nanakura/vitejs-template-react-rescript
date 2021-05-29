// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "./logo.svg";

var logo = LogoSvg;

import './App.css'
;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Hello Vite + React!"), React.createElement("p", undefined, React.createElement("button", {
                          onClick: (function (_e) {
                              return Curry._1(setCount, (function (count) {
                                            return count + 1 | 0;
                                          }));
                            })
                        }, "count is: " + String(match[0]))), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "App.jsx"), " and save to test HMR updates."), React.createElement("p", undefined, React.createElement("a", {
                          className: "App-link",
                          href: "https://reactjs.org",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "Learn React"), " | ", React.createElement("a", {
                          className: "App-link",
                          href: "https://vitejs.dev/guide/features.html",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "Vite Docs"))));
}

var make = App;

export {
  make ,
  
}
/* logo Not a pure module */
