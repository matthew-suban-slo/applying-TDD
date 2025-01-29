class Portfolio {
    constructor() {
        this.stocks = new Map();
    }

    // Add shares of a stock
    addStock(ticker, shares) {
        if (typeof ticker !== 'string') throw new Error("Ticker must be a string");
        if (typeof shares !== 'number' || shares <= 0) {
            throw new Error("Shares must be a positive number");
        }
        this.stocks.set(ticker, (this.stocks.get(ticker) || 0) + shares);
    }

    // Purchase shares of a stock
    purchase(ticker, shares) {
        if (shares < 0) {
            throw new Error('Cannot purchase negative shares');
        }
        if (this.stocks.has(ticker)) {
            this.stocks.set(ticker, this.stocks.get(ticker) + shares);
        } else {
            this.stocks.set(ticker, shares);
        }
    }

    // Sell shares of a stock
    sell(ticker, shares) {
        if (shares < 0) {
            throw new Error('Cannot sell negative shares');
        }
        if (!this.stocks.has(ticker)) {
            throw new Error('Cannot sell shares of a stock you do not own');
        }
        const currentShares = this.stocks.get(ticker);
        if (shares > currentShares) {
            throw new Error('Cannot sell more shares than you own');
        }
        this.stocks.set(ticker, currentShares - shares);
        if (this.stocks.get(ticker) === 0) {
            this.stocks.delete(ticker);
        }
    }

    getStocks() {
        return this.stocks;
    }

    isEmpty() {
        return this.stocks.size === 0;
    }

    uniqueTickerCount() {
        return this.stocks.size;
    }

    cleanPortfolio() {
        for (const [ticker, shares] of this.stocks.entries()) {
            if (shares === 0) {
                this.stocks.delete(ticker);
            }
        }
    }

    getShares(ticker) {
        return this.stocks.get(ticker) || 0;
    }

    sellStock(ticker, shares) {
        if (typeof ticker !== 'string') throw new Error("Ticker must be a string");
        if (typeof shares !== 'number' || shares <= 0) {
            throw new Error("Shares must be a positive number");
        }
        const currentShares = this.getShares(ticker);
        if (shares > currentShares) {
            throw new Error('Not possible to sell this number of shares.');
        }
        const newShares = currentShares - shares;
        if (newShares === 0) {
            this.stocks.delete(ticker);
        } else {
            this.stocks.set(ticker, newShares);
        }
    }
}

module.exports = Portfolio;