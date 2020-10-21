import { bind } from "decko";

export interface ILinkedList<T> {
  head: LinkedListNode<T> | null;
  length: number;
  push(value: T): number;
  insert(value: T, index: number): void;
  remove(index: number): T | null;
  indexOf(value: LinkedListNode<T> | null): number;
  isEmpty(): boolean;
  values(): T[];
  clear(): void;
}

function increaseLength(
  target,
  key: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    originalMethod.apply(this, args);
    return this.length++;
  };

  return descriptor;
}

function decreaseLength(
  target,
  key: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    const res = originalMethod.apply(this, args);
    this.length--;
    return res;
  };

  return descriptor;
}

export class LinkedList<T> implements ILinkedList<T> {
  constructor(
    initial: T[] = [],
    public head: LinkedListNode<T> | null = null,
    public length: number = 0
  ) {
    if (initial.length) {
      initial.forEach(this.push);
    }
  }

  @bind
  @increaseLength
  push(value: T) {
    const node = new LinkedListNode(value);

    if (this.isEmpty()) {
      this.head = node;

      return this.length;
    }

    let current = this.head as LinkedListNode<T>;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    current.prev = prev;
    current.next = new LinkedListNode(value);
    current.next.prev = current;

    return this.length;
  }

  @increaseLength
  insert(value: T, index: number) {
    const node = new LinkedListNode(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    let prev = current;
    let pointer = 0;

    while (current && pointer < index) {
      prev = current;
      current = current.next;

      pointer++;
    }

    if (prev) {
      prev.next = node;
    }

    // TODO for prev
    node.next = current;
  }

  @decreaseLength
  remove(index: number) {
    let current = this.head;

    if (!current) {
      return null;
    }

    if (index === 0) {
      this.head = current.next;
      return current.value;
    }

    let prev = current;
    let pointer = 0;

    while (current && pointer < index) {
      prev = current;
      current = current.next;
      pointer++;
    }

    current && (prev.next = current.next);

    return current ? current.value : null;
  }

  indexOf(value: LinkedListNode<T> | null) {
    let current = this.head;
    let pointer = 0;

    while (current) {
      if (current === value) return pointer;
      pointer++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  values() {
    let result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  clear() {
    this.length = 0;
    this.head = null;
  }

  map<R>(callback: (v: T, key?: number) => R): R[] {
    let current = this.head;
    let pointer = 0;
    const result = [] as R[];

    while (current) {
      result.push(callback(current.value, pointer));
      pointer++;
      current = current.next;
    }

    return result;
  }

  find(callback: (v: T) => boolean): LinkedListNode<T> {
    let current = this.head;

    while (current) {
      if (callback(current.value)) return current;

      current = current.next;
    }
  }
}

interface INode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  prev: LinkedListNode<T> | null;
}

export class LinkedListNode<T> implements INode<T> {
  constructor(
    public value: T,
    public next: LinkedListNode<T> | null = null,
    public prev: LinkedListNode<T> | null = null
  ) {}
}
