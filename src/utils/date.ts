const formatProjectDate = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    return `${month} ${year}`;
};

const timeSince = (date: string) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  
    const intervals = [
      { label: 'year', value: 31536000 },
      { label: 'month', value: 2592000 },
      { label: 'day', value: 86400 },
      { label: 'hour', value: 3600 },
      { label: 'minute', value: 60 },
      { label: 'second', value: 1 }
    ];
  
    for (const { label, value } of intervals) {
      const interval = seconds / value;
      if (interval > 0) {
        return `${Math.floor(interval)} ${label}${interval > 1 ? 's' : ''}`;
      }
    }
  };
  

export { formatProjectDate, timeSince }