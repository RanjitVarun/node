var faker = require("faker");

var appRouter = function (app) {

    var users = [];
    app.get("/", (req, res) => {
        res.status(200).send("welcome to home page");
    });

    app.get("/user", (req, res) => {
        var arr = [];
        var data = ({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });

        console.log(arr);
        res.send("hello worlds");
        res.status(200).send("welcome to user page");
    });

    app.get('/user/:num', (req, res) => {
        var user = [];

        var num = req.params.num;
        if (num > 0 && num < 100) {
            for (i = 0; i <= num - 1; i++) {
                user.push({
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                })
            }
            res.status(200).send(user);

        }
        else {
            res.status(400).send({ message: "invalid params" });
        }
    });


    app.post('/user', (req, res) => {
        var newUser = req.body;
        users.push({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(users);
    })

    app.get('*', (req, res) => {
        res.redirect('/')
    })
}

module.exports = appRouter;