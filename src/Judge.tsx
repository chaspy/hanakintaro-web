function Judge() {
  interface hanakinResponse {
    [key: string]: string
  }

  const today = new Date()
  const dayOfWeek = today.getDay() // 0: Sunday, ... 6: Sturday
  const dayOfWeekStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
    dayOfWeek
  ]
  const response: hanakinResponse = {
    Sun: '休みなので、花金である',
    Mon: '花金である',
    Tue: 'ちょっと花金である',
    Wed: '花金ではない',
    Thu: 'やや花金である',
    Fri: '真の花金100%である',
    Sat: '休みなので、花金である',
  }
  const answer = response[dayOfWeekStr]

  return <p>{answer}</p>
}

export default Judge
