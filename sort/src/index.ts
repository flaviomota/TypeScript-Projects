class Sorter {
  collection: number[] | string;

  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  // constructor(public collection: number[]) {}
  // same thing that using the basic definition

  sort(): void {
    const length = this.collection.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going o work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap characters in a string
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
