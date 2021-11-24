exports.home = function(req, res){
    res.render("index.html")
}

exports.login = function(req, res){
    res.render("login.html")
}

exports.create = function(req, res){
    res.render("create.html")
}