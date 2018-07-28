module.exports = {

    // check(req, res) {
    //     return res.status(200).send({
    //         message: 'Yay it worked'
    //     })
    // },

    get_houseList(req, res){
        const db = req.app.get('db');

        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                    console.log(err);
                    res.status(400).send(err);
            });
    },

    create_house(req, res){
        const db = req.app.get('db');

        db.create_house({
            house_name: req.body.house_name,
            house_address: req.body.house_price,
            house_city: req.body.house_city,
            house_state: req.body.house_state,
            house_zipcode: req.body.house_zipcode,
            house_img: req.body.house_img,
            house_mortgage: req.body.house_mortgage,
            house_rent: req.body.house_rent,
        })
            .then(([ house ]) => res.status(200).send(house))
            .catch(err => {
                console.warn('error with the db', err)
                res.status(400).send(err);
            });
        
    },

    delete_house(req, res){
        const db = req.app.get('db');

        db.delete_house([
            req.params.id])
                .then(() => {
                    res.send('deleted')
                })
                .catch(err => {
                    console.warn('could not be deleted', err);
                });
    }


    // get_house(req, res){
    //     const db = req.app.get('db');
    //     db.houses.findOne({id:req.params.id})
    //         .then(house => res.status(200).send(house))
    //         .catch(err => {
    //                 console.log(err);
    //                 res.status(400).send(err);
    //         });
    // },

    // edit_house(req,res){
    //     const db = req.app.get('db');

    //     db.edit_house({
    //         house_id: req.body.house_id,
    //         house_name: req.body.house_name,
    //         house_address: req.body.house_price,
    //         house_city: req.body.house_city,
    //         house_state: req.body.house_state,
    //         house_zipcode: req.body.house_zipcode,
    //         house_img: req.body.house_img,
    //         house_mortgage: req.body.house_mortgage,
    //         house_rent: req.body.house_rent,
    //     })
    //         .then(([house]) => {res.status(200).send(house)})
    //         .catch(err => {
    //             console.warn('could not update', err)
    //             res.status(400).send(err)
    //         })

    // }
}