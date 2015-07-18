"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/E.js */

		var E = function E(G) {
			return G.eitr();
		};

		exports.E = E;

		/* js/src/N.js */

		var N = function N(G, u) {
			return G.nitr(u);
		};

		exports.N = N;

		/* js/src/V.js */

		var V = function V(G) {
			return G.vitr();
		};

		exports.V = V;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-graph-theory-notation", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["graphtheorynotation"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-graph-theory-notation");
})();