module.exports = (app, Article,Comment) => {
    app.get('/articles/:id', (req,res)=>{
        try{
            const id = req.params.id;
            Article.findByPk(id, {
                include: {
                    model: Comment,
                    attributes: ['contenu', 'created']
                }
            })
            .then(showArticle => res.json(showArticle));
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'La requete envoyé par le navigateur'})
        }
    })
} 