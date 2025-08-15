//DONE

function queueTime(customers, n) {
  let totalTime = 0;

  if (customers.length === 0) {
    return 0;
  }
  const queues = Array(n).fill(0);
  for (const customer of customers) {
    const shortestQueueIndex = queues.indexOf(Math.min(...queues));
    queues[shortestQueueIndex] += customer;
  }
  totalTime = Math.max(...queues);
  console.log(`Total time in queue: ${totalTime}`);
  return totalTime;
}

queueTime([5, 3, 4], 2);
