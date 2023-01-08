const formatProjectDate = (date: string) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    return `${month} ${year}`;
};

export { formatProjectDate }