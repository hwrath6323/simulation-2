INSERT INTO houses (
    name,
    address,
    city,
    state,
    zipcode,
)
VALUES (
    ${name},
    ${address},
    ${city},
    ${state},
    ${zipcode},
);


SELECT * FROM products 
ORDER BY id DESC 
LIMIT 1; 