/* 
  格式化金钱
*/
const thousandMoney = money => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
const money = thousandMoney(2345678)

// 生成随机id
const randomId = len => Math.random().toString(36).substr(3, len)
const id = randomId(10)  //"21fe4iygqd"

// 生成随机色
const randomColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
const color = randomColor()  // "#c0c200"

// 生成星级评分
const startScore = rate => "★★★★★☆☆☆☆☆".slice(5-rate, 10-rate)
const start = startScore(3)  //"★★★☆☆"