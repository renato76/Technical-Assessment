/* eslint-disable no-undef */
const fns = require('./solution')

describe('accountTypeChecker', () => {
  it('should return A if balance amount decreases by varying amounts each month or B if the balance decreases by same amount each month', () => {
    // test with same decreasing values
    expect(fns.accountTypeChecker([{
      monthNumber: 0, // current month
      account: {
        balance: { amount: 100 }
      }
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 200 }
      }
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 300 }
      }
    }])).toEqual('B')
    // test with varying decreasing values
    expect(fns.accountTypeChecker([{
      monthNumber: 0, // current month
      account: {
        balance: { amount: 50 }
      }
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 200 }
      }
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 300 }
      }
    }])).toEqual('A')
    // test with same amount of change, negative values
    expect(fns.accountTypeChecker([{
      monthNumber: 0, // current month
      account: {
        balance: { amount: -100 }
      }
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: -200 }
      }
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: -300 }
      }
    }])).toEqual('B')
  })
})