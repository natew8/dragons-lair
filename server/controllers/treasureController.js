module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.get('db')
        const dragonBooty = await db.get_dragon_treasure([1])

        res.status(200).send(dragonBooty)
    },
    getUserTreasure: async (req, res) => {
        const db = req.app.get('db')
        const userBooty = await db.get_user_treasure([req.session.user.id])
        res.status(200).send(userBooty)
    },
    addUserTreasure: async (req, res,) => {
        const { treasureURL } = req.body
        const { id } = req.session.user
        const db = req.app.get('db')
        const userTreasure = await db.add_user_treasure([treasureURL, id])
        return res.status(200).send(userTreasure)
    },
    getAllTreasure: async (req, res) => {
        const db = req.app.get('db')
        const allBooty = await db.get_all_treasure()
        return res.status(200).send(allBooty)
    }
}