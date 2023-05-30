const account = require('../models/accounts')
const fs = require('fs');
class accountController {
    account(req, res) {
        account.find({}).then((account) => {
            account = account.map((ac) => ac.toObject());
            res.render('account', { account })
        })
    }

    addNew(req, res) {
        res.render('adds/addAccounts')
    }
    screenUpdate(req, res, next) {
        account.findOne({ _id: req.params._id })
            .then((acc) => {
                res.render('updates/upAccounts', {
                    _id: acc._id,
                    name: acc.name,
                    email: acc.email,
                    password: acc.password,
                    date: acc.date,
                    image: acc.image
                })
            })
            .catch(next);
    }
    add(req, res) {
        fs.rename(req.file.path, 'uploads/' + req.file.originalname, function (err) {
            console.log(req.file.originalname);
        });
        const formData = req.body;

        if (req.file) {
            formData.image = 'http://localhost:3000/uploads/' + req.file.originalname;
        }
        console.log(req.body);
        const car = new account(formData);
        car.save()
            .then(() => res.redirect('/account'));
    }
    delete(req, res, next) {
        account.findByIdAndDelete({ _id: req.params._id })
            .then(() => {
                res.redirect('/account');
            })
            .catch(next);
    }
}
module.exports = new accountController;