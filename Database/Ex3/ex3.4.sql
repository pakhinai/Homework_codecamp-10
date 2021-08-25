SELECT DISTINCT  sl.sname FROM sailors  sl
INNER JOIN reserves  rs ON sl.sid = rs.sid
INNER JOIN boats b ON b.bid = rs.bid
WHERE b.color = 'Red';
