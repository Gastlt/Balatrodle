import { pool } from "../db/db.js"

export const testPost = (req, res) => {
    const { post } = req.body;

    const sql = 'INSERT INTO posts(post) VALUES (?)';
    pool.execute(sql, [post], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al guardar en la base de datos' });
        }

        res.json({ message: 'Post guardado correctamente', result });
    });
}

export const testGet = (req, res) => {
    const target = req.params.post;
    pool.execute('select count(1) from posts where post = ?',[target], (error, results) => {
        if (error){
            res.status(500).json({msg: error, posts: []});
            return;
        }
        res.status(200).json({msg: "Found", posts: results});
    });
}

export const getJoker = (req, res) => {
    const answer = req.params.id
    pool.execute('select * from jokers where id = ?', [answer], (error, results) => {
        if (error){
            res.status(500).json({msg: error, posts: []});
            return;
        }
        res.status(200).json({msg: "Found", jokers: results});

    } );

}