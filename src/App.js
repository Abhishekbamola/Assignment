import React,{ useState,useEffect } from 'react'

import './App.css'
import { transactionsData } from "./data";



function calculatePoints(amount) {
  let points = 0;
  if (amount > 100) {
    points = points+ (amount - 100) * 2;
    amount = 100;
  }
  if (amount > 50) {
    points+= (amount - 50);
  }
  return points;
}

function aggregateRewards(transactions) {
  const monthlyRewards = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const month = date.getMonth() + 1; // months are 0-indexed in JavaScript
    const points = calculatePoints(transaction.amount);

    if (!monthlyRewards[month]) {
      monthlyRewards[month] = 0;
    }
    monthlyRewards[month] += points;
  });

  return monthlyRewards;
}
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(transactionsData);
    };
    fetchData();
  }, []);
  return  (
    <div className="App">
      <h1>Customer Rewards Program</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((customer) => {
          const { name, transactions } = customer;
          const monthlyRewards = aggregateRewards(transactions);
          const totalRewards = Object.values(monthlyRewards).reduce((acc, curr) => acc + curr, 0);

          return (
            <div key={customer.customerId}>
              <h2>{name}</h2>
              <ul>
                {Object.entries(monthlyRewards).map(([month, reward]) => (
                  <li key={month}>Month {month}: {reward} points</li>
                ))}
              </ul>
              <p>Total: {totalRewards} points</p>
            </div>
          );
        })
      )}
    </div>
  );
}


export default App
