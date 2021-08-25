SELECT DISTINCT sname FROM sailors
INNER JOIN reserves ON sailors.sid = reserves.sid
WHERE reserves.bid = 103;