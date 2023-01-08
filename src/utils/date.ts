// return date like April 2021
const formatProjectDate = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    return `${month} ${year}`;
};

export { formatProjectDate }