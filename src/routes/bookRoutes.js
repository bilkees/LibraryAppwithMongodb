const express=require('express');
const booksRouter=express.Router();

function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'barbera',
            genre:'cartoon',
            img:"barbera.jpg"
        },
        {
            title:'Harry potter',
            author:'jk',
            genre:'fantassy',
            img:"JK.jpg"
        },
        {
            title:'Pathummayude Aadu',
            author:'Basheer',
            genre:'Story',
            img:"basheer.jpg"
        }
    ]
    
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        }
        );
    });
    booksRouter.get('/:id',function(req,res){
       const id= req.params.id
        res.render('book',
        {
            nav,
            title:'Library',
            book:books[id]
        })
    });
    return booksRouter;
    
}

module.exports=router;