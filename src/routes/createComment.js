module.exports = (app, Comment, Article) => {
    app.post('/articles/:id/comment', (req, res) => {
        const id = req.params.id;
        const {contenu} = req.body;
        try{
            Article.findByPk(id)
                .then(article => {
                    if(article === null){
                        return res.status(404).json({message: 'article non trouvé'})
                    }
                    Comment.create({contenu, articleId: article.id})
                        .then(comment => {
                            res.status(201).json(comment);
                        })
                })
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'erreur 500', data: err})
        }
    })
}