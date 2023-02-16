module.exports = (app, Article) => {
    app.put('/articles/:id', (req,res) => {
        const id = req.params.id;
        const {title, content} = req.body;
            
        try{
            Article.findByPk(id)
            .then(article => {
                if(article === null){
                    return res.status(404).json({message: 'error 404'})
                }
                article.update({title, content})
                    .then(()=>{
                        res.json({message: 'article update', data: article})
                    })
            })
        }catch(err){
            console.error(err);
            res.status(500).json({message: 'error 500', data: error});
        }
    })
}