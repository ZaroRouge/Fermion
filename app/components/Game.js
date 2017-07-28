import React, { Component } from 'react';

let knightPosition = [3, 2];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(receive) {
   setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  ]), 500);
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}