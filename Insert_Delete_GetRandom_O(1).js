
var RandomizedSet = function() {
    this.set = new Map();
    this.values = []; // This array will help with getRandom operation
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.set.has(val)) {
        this.set.set(val, this.values.length);
        this.values.push(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.set.has(val)) {
        const index = this.set.get(val);
        const lastElement = this.values[this.values.length - 1];
        
        // Swap with last element
        this.values[index] = lastElement;
        this.set.set(lastElement, index);
        
        // Remove last element
        this.values.pop();
        this.set.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
//solution 2

class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    search(val) {
        return this.map.has(val);
    }

    insert(val) {
        if (this.search(val)) return false;

        this.list.push(val);
        this.map.set(val, this.list.length - 1);
        return true;
    }

    remove(val) {
        if (!this.search(val)) return false;

        const index = this.map.get(val);
        this.list[index] = this.list[this.list.length - 1];
        this.map.set(this.list[index], index);
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}

