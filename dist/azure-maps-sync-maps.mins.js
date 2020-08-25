/*
MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE
*/

!function(t){"use strict";var e=(n.prototype.dispose=function(){this._detachMapChangeHandlers(),this._maps=null,this._syncEvents=null,this._enabled=null},n.prototype.isEnabled=function(){return this._enabled},n.prototype.disable=function(){this._enabled=!1,this._detachMapChangeHandlers()},n.prototype.enable=function(){this._enabled=!0,this._attachMapChangeHandlers()},n.prototype._attachMapChangeHandlers=function(){var e=this;this._maps&&this._maps.forEach(function(t,n){t.events.add("move",e._syncEvents[n]),t.events.add("styledata",e._syncEvents[n])})},n.prototype._detachMapChangeHandlers=function(){var e=this;this._maps&&this._maps.forEach(function(t,n){t.events.remove("move",e._syncEvents[n]),t.events.remove("styledata",e._syncEvents[n])})},n.prototype._synchronizeMaps=function(n){if(this._maps&&this._enabled){var t=this._maps.filter(function(t){return t!==n});this._detachMapChangeHandlers();var e=n.getCamera();t.forEach(function(t){t.setCamera({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch,type:"jump"})}),this._attachMapChangeHandlers()}},n);function n(t){var e=this;this._syncEvents=[],this._enabled=!0,this._maps=t,this._maps.forEach(function(t,n){e._syncEvents[n]=e._synchronizeMaps.bind(e,t)}),this._syncEvents[0](),this._attachMapChangeHandlers()}t.syncMaps=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Array.isArray(t)&&0<t.length&&Array.isArray(t[0])&&(t=t[0]),new e(t)}}(this.atlas=this.atlas||{});
