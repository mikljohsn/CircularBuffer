"use strict";

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = new Array(size);
    this.writeIndex = 0;
    this.readIndex = 0;
  }
  add(value) {
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.size;
  }

    get() {
        const value = this.buffer[this.readIndex];
        this.readIndex = (this.readIndex + 1) % this.size;
        return value;
    }

    remove(writeIndex) {
        this.buffer[writeIndex] = null;
    }
  
    peek() {
        return this.buffer[this.readIndex];
    }

    isEmpty() {
        return this.readIndex === this.writeIndex;
    }

    isFull() {
        return (this.writeIndex + 1) % this.size === this.readIndex;
    }

    size() {
        return this.size;
    }

    capacity() {
        return this.size - 1;
    }
}