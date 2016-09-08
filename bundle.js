/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var chess = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);

	    this.pieces = Board.white_pawns().concat(Board.black_pawns()).concat(Board.rooks()).concat(Board.bishops()).concat(Board.knights()).concat(Board.kings()).concat(Board.queens());
	    this.spaces = this.pieces.concat(Array.apply(null, Array(32))).map(function (val, index) {
	      return new Space(index, val);
	    });
	  }

	  _createClass(Board, null, [{
	    key: 'white_pawns',
	    value: function white_pawns() {
	      return Array.apply(null, Array(8)).map(function (val, index) {
	        return new Pawn('white');
	      });
	    }
	  }, {
	    key: 'black_pawns',
	    value: function black_pawns() {
	      return Array.apply(null, Array(8)).map(function (val, index) {
	        return new Pawn('black');
	      });
	    }
	  }, {
	    key: 'rooks',
	    value: function rooks() {
	      return [new Rook('white'), new Rook('black'), new Rook('white'), new Rook('black')];
	    }
	  }, {
	    key: 'bishops',
	    value: function bishops() {
	      return [new Bishop('white'), new Bishop('black'), new Bishop('white'), new Bishop('black')];
	    }
	  }, {
	    key: 'knights',
	    value: function knights() {
	      return [new Knight('white'), new Knight('black'), new Knight('white'), new Knight('black')];
	    }
	  }, {
	    key: 'kings',
	    value: function kings() {
	      return [new King('black'), new King('white')];
	    }
	  }, {
	    key: 'queens',
	    value: function queens() {
	      return [new Queen('black'), new Queen('white')];
	    }
	  }]);

	  return Board;
	}();

	var Space = function Space(index, piece) {
	  _classCallCheck(this, Space);

	  this.index = index;
	  if (piece != null) {
	    this.piece = piece;
	  } else {
	    this.piece = new NullPiece();
	  }
	};

	var NullPiece = function NullPiece() {
	  _classCallCheck(this, NullPiece);

	  this.color = null;
	};

	var Piece = function Piece(color) {
	  _classCallCheck(this, Piece);

	  this.color = color;
	};

	var Pawn = function (_Piece) {
	  _inherits(Pawn, _Piece);

	  function Pawn() {
	    _classCallCheck(this, Pawn);

	    return _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).apply(this, arguments));
	  }

	  return Pawn;
	}(Piece);

	var Rook = function (_Piece2) {
	  _inherits(Rook, _Piece2);

	  function Rook() {
	    _classCallCheck(this, Rook);

	    return _possibleConstructorReturn(this, (Rook.__proto__ || Object.getPrototypeOf(Rook)).apply(this, arguments));
	  }

	  return Rook;
	}(Piece);

	var Bishop = function (_Piece3) {
	  _inherits(Bishop, _Piece3);

	  function Bishop() {
	    _classCallCheck(this, Bishop);

	    return _possibleConstructorReturn(this, (Bishop.__proto__ || Object.getPrototypeOf(Bishop)).apply(this, arguments));
	  }

	  return Bishop;
	}(Piece);

	var Knight = function (_Piece4) {
	  _inherits(Knight, _Piece4);

	  function Knight() {
	    _classCallCheck(this, Knight);

	    return _possibleConstructorReturn(this, (Knight.__proto__ || Object.getPrototypeOf(Knight)).apply(this, arguments));
	  }

	  return Knight;
	}(Piece);

	var Queen = function (_Piece5) {
	  _inherits(Queen, _Piece5);

	  function Queen() {
	    _classCallCheck(this, Queen);

	    return _possibleConstructorReturn(this, (Queen.__proto__ || Object.getPrototypeOf(Queen)).apply(this, arguments));
	  }

	  return Queen;
	}(Piece);

	var King = function (_Piece6) {
	  _inherits(King, _Piece6);

	  function King() {
	    _classCallCheck(this, King);

	    return _possibleConstructorReturn(this, (King.__proto__ || Object.getPrototypeOf(King)).apply(this, arguments));
	  }

	  return King;
	}(Piece);

	module.exports = {
	  Board: Board, Piece: Piece, Pawn: Pawn, Space: Space
	};

/***/ }
/******/ ]);