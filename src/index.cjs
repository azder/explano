"use strict";

exports.default = void 0;

const concat = (separator, outer, inner) => outer && inner ? `${outer}${separator}${inner}` : inner || outer;

const sep = concat.bind(null, ': ');

const set$ = (target, name, value, receiver) => {
  Reflect.set(target, name, value, receiver);
  return value;
};

const prox$ = name => new Proxy({
  [name]: _ => _
}[name], {
  get: (target, key, receiver) => {
    if (Reflect.has(target, key)) {
      return Reflect.get(target, key);
    }

    const n = target?.name;
    const k = sep(n, key);
    const v = sep(n, key);
    return set$(target, k, v, receiver);
  },
  apply: (fn, _, args) => {
    const k = args.join('');
    const v = sep(name, k);
    return set$(fn, k, prox$(v), fn);
  }
}); // noinspection JSUnusedGlobalSymbols


var _default = prox$('');

exports.default = _default;
module.exports = exports.default;