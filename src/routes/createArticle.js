module.exports = (app, Article) => {
    app.post('/articles', (req,res) => {
        try{
            const {title, content} = req.body;
            console.log(title,content)
            Article.create({title, content})
                .then(article => {
                    //status 201 = created
                    res.status(201).json({message:'create ok', data: article});
                })
        }catch(err){
            console.error(err);
            res.status(500).json(err);
        }
    })
}