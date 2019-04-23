class Frame {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const item = new Frame(data);
    this.size++;
    item.next = this.head;
    this.head = item;
    return this.size;
  }

  pop() {
    if(this.size === 0) {
      return null;
    }
    this.size--;
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }

  peek() {
    return this.head.data;
  }
}

