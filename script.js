"use strict";

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = new Array(size);
    this.writeIndex = 0;
    this.readIndex = 0;
  }

  add(value) {
    if (this.isFull()) {
      throw new Error("Buffer is full");
    }
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.size;
  }

  get() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null;
    this.readIndex = (this.readIndex + 1) % this.size;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.buffer[this.readIndex];
  }

  isEmpty() {
    return this.readIndex === this.writeIndex;
  }

  isFull() {
    return (this.writeIndex + 1) % this.size === this.readIndex;
  }

  getSize() {
    return this.size;
  }

  capacity() {
    return this.size . 1;
  }
}
