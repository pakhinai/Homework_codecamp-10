SELECT DISTINCT b.color FROM boats b
INNER JOIN reserves r ON b.bid = r.bid
INNER JOIN sailors s ON s.sid = r.sid
WHERE s.sname = 'Lubber';