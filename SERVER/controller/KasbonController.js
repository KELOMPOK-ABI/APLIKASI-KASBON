class KasbonController {
    static getKasbons(req, res) {
        Item.findAll({
            include: [ User ]
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static info(req, res) {
        const id = +req.params.id;

        Item.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { name, type, price, stock, image, UserId } = req.body;

        Item.create({
            name, type, price, stock, image, UserId
        })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err)
            })
    }
    static delete(req, res) {
        const id = +req.params.id

        Item.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1) {
                    res.json({
                        message: `Id ${id} deleted!`
                    })
                } else {
                    res.json({
                        message: `Id ${id} not deleted!`
                    })
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
    static update(req, res) {
        const id = +req.params.id
        const { name, type, price, stock, image, UserId } = req.body

        Item.update({
            name, type, price, stock, image, UserId
        }, {
            where: { id }
        })
            .then(result => {
                if(result[0] === 1){
                    res.json({
                        message: `Id ${id} has been updated!`
                    })
                }else{
                    res.json({
                        message: `Id ${id} has been not updated`
                    })
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
}

module.exports= KasbonController