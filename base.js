class Portfolio {
    constructor() {
        this.stocks = new Map();
    }

    addStock(ticker, shares) {
        if (this.stocks.has(ticker)) {
            this.stocks.set(ticker, this.stocks.get(ticker) + shares);
        } else {
            this.stocks.set(ticker, shares);
        }
    }

    getStocks() {
        return this.stocks;
    }

    isEmpty() {
        return this.stocks.size === 0;
    }
}

module.exports = Portfolio;
