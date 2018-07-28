INSERT INTO houses (
    house_name,
    house_address,
    house_city,
    house_state,
    house_zipcode,
    house_img,
    house_mortgage,
    house_rent
)
VALUES (
    ${name},
    ${address},
    ${city},
    ${state},
    ${zipcode},
    ${img_url},
    ${mortgage},
    ${rent}
);


SELECT * FROM products 
ORDER BY id DESC 
LIMIT 1; 