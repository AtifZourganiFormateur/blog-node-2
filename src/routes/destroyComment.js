module.exports = (app, Comment) => {
    try{
        app.delete('/Comment/:id', (req,res) => {
            const id = req.params.id;
            Comment.findByPk(id)
                .then(comment => {
                    if(comment === null){
                        return res.status(404).json({message: 'commentaire non trouvé'})
                    }
    
                    comment.destroy()
                        .then(() => {
                            res.json({message: 'commentaire supp'})
                        })
                })
        })
    }catch(err){
        console.error(err);
        res.status(500).json('requete fail')
    }
}