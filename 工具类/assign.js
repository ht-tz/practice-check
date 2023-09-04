'use strict';

const toString = Object.prototype.toString;
const isEnumerable = Object.prototype.propertyIsEnumerable;
const getSymbols = Object.getOwnPropertySymbols;

const assignSymbols = (target, ...args) => {
    if (!isObject(target)) {
        throw new TypeError('expected the first argument to be an object');
    }

    if (args.length === 0 || typeof Symbol !== 'function' || typeof getSymbols !== 'function') {
        return target;
    }

    for (let arg of args) {
        let names = getSymbols(arg);

        for (let key of names) {
            if (isEnumerable.call(arg, key)) {
                target[key] = arg[key];
            }
        }
    }
    return target;
};

const isValidKey = key => {
    return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

const assign = (target, ...args) => {
    let i = 0;
    if (isPrimitive(target)) target = args[i++];
    if (!target) target = {};
    for (; i < args.length; i++) {
        if (isObject(args[i])) {
            for (const key of Object.keys(args[i])) {
                if (isValidKey(key)) {
                    if (isObject(target[key]) && isObject(args[i][key])) {
                        assign(target[key], args[i][key]);
                    } else {
                        target[key] = args[i][key];
                    }
                }
            }
            assignSymbols(target, args[i]);
        }
    }
    return target;
};

function isObject(val) {
    return typeof val === 'function' || toString.call(val) === '[object Object]';
}

function isPrimitive(val) {
    return typeof val === 'object' ? val === null : typeof val !== 'function';
}

export { assign };
