const accountTypeChecker = (accountBalanceHistory) => {

  // first I create an empty array to which I will push the values of difference in balances from month to month
  const numbers = []

  const balances = accountBalanceHistory.map(val => val.account.balance.amount).reverse()
  console.log(balances)

  // create a for loop to check each value in the balances array and subtract it from the next value in the array
  // then push that new value into the numbers array
  for (let i = 0; i < balances.length - 1; i++) {
    numbers.push(balances[i] - balances[i + 1])
  }

  console.log(numbers)

  // This checks if all numbers (differences in balance) in the array are the same and returns true or false

  const result = numbers.every(value => value === numbers[0])

  console.log(result)

  console.log(!result ? 'A' : 'B')
}


accountTypeChecker([{
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
}])

