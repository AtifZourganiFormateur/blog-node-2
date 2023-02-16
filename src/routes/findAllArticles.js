module.exports = (app, Article, Comment) => {
    app.get('/articles', (req,res) => {
        try{
            const articles = Article.findAll({
                include: {
                    model: Comment,
                    attributes: ['contenu', 'created']
                },
                order: [['created', 'DESC']]
            })
            .then(articles => res.json(articles))
        }catch (error) {
            console.error(error);
            res.status(500).json({message: 'la requete a échoué'})
        }
    }) 
} 