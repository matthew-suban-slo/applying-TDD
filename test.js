const { describe, test, expect, beforeEach } = require('@jest/globals');
const Portfolio = require('./base');

describe('Portfolio', () => {
    let portfolio;

    beforeEach(() => {
        portfolio = new Portfolio();
    });

    test('should initialize as empty', () => {
        expect(portfolio.isEmpty()).toBe(true);
    });

    test('should add a new stock', () => {
        portfolio.addStock('AAPL', 10);
        expect(portfolio.getStocks().has('AAPL')).toBe(true);
        expect(portfolio.getStocks().get('AAPL')).toBe(10);
    });

    test('should update existing stock shares', () => {
        portfolio.addStock('GOOG', 5);
        portfolio.addStock('GOOG', 3);
        expect(portfolio.getStocks().get('GOOG')).toBe(8);
    });

    test('should handle multiple stocks', () => {
        portfolio.addStock('TSLA', 2);
        portfolio.addStock('AMZN', 4);
        const stocks = portfolio.getStocks();
        expect(stocks.size).toBe(2);
        expect(stocks.get('TSLA')).toBe(2);
        expect(stocks.get('AMZN')).toBe(4);
    });

    test('should not be empty after adding stocks', () => {
        portfolio.addStock('MSFT', 1);
        expect(portfolio.isEmpty()).toBe(false);
    });

    test('should return correct number of shares for a symbol', () => {
        portfolio.addStock('TSLA', 3);
        expect(portfolio.getShares('TSLA')).toBe(3);
    });

    test('should return 0 for non-existent symbol', () => {
        expect(portfolio.getShares('AMZN')).toBe(0);
    });
});
