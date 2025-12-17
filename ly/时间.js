const s = new Date('2025-05-20 20:00:00');
setInterval(() => {
  const d = new Date(), diff = d - s,
        sec = Math.floor(diff / 1000),
        day = Math.floor(sec / 86400),
        month = Math.floor(day / 30),     
        year = Math.floor(month / 12),   
        remMonth = month % 12,
        remDay = day % 30,
        h = Math.floor((sec % 86400) / 3600),
        m = Math.floor((sec % 3600) / 60),
        second = sec % 60;
  
  let timeStr = '分手距今：';
  if (year > 0) timeStr += `${year}年`;
  if (remMonth > 0 || year > 0) timeStr += `${remMonth}月`;
  if (remDay > 0 || remMonth > 0 || year > 0) timeStr += `${remDay}天`;
  timeStr += `${h}时${m}分${second}秒`;
  
  document.querySelector('.t').textContent = timeStr;
}, 1000);