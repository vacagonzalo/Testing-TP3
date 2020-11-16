module.exports = class List {
    #elements;

    constructor() {
        this.#elements = [];
    }

    amount() {
        return this.#elements.length;
    }

    create(element) {
        let key = element[0];
        if (typeof (key) == 'string' && !this.exist(key))
            this.#elements.push(element);
    }

    read(key) {
        return this.onKey(key, (index) => {
            return this.#elements[index][1];
        });
    }

    update(key, value) {
        this.onKey(key, (index) => {
            this.#elements[index][1] = value;
        });
    }

    delete(key) {
        this.onKey(key, (index) => {
            this.#elements.splice(index, 1);
        });
    }

    exist(key) {
        return this.onKey(key, () => { return true; })
    }

    sortedKeys() {
        let keys = [];
        if (this.amount() != 0) {
            for (let i = 0; i < this.#elements.length; i++) {
                keys.push(this.#elements[i][0]);
            }
            return keys.sort();
        }
    }

    keyIndex(key) {
        for (let index = 0; index < this.#elements.length; index++) {
            if (this.#elements[index][0] == key) {
                return index;
            }
        }
        return -1;
    }

    isValidIndex(index) {
        return index != -1;
    }

    onKey(key, callback) {
        let index = this.keyIndex(key);
        if (this.isValidIndex(index)) return callback(index);
        return null
    }
};