let createError = require('http-errors');
let passport = require('passport');
let passport_fb = require('passport-facebook');
let conf = require('./keys');
module.exports = function (app){

    passport.use(new passport_fb.Strategy({
            clientID: conf.facebook.clientID,
            clientSecret: conf.facebook.clientSecret,
            callbackURL: conf.facebook.callbackURL
        },
        function(req, accessToken, refreshToken, profile, cb) {
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
            // console.log(JSON.stringify(profile));
            let user = JSON.stringify(profile);
            req.session.user = user;
            return cb(null, user);
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, cb) {
        console.log('++++  serializeUser : ++++');
        cb(null, user);
    });
    passport.deserializeUser(function(obj, cb) {
        console.log('++++  deserializeUser : ++++');
        cb(null, obj);
    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
        // console.error('Logs in error handler middleware : ',err);
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error', {err: err.message});
    });

    return app;
}