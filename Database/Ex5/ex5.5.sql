SELECT d.customer_name,sum(a.balance) FROM account a
INNER JOIN depositor d ON a.account_number = d.account_number
GROUP BY d.customer_name
HAVING count(*) > 1
ORDER BY sum(a.balance) desc