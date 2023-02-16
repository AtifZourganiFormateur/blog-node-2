module.exports = (app, Article, Comment) => {
    app.delete('/articles/:id', (req,res) => {
        const id = req.params.id;
        try{
            Article.findByPk(id)
                .then(article => {
                    if(article === null){
                        return res.status(404).json({message: 'element introuvable'})
                    }
            Comment.destroy({where: {articleId: id}})
                .then(()=>{
                    article.destroy()
                        .then(()=>{
                            res.json({message: 'article supp'})
                        })
                })  
                })
        }catch(err){
            console.log(err);
            res.status(500).json({message: 'requete client non aboutis'});
        }
    })
}