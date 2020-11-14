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
        if (typeof (key) == 'string' && !this.exist(key)) {
            this.#elements.push(element);
        }
    }

    read(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            if (this.#elements[i][0] == key) {
                return this.#elements[i][1];
            }
        }
        return null
    }

    update(key, value) {
        for (let i = 0; i < this.#elements.length; i++) {
            if (this.#elements[i][0] == key) {
                this.#elements[i][1] = value;
            }
        }
    }

    delete(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            if (this.#elements[i][0] == key) {
                this.#elements.splice(i, 1);
                return;
            }
        }
    }

    exist(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            if (this.#elements[i][0] == key) {
                return true;
            }
        }
        return false;
    }

    sortedKeys() {
        let keys = [];
        if(this.amount() != 0) {
            for(let i = 0; i < this.#elements.length; i++) {
                keys.push(this.#elements[i][0]);
            }
            return keys.sort();
        }
    }
};