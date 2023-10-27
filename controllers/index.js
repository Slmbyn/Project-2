//THIS HANDLES THE HOMEPAGE

module.exports = {
  index
}


function index(req, res) {
  res.render("index", {
    title: "PushStart"
  });
}
