SELECT  sl.sid FROM sailors  sl
inner join reserves  rs on sl.sid = rs.sid
inner join boats b on b.bid = rs.bid
where b.color = 'Red';
