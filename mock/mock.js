/**
 * Created by Administrator on 2016/8/23.
 */
module.exports = {
    rules: [
        {
            pattern: /\/app\/home\.php\?id=\d+/,
            respondwith: './home.json'
        },
        {
            pattern: /\/app\/detail\.php\?id=\d+/,
                respondwith: './detail.json'
        }
    ]
};
