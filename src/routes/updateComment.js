module.exports = (app, Comment) => {
    app.put('/comments/:id', (req,res) => {
        const id = req.params.id;
        const {contenu} = req.body;
        try{
            Comment.findByPk(id)
                .then((comment)=>{
                    if(comment === null){
                        return res.status(404).json({message: 'error 404'})
                    }

                    comment.update({contenu})
                        .then(()=>{
                            res.json({message: 'comment update', date: comment})
                        })
                })
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'error', data: err})
        }
    })
}